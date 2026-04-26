
'use client';

import React, { createContext, useState, useContext, ReactNode, useEffect, useMemo, useCallback } from 'react';
import type { Book, Chapter, Level, TestResult, Language, BeforeInstallPromptEvent, UserProfile, ProgressEntry } from '@/lib/words';
export type { Language };
import { getChapter, getLevel } from '@/lib/data-loader';
import { getUserProfile, updateUserProfile, clearUserProfile, syncProgressOnLogin } from '@/firebase/user-profile';
import { useAuth } from '@/context/auth-context';
import { useToast } from '@/hooks/use-toast';

type AppState =
  | 'main-menu'
  | 'book-selection'
  | 'chapter-selection'
  | 'level-selection'
  | 'learning-session'
  | 'writing-practice'
  | 'spelling-test'
  | 'score-report';

export type FontSize = 'text-12px' | 'text-13px' | 'text-14px' | 'text-15px' | 'text-16px' | 'text-17px' | 'text-18px';
const FONT_SIZE_STORAGE_KEY = 'lingoleap_font_size';

interface AppContextType {
  appState: AppState;
  history: AppState[];
  selectedBook: Book | null;
  selectedChapter: Chapter | null;
  selectedLevel: Level | null;
  testResults: TestResult[] | null;
  language: Language;
  fontSize: FontSize;
  progress: UserProfile['spellingProgress'];
  grammarProgress: UserProfile['grammarProgress'];
  installPrompt: BeforeInstallPromptEvent | null;
  isInstalled: boolean;
  setFontSize: (size: FontSize) => void;
  setLanguage: (language: Language) => void;
  setInstallPrompt: (prompt: BeforeInstallPromptEvent | null) => void;
  setIsInstalled: (installed: boolean) => void;
  startSpellingJourney: () => void;
  selectBook: (book: Book) => void;
  selectChapter: (chapter: Chapter) => void;
  selectLevel: (level: Level) => void;
  startTest: () => void;
  startWritingPractice: () => void;
  showScoreReport: (results: TestResult[]) => void;
  updateLevelScore: (bookId: string, chapterId: string, levelId: string, score: number, chapterTitle?: string) => void;
  updateGrammarTestScore: (topic: string, testId: string, score: number) => void;
  finishTest: () => void;
  goToLevelList: () => void;
  back: () => void;
  triggerInstallPrompt: () => void;
  clearAllProgress: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [appState, setAppState] = useState<AppState>('main-menu');
  const [history, setHistory] = useState<AppState[]>(['main-menu']);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [testResults, setTestResults] = useState<TestResult[] | null>(null);
  const [language, setLanguage] = useState<Language>('gu');
  const [fontSize, setFontSize] = useState<FontSize>('text-15px');

  const [progress, setProgress] = useState<UserProfile['spellingProgress']>({});
  const [grammarProgress, setGrammarProgress] = useState<UserProfile['grammarProgress']>({});

  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();

  // Load progress from local storage on initial load (and sync with cloud if logged in)
  useEffect(() => {
    const loadProgress = async () => {
      const data = await getUserProfile(user?.uid || null);
      if (data) {
        setProgress(data.spellingProgress || {});
        setGrammarProgress(data.grammarProgress || {});
      }
    };
    loadProgress();
  }, [user]);

  useEffect(() => {
    const savedFontSize = localStorage.getItem(FONT_SIZE_STORAGE_KEY) as FontSize | null;
    if (savedFontSize) {
      setFontSize(savedFontSize);
    }
  }, []);

  const triggerInstallPrompt = async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === 'accepted') {
      setIsInstalled(true);
    }
    setInstallPrompt(null);
  };

  const handleSetFontSize = (size: FontSize) => {
    setFontSize(size);
    localStorage.setItem(FONT_SIZE_STORAGE_KEY, size);
  };

  const clearAllProgress = useCallback(async () => {
    await clearUserProfile(user?.uid || null);
    setProgress({});
    setGrammarProgress({});
    toast({
      title: 'Progress Cleared',
      description: 'All your progress data has been deleted.',
    });
  }, [toast, user]);

  const updateLevelScore = useCallback((bookId: string, chapterId: string, levelId: string, score: number, chapterTitle?: string) => {
    const newProgress = {
      ...progress,
      [`${bookId}-${chapterId}-${levelId}`]: { score, date: new Date().toISOString(), chapterTitle }
    };
    setProgress(newProgress);
    const fullProfile: UserProfile = {
      spellingProgress: newProgress,
      grammarProgress: grammarProgress
    };
    updateUserProfile(fullProfile, user?.uid || null);
  }, [progress, grammarProgress, user]);

  const updateGrammarTestScore = useCallback((topic: string, testId: string, score: number) => {
    const newGrammarProgress = {
      ...grammarProgress,
      [`${topic}-${testId}`]: { score, date: new Date().toISOString() }
    };
    setGrammarProgress(newGrammarProgress);
    const fullProfile: UserProfile = {
      spellingProgress: progress,
      grammarProgress: newGrammarProgress
    };
    updateUserProfile(fullProfile, user?.uid || null);
  }, [grammarProgress, progress, user]);

  const changeState = (newState: AppState) => {
    // Add a state to browser history to enable back button for SPA-like navigation
    if (window.history.state?.appState !== newState) {
      window.history.pushState({ appState: newState }, '');
    }
    setHistory(prevHistory => [...prevHistory, newState]);
    setAppState(newState);
  };

  const startSpellingJourney = useCallback(() => changeState('book-selection'), []);

  const selectBook = useCallback(async (book: Book) => {
    setSelectedBook(book);
    changeState('chapter-selection');
  }, []);

  const selectChapter = useCallback(async (chapterInfo: Chapter) => {
    if (!selectedBook) return;
    const fullChapter = await getChapter(selectedBook.id, chapterInfo.id);
    setSelectedChapter(fullChapter);
    changeState('level-selection');
  }, [selectedBook]);

  const selectLevel = useCallback(async (level: Level) => {
    if (selectedBook && selectedChapter) {
      // Virtual "all-levels" level: words are already combined, skip API call
      if (level.id === 'all-levels') {
        setSelectedLevel(level);
        changeState('spelling-test');
        return;
      }
      const fullLevel = await getLevel(selectedBook.id, selectedChapter.id, level.id);
      setSelectedLevel(fullLevel);
      changeState('learning-session');
    }
  }, [selectedBook, selectedChapter]);

  const startTest = useCallback(() => {
    changeState('spelling-test');
  }, []);

  const startWritingPractice = useCallback(() => {
    changeState('writing-practice');
  }, []);

  const showScoreReport = useCallback((results: TestResult[]) => {
    setTestResults(results);
    changeState('score-report');
  }, []);

  const finishTest = () => {
    // Reset all states and go to main menu
    setAppState('main-menu');
    setHistory(['main-menu']);
    setSelectedBook(null);
    setSelectedChapter(null);
    setSelectedLevel(null);
    setTestResults(null);
    // Go to the initial state in browser history
    window.history.go(-(history.length - 1));
  };

  const goToLevelList = () => {
    setTestResults(null);
    const spellingTestIndex = history.lastIndexOf('spelling-test');
    if (spellingTestIndex > -1) {
      const newHistory = history.slice(0, spellingTestIndex);
      const statesToGoBack = history.length - newHistory.length;
      setHistory(newHistory);
      setAppState('level-selection');
      window.history.go(-statesToGoBack);
    } else {
      back(); // Fallback to simple back if something is wrong
    }
  };

  const back = useCallback(() => {
    if (history.length > 1) {
      const previousState = history[history.length - 2];
      const newHistory = history.slice(0, -1);
      setHistory(newHistory);
      setAppState(previousState);

      // Clean up state when going back
      if (previousState === 'main-menu') {
        finishTest();
      } else if (previousState === 'book-selection') {
        setSelectedChapter(null);
        setSelectedLevel(null);
        setTestResults(null);
      } else if (previousState === 'chapter-selection') {
        setSelectedLevel(null);
        setTestResults(null);
      } else if (previousState === 'level-selection') {
        setTestResults(null);
        setSelectedLevel(null); // Go back from learning/test to level list
      } else if (previousState === 'learning-session') {
        setTestResults(null);
      }
    }
  }, [history]);

  const contextValue = useMemo(() => ({
    appState,
    history,
    selectedBook,
    selectedChapter,
    selectedLevel,
    testResults,
    language,
    fontSize,
    progress: progress || {},
    grammarProgress: grammarProgress || {},
    installPrompt,
    isInstalled,
    setInstallPrompt,
    setIsInstalled,
    setFontSize: handleSetFontSize,
    setLanguage,
    updateLevelScore,
    updateGrammarTestScore,
    startSpellingJourney,
    selectBook,
    selectChapter,
    selectLevel,
    startTest,
    startWritingPractice,
    showScoreReport,
    finishTest,
    goToLevelList,
    back,
    triggerInstallPrompt,
    clearAllProgress,
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [
    appState, history, selectedBook, selectedChapter, selectedLevel, testResults,
    language, fontSize, progress, grammarProgress, installPrompt, isInstalled,
    updateLevelScore, updateGrammarTestScore,
    triggerInstallPrompt, startSpellingJourney, selectBook, selectChapter, selectLevel, startTest, startWritingPractice, showScoreReport, finishTest, goToLevelList, back,
    clearAllProgress
  ]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppState() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within a AppStateProvider');
  }
  return context;
}

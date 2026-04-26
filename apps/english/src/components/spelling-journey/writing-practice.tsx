'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useAppState } from '@/context/app-context';
import type { Book, Chapter, Level, Word, DetailedWord, SimpleWord } from '@/lib/words';
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '../ui/progress';
import {
    ArrowLeft,
    ArrowRight,
    X,
    Check,
    Pencil,
    Trophy,
    Flame,
    Eye,
    EyeOff,
    SkipForward,
    Volume2,
    VolumeX,
} from 'lucide-react';
import { languages } from '@/lib/languages';
import useIsMobile from '@/hooks/use-is-mobile';
import VirtualKeyboard from './virtual-keyboard';
import { trackEvent } from '@/lib/analytics';
import { playCorrectSound, playWrongSound } from '@/lib/sounds';
import Celebration from '@/components/ui/celebration';

interface WritingPracticeProps {
    book: Book;
    chapter: Chapter;
    level: Level;
}

const TOTAL_ATTEMPTS = 10;

export default function WritingPractice({
    book,
    chapter,
    level,
}: WritingPracticeProps) {
    const { back, language, selectedBook } = useAppState();
    const [words, setWords] = useState<Word[]>([]);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentAttempt, setCurrentAttempt] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [attemptResults, setAttemptResults] = useState<(boolean | null)[]>(
        Array(TOTAL_ATTEMPTS).fill(null)
    );
    const [isChecked, setIsChecked] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [streak, setStreak] = useState(0);
    const [bestStreak, setBestStreak] = useState(0);
    const [hideWord, setHideWord] = useState(false);
    const [completedWords, setCompletedWords] = useState<Set<number>>(new Set());
    const [allDone, setAllDone] = useState(false);
    const [shakeWrong, setShakeWrong] = useState(false);
    const [speakEnabled, setSpeakEnabled] = useState(true);
    const inputRef = useRef<HTMLInputElement>(null);
    const isMobile = useIsMobile();

    // TTS: Speak text using browser SpeechSynthesis
    const speakText = useCallback((text: string, lang: string = 'en-US'): Promise<void> => {
        return new Promise((resolve) => {
            if (!speakEnabled || typeof window === 'undefined' || !window.speechSynthesis || !text) {
                resolve();
                return;
            }
            const utterance = new SpeechSynthesisUtterance(text);

            // Check if voice exists for the language, fallback to en-US
            const voices = window.speechSynthesis.getVoices();
            const matchVoice = voices.find(v => v.lang.startsWith(lang.split('-')[0]));
            if (matchVoice) {
                utterance.voice = matchVoice;
                utterance.lang = matchVoice.lang;
            } else {
                // Fallback: use en-US voice for any language
                utterance.lang = 'en-US';
            }

            utterance.rate = 0.5;
            utterance.pitch = 1;

            // Safety timeout - resolve after 3 sec even if speech event doesn't fire
            const safetyTimer = setTimeout(() => resolve(), 3000);
            utterance.onend = () => { clearTimeout(safetyTimer); resolve(); };
            utterance.onerror = () => { clearTimeout(safetyTimer); resolve(); };
            window.speechSynthesis.speak(utterance);
        });
    }, [speakEnabled]);

    // Preload voices (they load async in some browsers)
    useEffect(() => {
        if (typeof window !== 'undefined' && window.speechSynthesis) {
            window.speechSynthesis.getVoices();
            window.speechSynthesis.onvoiceschanged = () => {
                window.speechSynthesis.getVoices();
            };
        }
    }, []);

    // Get TTS language code for meaning
    const getMeaningLang = useCallback((): string => {
        switch (language) {
            case 'gu': return 'gu-IN';
            case 'hi': return 'hi-IN';
            default: return 'en-US';
        }
    }, [language]);

    useEffect(() => {
        const learningWords = [...level.words];
        setWords(learningWords);
        trackEvent('writing_practice_start', {
            book_id: book.id,
            chapter_id: chapter.id,
            level_id: level.id,
            words_count: learningWords.length,
        });
    }, [level.words, book.id, chapter.id, level.id]);

    const getMeaning = useCallback(
        (word: Word | SimpleWord | DetailedWord | { meaning: any }): string => {
            if (!word) return '';
            const langDetails = languages.find((l) => l.code === language);
            const langName = langDetails ? langDetails.name : 'English';
            const langKey = langName.charAt(0).toLowerCase() + langName.slice(1);
            const specificLangKey = `${langKey}Meaning` as keyof typeof word;
            if (typeof (word as any)[specificLangKey] === 'string') {
                return (word as any)[specificLangKey];
            }
            if (typeof (word as any).gujaratiMeaning === 'string') {
                return (word as any).gujaratiMeaning;
            }
            if (typeof (word as any).meaning === 'string') {
                return (word as any).meaning;
            }
            if (
                typeof (word as any).meaning === 'object' &&
                (word as any).meaning !== null
            ) {
                const meaningObj = (word as any).meaning;
                return meaningObj[language] || meaningObj.gu || meaningObj.en || '';
            }
            return '';
        },
        [language]
    );

    const getPronunciation = useCallback(
        (word: any): string => {
            const langDetails = languages.find((l) => l.code === language);
            const langName = langDetails ? langDetails.name : 'English';
            const pronunciationKey =
                `${langName.toLowerCase()}Pronunciation` as keyof typeof word;
            const selectedLangPron = word[pronunciationKey];
            if (selectedLangPron) return selectedLangPron;
            if (word.englishPronunciation) return word.englishPronunciation;
            if (word.pronunciation) return word.pronunciation;
            return '';
        },
        [language]
    );

    const cleanPronunciation = (text?: any): string => {
        if (!text) return '';
        return String(text).replace(/\[|\]|\(|\)/g, '');
    };

    const autoNextTimerRef = useRef<NodeJS.Timeout | null>(null);

    // Cleanup auto-next timer on unmount
    useEffect(() => {
        return () => {
            if (autoNextTimerRef.current) clearTimeout(autoNextTimerRef.current);
        };
    }, []);

    const handleCheck = () => {
        if (!inputValue.trim()) return;
        const correct =
            inputValue.trim().toLowerCase() ===
            words[currentWordIndex].word.toLowerCase();
        setIsCorrect(correct);
        setIsChecked(true);

        const newResults = [...attemptResults];
        newResults[currentAttempt] = correct;
        setAttemptResults(newResults);

        if (correct) {
            playCorrectSound();
            const newStreak = streak + 1;
            setStreak(newStreak);
            if (newStreak > bestStreak) setBestStreak(newStreak);
            // ✅ Auto-speak: spelling (English) → meaning (selected language) → auto next
            const currentW = words[currentWordIndex];
            const meaning = getMeaning(currentW);
            speakText(currentW.word, 'en-US').then(() => {
                return speakText(meaning, getMeaningLang());
            }).then(() => {
                autoNextTimerRef.current = setTimeout(() => {
                    handleNextAttempt();
                }, 500);
            });
        } else {
            playWrongSound();
            setStreak(0);
            setShakeWrong(true);
            setTimeout(() => setShakeWrong(false), 500);
        }
    };

    const handleNextAttempt = useCallback(() => {
        setCurrentAttempt((prevAttempt) => {
            if (prevAttempt < TOTAL_ATTEMPTS - 1) {
                // Move to next attempt for the same word
                setInputValue('');
                setIsChecked(false);
                setIsCorrect(false);
                setTimeout(() => inputRef.current?.focus(), 100);
                return prevAttempt + 1;
            } else {
                // All 10 attempts done for this word
                setCompletedWords((prevCompleted) => {
                    const newCompleted = new Set(prevCompleted);
                    newCompleted.add(currentWordIndex);

                    if (newCompleted.size >= words.length) {
                        // All words done!
                        setAllDone(true);
                        trackEvent('writing_practice_complete', {
                            book_id: book.id,
                            chapter_id: chapter.id,
                            level_id: level.id,
                            words_count: words.length,
                            best_streak: bestStreak,
                        });
                    } else {
                        // Move to next word
                        goToNextWord();
                    }
                    return newCompleted;
                });
                return prevAttempt;
            }
        });
    }, [currentWordIndex, words.length, bestStreak, book.id, chapter.id, level.id]);

    const goToNextWord = () => {
        let nextIndex = currentWordIndex + 1;
        while (nextIndex < words.length && completedWords.has(nextIndex)) {
            nextIndex++;
        }
        if (nextIndex >= words.length) {
            nextIndex = 0;
            while (nextIndex < words.length && completedWords.has(nextIndex)) {
                nextIndex++;
            }
        }
        setCurrentWordIndex(nextIndex);
        setCurrentAttempt(0);
        setInputValue('');
        setIsChecked(false);
        setIsCorrect(false);
        setAttemptResults(Array(TOTAL_ATTEMPTS).fill(null));
        setTimeout(() => inputRef.current?.focus(), 100);
    };

    const handleSkipWord = () => {
        if (words.length <= 1) return;
        goToNextWord();
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (isChecked) {
                handleNextAttempt();
            } else {
                handleCheck();
            }
        }
    };

    const onVirtualKeyPress = (key: string) => {
        if (isChecked) return;
        setInputValue((prev) => prev + key);
    };

    const onVirtualEnter = () => {
        if (isChecked) {
            handleNextAttempt();
        } else {
            handleCheck();
        }
    };

    const onVirtualBackspace = () => {
        if (isChecked) return;
        setInputValue((prev) => prev.slice(0, -1));
    };

    if (words.length === 0) return null;

    // Completion screen
    if (allDone) {
        return (
            <div className="w-full max-w-md mx-auto">
                <Card className="shadow-none border-0 bg-transparent">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-6">
                        <div className="relative">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg">
                                <Trophy className="h-12 w-12 text-white" />
                            </div>
                            <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-md">
                                ✓
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-slate-800 mb-2">
                                🎉 Practice Complete!
                            </h2>
                            <p className="text-muted-foreground">
                                તમે {words.length} words, દરેક {TOTAL_ATTEMPTS} વાર practice
                                કર્યા!
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                            <Card className="p-3 text-center bg-blue-50 border-blue-200">
                                <p className="text-2xl font-bold text-blue-700">
                                    {words.length * TOTAL_ATTEMPTS}
                                </p>
                                <p className="text-xs text-blue-600 font-medium">
                                    Total Typed
                                </p>
                            </Card>
                            <Card className="p-3 text-center bg-orange-50 border-orange-200">
                                <p className="text-2xl font-bold text-orange-700">
                                    {bestStreak}
                                </p>
                                <p className="text-xs text-orange-600 font-medium">
                                    Best Streak 🔥
                                </p>
                            </Card>
                        </div>

                        <Button
                            onClick={back}
                            className="w-full max-w-xs h-12 text-base font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                        >
                            <ArrowLeft className="mr-2 h-5 w-5" />
                            Back to Levels
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    const currentWord = words[currentWordIndex];
    const overallProgress =
        ((completedWords.size * TOTAL_ATTEMPTS +
            currentAttempt +
            (isChecked ? 1 : 0)) /
            (words.length * TOTAL_ATTEMPTS)) *
        100;
    const wordProgress = ((currentAttempt + (isChecked ? 1 : 0)) / TOTAL_ATTEMPTS) * 100;

    return (
        <div className="w-full max-w-2xl mx-auto">
            <Celebration trigger={isChecked && isCorrect} />
            <Card className="w-full shadow-none border-0 bg-transparent">
                <CardHeader className="p-4">
                    <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                            <Pencil className="h-5 w-5 text-purple-500" />
                            <CardTitle className="font-bold">Writing Practice</CardTitle>
                        </div>
                        <div className="flex items-center gap-2">
                            {/* Streak badge */}
                            {streak > 0 && (
                                <div className="flex items-center gap-1 bg-gradient-to-r from-orange-400 to-red-500 text-white px-2.5 py-1 rounded-full text-xs font-bold shadow-md">
                                    <Flame className="h-3.5 w-3.5" />
                                    {streak}
                                </div>
                            )}
                            {/* Speaker on/off toggle */}
                            <Button
                                size="icon"
                                onClick={() => setSpeakEnabled(!speakEnabled)}
                                className={`h-10 w-10 rounded-lg shadow-md ${speakEnabled ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-white hover:bg-gray-100 text-gray-400'}`}
                            >
                                {speakEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
                            </Button>
                            <Button
                                size="icon"
                                onClick={back}
                                className="h-10 w-10 rounded-lg bg-white shadow-md"
                            >
                                <X className="h-5 w-5 text-destructive" strokeWidth={2.5} />
                            </Button>
                        </div>
                    </div>
                    <div className="text-xs text-muted-foreground mb-1">
                        {`B-${book.id.split('-')[1]} | CH-${chapter.id.split('-')[1]} | L-${level.id.split('-')[1]}`}
                        <span className="float-right font-semibold">
                            Word {completedWords.size + 1}/{words.length}
                        </span>
                    </div>
                    <Progress value={overallProgress} className="h-2" />
                </CardHeader>

                <CardContent className="p-4 pt-0 space-y-4">
                    {/* Word Display Card */}
                    <Card className="w-full shadow-lg relative border-2 border-purple-500/40">
                        <div className="absolute -top-1.5 -left-1.5 bg-background text-primary rounded-md h-6 w-6 flex items-center justify-center text-xs font-bold border-2 border-primary shadow-sm z-10">
                            {currentWordIndex + 1}
                        </div>
                        <CardContent className="p-4 text-center">
                            <div className="flex flex-col items-center gap-2">
                                {/* Word */}
                                <div className="inline-flex min-w-[140px] px-6 py-3 items-center justify-center gap-3 bg-gradient-to-br from-purple-600 to-indigo-700 text-white rounded-xl shadow-md border border-white/20">
                                    {selectedBook?.id === 'book-1' && currentWord.icon && (
                                        <span className="text-xl">{currentWord.icon}</span>
                                    )}
                                    <div className="text-center">
                                        {hideWord ? (
                                            <h3 className="font-bold text-lg tracking-wider leading-none">
                                                {'•'.repeat(currentWord.word.length)}
                                            </h3>
                                        ) : (
                                            <h3 className="font-bold text-lg tracking-wider leading-none capitalize">
                                                {currentWord.word}
                                            </h3>
                                        )}
                                        <p className="font-semibold text-purple-100 mt-1 text-sm opacity-90">
                                            {cleanPronunciation(getPronunciation(currentWord))}
                                        </p>
                                    </div>
                                </div>
                                {/* Meaning */}
                                <div className="inline-flex min-w-[140px] px-4 py-2 items-center justify-center text-green-900 rounded-xl font-bold bg-gradient-to-br from-green-100 to-emerald-200 shadow-md border border-green-200/50 text-sm">
                                    {getMeaning(currentWord)}
                                </div>
                                {/* Hide/Show toggle */}
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setHideWord(!hideWord)}
                                    className="text-xs text-muted-foreground hover:text-foreground"
                                >
                                    {hideWord ? (
                                        <>
                                            <Eye className="h-3.5 w-3.5 mr-1" /> Show Word
                                        </>
                                    ) : (
                                        <>
                                            <EyeOff className="h-3.5 w-3.5 mr-1" /> Hide Word
                                        </>
                                    )}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Attempt Progress (10 dots) */}
                    <div className="w-full">
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-sm font-semibold text-slate-700">
                                Attempt {currentAttempt + 1}/{TOTAL_ATTEMPTS}
                            </p>
                            <p className="text-xs text-muted-foreground">
                                {Math.round(wordProgress)}% done
                            </p>
                        </div>
                        <div className="flex items-center gap-1.5 justify-center">
                            {attemptResults.map((result, index) => (
                                <div
                                    key={index}
                                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${index === currentAttempt && !isChecked
                                        ? 'ring-2 ring-purple-500 ring-offset-1 bg-purple-100 text-purple-700 scale-110'
                                        : result === true
                                            ? 'bg-green-500 text-white shadow-sm'
                                            : result === false
                                                ? 'bg-red-500 text-white shadow-sm'
                                                : 'bg-slate-200 text-slate-400'
                                        }`}
                                >
                                    {result === true ? (
                                        <Check className="h-3.5 w-3.5" />
                                    ) : result === false ? (
                                        <X className="h-3.5 w-3.5" />
                                    ) : (
                                        index + 1
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Input section */}
                    <div
                        className={`w-full max-w-2xl mx-auto space-y-3 p-3 border rounded-lg bg-card shadow-lg shadow-black/20 ${shakeWrong ? 'animate-wrong-answer' : ''
                            }`}
                    >
                        <p className="text-center font-bold text-foreground text-sm">
                            ✍️ Spelling લખો ({currentAttempt + 1}/{TOTAL_ATTEMPTS})
                        </p>
                        <div className="flex w-full items-center space-x-2">
                            <Input
                                ref={inputRef}
                                type="text"
                                placeholder="Type the word..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyPress}
                                className="text-center h-11 font-bold text-purple-800 capitalize"
                                disabled={isChecked}
                                readOnly={isMobile}
                                inputMode={isMobile ? 'none' : 'text'}
                                autoFocus
                            />
                            {!isChecked ? (
                                <Button
                                    onClick={handleCheck}
                                    disabled={!inputValue.trim()}
                                    className="h-11 bg-purple-600 hover:bg-purple-700"
                                >
                                    Check
                                </Button>
                            ) : (
                                <Button
                                    onClick={handleNextAttempt}
                                    className={`h-11 ${currentAttempt >= TOTAL_ATTEMPTS - 1
                                        ? 'bg-green-600 hover:bg-green-700'
                                        : 'bg-blue-600 hover:bg-blue-700'
                                        }`}
                                >
                                    {currentAttempt >= TOTAL_ATTEMPTS - 1 ? (
                                        <>
                                            <Check className="h-4 w-4 mr-1" /> Done
                                        </>
                                    ) : (
                                        <>
                                            Next <ArrowRight className="h-4 w-4 ml-1" />
                                        </>
                                    )}
                                </Button>
                            )}
                        </div>
                        {isChecked && (
                            <div
                                className={`flex items-center justify-center p-2 rounded-md font-bold gap-2 ${isCorrect
                                    ? 'bg-green-100 text-green-700'
                                    : 'bg-red-100 text-red-700'
                                    }`}
                            >
                                {isCorrect ? (
                                    <Check className="h-5 w-5" />
                                ) : (
                                    <X className="h-5 w-5" />
                                )}
                                <span>
                                    {isCorrect ? '✅ Correct!' : `❌ Wrong! → ${currentWord.word}`}
                                </span>
                            </div>
                        )}
                    </div>

                    {isMobile && (
                        <VirtualKeyboard
                            onKeyPress={onVirtualKeyPress}
                            onEnter={onVirtualEnter}
                            onBackspace={onVirtualBackspace}
                            isEnterDisabled={
                                !isChecked && !inputValue.trim()
                            }
                        />
                    )}

                    {/* Skip button */}
                    {words.length > 1 && !isChecked && (
                        <div className="flex justify-center">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={handleSkipWord}
                                className="text-muted-foreground hover:text-foreground"
                            >
                                <SkipForward className="h-4 w-4 mr-1" />
                                Skip Word
                            </Button>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}

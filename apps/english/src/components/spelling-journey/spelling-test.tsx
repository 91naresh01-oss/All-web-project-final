'use client';

import { useState, useEffect, useCallback } from 'react';
import { useAppState } from '@/context/app-context';
import type { Book, Chapter, Level, TestResult, DetailedWord } from '@/lib/words';
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
import { X, ArrowRight, CheckCircle2, XCircle, Brain } from 'lucide-react';
import { languages } from '@/lib/languages';
import { cn } from '@/lib/utils';
import useIsMobile from '@/hooks/use-is-mobile';
import VirtualKeyboard from './virtual-keyboard';
import { trackEvent } from '@/lib/analytics';
import { playCorrectSound, playWrongSound } from '@/lib/sounds';
import Celebration from '@/components/ui/celebration';

interface SpellingTestProps {
  book: Book;
  chapter: Chapter;
  level: Level;
}

interface Question {
  type: 'meaning' | 'spelling';
  word: DetailedWord;
  questionText: string;
  options?: string[];
  answer: string;
}

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const getMeaning = (word: DetailedWord, language: string): string => {
  if (!word) return 'N/A';
  const langDetails = languages.find(l => l.code === language);
  const langName = langDetails ? langDetails.name : 'English';
  const langKey = langName.charAt(0).toLowerCase() + langName.slice(1);
  const specificLangKey = `${langKey}Meaning` as keyof typeof word;

  if (typeof (word as any)[specificLangKey] === 'string') return (word as any)[specificLangKey];
  if (typeof (word as any).gujaratiMeaning === 'string') return (word as any).gujaratiMeaning;
  
  if (typeof (word as any).meaning === 'object' && (word as any).meaning !== null) {
    const meaningObj = (word as any).meaning;
    return meaningObj[language] || meaningObj.gu || meaningObj.en || 'N/A';
  }
  return 'N/A';
}

const getQuestionTemplates = (lang: string) => {
  switch (lang) {
    case 'gu':
      return {
        meaning: (word: string) => `"${word}" નો અર્થ શું છે?`,
        spelling: (meaning: string) => `"${meaning}" માટે સાચો અંગ્રેજી શબ્દ કયો છે?`,
      };
    default:
      return {
        meaning: (word: string) => `What is the meaning of "${word}"?`,
        spelling: (meaning: string) => `What is the correct English word for "${meaning}"?`,
      };
  }
};

export default function SpellingTest({ book, chapter, level }: SpellingTestProps) {
  const { showScoreReport, back, language, fontSize } = useAppState();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [results, setResults] = useState<TestResult[]>([]);
  const [answerStatus, setAnswerStatus] = useState<'correct' | 'incorrect' | null>(null);
  const isMobile = useIsMobile();

  const generateQuestions = useCallback((words: DetailedWord[], lang: string): Question[] => {
    const allQuestions: Question[] = [];
    const templates = getQuestionTemplates(lang);

    words.forEach(word => {
      const correctMeaning = getMeaning(word, lang);
      if (correctMeaning === 'N/A') return;

      const meaningDistractors = words
        .filter(w => w.word !== word.word)
        .map(w => getMeaning(w, lang))
        .filter(m => m !== 'N/A' && m !== correctMeaning);

      const meaningOptions = shuffleArray([correctMeaning, ...shuffleArray(meaningDistractors).slice(0, 3)]);

      allQuestions.push({
        type: 'meaning',
        word: word,
        questionText: templates.meaning(word.word),
        options: meaningOptions,
        answer: correctMeaning,
      });

      allQuestions.push({
        type: 'spelling',
        word: word,
        questionText: templates.spelling(correctMeaning),
        answer: word.word,
      });
    });

    return shuffleArray(allQuestions);
  }, []);

  useEffect(() => {
    const testWords = [...level.words] as DetailedWord[];
    const generated = generateQuestions(testWords, language);
    const finalQuestions = testWords.flatMap(word => {
      const wordQuestions = generated.filter(q => q.word.word === word.word);
      return shuffleArray(wordQuestions).slice(0, 2);
    });

    setQuestions(shuffleArray(finalQuestions));
    trackEvent('spelling_test_start', { book_id: book.id, chapter_id: chapter.id, level_id: level.id });
  }, [level.words, language, book.id, chapter.id, level.id, generateQuestions]);

  const recordAnswer = useCallback((answer: string, isCorrect: boolean): TestResult => {
    const currentQuestion = questions[currentIndex];
    const newResult: TestResult = {
      word: currentQuestion.word.word,
      question: currentQuestion.questionText,
      questionType: currentQuestion.type,
      userAnswer: answer.trim() || 'Not Answered',
      correctAnswer: currentQuestion.answer,
      isCorrect,
    };
    setResults(prev => [...prev, newResult]);
    return newResult;
  }, [currentIndex, questions]);

  const handleCheckAnswer = () => {
    if (!userAnswer.trim() || answerStatus) return;
    const currentQuestion = questions[currentIndex];
    const isCorrect = userAnswer.trim().toLowerCase() === currentQuestion.answer.toLowerCase();
    setAnswerStatus(isCorrect ? 'correct' : 'incorrect');
    isCorrect ? playCorrectSound() : playWrongSound();
    recordAnswer(userAnswer, isCorrect);
  };

  const handleMcqSelect = (option: string) => {
    if (answerStatus) return;
    setUserAnswer(option);
    const currentQuestion = questions[currentIndex];
    const isCorrect = option.trim().toLowerCase() === currentQuestion.answer.toLowerCase();
    setAnswerStatus(isCorrect ? 'correct' : 'incorrect');
    isCorrect ? playCorrectSound() : playWrongSound();
    recordAnswer(option, isCorrect);
  };

  const goToNext = (currentResults?: TestResult[]) => {
    const res = currentResults || results;
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setUserAnswer('');
      setAnswerStatus(null);
    } else {
      showScoreReport(res);
    }
  }

  const handleNextQuestion = () => {
    if (!answerStatus) {
      const newResult = recordAnswer('Skipped', false);
      goToNext([...results, newResult]);
    } else {
      goToNext();
    }
  };

  const handleSkip = () => {
    const newResult = recordAnswer('Skipped', false);
    goToNext([...results, newResult]);
  }

  const onVirtualKeyPress = (key: string) => {
    if (answerStatus) return;
    setUserAnswer((prev) => prev + key);
  };

  const onVirtualEnter = () => {
    if (answerStatus) handleNextQuestion();
    else handleCheckAnswer();
  };

  const onVirtualBackspace = () => {
    if (answerStatus) return;
    setUserAnswer((prev) => prev.slice(0, -1));
  };

  if (questions.length === 0) return <div className="p-8 text-center font-bold text-slate-500">Loading test...</div>;

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;
  const isMCQ = currentQuestion.type !== 'spelling';

  return (
    <div className={cn("w-full max-w-2xl mx-auto", fontSize)}>
      <Celebration trigger={answerStatus === 'correct'} />
      
      <Card className="w-full shadow-none border-0 bg-transparent">
        <CardHeader className="p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-50 rounded-lg">
                <Brain className="h-5 w-5 text-indigo-500" />
              </div>
              <CardTitle className="font-bold text-xl text-slate-800">Spelling Test</CardTitle>
            </div>
            <Button size="icon" variant="ghost" onClick={back} className="h-10 w-10 rounded-xl bg-white shadow-sm hover:bg-red-50 group">
              <X className="h-5 w-5 text-slate-400 group-hover:text-red-500 transition-colors" />
            </Button>
          </div>
          <div className="flex items-center justify-between mb-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
             <span>{`Book ${book.id.split('-')[1]}`}</span>
             <span>{`CH ${chapter.id.split('-')[1]}`}</span>
             <span>{`LVL ${level.id.split('-')[1]}`}</span>
          </div>
          <Progress value={progress} className="h-2.5 bg-slate-200" />
        </CardHeader>

        <CardContent className="p-4 pt-0 space-y-6">
          <div className="premium-card p-6 border-none ring-1 ring-black/5 relative overflow-visible">
            <div className="absolute -top-3 -left-3 bg-indigo-600 text-white rounded-xl h-8 w-8 flex items-center justify-center text-sm font-bold shadow-lg ring-4 ring-white">
              {currentIndex + 1}
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Question</p>
              <p className="font-bold text-xl text-slate-800 leading-relaxed">
                {currentQuestion.questionText}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {isMCQ && currentQuestion.options ? (
              <div className="grid grid-cols-1 gap-3">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = userAnswer === option;
                  const isCorrectAnswer = option === currentQuestion.answer;
                  const showCorrect = answerStatus && isCorrectAnswer;
                  const showWrong = answerStatus && isSelected && !isCorrectAnswer;

                  return (
                    <Button
                      key={index}
                      variant="outline"
                      className={cn(
                        "h-auto py-4 px-6 justify-start text-left font-bold text-lg rounded-2xl transition-all border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50",
                        !answerStatus && "premium-card border-none ring-1 ring-black/5",
                        showCorrect && "bg-emerald-50 border-emerald-500 text-emerald-700 ring-2 ring-emerald-500/20 animate-correct",
                        showWrong && "bg-rose-50 border-rose-500 text-rose-700 ring-2 ring-rose-500/20 animate-wrong",
                        answerStatus && !isSelected && !isCorrectAnswer && "opacity-50"
                      )}
                      onClick={() => handleMcqSelect(option)}
                      disabled={!!answerStatus}
                    >
                      <div className="flex items-center gap-3 w-full">
                        <div className={cn(
                          "h-8 w-8 rounded-lg flex items-center justify-center text-sm border transition-colors",
                          showCorrect ? "bg-emerald-500 border-emerald-500 text-white" : 
                          showWrong ? "bg-rose-500 border-rose-500 text-white" : 
                          "bg-slate-50 border-slate-200 text-slate-500"
                        )}>
                          {String.fromCharCode(65 + index)}
                        </div>
                        <span className="flex-1">{option}</span>
                        {showCorrect && <CheckCircle2 className="h-6 w-6 text-emerald-500" />}
                        {showWrong && <XCircle className="h-6 w-6 text-rose-500" />}
                      </div>
                    </Button>
                  );
                })}
              </div>
            ) : (
              <div className="premium-card p-6 border-none ring-1 ring-black/5 space-y-4">
                <div className="flex flex-col gap-3">
                  <Input
                    type="text"
                    placeholder="Type the spelling..."
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    className="text-center h-14 font-bold text-2xl text-indigo-600 capitalize bg-slate-50/50 border-slate-200 focus:ring-indigo-500 rounded-2xl"
                    onKeyDown={(e) => e.key === 'Enter' && !answerStatus && handleCheckAnswer()}
                    disabled={!!answerStatus || isMobile}
                    readOnly={isMobile}
                    inputMode={isMobile ? 'none' : 'text'}
                  />
                  {!answerStatus && !isMobile && (
                    <Button onClick={handleCheckAnswer} className="premium-button-indigo h-12 rounded-xl text-lg" disabled={!userAnswer.trim()}>
                      Submit Answer
                    </Button>
                  )}
                </div>

                {answerStatus === 'incorrect' && (
                  <div className="p-4 rounded-xl bg-rose-50 border border-rose-100 flex flex-col items-center gap-2">
                    <p className="text-sm font-bold text-rose-400 uppercase tracking-wider">Correct Spelling</p>
                    <p className="text-2xl font-bold text-rose-700 capitalize underline underline-offset-4 decoration-rose-300">
                      {currentQuestion.answer}
                    </p>
                  </div>
                )}

                {isMobile && !answerStatus && (
                  <VirtualKeyboard
                    onKeyPress={onVirtualKeyPress}
                    onEnter={onVirtualEnter}
                    onBackspace={onVirtualBackspace}
                    isEnterDisabled={!userAnswer.trim()}
                  />
                )}
              </div>
            )}
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0">
          <div className="w-full flex items-center gap-3">
            <Button variant="ghost" className="h-12 flex-1 rounded-xl text-slate-500 font-bold hover:bg-slate-100" onClick={handleSkip}>
              Skip
            </Button>
            <Button 
              onClick={handleNextQuestion} 
              className={cn(
                "h-12 flex-[2] rounded-xl text-lg font-bold shadow-lg transition-all",
                answerStatus ? "premium-button-indigo" : "bg-slate-200 text-slate-400 pointer-events-none"
              )}
            >
              {currentIndex < questions.length - 1 ? 'Next Question' : 'View Results'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

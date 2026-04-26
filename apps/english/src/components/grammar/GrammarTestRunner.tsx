'use client';

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Check, CheckCircle2, X, XCircle, ArrowRight, SkipForward, FileText, Trophy, ChevronDown, BookCopy, RotateCw, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '../ui/skeleton';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { useAppState } from '@/context/app-context';
import { trackEvent } from '@/lib/analytics';
import { playCorrectSound, playWrongSound } from '@/lib/sounds';
import Celebration from '@/components/ui/celebration';


export interface Question {
  question: string;
  options: string[];
  answer: string;
  explanation?: string;
}

interface TestResult {
  question: Question;
  userAnswer: string;
  isCorrect: boolean;
}

interface GrammarTestRunnerProps {
  questions: Question[];
}

// Helper function to shuffle an array
const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};


export default function GrammarTestRunner({ questions: initialQuestions }: GrammarTestRunnerProps) {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { updateGrammarTestScore, fontSize } = useAppState();

  const lang = searchParams.get('lang');
  const langParam = lang === 'hi' ? '?lang=hi' : '';

  const topicFolder = params.topic as string;
  const testId = params.testId as string;

  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState<string | null>(null);
  const [answerStatus, setAnswerStatus] = useState<'correct' | 'incorrect' | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [results, setResults] = useState<TestResult[]>([]);

  useEffect(() => {
    if (initialQuestions && initialQuestions.length > 0) {
      setQuestions(shuffleArray(initialQuestions));
      setLoading(false);

      // Track grammar test start
      trackEvent('grammar_test_start', {
        topic_id: topicFolder,
        test_id: testId,
        questions_count: initialQuestions.length
      });
    } else {
      setError(`This test is not available yet. Please try another one.`);
      setLoading(false);
    }
  }, [initialQuestions, topicFolder, testId]);

  const handleFinishTest = () => {
    const finalScore = Math.round((score / questions.length) * 100);

    // Track grammar test finish
    trackEvent('grammar_test_finish', {
      topic_id: topicFolder,
      test_id: testId,
      score: finalScore,
      correct: score,
      total: questions.length
    });

    if (topicFolder && testId) {
      updateGrammarTestScore(topicFolder, testId, finalScore);
    }
    setIsFinished(true);
  }

  const handleOptionSelect = (option: string) => {
    if (answerStatus) return;
    setUserAnswer(option);

    const currentQuestion = questions![currentQuestionIndex];
    const isCorrect = option.toLowerCase() === currentQuestion.answer.toLowerCase();

    setAnswerStatus(isCorrect ? 'correct' : 'incorrect');
    isCorrect ? playCorrectSound() : playWrongSound();
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    setResults(prev => [...prev, { question: currentQuestion, userAnswer: option, isCorrect }]);
  };

  const handleNext = () => {
    if (!answerStatus) {
      const currentQuestion = questions![currentQuestionIndex];
      setResults(prev => [...prev, { question: currentQuestion, userAnswer: 'Skipped', isCorrect: false }]);
    }

    if (currentQuestionIndex < questions!.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setAnswerStatus(null);
      setUserAnswer(null);
    } else {
      handleFinishTest();
    }
  };

  const restartTest = () => {
    setCurrentQuestionIndex(0);
    setUserAnswer(null);
    setAnswerStatus(null);
    setScore(0);
    setIsFinished(false);
    setResults([]);
    // Re-shuffle questions for a new test experience
    if (questions) {
      setQuestions(shuffleArray(questions));
    }
  }

  if (loading) {
    return (
      <Card className="w-full shadow-2xl p-0">
        <CardHeader className="p-4"><Skeleton className="h-8 w-1/2" /></CardHeader>
        <CardContent className="space-y-4 p-4">
          <Skeleton className="h-16 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </CardContent>
        <CardFooter className="p-4"><Skeleton className="h-12 w-full" /></CardFooter>
      </Card>
    );
  }

  if (error) {
    return <div className="text-center p-4 text-red-500">{error}</div>;
  }

  if (!questions || questions.length === 0) {
    return <div className="text-center p-4 text-muted-foreground">Could not load test questions.</div>;
  }

  if (isFinished) {

    const finalScore = Math.round((score / questions.length) * 100);
    const passed = finalScore >= 80;

    return (
      <div className={cn("w-full max-w-3xl mx-auto", fontSize)}>
        {/* 1. Score Card */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-4">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className={`p-2 rounded-full ${passed ? 'bg-green-100' : 'bg-red-100'}`}>
                <Trophy className={`w-8 h-8 ${passed ? 'text-green-700' : 'text-red-700'}`} />
              </div>
              <h2 className={`text-xl font-bold ${passed ? 'text-green-700' : 'text-red-700'}`}>
                {passed ? `Congratulations! You passed! ${finalScore === 100 ? '🎉' : ''}` : 'Keep Practicing!'}
              </h2>
              <p className="text-gray-500 font-medium">
                You answered {score} out of {questions.length} questions correctly.
              </p>
            </div>

            <div className="mt-4">
              <div className="flex justify-between text-xs font-bold text-gray-600 mb-1 uppercase tracking-wider">
                <span>Your Score</span>
                <span>{finalScore}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${passed ? 'bg-green-600' : 'bg-red-600'}`}
                  style={{ width: `${finalScore}%` }}
                ></div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-center">
              <div className="bg-green-50 p-2 rounded-lg border border-green-100">
                <p className="text-xs text-green-700 font-bold uppercase">Correct</p>
                <p className="text-2xl font-black text-green-700">{score}</p>
              </div>
              <div className="bg-red-50 p-2 rounded-lg border border-red-100">
                <p className="text-xs text-red-700 font-bold uppercase">Wrong</p>
                <p className="text-2xl font-black text-red-700">{questions.length - score}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Detailed Results */}
        <h2 className="text-lg font-semibold mt-6 mb-3 text-gray-800">
          Detailed Results
        </h2>
        <Accordion type="single" collapsible className="w-full bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          {results.map((result, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="flex justify-between items-center w-full p-4 font-bold text-left text-gray-700 hover:bg-gray-50 hover:no-underline">
                <span className="flex-1 pr-4" dangerouslySetInnerHTML={{ __html: `${index + 1}. ${result.question.question}` }} />
                <div className="flex items-center">
                  {result.isCorrect ? <CheckCircle2 className="w-5 h-5 text-green-600" /> : <XCircle className="w-5 h-5 text-red-600" />}
                  <ChevronDown className="w-5 h-5 ml-3 text-gray-400" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-gray-50 border-t border-gray-200">
                <div className="space-y-3">
                  <div className={`flex p-3 rounded-md ${result.isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
                    {result.isCorrect ? <CheckCircle2 className="w-5 h-5 text-green-700 mr-3 flex-shrink-0" /> : <XCircle className="w-5 h-5 text-red-700 mr-3 flex-shrink-0" />}
                    <div>
                      <p className={`text-xs font-bold uppercase tracking-wider ${result.isCorrect ? 'text-green-800' : 'text-red-800'}`}>Your Answer:</p>
                      <p className={`font-bold ${result.isCorrect ? 'text-green-900' : 'text-red-900 line-through'}`}>{result.userAnswer}</p>
                    </div>
                  </div>

                  {!result.isCorrect && (
                    <div className="flex bg-green-100 p-3 rounded-md">
                      <CheckCircle2 className="w-5 h-5 text-green-700 mr-3 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-green-800">Correct Answer:</p>
                        <p className="font-bold text-green-900">{result.question.answer}</p>
                      </div>
                    </div>
                  )}

                  {result.question.explanation && (
                    <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
                      <p className="text-xs font-bold uppercase tracking-wider text-blue-800">Explanation:</p>
                      <p className="text-blue-900 font-medium leading-relaxed">{result.question.explanation}</p>
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* 3. Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button onClick={restartTest} className="flex-1 h-11 text-base shadow-sm bg-blue-600 hover:bg-blue-700">
            <RotateCw className="w-4 h-4 mr-2" />
            Take Test Again
          </Button>
          <Button asChild variant="outline" className="flex-1 h-11 text-base border-gray-300 shadow-sm bg-white hover:bg-gray-50">
            <Link href={`/grammar/${topicFolder}/test${langParam}`}>
              <BookCopy className="w-4 h-4 mr-2" />
              Choose Another Test
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const getOptionClass = (option: string) => {
    if (!answerStatus) return 'bg-card border-input hover:bg-accent/60';
    const isSelected = userAnswer === option;
    const isCorrectAnswer = option.toLowerCase() === currentQuestion.answer.toLowerCase();
    if (isCorrectAnswer) return 'border-green-500 bg-green-100/50 ring-2 ring-green-500/50';
    if (isSelected && !isCorrectAnswer) return 'border-destructive bg-red-100/50 ring-2 ring-destructive/50';
    return 'border-input';
  };



  return (
    <Card className={cn("w-full shadow-2xl p-0", fontSize)}>
      <Celebration trigger={answerStatus === 'correct'} />

      <CardContent className="space-y-5 flex flex-col p-3">
        <div className="relative p-3 border border-primary rounded-lg bg-card text-left w-full ring-1 ring-primary/30 shadow-lg shadow-primary/20">
          <div className="absolute -top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Question {currentQuestionIndex + 1}
          </div>
          <p className="font-bold pt-1 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: currentQuestion.question }} />
        </div>

        <div className="space-y-2.5 flex flex-col">
          {currentQuestion.options.map((option, index) => {
            const isSelected = userAnswer === option;
            const isCorrectAnswer = option.toLowerCase() === currentQuestion.answer.toLowerCase();
            const showCorrectIcon = answerStatus && isCorrectAnswer;
            const showWrongIcon = answerStatus && isSelected && !isCorrectAnswer;

            return (
              <Button
                key={index}
                variant="outline"
                className={cn(
                  "w-full h-auto min-h-9 text-base justify-start shadow-sm py-2 px-3 text-left whitespace-normal disabled:opacity-100",
                  getOptionClass(option),
                  showCorrectIcon && "animate-correct-answer",
                  showWrongIcon && "animate-wrong-answer"
                )}
                onClick={() => handleOptionSelect(option)}
                disabled={!!answerStatus}
              >
                <span className="flex items-center gap-2 w-full">
                  {showCorrectIcon && <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />}
                  {showWrongIcon && <XCircle className="h-4 w-4 text-red-600 flex-shrink-0" />}
                  <span>{option}</span>
                </span>
              </Button>
            );
          })}
        </div>

        {answerStatus && (
          <div className="space-y-2">

            {currentQuestion.explanation && (
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="explanation" className="border rounded-lg shadow-sm bg-blue-50/50 overflow-hidden">
                  <AccordionTrigger className="p-2 text-xs font-bold uppercase tracking-widest text-blue-800 hover:no-underline px-4">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Explanation
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pt-1 leading-relaxed font-medium text-sm text-blue-900">
                    {currentQuestion.explanation}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )}
          </div>
        )}
      </CardContent>

      <CardFooter className="flex flex-col gap-2 p-3">
        <div className="w-full space-y-1">
          <div className="text-xs text-muted-foreground text-center">
            {`Question ${currentQuestionIndex + 1} of ${questions.length}`}
          </div>
          <Progress value={progress} className="h-1.5 [&>div]:bg-green-500" />
        </div>

        <div className="w-full grid grid-cols-2 gap-2">
          <Button variant="outline" className="w-full h-10 shadow-md" onClick={handleNext}>
            <SkipForward className="mr-2 h-4 w-4" />
            Skip
          </Button>
          <Button onClick={handleNext} className="w-full h-10" disabled={!answerStatus}>
            {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Finish'}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

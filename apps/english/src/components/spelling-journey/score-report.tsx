'use client';

import { useMemo, useEffect } from 'react';
import { useAppState } from '@/context/app-context';
import type { TestResult } from '@/lib/words';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ChevronDown, RotateCw, Trophy, XCircle, BookCopy } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from '@/lib/utils';


interface ScoreReportProps {
  results: TestResult[];
}

export default function ScoreReport({ results }: ScoreReportProps) {
  const { selectedBook, selectedChapter, selectedLevel, goToLevelList, startTest, updateLevelScore, fontSize } =
    useAppState();

  const { correctAnswers, totalQuestions, score, passed } = useMemo(() => {
    const correct = results.filter((r) => r.isCorrect).length;
    const total = results.length;
    const finalScore = total > 0 ? Math.round((correct / total) * 100) : 0;
    const passStatus = finalScore >= 80;

    return {
      correctAnswers: correct,
      totalQuestions: total,
      score: finalScore,
      passed: passStatus,
    };
  }, [results]);

  useEffect(() => {
    if (selectedBook && selectedChapter && selectedLevel) {
      updateLevelScore(selectedBook.id, selectedChapter.id, selectedLevel.id, score, selectedChapter.title);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBook, selectedChapter, selectedLevel, score]);

  const bookNum = selectedBook?.id.split('-')[1];
  const chapterNum = selectedChapter?.id.split('-')[1];
  const levelNum = selectedLevel?.id.split('-')[1];

  const retakeTest = () => {
    startTest();
  }

  return (
    <div className={cn("w-full max-w-xl mx-auto", fontSize)}>
      <div className="flex items-center mb-6 justify-center">
        <div className="text-center px-6 py-2 bg-slate-100 rounded-2xl border border-slate-200">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Test ID</p>
          <p className="text-sm font-black text-slate-700">
             {`Book ${bookNum} • Ch ${chapterNum} • Lvl ${levelNum}`}
          </p>
        </div>
      </div>

      <div className="premium-card p-8 text-center relative overflow-hidden bg-white border-none ring-1 ring-black/5">
        {/* Success/Fail Background Glow */}
        <div className={cn(
          "absolute -top-24 -right-24 w-64 h-64 blur-[100px] rounded-full opacity-20",
          passed ? "bg-emerald-500" : "bg-rose-500"
        )} />
        
        <div className="relative z-10 flex flex-col items-center">
          <div className={cn(
            "h-24 w-24 rounded-3xl flex items-center justify-center mb-6 shadow-xl border-4 transform rotate-3",
            passed ? "bg-emerald-50 border-emerald-100 text-emerald-600" : "bg-rose-50 border-rose-100 text-rose-600"
          )}>
            <Trophy className="w-12 h-12" />
          </div>

          <h2 className={cn(
            "text-3xl font-black mb-2 tracking-tight",
            passed ? "text-emerald-700" : "text-rose-700"
          )}>
            {passed ? (score === 100 ? "Perfect Score! 🏆" : "Excellent! You passed!") : "Keep Practicing!"}
          </h2>
          
          <p className="text-slate-500 font-bold text-lg mb-8">
            You scored <span className={cn("font-black", passed ? "text-emerald-600" : "text-rose-600")}>{score}%</span>
          </p>

          <div className="w-full max-w-sm mb-10">
             <div className="flex justify-between text-[11px] font-black text-slate-400 mb-2 uppercase tracking-widest">
               <span>Performance Progress</span>
               <span className={passed ? "text-emerald-600" : "text-rose-600"}>{score}%</span>
             </div>
             <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
                <div 
                  className={cn("h-full rounded-full transition-all duration-1000", passed ? "bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]" : "bg-rose-500")}
                  style={{ width: `${score}%` }}
                />
             </div>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100/50 text-center">
              <p className="text-[10px] font-black text-emerald-600/60 uppercase tracking-widest mb-1">Correct</p>
              <p className="text-3xl font-black text-emerald-700">{correctAnswers}</p>
            </div>
            <div className="bg-rose-50/50 p-5 rounded-2xl border border-rose-100/50 text-center">
              <p className="text-[10px] font-black text-rose-600/60 uppercase tracking-widest mb-1">Mistakes</p>
              <p className="text-3xl font-black text-rose-700">{totalQuestions - correctAnswers}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-4 text-center">
          Detailed Review
        </h2>
        
        <div className="premium-card overflow-hidden bg-white border-none ring-1 ring-black/5 divide-y divide-slate-100">
          {results.map((result, index) => (
            <div key={index} className="group">
              <div className="flex items-center justify-between p-5 hover:bg-slate-50/50 transition-colors">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-black text-slate-300 w-4">{index + 1}</span>
                  <p className="font-black text-slate-700 text-lg">{result.question}</p>
                </div>
                <div className="flex items-center gap-3">
                   {result.isCorrect ? (
                     <div className="bg-emerald-100 text-emerald-600 p-1.5 rounded-lg">
                       <CheckCircle2 className="w-5 h-5" />
                     </div>
                   ) : (
                     <div className="bg-rose-100 text-rose-600 p-1.5 rounded-lg">
                       <XCircle className="w-5 h-5" />
                     </div>
                   )}
                </div>
              </div>
              
              {!result.isCorrect && (
                <div className="px-5 pb-5 animate-in slide-in-from-top-1 duration-200">
                   <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-3">
                      <div className="flex justify-between items-center">
                         <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Your Answer</span>
                         <span className="px-2 py-1 bg-rose-100 text-rose-600 text-[10px] font-black rounded-md uppercase">Incorrect</span>
                      </div>
                      <p className="font-black text-rose-500 text-xl line-through decoration-2 opacity-60">{result.userAnswer || "(skipped)"}</p>
                      
                      <div className="pt-2 border-t border-slate-200/50">
                         <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Correct Solution</span>
                         <p className="font-black text-emerald-600 text-xl">{result.correctAnswer}</p>
                      </div>
                   </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-10">
        <Button 
          onClick={retakeTest} 
          className="premium-button-indigo h-14 text-lg shadow-xl"
        >
          <RotateCw className="w-5 h-5 mr-3" />
          Retake Test
        </Button>
        <Button 
          onClick={goToLevelList} 
          className="h-14 text-lg bg-white text-slate-600 border border-slate-200 shadow-md hover:bg-slate-50 font-black rounded-2xl transition-all active:scale-95"
        >
          <BookCopy className="w-5 h-5 mr-3" />
          Back to Levels
        </Button>
      </div>
    </div>
  );
}

'use client';

import { useAppState } from '@/context/app-context';
import type { Book, Chapter, Level, ProgressEntry } from '@/lib/words';
import { Card, CardHeader, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Lock, PlayCircle, Loader2, Award, Percent, RefreshCw, Pencil, ArrowLeft, Trophy } from 'lucide-react';
import Header from './header';
import { Badge } from '@/components/ui/badge';
import { languages } from '@/lib/languages';
import { cn } from '@/lib/utils';
import React from 'react';

interface LevelListProps {
  book: Book;
  chapter: Chapter;
}

function LevelListComponent({ book, chapter }: LevelListProps) {
  const { selectLevel, back, language, progress, startTest, startWritingPractice } = useAppState();

  const getChapterTitle = (chapter: Chapter) => {
    const langDetails = languages.find(l => l.code === language);
    const langName = langDetails ? langDetails.name : 'English';
    const key = `${langName.toLowerCase()}Title` as keyof Chapter;
    const localizedTitle = chapter[key] || chapter.title;

    if (typeof localizedTitle === 'string' && /^(?:Chapter|પ્રકરણ)\s*\d+:/.test(localizedTitle)) {
      return localizedTitle;
    }

    const chapterIdNumber = chapter.id.split('-')[1] || '';
    return `Chapter ${chapterIdNumber}: ${localizedTitle}`;
  }

  if (!chapter.levels) {
    return (
      <div className="flex min-h-[200px] w-full items-center justify-center bg-background">
        <Loader2 className="h-12 w-12 text-primary" />
      </div>
    )
  }

  const bookNum = book.id.split('-')[1];
  const chapterNum = chapter.id.split('-')[1];

  const handleSelectLevel = (level: any) => {
    selectLevel(level);
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="flex items-center mb-8 relative justify-center">
        <Button
          size="icon"
          variant="ghost"
          onClick={back}
          className="absolute left-0 bg-white shadow-sm hover:bg-slate-50 h-10 w-10 rounded-xl border border-slate-100 transition-all hover:scale-105 active:scale-95"
        >
          <ArrowLeft className="h-5 w-5 text-slate-600" />
        </Button>
        <div className="text-center px-10">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
             {`B-${bookNum} | Ch-${chapterNum}`}
          </p>
          <h1 className="text-xl font-black text-slate-800 tracking-tight leading-tight">
            {String(getChapterTitle(chapter))}
          </h1>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6 px-2">
          {chapter.levels.map((level, index) => {
            if (!level || !level.id) return null;

            const uniqueLevelId = `${book.id}-${chapter.id}-${level.id}`;
            const progressEntry: ProgressEntry | number | undefined = progress?.[uniqueLevelId];

            let score: number | undefined;
            if (typeof progressEntry === 'number') {
              score = progressEntry;
            } else if (progressEntry) {
              score = progressEntry.score;
            }

            const isCompleted = score !== undefined;
            const isPassed = isCompleted && (score ?? 0) >= 80;

            let cardColorClass = "border-blue-300/50";
            let buttonClass = "bg-blue-600 hover:bg-blue-700";
            if (isCompleted) {
              cardColorClass = isPassed ? "border-green-400/80 bg-green-50/20" : "border-red-400/80 bg-red-50/20";
              buttonClass = isPassed ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700";
            }

            return (
              <div
                key={`${level.id}-${index}`}
                className={cn(
                  "premium-card p-5 border-none ring-1 ring-black/5 bg-white relative overflow-hidden",
                  isCompleted && (isPassed ? "ring-emerald-500/20 bg-emerald-50/10" : "ring-rose-500/20 bg-rose-50/10")
                )}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                       "h-10 w-10 rounded-xl flex items-center justify-center shadow-sm border",
                       isCompleted ? (isPassed ? "bg-emerald-50 border-emerald-100 text-emerald-600" : "bg-rose-50 border-rose-100 text-rose-600") : "bg-indigo-50 border-indigo-100 text-indigo-600"
                    )}>
                       <PlayCircle className="h-6 w-6" />
                    </div>
                    <h3 className="font-black text-lg text-slate-800">{`Level ${level.id.split('-')[1]}`}</h3>
                  </div>
                  {isCompleted && (
                    <div className={cn(
                      "flex items-center gap-1 font-black px-3 py-1 rounded-lg text-sm shadow-sm",
                      isPassed ? "bg-emerald-500 text-white" : "bg-rose-500 text-white"
                    )}>
                      <span>{score}%</span>
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {level.words && level.words.length > 0 && level.words.slice(0, 4).map((word) => (
                      <span key={word.word} className="px-2.5 py-1 bg-slate-50 text-slate-600 rounded-lg text-xs font-bold border border-slate-100">
                        {word.word}
                      </span>
                    ))}
                    {level.words && level.words.length > 4 && (
                      <span className="text-xs text-slate-400 font-bold self-center">+{level.words.length - 4} more</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <Button
                    onClick={() => handleSelectLevel(level)}
                    className={cn(
                      "h-12 rounded-xl font-bold shadow-md transition-all active:scale-95",
                      isCompleted ? "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50" : "premium-button-indigo"
                    )}
                  >
                    {isCompleted ? <RefreshCw className="h-4 w-4 mr-2" /> : <PlayCircle className="h-4 w-4 mr-2" />}
                    {isCompleted ? 'Retry' : 'Learn'}
                  </Button>
                  
                  <Button
                    onClick={() => {
                      selectLevel(level);
                      setTimeout(() => startWritingPractice(), 50);
                    }}
                    className="h-12 rounded-xl font-bold shadow-md bg-white text-indigo-600 border border-indigo-100 hover:bg-indigo-50 transition-all active:scale-95"
                  >
                    <Pencil className="h-4 w-4 mr-2" />
                    Practice
                  </Button>

                  <Button
                    onClick={() => {
                      selectLevel(level);
                      setTimeout(() => startTest(), 50);
                    }}
                    className="h-12 rounded-xl font-bold shadow-md bg-emerald-600 text-white hover:bg-emerald-700 transition-all active:scale-95"
                  >
                    <Award className="h-4 w-4 mr-2" />
                    Test
                  </Button>
                </div>
              </div>
            );
          })}

          {/* === Chapter Test: All Levels Combined === */}
          {chapter.levels && chapter.levels.length > 1 && (() => {
            // Combine all words from all levels
            const allWords = chapter.levels.flatMap(l => l.words || []);
            const totalWords = allWords.length;

            if (totalWords < 4) return null; // Need minimum words for MCQ

            const handleStartChapterTest = () => {
              // Shuffle and take up to 50 words for the test
              const shuffled = [...allWords].sort(() => Math.random() - 0.5);
              const testWords = shuffled.slice(0, Math.min(50, shuffled.length));

              // Create virtual level with combined words
              const virtualLevel = {
                id: 'all-levels',
                words: testWords,
              };

              selectLevel(virtualLevel as any);
            };

            // Check progress for chapter test
            const chapterTestId = `${book.id}-${chapter.id}-all-levels`;
            const chapterTestProgress: ProgressEntry | number | undefined = progress?.[chapterTestId];
            let chapterTestScore: number | undefined;
            if (typeof chapterTestProgress === 'number') {
              chapterTestScore = chapterTestProgress;
            } else if (chapterTestProgress) {
              chapterTestScore = chapterTestProgress.score;
            }
            const hasChapterScore = chapterTestScore !== undefined;

            return (
              <div
                className="premium-card p-8 bg-gradient-to-br from-indigo-600 to-violet-700 text-white border-none shadow-2xl relative overflow-hidden group cursor-pointer"
                onClick={handleStartChapterTest}
              >
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                  <Award className="h-32 w-32" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-inner">
                        <Trophy className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-black text-2xl tracking-tight">Chapter Mega Test</h3>
                        <p className="text-white/70 font-bold text-sm">Combined Challenge</p>
                      </div>
                    </div>
                    {hasChapterScore && (
                      <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl border border-white/30 flex items-center gap-2">
                        <Award className="h-5 w-5" />
                        <span className="font-black text-xl">{chapterTestScore}%</span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-3 mb-8">
                    <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 text-xs font-black flex items-center gap-2">
                       <span className="text-base">📚</span> {chapter.levels.length} Levels
                    </div>
                    <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 text-xs font-black flex items-center gap-2">
                       <span className="text-base">📝</span> {totalWords} Words
                    </div>
                    <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 text-xs font-black flex items-center gap-2">
                       <span className="text-base">❓</span> {Math.min(totalWords * 2, 100)} Questions
                    </div>
                  </div>

                  <Button
                    className="w-full h-14 bg-white text-indigo-600 hover:bg-slate-50 font-black text-lg rounded-2xl shadow-xl transition-all active:scale-95 group-hover:shadow-indigo-500/20"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleStartChapterTest();
                    }}
                  >
                    <PlayCircle className="h-6 w-6 mr-3" />
                    {hasChapterScore ? 'Retry Mega Test' : 'Start Mega Test'}
                  </Button>
                </div>
              </div>
            );
          })()}
      </div>
    </div>
  );
}

const LevelList = React.memo(LevelListComponent);
export default LevelList;

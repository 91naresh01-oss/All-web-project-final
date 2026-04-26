'use client';

import { useAppState } from '@/context/app-context';
import type { Book, Chapter } from '@/lib/words';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { languages } from '@/lib/languages';
import { cn } from '@/lib/utils';

interface ChapterListProps {
  book: Book;
}

export default function ChapterList({ book }: ChapterListProps) {
  const { selectChapter, back, language } = useAppState();

  const getChapterTitleParts = (
    chapter: Chapter
  ): { chapterNumber: string; chapterTitle: string } => {
    let localizedTitle = chapter.title;
    if (language === 'gu' && chapter.gujaratiTitle) {
      localizedTitle = chapter.gujaratiTitle;
    } else if (language === 'hi' && chapter.hindiTitle) {
      localizedTitle = chapter.hindiTitle;
    }

    const chapterIdNumber = chapter.id.split('-')[1] || '';
    let titleWithoutPrefix = localizedTitle.trim();

    if (book.id === 'book-3' && chapter.id === 'chapter-1') {
      switch (language) {
        case 'gu': titleWithoutPrefix = 'ક્રિયા શબ્દો'; break;
        case 'hi': titleWithoutPrefix = 'क्रिया शब्द'; break;
        default: titleWithoutPrefix = 'Action Verbs';
      }
    }

    return {
      chapterNumber: `Chapter ${chapterIdNumber}`,
      chapterTitle: titleWithoutPrefix,
    };
  };

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
        <div className="text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Select Chapter</p>
          <h1 className="text-2xl font-black text-slate-800 tracking-tight">
            {book.title}
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {book.chapters.map((chapter) => {
          const { chapterNumber, chapterTitle } = getChapterTitleParts(chapter);
          const chapterIdNumber = chapter.id.split('-')[1] || '';

          return (
            <div
              key={chapter.id}
              onClick={() => selectChapter(chapter)}
              className="premium-card group flex items-center justify-between p-4 cursor-pointer border-none ring-1 ring-black/5"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 font-black text-xl shadow-inner border border-indigo-100">
                  {chapterIdNumber}
                </div>
                <div className="flex flex-col">
                  <p className="font-black text-lg text-slate-800 leading-tight">
                    {chapterNumber}
                  </p>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wide">
                    {chapterTitle.replace(/^(?:પ્રકરણ|Chapter)\s*\d+:\s*/, '').trim()}
                  </p>
                </div>
              </div>
              <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                 <ArrowRight className="h-5 w-5" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

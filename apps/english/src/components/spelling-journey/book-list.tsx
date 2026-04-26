'use client';

import { useAppState } from '@/context/app-context';
import { booksData } from '@/lib/data';
import type { Book } from '@/lib/words';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, Star, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const wordCounts: Record<string, number> = {
  'book-1': 582,
  'book-2': 428,
  'book-3': 250,
  'book-4': 250,
  'book-5': 250,
  'book-6': 250,
  'book-7': 250,
};

const books: Book[] = Object.keys(booksData).map(bookId => {
  const book = booksData[bookId as keyof typeof booksData];
  return {
    id: bookId,
    title: book.title,
    chapters: Object.values(book.chapters).map(chapter => chapter.meta)
  }
});

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function BookList() {
  const { selectBook, back } = useAppState();

  const getBookTheme = (bookId: string) => {
    // Verb books (Indigo/Violet Professional Theme)
    if (bookId.includes('book-3') || bookId.includes('book-4') || bookId.includes('book-5') || bookId.includes('book-6') || bookId.includes('book-7')) {
      return {
        borderLeft: "border-l-4 border-l-indigo-500",
        bgIcon: "bg-indigo-50 text-indigo-600",
        btn: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-200",
        text: "text-slate-800",
        subText: "text-slate-500"
      };
    }
    // Standard books (Deep Sky Blue/Azure Professional Theme)
    return {
      borderLeft: "border-l-4 border-l-sky-500",
      bgIcon: "bg-sky-50 text-sky-600",
      btn: "bg-sky-600 hover:bg-sky-700 text-white shadow-sky-200",
      text: "text-slate-800",
      subText: "text-slate-500"
    };
  };

  const getTitleParts = (title: string) => {
    const match = title.match(/(.+) \[(.+)\]/);
    if (match) {
      return { main: match[1], sub: match[2].replace(/[\[\]]/g, '') };
    }
    const matchVerbs = title.match(/(.+) - (.+)/);
    if (matchVerbs) {
      return { main: matchVerbs[1], sub: matchVerbs[2] };
    }
    return { main: title, sub: null };
  };

  function renderBookCard(book: Book) {
    const { main, sub } = getTitleParts(book.title);
    const theme = getBookTheme(book.id);

    return (
      <motion.div key={book.id} variants={item}>
        <Card
          onClick={() => selectBook(book)}
          className={cn(
            "premium-card relative overflow-hidden group p-5 flex items-center justify-between cursor-pointer border-none ring-1 ring-black/5",
            theme.borderLeft
          )}
        >
          <div className="flex items-center gap-5">
            <div className={cn("h-14 w-14 rounded-2xl flex items-center justify-center text-xl transition-transform group-hover:scale-105 duration-300 shadow-inner", theme.bgIcon)}>
              <BookOpen className="w-7 h-7" />
            </div>

            <div className="flex flex-col items-start space-y-1.5">
              <h3 className={cn("font-bold text-xl leading-none tracking-tight", theme.text)}>
                {main}
              </h3>
              {sub && (
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <p className={cn("text-sm font-semibold", theme.subText)}>{sub}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-white/50 backdrop-blur-sm px-2.5 py-1 rounded-full border border-slate-200/50 shadow-sm">
                    <span className="text-[11px] font-bold text-slate-600 uppercase tracking-tight">
                      {wordCounts[book.id] || 0} Words
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <Button
            size="sm"
            className={cn(
              "premium-button-indigo rounded-xl h-10 px-6 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 duration-300 transition-all",
              theme.btn.includes('emerald') ? 'premium-button-emerald' : 'premium-button-indigo'
            )}
          >
            Open
          </Button>
        </Card>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8 min-h-[80vh]">
      {/* Header */}
      <div className="relative flex items-center justify-center mb-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute left-0"
        >
          <Button
            size="icon"
            variant="ghost"
            onClick={back}
            className="hover:bg-slate-100 text-slate-600 rounded-xl"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-1.5 rounded-lg shadow-sm">
              <Sparkles className="w-4 h-4" />
            </div>
            <h1 className="font-bold tracking-wider uppercase text-lg text-slate-800">
              Spelling Journey
            </h1>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-10 pb-10"
      >
        {/* Level 1: Basics */}
        <div className="space-y-4">
          <motion.div variants={item} className="flex items-center gap-3 px-1">
            <span className="flex h-2 w-2 rounded-full bg-sky-500" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">Beginner Levels</h2>
            <div className="h-px bg-slate-100 flex-1" />
          </motion.div>
          <div className="grid gap-3">
            {books.filter(b => b.id === 'book-1' || b.id === 'book-2').map((book) => renderBookCard(book))}
          </div>
        </div>

        {/* Level 2: Advanced */}
        <div className="space-y-4">
          <motion.div variants={item} className="flex items-center gap-3 px-1">
            <span className="flex h-2 w-2 rounded-full bg-indigo-500" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">Advanced Levels</h2>
            <div className="h-px bg-slate-100 flex-1" />
          </motion.div>
          <div className="grid gap-3">
            {books.filter(b => b.id !== 'book-1' && b.id !== 'book-2').map((book) => renderBookCard(book))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

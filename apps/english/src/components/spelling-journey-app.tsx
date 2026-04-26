
'use client';

import { useAppState } from '@/context/app-context';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const BookList = dynamic(() => import('@/components/spelling-journey/book-list'), {
  loading: () => <Skeleton className="w-full h-48" />,
});
const ChapterList = dynamic(() => import('@/components/spelling-journey/chapter-list'), {
  loading: () => <Skeleton className="w-full h-48" />,
});
const LevelList = dynamic(() => import('@/components/spelling-journey/level-list'), {
  loading: () => <Skeleton className="w-full h-48" />,
});
const LearningSession = dynamic(() => import('@/components/spelling-journey/learning-session'), {
  loading: () => <Skeleton className="w-full h-[80vh]" />,
});
const WritingPractice = dynamic(() => import('@/components/spelling-journey/writing-practice'), {
  loading: () => <Skeleton className="w-full h-[80vh]" />,
});
const SpellingTest = dynamic(() => import('@/components/spelling-journey/spelling-test'), {
  loading: () => <Skeleton className="w-full h-[80vh]" />,
});
const ScoreReport = dynamic(() => import('@/components/spelling-journey/score-report'), {
  loading: () => <Skeleton className="w-full h-96" />,
});


export default function SpellingJourneyApp() {
  const {
    appState,
    selectedBook,
    selectedChapter,
    selectedLevel,
    testResults,
  } = useAppState();

  const renderContent = () => {
    switch (appState) {
      case 'book-selection':
        return <BookList />;
      case 'chapter-selection':
        if (selectedBook) {
          return <ChapterList book={selectedBook} />;
        }
        return null;
      case 'level-selection':
        if (selectedBook && selectedChapter) {
          return (
            <LevelList book={selectedBook} chapter={selectedChapter} />
          );
        }
        return null;
      case 'learning-session':
        if (selectedBook && selectedChapter && selectedLevel) {
          return (
            <LearningSession
              book={selectedBook}
              chapter={selectedChapter}
              level={selectedLevel}
            />
          );
        }
        return null;
      case 'writing-practice':
        if (selectedBook && selectedChapter && selectedLevel) {
          return (
            <WritingPractice
              book={selectedBook}
              chapter={selectedChapter}
              level={selectedLevel}
            />
          );
        }
        return null;
      case 'spelling-test':
        if (selectedBook && selectedChapter && selectedLevel) {
          return (
            <SpellingTest
              book={selectedBook}
              chapter={selectedChapter}
              level={selectedLevel}
            />
          );
        }
        return null;
      case 'score-report':
        if (testResults) {
          return <ScoreReport results={testResults} />;
        }
        return null;
      default:
        // 'main-menu' is handled in the root page.tsx, so this should not be reached
        return null;
    }
  };

  return <div className="w-full">{renderContent()}</div>;
}

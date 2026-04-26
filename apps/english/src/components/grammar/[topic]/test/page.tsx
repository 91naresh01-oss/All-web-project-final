'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

interface TestSectionProps {
  title: string;
  emoji: string;
  tests: number[];
  topicFolder: string;
  buttonClassName: string;
}

const TestSection: React.FC<TestSectionProps> = ({ title, emoji, tests, topicFolder, buttonClassName }) => {
  if (tests.length === 0) return null;

  return (
    <div className="bg-white rounded-3xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.07)] mb-8">
      <h2 className="text-lg font-semibold mb-5 text-slate-800 flex items-center gap-2">
        <span className="text-xl">{emoji}</span> {title}
      </h2>
      <div className="grid grid-cols-2 gap-x-4 gap-y-4">
        {tests.map((testId) => (
          <Link key={testId} href={`/grammar/${topicFolder}/test/${testId}`} passHref>
             <button className={cn(
                "h-12 w-full text-white font-bold rounded-2xl active:scale-95",
                buttonClassName
             )}>
                Test {testId}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default function TestSelectionPage() {
    const params = useParams();
    const topicFolder = params.topic as string;
    const [availableTests, setAvailableTests] = useState<number[]>([]);
    const [loading, setLoading] = useState(true);

     useEffect(() => {
        const fetchTests = async () => {
            if (!topicFolder) return;
            setLoading(true);

            try {
                const response = await fetch(`/grammar-data/metadata.json`);
                if (!response.ok) {
                    throw new Error('Failed to load metadata');
                }
                const metadata = await response.json();
                const totalTests = metadata[topicFolder] || 0;
                
                const available = Array.from({ length: totalTests }, (_, i) => i + 1);
                setAvailableTests(available);

            } catch (error) {
                console.error("Failed to fetch test metadata:", error);
                setAvailableTests([]); // Set to empty on error
            } finally {
                setLoading(false);
            }
        };
        
        fetchTests();
    }, [topicFolder]);

    const formatTitleFromSlug = (slug: string) => {
        if (!slug) return 'Grammar';
        return slug
            .replace(/-/g, ' ')
            .replace(/\b\w/g, l => l.toUpperCase())
            .replace(/ Gu$/, '');
    };
    
    const formattedTopicTitle = formatTitleFromSlug(topicFolder);
    const totalQuestions = availableTests.length * 10;

    const easyTests = availableTests.filter(t => t >= 1 && t <= 10);
    const mediumTests = availableTests.filter(t => t >= 11 && t <= 20);
    const hardTests = availableTests.filter(t => t >= 21 && t <= 30);
    const veryHardTests = availableTests.filter(t => t > 30);


    return (
        <div className="w-full max-w-md mx-auto p-2">
             <div className="flex items-center w-full relative my-4">
                <Link href="/grammar" passHref className="absolute left-0 top-1/2 -translate-y-1/2">
                    <Button variant="ghost" size="icon" className="bg-white/50 shadow-md rounded-full h-10 w-10 border border-white/50 backdrop-blur-sm">
                        <ArrowLeft className="h-5 w-5 text-slate-700" />
                    </Button>
                </Link>
                <div className="text-center w-full">
                    <h1 className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-700 drop-shadow-sm">
                        {formattedTopicTitle}
                    </h1>
                     {!loading && availableTests.length > 0 && (
                        <p className="text-sm font-semibold text-slate-500 mt-1">
                            {`${totalQuestions} Questions Practice`}
                        </p>
                    )}
                </div>
             </div>


            {loading ? (
                <div className="space-y-8 mt-16">
                    <Skeleton className="h-8 w-48 mx-auto mb-10" />
                    <Skeleton className="h-64 w-full rounded-3xl" />
                    <Skeleton className="h-64 w-full rounded-3xl" />
                </div>
            ) : (
                <div className="space-y-8">
                    {easyTests.length > 0 && (
                        <TestSection 
                            title="Easy (1–10)" 
                            emoji="✨"
                            tests={easyTests} 
                            topicFolder={topicFolder}
                            buttonClassName="bg-green-600 shadow-lg shadow-green-500/30"
                        />
                    )}
                    {mediumTests.length > 0 && (
                        <TestSection 
                            title="Medium (11–20)" 
                            emoji="⚡"
                            tests={mediumTests} 
                            topicFolder={topicFolder}
                            buttonClassName="bg-blue-600 shadow-lg shadow-blue-500/30"
                        />
                    )}
                    {hardTests.length > 0 && (
                        <TestSection 
                            title="Hard (21–30)" 
                            emoji="🔥"
                            tests={hardTests} 
                            topicFolder={topicFolder}
                            buttonClassName="bg-purple-600 shadow-lg shadow-purple-500/30"
                        />
                    )}
                    {veryHardTests.length > 0 && (
                        <TestSection 
                            title="Expert (31+)" 
                            emoji="💎"
                            tests={veryHardTests} 
                            topicFolder={topicFolder}
                            buttonClassName="bg-rose-600 shadow-lg shadow-rose-500/30"
                        />
                    )}
                </div>
            )}
        </div>
    );
}

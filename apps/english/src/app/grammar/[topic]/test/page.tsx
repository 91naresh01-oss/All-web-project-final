

'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Award } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAppState } from '@/context/app-context';
import { loadTopicTests } from '@/lib/data-loader'; // Import the new data loader function
import { ProgressEntry } from '@/lib/words';

interface TestSectionProps {
    title: string;
    emoji: string;
    tests: string[]; // Changed to string array
    topicFolder: string;
    getScore: (testId: string) => ProgressEntry | undefined;
}

interface TestSectionProps {
    title: string;
    emoji: string;
    tests: string[];
    topicFolder: string;
    getScore: (testId: string) => ProgressEntry | undefined;
    langParam: string; // Added lang parameter
}

const TestSection: React.FC<TestSectionProps> = ({ title, emoji, tests, topicFolder, getScore, langParam }) => {
    if (tests.length === 0) return null;

    return (
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.07)] mb-8 border border-white/50">
            <h2 className="text-lg font-semibold mb-5 text-slate-800 flex items-center gap-2">
                <span className="text-xl">{emoji}</span> {title}
            </h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                {tests.map((testId) => {
                    const progressEntry = getScore(testId);
                    const isAttempted = progressEntry !== undefined;
                    const score = isAttempted ? progressEntry.score : 0;
                    const isPassed = isAttempted && score >= 80;

                    let dynamicButtonClass = "bg-white text-blue-700 shadow-lg shadow-black/20";
                    let scoreBadgeClass = "bg-blue-600/10 text-blue-800";

                    if (isAttempted) {
                        dynamicButtonClass = isPassed ? "bg-white text-green-700 shadow-lg shadow-green-500/30" : "bg-white text-red-700 shadow-lg shadow-red-500/30";
                        scoreBadgeClass = isPassed ? "bg-green-600/10 text-green-800" : "bg-red-600/10 text-red-800";
                    }

                    const testNumber = testId.split('-')[1];

                    return (
                        <Link key={testId} href={`/grammar/${topicFolder}/test/${testId}${langParam}`} passHref>
                            <button className={cn(
                                "h-12 w-full font-bold rounded-2xl flex items-center justify-center gap-2 transition-transform active:scale-95",
                                dynamicButtonClass
                            )}>
                                Test {testNumber}
                                {isAttempted && (
                                    <div className={cn("flex items-center gap-1 px-1.5 py-0.5 rounded-full text-xs", scoreBadgeClass)}>
                                        <Award className="h-3 w-3" />
                                        <span>{score}%</span>
                                    </div>
                                )}
                            </button>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default function TestSelectionPage() {
    const params = useParams();
    const searchParams = useSearchParams();
    const { grammarProgress } = useAppState();
    const topicFolder = params.topic as string;
    const lang = searchParams.get('lang');
    const langParam = lang === 'hi' ? '?lang=hi' : '';

    const [availableTests, setAvailableTests] = useState<string[]>([]); // State for string array
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTests = async () => {
            if (!topicFolder) return;
            setLoading(true);

            try {
                // Use the centralized data loader
                const tests = await loadTopicTests(topicFolder);
                setAvailableTests(tests);

            } catch (error) {
                console.error("Failed to fetch test metadata:", error);
                setAvailableTests([]);
            } finally {
                setLoading(false);
            }
        };

        fetchTests();
    }, [topicFolder]);

    if (!topicFolder) {
        return null;
    }

    const isHindi = lang === 'hi' || topicFolder.endsWith('-h');
    const backLink = isHindi ? `/grammar?lang=hi` : `/grammar`;

    const formatTitleFromSlug = (slug: string) => {
        if (!slug) return 'Grammar';
        return slug
            .replace(/-/g, ' ')
            .replace(/\b\w/g, l => l.toUpperCase())
            .replace(/ Gu$/, '')
            .replace(/ H$/, '');
    };

    const formattedTopicTitle = formatTitleFromSlug(topicFolder);
    const totalQuestions = availableTests.length * 10;

    // Adjusted filtering based on test IDs like "test-1", "test-11"
    const getTestNumber = (testId: string) => parseInt(testId.split('-')[1], 10);
    const easyTests = availableTests.filter(t => getTestNumber(t) >= 1 && getTestNumber(t) <= 10);
    const mediumTests = availableTests.filter(t => getTestNumber(t) >= 11 && getTestNumber(t) <= 20);
    const hardTests = availableTests.filter(t => getTestNumber(t) >= 21 && getTestNumber(t) <= 30);
    const veryHardTests = availableTests.filter(t => getTestNumber(t) > 30);

    const getScoreForTest = (testId: string): ProgressEntry | undefined => {
        const progress = grammarProgress?.[`${topicFolder}-${testId}`];
        if (typeof progress === 'number') {
            // Handle legacy data structure if it exists
            return { score: progress, date: new Date().toISOString() };
        }
        return progress;
    }

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="flex items-center justify-center w-full relative my-4">
                <Link href={backLink} passHref className="absolute left-0 top-1/2 -translate-y-1/2">
                    <Button variant="ghost" size="icon" className="bg-white/50 shadow-md rounded-lg h-10 w-10 border border-white/50 backdrop-blur-sm">
                        <ArrowLeft className="h-5 w-5 text-slate-700" />
                    </Button>
                </Link>
                <div className="text-center">
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
            ) : availableTests.length === 0 ? (
                <Card className="w-full shadow-lg mt-8">
                    <CardContent className="p-6 text-center text-muted-foreground">
                        <p>No tests available for this topic yet.</p>
                    </CardContent>
                </Card>
            ) : (
                <div className="space-y-8">
                    {easyTests.length > 0 && (
                        <TestSection
                            title="Easy (1–10)"
                            emoji="✨"
                            tests={easyTests}
                            topicFolder={topicFolder}
                            getScore={getScoreForTest}
                            langParam={langParam}
                        />
                    )}
                    {mediumTests.length > 0 && (
                        <TestSection
                            title="Medium (11–20)"
                            emoji="⚡"
                            tests={mediumTests}
                            topicFolder={topicFolder}
                            getScore={getScoreForTest}
                            langParam={langParam}
                        />
                    )}
                    {hardTests.length > 0 && (
                        <TestSection
                            title="Hard (21–30)"
                            emoji="🔥"
                            tests={hardTests}
                            topicFolder={topicFolder}
                            getScore={getScoreForTest}
                            langParam={langParam}
                        />
                    )}
                    {veryHardTests.length > 0 && (
                        <TestSection
                            title="Expert (31+)"
                            emoji="💎"
                            tests={veryHardTests}
                            topicFolder={topicFolder}
                            getScore={getScoreForTest}
                            langParam={langParam}
                        />
                    )}
                </div>
            )}
        </div>
    );
}

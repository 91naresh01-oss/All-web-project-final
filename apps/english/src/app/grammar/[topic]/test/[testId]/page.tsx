'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import GrammarTestRunner, { type Question } from '@/components/grammar/GrammarTestRunner';
import { notFound, useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { loadTestFile } from '@/lib/data-loader';

export default function GrammarTestPage() {
    const params = useParams();
    const searchParams = useSearchParams();
    const topicFolder = params.topic as string;
    const testId = params.testId as string;
    const lang = searchParams.get('lang');

    const [questions, setQuestions] = useState<Question[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadTestData = async () => {
            if (!topicFolder || !testId) {
                setLoading(false);
                return;
            }
            setLoading(true);
            try {
                // Use the centralized data loader with language parameter
                const data = await loadTestFile(topicFolder, testId, lang || undefined);

                if (!data) {
                    throw new Error('Test data not found');
                }

                setQuestions(data);
            } catch (error) {
                console.error(`Failed to load test data for ${topicFolder}/test-${testId}.json`, error);
                setQuestions(null);
            } finally {
                setLoading(false);
            }
        };

        loadTestData();
    }, [topicFolder, testId, lang]);

    if (loading) {
        return (
            <div className="w-full max-w-2xl mx-auto space-y-4">
                <Skeleton className="h-10 w-3/4 mx-auto mb-4" />
                <Skeleton className="h-96 w-full" />
            </div>
        );
    }

    if (!questions) {
        notFound();
    }

    const formatTitleFromSlug = (slug: string) => {
        if (!slug) return 'Test';
        return slug
            .replace(/-/g, ' ')
            .replace(/\b\w/g, l => l.toUpperCase())
            .replace(/ Gu$/, '')
            .replace(/ H$/, '');
    };

    const formattedTopicTitle = formatTitleFromSlug(topicFolder);

    // Extract just the number for display (e.g. "test-1" -> "1")
    const testNumber = testId.startsWith('test-') ? testId.replace('test-', '') : testId;

    return (
        <div className="w-full max-w-2xl mx-auto space-y-4">
            <div className="flex items-center w-full relative mb-4">
                <Link href={`/grammar/${topicFolder}/test${lang === 'hi' ? '?lang=hi' : ''}`} passHref className="absolute left-0">
                    <Button variant="ghost" size="icon" className="bg-white shadow-md rounded-lg h-10 w-10">
                        <ArrowLeft className="h-5 w-5 text-destructive" />
                    </Button>
                </Link>
                <div className="text-center w-full flex flex-col items-center justify-center">
                    <h1 className="font-extrabold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 drop-shadow-sm">
                        {formattedTopicTitle}
                    </h1>
                    <div className="mt-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/40 border border-white/60 shadow-[0_0_15px_rgba(249,115,22,0.15)] backdrop-blur-md ring-1 ring-orange-500/10">
                        <span className="text-orange-600/90 text-xs font-bold tracking-wide uppercase">Test</span>
                        <span className="bg-gradient-to-br from-orange-500 to-amber-600 text-white text-xs font-bold px-2.5 py-0.5 rounded-full shadow-sm">#{testNumber}</span>
                    </div>
                </div>
            </div>
            <GrammarTestRunner questions={questions} />
        </div>
    );
}

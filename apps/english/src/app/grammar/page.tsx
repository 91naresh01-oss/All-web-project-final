
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { BookCopy, Brain, TestTube2, ArrowLeft, Sparkles, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { useSearchParams } from 'next/navigation';
import { LanguageInitializer } from '@/components/grammar/LanguageInitializer';
import gujaratiTopicsData from '@/grammar-data/topics.json';
import hindiTopicsData from '@/grammar-data/htopics.json';

interface TopicMeta {
    id: string;
    folder: string;
    title: string;
    label: string;
    lang: string;
}

function getTopicNames(label: string) {
    const parts = label.split(' - ');
    if (parts.length > 1) {
        return { englishName: parts[0], localName: parts.slice(1).join(' - ') };
    }
    const match = label.match(/(.*) \((.*)\)/);
    if (match) {
        return { englishName: match[1].trim(), localName: match[2].trim() };
    }
    return { englishName: label, localName: null };
};

function TopicList({ lang }: { lang: 'gu' | 'hi' }) {
    const topics: TopicMeta[] = lang === 'hi' ? hindiTopicsData as TopicMeta[] : gujaratiTopicsData as TopicMeta[];
    const langParam = lang === 'hi' ? '?lang=hi' : '';

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
            {topics.map((topic, index) => {
                const { englishName, localName } = getTopicNames(topic.label);
                const isAllTenses = topic.folder.includes('all-tenses');

                return (
                    <Card
                        key={topic.id}
                        className={cn(
                            "group relative overflow-hidden transition-all duration-300 border-0 rounded-3xl",
                            "hover:shadow-2xl hover:shadow-blue-500/10",
                            isAllTenses
                                ? "bg-gradient-to-br from-purple-50 to-white border border-purple-100"
                                : "bg-white/80 backdrop-blur-md border border-white/50"
                        )}
                    >
                        {/* Decorative Background Blob */}
                        <div className={cn(
                            "absolute -right-10 -top-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl",
                            isAllTenses ? "bg-purple-500" : "bg-blue-500"
                        )} />

                        <CardHeader className="flex flex-row items-center gap-4 p-5 pb-2 relative z-10">
                            <div className={cn(
                                "flex h-12 w-12 items-center justify-center rounded-2xl text-white font-bold text-lg shadow-lg shadow-blue-500/20 flex-shrink-0 transition-transform group-hover:scale-110 duration-300",
                                isAllTenses
                                    ? "bg-gradient-to-br from-purple-600 to-indigo-600"
                                    : "bg-gradient-to-br from-blue-500 to-indigo-600"
                            )}>
                                {index + 1}
                            </div>
                            <div className="flex-grow">
                                <CardTitle className={cn(
                                    'text-lg font-bold tracking-tight mb-1',
                                    isAllTenses ? "text-purple-900" : "text-slate-800"
                                )}>{englishName}</CardTitle>
                                {localName && <p className="text-sm font-medium text-slate-500">{localName}</p>}
                            </div>
                            {isAllTenses && <Sparkles className="text-purple-500 animate-pulse" />}
                        </CardHeader>

                        <CardContent className="p-5 pt-4 relative z-10">
                            {isAllTenses ? (
                                <Link href={`/grammar/${topic.folder}/test${langParam}`} passHref className="w-full block transform active:scale-95 transition-transform duration-100">
                                    <Button className="w-full h-12 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 border-0 font-bold text-md tracking-wide">
                                        <Zap className="mr-2 h-5 w-5 fill-white" />
                                        Practice Mix Questions
                                    </Button>
                                </Link>
                            ) : (
                                <div className="grid grid-cols-2 gap-3">
                                    <Link href={`/grammar/${topic.folder}${langParam}`} passHref className="active-scale block">
                                        <div className="h-11 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold flex items-center justify-center gap-2 border border-blue-200 hover:border-blue-300 transition-all cursor-pointer">
                                            <Brain className="h-4 w-4" />
                                            Rules
                                        </div>
                                    </Link>
                                    <Link href={`/grammar/${topic.folder}/test${langParam}`} passHref className="active-scale block">
                                        <div className="h-11 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all cursor-pointer">
                                            <TestTube2 className="h-4 w-4" />
                                            Test
                                        </div>
                                    </Link>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
}


function GrammarPageComponent() {
    const searchParams = useSearchParams();
    const lang = searchParams.get('lang') === 'hi' ? 'hi' : 'gu';
    const title = 'Grammar Guide';

    return (
        <div className="w-full max-w-3xl mx-auto space-y-6 px-1 sm:px-4">
            <div className="flex items-center justify-between w-full relative py-2">
                <Link href="/" passHref>
                    <Button variant="ghost" size="icon" className="bg-white/80 backdrop-blur-sm shadow-sm rounded-xl h-10 w-10 border border-white/50 hover:bg-white hover:scale-105 transition-all">
                        <ArrowLeft className="h-5 w-5 text-slate-700" />
                    </Button>
                </Link>
                <h1 className="absolute left-1/2 -translate-x-1/2 font-black text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 drop-shadow-sm tracking-tight">
                    {title}
                </h1>
                <div className="w-10"></div> {/* Spacer for centering */}
            </div>

            {/* Lang Toggle Hint could go here later */}

            <TopicList lang={lang} />
        </div>
    );
}


export default function GrammarPage() {
    return (
        <Suspense fallback={
            <div className="w-full max-w-3xl mx-auto space-y-6 px-1 sm:px-4 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <Skeleton key={i} className="h-40 w-full rounded-3xl bg-slate-200/50" />
                    ))}
                </div>
            </div>
        }>
            <LanguageInitializer />
            <GrammarPageComponent />
        </Suspense>
    );
}

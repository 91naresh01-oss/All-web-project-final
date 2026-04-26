import React, { Suspense } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import UnifiedRenderer, { type TopicData } from '@/components/grammar/renderers/UnifiedRenderer';
import { cn } from '@/lib/utils';
import gujaratiTopicsData from '@/grammar-data/topics.json';

// Ensure Vercel knows about these routes at build time to trace file dependencies
export async function generateStaticParams() {
  return gujaratiTopicsData.map((topic) => ({
    topic: topic.folder,
  }));
}

// Dynamic import map for all grammar topics - this ensures files are bundled at build time
async function getTopicData(topicId: string, langParam?: string): Promise<{ data: TopicData | null, error?: string }> {
  if (!topicId) return { data: null, error: "No topic ID provided" };

  const isHindi = langParam === 'hi' || topicId.endsWith('-h');
  const folderName = topicId.replace(/-gu$/, '').replace(/-h$/, '');

  try {
    // Use dynamic import instead of fs.readFile - this works on Vercel
    let data;
    if (isHindi) {
      data = await import(`@/grammar-data/${folderName}/rules/hi-rules.json`);
    } else {
      data = await import(`@/grammar-data/${folderName}/rules/g-rules.json`);
    }
    return { data: data.default || data };
  } catch (e) {
    console.error(`Failed to load topic: ${topicId}`, e);
    return { data: null, error: `Could not load: ${folderName}` };
  }
}

export default async function GrammarTopicPage({ params, searchParams }: { params: { topic: string }, searchParams: { lang?: string } }) {
  const topicId = params.topic;
  const lang = searchParams?.lang;
  const { data: topicData, error } = await getTopicData(topicId, lang);

  if (!topicData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 text-center text-slate-800">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Topic Not Found</h2>
        <p className="mb-4">Could not load data for topic: <strong>{topicId}</strong></p>
        {error && (
          <p className="text-sm text-slate-500 mb-4">{error}</p>
        )}
        <Link href="/grammar">
          <Button variant="outline" className="mt-6">Back to Grammar</Button>
        </Link>
      </div>
    );
  }

  const isHindi = lang === 'hi' || topicId.endsWith('-h');
  const backLink = isHindi ? '/grammar?lang=hi' : '/grammar';

  const getTitleParts = (title: string | undefined, fallbackId: string) => {
    if (!title) {
      const formattedId = fallbackId.replace(/-/g, ' ').replace(/ gu$/, '').replace(/ h$/, '');
      return { englishTitle: formattedId, localTitle: '' };
    }
    const match = title.match(/(.*) \((.*)\)/);
    if (match) {
      return { englishTitle: match[1].trim(), localTitle: match[2].trim() };
    }
    return { englishTitle: title, localTitle: '' };
  };

  const { englishTitle, localTitle } = getTitleParts(topicData.title, topicId);

  return (
    <div className="w-full min-h-screen pb-24 px-1 md:px-4 bg-transparent">
      <div className="max-w-4xl mx-auto pt-6">
        {/* Header Section */}
        <div className="flex flex-col items-center w-full relative mb-8">
          <Link href={backLink} passHref className="absolute left-0 top-1">
            <Button variant="ghost" size="icon" className="bg-white/80 backdrop-blur-sm shadow-sm rounded-xl h-10 w-10 border border-white/50 hover:bg-white hover:scale-105 transition-all active:scale-95">
              <ArrowLeft className="h-5 w-5 text-slate-700" />
            </Button>
          </Link>

          <div className="text-center w-full px-12">
            <h1 className="font-extrabold text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 drop-shadow-sm tracking-tight mb-2">
              {englishTitle}
            </h1>
            {localTitle && (
              <div className="inline-block px-4 py-1 rounded-full bg-white/60 border border-white/40 shadow-sm backdrop-blur-md">
                <p className="text-base md:text-lg font-medium text-slate-600 font-sans">{localTitle}</p>
              </div>
            )}
          </div>
        </div>

        {/* Content Section */}
        <Suspense fallback={
          <div className="space-y-6">
            <Skeleton className="h-24 w-full rounded-2xl bg-white/50" />
            <Skeleton className="h-48 w-full rounded-2xl bg-white/50" />
            <Skeleton className="h-32 w-full rounded-2xl bg-white/50" />
          </div>
        }>
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <UnifiedRenderer topicData={topicData} topicId={topicId} />
          </div>
        </Suspense>
      </div>
    </div>
  );
}

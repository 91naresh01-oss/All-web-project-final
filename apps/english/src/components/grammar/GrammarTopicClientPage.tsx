'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppState } from '@/context/app-context';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import { trackEvent } from '@/lib/analytics';

export interface TopicData {
  id: string;
  title: string;
  label: string;
  lang: string;
  description: string;
  content: any[]; // Can be refined further if needed
  tenses?: any[];
  summary_table?: any;
}

interface GrammarTopicClientPageProps {
  topicId: string;
  topicData: TopicData;
}

const renderers: { [key: string]: React.LazyExoticComponent<React.ComponentType<any>> } = {
  'articles-gu': React.lazy(() => import('@/components/grammar/renderers/UnifiedRenderer')),
  'singular-plural-gu': React.lazy(() => import('@/components/grammar/renderers/UnifiedRenderer')),
  'present-tense-gu': React.lazy(() => import('@/components/grammar/renderers/UnifiedRenderer')),
  'past-tense-gu': React.lazy(() => import('@/components/grammar/renderers/UnifiedRenderer')),
  'question-tags-gu': React.lazy(() => import('@/components/grammar/renderers/UnifiedRenderer')),
  'degree-of-comparison-gu': React.lazy(() => import('@/components/grammar/renderers/UnifiedRenderer')),
  'active-passive-voice-gu': React.lazy(() => import('@/components/grammar/renderers/UnifiedRenderer')),
  'direct-indirect-speech-gu': React.lazy(() => import('@/components/grammar/renderers/UnifiedRenderer')),
  'tenses-gu': React.lazy(() => import('@/components/grammar/renderers/UnifiedRenderer')),
  'default-renderer': React.lazy(() => import('@/components/grammar/renderers/UnifiedRenderer')),
};


export default function GrammarTopicClientPage({ topicId, topicData }: GrammarTopicClientPageProps) {
  const { fontSize } = useAppState();
  const [Renderer, setRenderer] = useState<React.LazyExoticComponent<React.ComponentType<any>> | null>(null);

  useEffect(() => {
    const rendererKey = topicId.toLowerCase();
    if (renderers[rendererKey]) {
      setRenderer(renderers[rendererKey]);
    } else {
      setRenderer(renderers['default-renderer']);
    }

    // Track grammar topic view
    if (topicData) {
      trackEvent('grammar_topic_view', {
        topic_id: topicId,
        topic_title: topicData.title,
        language: topicData.lang
      });
    }
  }, [topicId, topicData]);

  if (!topicData) {
    return <div>Error: Topic data is missing.</div>;
  }

  const { title } = topicData;

  return (
    <div className={cn(
      "w-full max-w-2xl mx-auto space-y-4",
      fontSize,
      "[&_p]:!text-inherit [&_li]:!text-inherit [&_span]:!text-inherit [&_div]:!text-inherit [&_td]:!text-inherit [&_th]:!text-inherit leading-relaxed"
    )}>
      <div className="flex items-center w-full relative mb-4">
        <Link href="/grammar" passHref className="absolute left-0">
          <Button variant="ghost" size="icon" className="bg-white shadow-md rounded-full h-8 w-8">
            <ArrowLeft className="h-4 w-4 text-primary" />
          </Button>
        </Link>
        <div className="text-center w-full">
          <h1 className="font-bold text-xl text-3d-blue-white-shadow">
            {title}
          </h1>
        </div>
      </div>

      <Suspense fallback={<Skeleton className="h-96 w-full" />}>
        {Renderer ? <Renderer topicData={topicData} /> : <p>Loading content...</p>}
      </Suspense>
    </div>
  );
}


'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Languages, ArrowLeft, Loader2, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import Translator from '@/components/translator';
import TranslationResult from '@/components/translation-result';
import { Skeleton } from '@/components/ui/skeleton';

// Local type (previously from @/ai/flows)
interface SuggestImprovedTranslationsOutput {
  translatedText: string;
  detectedSourceLanguageCode?: string;
}

const LanguageSelector = dynamic(() => import('@/components/language-selector'), {
  ssr: false,
  loading: () => <Skeleton className="h-10 w-full" />,
});

export default function TranslatePage() {
  const [inputText, setInputText] = useState('');
  const [translationDetails, setTranslationDetails] = useState<SuggestImprovedTranslationsOutput | null>(null);
  const [isTranslating, setIsTranslating] = useState(false);
  const { toast } = useToast();

  const handleTranslate = async (text: string, source: string, target: string) => {
    if (!text.trim()) {
      setTranslationDetails(null);
      return;
    }

    setIsTranslating(true);
    setTranslationDetails(null);

    try {
      const langPair = source === 'auto' ? `en|${target}` : `${source}|${target}`;
      const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${langPair}`;
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Translation API returned status ${res.status}`);
      }
      const data = await res.json();
      const translated = data?.responseData?.translatedText;
      const detectedLanguage = data?.responseData?.detectedLanguage;

      if (translated) {
        setTranslationDetails({
          translatedText: translated,
          detectedSourceLanguageCode: detectedLanguage || undefined
        });
      } else {
        console.error("🔥 MyMemory API - Translation not found. Response:", data);
        throw new Error(data?.responseDetails || "Translation not found in the API response.");
      }
    } catch (error) {
      console.error(error);
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
      toast({ variant: 'destructive', title: 'Translation Failed', description: errorMessage });
      setTranslationDetails(null);
    } finally {
      setIsTranslating(false);
    }
  };

  const handleClear = () => {
    setInputText('');
    setTranslationDetails(null);
  };

  return (
    <div className="w-full max-w-sm">
      <div className="flex items-center justify-between w-full mb-4">
        <Link href="/" passHref>
          <Button variant="ghost" size="icon" className="bg-white shadow-md rounded-lg h-8 w-8">
            <ArrowLeft className="h-4 w-4 text-destructive" />
          </Button>
        </Link>
        <Button onClick={handleClear} variant="ghost" size="sm" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
          <RefreshCw className="h-4 w-4" />
          Clear
        </Button>
      </div>
      <div className="mb-4 flex items-center gap-2 text-center justify-center">
        <Languages className="h-8 w-8 text-primary" />
        <h1 className="font-headline font-bold tracking-tight text-foreground">
          Online Translator
        </h1>
      </div>
      <Translator
        onTranslate={handleTranslate}
        inputText={inputText}
        onInputChange={setInputText}
      />

      {isTranslating && (
        <div className="mt-8 flex flex-col items-center justify-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground">Translating...</p>
        </div>
      )}

      {!isTranslating && translationDetails && (
        <TranslationResult
          inputText={inputText}
          translationDetails={translationDetails}
        />
      )}
    </div>
  );
}

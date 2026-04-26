'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from './ui/skeleton';
import { trackEvent } from '@/lib/analytics';

const LanguageSelector = dynamic(() => import('./language-selector'), {
  ssr: false,
  loading: () => <Skeleton className="h-10 w-full" />,
});

interface TranslatorProps {
  onTranslate: (text: string, source: string, target: string) => Promise<void>;
  inputText: string;
  onInputChange: (value: string) => void;
}

const TranslatorComponent = ({ onTranslate, inputText, onInputChange }: TranslatorProps) => {
  const [sourceLanguage, setSourceLanguage] = useState<string>('auto');
  const [targetLanguage, setTargetLanguage] = useState<string>('gu');
  const [isTranslating, setIsTranslating] = useState(false);

  const handleTranslate = async () => {
    if (!inputText.trim() || isTranslating) {
      return;
    }

    // Custom Event ટ્રેક કરવા માટે
    trackEvent('user_translation', {
      word: inputText,
      target_lang: targetLanguage
    });

    setIsTranslating(true);
    await onTranslate(inputText, sourceLanguage, targetLanguage);
    setIsTranslating(false);
  };

  return (
    <Card className="w-full max-w-sm">
      <CardContent className="p-4 space-y-4">
        <div className="flex w-full items-center space-x-2">
          <Input
            type="text"
            placeholder="Enter a word or sentence..."
            value={inputText}
            onChange={(e) => onInputChange(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleTranslate()}
            disabled={isTranslating}
            className="text-lg h-12"
          />
          <Button onClick={handleTranslate} disabled={isTranslating || !inputText.trim()} className="h-12 px-6">
            {isTranslating ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Go'}
          </Button>
        </div>
        <LanguageSelector
          sourceLanguage={sourceLanguage}
          setSourceLanguage={setSourceLanguage}
          targetLanguage={targetLanguage}
          setTargetLanguage={setTargetLanguage}
          isTranslating={isTranslating}
        />
      </CardContent>
    </Card>
  );
};

const Translator = React.memo(TranslatorComponent);
export default Translator;

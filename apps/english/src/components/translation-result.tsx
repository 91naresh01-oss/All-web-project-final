
'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
// Local type (previously from @/ai/flows)
interface SuggestImprovedTranslationsOutput {
  translatedText: string;
  detectedSourceLanguageCode?: string;
}

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface TranslationResultProps {
  inputText: string;
  translationDetails: SuggestImprovedTranslationsOutput;
}

const TranslationResultComponent = ({ inputText, translationDetails }: TranslationResultProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const handleCopyToClipboard = async (textToCopy: string) => {
    if (!textToCopy || isCopied) return;
    try {
      await navigator.clipboard.writeText(textToCopy);
      toast({ title: 'Copied to clipboard!' });
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy text: ', error);
      toast({
        variant: 'destructive',
        title: 'Copy Failed',
        description: 'Could not copy text to clipboard. Please try again or copy manually.',
      });
    }
  };

  const renderContent = () => {
    const finalTranslation = translationDetails?.translatedText;

    if (!finalTranslation) {
      return null;
    }

    return (
      <Card className="mt-4 shadow-lg w-full">
        <CardContent className="p-4 space-y-3">
          <div className="space-y-2">
            <p className="font-semibold text-foreground break-words">{inputText}</p>
            <div className="h-px bg-border" />
            <p className="font-bold text-primary break-words">{finalTranslation}</p>
          </div>
          <div className="flex justify-end">
            <Button variant="ghost" size="icon" onClick={() => handleCopyToClipboard(finalTranslation!)} className="h-8 w-8 text-muted-foreground">
              {isCopied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="w-full max-w-sm flex flex-col items-center">
      {renderContent()}
    </div>
  );
};

const TranslationResult = React.memo(TranslationResultComponent);
export default TranslationResult;

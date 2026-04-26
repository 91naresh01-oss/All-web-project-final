'use client';

import { ArrowRightLeft } from 'lucide-react';
import { languages } from '@/lib/languages';

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface LanguageSelectorProps {
    sourceLanguage: string;
    setSourceLanguage: (lang: string) => void;
    targetLanguage: string;
    setTargetLanguage: (lang: string) => void;
    isTranslating: boolean;
}

const LanguageSelector = ({ 
    sourceLanguage, 
    setSourceLanguage, 
    targetLanguage, 
    setTargetLanguage, 
    isTranslating 
}: LanguageSelectorProps) => {

  const handleSwapLanguages = () => {
    if (sourceLanguage === 'auto') return;
    const temp = sourceLanguage;
    setSourceLanguage(targetLanguage);
    setTargetLanguage(temp);
  };

  return (
    <div className="grid grid-cols-2 items-center gap-2 relative">
      <Select value={sourceLanguage} onValueChange={setSourceLanguage}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Source Language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="auto">Auto-detect</SelectItem>
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              {lang.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="absolute left-1/2 -translate-x-1/2 z-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleSwapLanguages}
          disabled={sourceLanguage === 'auto' || isTranslating}
          className="rounded-full bg-background border h-8 w-8"
        >
          <ArrowRightLeft className="h-4 w-4 text-muted-foreground" />
        </Button>
      </div>
      <Select value={targetLanguage} onValueChange={setTargetLanguage}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Target Language" />
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              {lang.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;

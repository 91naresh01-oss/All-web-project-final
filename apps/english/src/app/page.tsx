
'use client';

import { useAppState } from '@/context/app-context';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { languages } from '@/lib/languages';
import { BookOpen, BrainCircuit, Languages as LanguagesIcon, SpellCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import React, { Suspense, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LanguageInitializer } from '@/components/grammar/LanguageInitializer';
import { Skeleton } from '@/components/ui/skeleton';
import dynamic from 'next/dynamic';
import { withBasePath } from '@/lib/base-path';

const SpellingJourneyApp = dynamic(() => import('@/components/spelling-journey-app'), {
  loading: () => <Skeleton className="w-full h-screen" />,
});


function SpellingLanguageSelector() {
  const { setLanguage, startSpellingJourney } = useAppState();
  const [selectedLanguage, setSelectedLanguage] = useState('gu');

  const handleStart = () => {
    if (selectedLanguage === 'gu' || selectedLanguage === 'hi') {
      setLanguage(selectedLanguage);
    }
    startSpellingJourney();
  };

  return (
    <div className="w-full space-y-4">
      <div className="space-y-2 text-center">
        <Label htmlFor="language-select-spelling" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          Choose Your Language
        </Label>
        <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
          <SelectTrigger id="language-select-spelling" className="w-full h-11 text-sm bg-slate-50/50 border-slate-200 text-slate-700 focus:ring-2 focus:ring-indigo-500/20 hover:bg-white transition-all rounded-xl">
            <SelectValue placeholder="Select a language" />
          </SelectTrigger>
          <SelectContent className="bg-white/90 backdrop-blur-xl border-slate-200 rounded-xl">
            {languages.map(lang => (
              <SelectItem key={lang.code} value={lang.code}>{lang.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button onClick={handleStart} size="default" className="premium-button-indigo w-full h-12 text-base active-scale">
        <BrainCircuit className="mr-2 h-5 w-5" />
        શરૂ કરો
      </Button>
    </div>
  );
}


function GrammarLanguageSelector() {
  const { setLanguage } = useAppState();
  const [selectedLanguage, setSelectedLanguage] = useState('gu');
  const router = useRouter();

  const handleStart = () => {
    if (selectedLanguage === 'gu' || selectedLanguage === 'hi') {
      setLanguage(selectedLanguage);
    }
    router.push(`/grammar?lang=${selectedLanguage}`);
  };

  return (
    <div className="w-full space-y-4">
      <div className="space-y-2 text-center">
        <Label htmlFor="language-select-grammar" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          Choose Your Language
        </Label>
        <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
          <SelectTrigger id="language-select-grammar" className="w-full h-11 text-sm bg-slate-50/50 border-slate-200 text-slate-700 focus:ring-2 focus:ring-emerald-500/20 hover:bg-white transition-all rounded-xl">
            <SelectValue placeholder="Select a language" />
          </SelectTrigger>
          <SelectContent className="bg-white/90 backdrop-blur-xl border-slate-200 rounded-xl">
            {languages.map(lang => (
              <SelectItem key={lang.code} value={lang.code}>{lang.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button onClick={handleStart} size="default" className="premium-button-emerald w-full h-12 text-base active-scale">
        <BookOpen className="mr-2 h-5 w-5" />
        Start Learning
      </Button>
    </div>
  );
}

function HomePageComponent() {
  const { appState } = useAppState();

  if (appState !== 'main-menu') {
    return <SpellingJourneyApp />;
  }

  return (
    <div className="relative flex flex-col items-center justify-start pt-1 overflow-visible">
      <div className="z-10 w-full flex flex-col items-center p-2">

        {/* Header Section */}
        <div className="text-center space-y-4 mb-12">
          <div className="flex flex-col items-center justify-center gap-4">
            <Image src={withBasePath('/app-logo.png')} alt="Gyan Academy" width={80} height={80} className="h-20 w-20 md:h-24 md:w-24 object-contain animate-float" />
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-800">
              Gyan <span className="text-blue-600">Academy</span>
            </h1>
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            જ્ઞાનના પાયાને મજબૂત બનાવતું અને સફળતાના શિખરે પહોંચાડતું એક વિશ્વસનીય માધ્યમ.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Spelling Journey Card */}
          <Card className="premium-card w-full flex flex-col p-6">
            <CardHeader className="items-center text-center p-0 mb-6">
              <div className="p-4 bg-indigo-50 rounded-2xl mb-4">
                <SpellCheck className="h-8 w-8 text-indigo-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-gradient-blue">
                Spelling Journey
              </CardTitle>
              <CardDescription className="text-muted-foreground font-medium pt-2 px-2 text-sm flex flex-col items-center gap-3">
                <div className="flex items-center gap-2 flex-wrap justify-center">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full border border-indigo-100 text-xs font-bold">
                    7 Books
                  </span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-100 text-xs font-bold">
                    86 Chapters
                  </span>
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full border border-purple-100 text-xs font-bold">
                    2,250 Words
                  </span>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 flex-grow flex flex-col justify-end">
              <Suspense fallback={<Skeleton className="h-24 w-full" />}>
                <SpellingLanguageSelector />
              </Suspense>
            </CardContent>
          </Card>

          {/* Grammar Guide Card */}
          <Card className="premium-card w-full flex flex-col p-6">
            <CardHeader className="items-center text-center p-0 mb-6">
              <div className="p-4 bg-emerald-50 rounded-2xl mb-4">
                <BookOpen className="h-8 w-8 text-emerald-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-gradient-emerald">
                Grammar Guide
              </CardTitle>
              <CardDescription className="text-muted-foreground font-medium pt-2 px-2 text-sm flex flex-col items-center gap-3">
                <span className="leading-relaxed">વ્યાકરણના નિયમો અને પ્રેક્ટિસ ટેસ્ટ.</span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100 text-xs font-bold">
                    28 Topics
                  </span>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 flex-grow flex flex-col justify-end">
              <Suspense fallback={<Skeleton className="h-24 w-full" />}>
                <GrammarLanguageSelector />
              </Suspense>
            </CardContent>
          </Card>

          {/* Online Translator Card */}
          <Card className="premium-card w-full flex flex-col p-6">
            <CardHeader className="items-center text-center p-0 mb-6">
              <div className="p-4 bg-pink-50 rounded-2xl mb-4">
                <LanguagesIcon className="h-8 w-8 text-pink-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-gradient-pink">
                Online Translator
              </CardTitle>
              <CardDescription className="text-muted-foreground font-medium pt-2 px-2 text-sm">
                શબ્દો અને વાક્યોનો સરળ અનુવાદ.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 flex-grow flex flex-col justify-end">
              <Link href="/translate" passHref className="w-full">
                <Button size="default" className="premium-button-pink w-full h-12 text-base active-scale">
                  <LanguagesIcon className="mr-2 h-5 w-5" />
                  અનુવાદ કરો
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<Skeleton className="h-screen w-full" />}>
      <LanguageInitializer />
      <HomePageComponent />
    </Suspense>
  );
}

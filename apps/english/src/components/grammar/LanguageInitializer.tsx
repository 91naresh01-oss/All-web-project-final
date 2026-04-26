
'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useAppState } from '@/context/app-context';
import type { Language } from '@/lib/words';

export function LanguageInitializer() {
  const searchParams = useSearchParams();
  const { setLanguage } = useAppState();

  useEffect(() => {
    const lang = searchParams.get('lang');
    if (lang && (lang === 'gu' || lang === 'hi')) {
      setLanguage(lang as Language);
    }
  }, [searchParams, setLanguage]);

  return null; // This component does not render anything
}

'use client';

import { useState, useEffect, useRef } from 'react';
import { useAppState } from '@/context/app-context';
import type { Book, Chapter, Level, Word, DetailedWord, SimpleWord } from '@/lib/words';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '../ui/progress';
import {
  ArrowLeft,
  ArrowRight,
  Lightbulb,
  X,
  Check,
  BookText,
  Star,
  CircleOff,
  BrainCircuit,
  MessageSquareText,
  GraduationCap,
  RefreshCw,
} from 'lucide-react';
import { languages } from '@/lib/languages';
import useIsMobile from '@/hooks/use-is-mobile';
import VirtualKeyboard from './virtual-keyboard';
import { trackEvent } from '@/lib/analytics';
import { playCorrectSound, playWrongSound } from '@/lib/sounds';

interface LearningSessionProps {
  book: Book;
  chapter: Chapter;
  level: Level;
}

export default function LearningSession({
  book,
  chapter,
  level,
}: LearningSessionProps) {
  const { back, language, startTest, selectedBook } = useAppState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [words, setWords] = useState<Word[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const learningWords = [...level.words];
    setWords(learningWords);

    // Track learning session start
    trackEvent('spelling_learning_start', {
      book_id: book.id,
      chapter_id: chapter.id,
      level_id: level.id,
      words_count: learningWords.length
    });
  }, [level.words, book.id, chapter.id, level.id]);

  const handleNext = () => {
    setInputValue('');
    setIsChecked(false);
    setIsCorrect(false);
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    setInputValue('');
    setIsChecked(false);
    setIsCorrect(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleCheck = () => {
    if (!inputValue.trim()) return;
    const correct =
      inputValue.trim().toLowerCase() === words[currentIndex].word.toLowerCase();
    setIsCorrect(correct);
    setIsChecked(true);
    correct ? playCorrectSound() : playWrongSound();
  };

  const handleRetry = () => {
    setInputValue('');
    setIsChecked(false);
    setIsCorrect(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (isChecked) {
        if (currentIndex < words.length - 1) {
          handleNext();
        }
      } else {
        handleCheck();
      }
    }
  };

  const onVirtualKeyPress = (key: string) => {
    if (isChecked) return;
    setInputValue((prev) => prev + key);
  };

  const onVirtualEnter = () => {
    if (isChecked) {
      if (currentIndex < words.length - 1) {
        handleNext();
      }
    } else {
      handleCheck();
    }
  };

  const onVirtualBackspace = () => {
    if (isChecked) return;
    setInputValue((prev) => prev.slice(0, -1));
  };


  const getLanguageData = (item: any, type: 'Meaning' | 'Pronunciation' | 'Translation'): string => {
    if (!item) return '';
    const langDetails = languages.find(l => l.code === language);
    const langName = langDetails ? langDetails.name : 'English';
    const langKey = langName.charAt(0).toLowerCase() + langName.slice(1);

    if (language === 'en') {
      if (type === 'Meaning' && item.meaning) return item.meaning;
      if (type === 'Pronunciation' && 'englishPronunciation' in item) return item.englishPronunciation;
      if (type === 'Pronunciation' && item.pronunciation) return item.pronunciation;
      if (type === 'Translation' && item.sentence) return item.sentence;
      if (type === 'Translation' && 'translation' in item) return item.translation;
    }

    const key = `${langKey}${type}` as keyof typeof item;
    return item[key] || item[`gujarati${type}`] || (type === 'Meaning' && item.meaning) || (type === 'Pronunciation' && item.pronunciation) || '';
  }

  const getMeaning = (word: Word | SimpleWord | DetailedWord | { meaning: any }): string => {
    if (!word) return '';

    // Check for specific language meaning (e.g., gujaratiMeaning)
    const langDetails = languages.find(l => l.code === language);
    const langName = langDetails ? langDetails.name : 'English';
    const langKey = langName.charAt(0).toLowerCase() + langName.slice(1);
    const specificLangKey = `${langKey}Meaning` as keyof typeof word;
    if (typeof (word as any)[specificLangKey] === 'string') {
      return (word as any)[specificLangKey];
    }

    // Fallback to gujaratiMeaning if specific language meaning is not found
    if (typeof (word as any).gujaratiMeaning === 'string') {
      return (word as any).gujaratiMeaning;
    }

    // Handle the case where 'meaning' is a string
    if (typeof (word as any).meaning === 'string') {
      return (word as any).meaning;
    }

    // Handle the case where 'meaning' is an object
    if (typeof (word as any).meaning === 'object' && (word as any).meaning !== null) {
      const meaningObj = (word as any).meaning;
      // Try to get the meaning for the current language, fallback to 'gu', then 'en', then empty string
      return meaningObj[language] || meaningObj.gu || meaningObj.en || '';
    }

    // Fallback to the general data getter if other methods fail
    return getLanguageData(word, 'Meaning');
  }

  const cleanPronunciation = (text?: any): string => {
    if (!text) return '';
    const stringText = String(text);
    return stringText.replace(/\[|\]|\(|\)/g, '');
  };

  const getPronunciation = (word: any) => {
    const langDetails = languages.find(l => l.code === language);
    const langName = langDetails ? langDetails.name : 'English'; // Default to English
    const pronunciationKey = `${langName.toLowerCase()}Pronunciation` as keyof typeof word;

    const selectedLangPron = word[pronunciationKey];

    // Fallback logic
    if (selectedLangPron) {
      return selectedLangPron;
    }
    if (word.englishPronunciation) {
      return word.englishPronunciation;
    }
    if (word.pronunciation) {
      return word.pronunciation;
    }
    return '';
  }

  const getExample = (word: DetailedWord) => {
    const defaultResponse = { sentence: 'No example sentence available.', translation: '', pronunciation: '', };
    if (!word.exampleSentences || word.exampleSentences.length === 0) return defaultResponse;
    const exampleData = word.exampleSentences[0];
    if (!exampleData) return defaultResponse;
    const translation = getLanguageData(exampleData, 'Translation');
    const pronunciation = getPronunciation(exampleData);
    return { sentence: exampleData.sentence, translation: translation, pronunciation: pronunciation, };
  };

  const getTypingPrompt = () => {
    const pronunciation = cleanPronunciation(getPronunciation(currentWord));
    switch (language) {
      case 'gu': return `"${pronunciation}" ઉચ્ચાર માટે સ્પેલિંગ લખો`;
      case 'hi': return `"${pronunciation}" उच्चारण के लिए स्पेलिंग लिखें`;
      default: return `Type the spelling for "${pronunciation}"`;
    }
  }

  if (words.length === 0) return null;

  const currentWord: Word = words[currentIndex];
  const progress = ((currentIndex + 1) / words.length) * 100;
  const isLastWord = currentIndex >= words.length - 1;
  const isFirstWord = currentIndex === 0;

  const example = ('exampleSentences' in currentWord && (currentWord as DetailedWord).exampleSentences && (currentWord as DetailedWord).exampleSentences!.length > 0)
    ? getExample(currentWord as DetailedWord)
    : null;

  const detailedWord = currentWord as DetailedWord;
  const verbForms = detailedWord.verbForms ? Object.entries(detailedWord.verbForms) : [];
  const synonyms = detailedWord.synonyms;
  const antonyms = detailedWord.antonyms;
  const confusingWords = detailedWord.confusingWords;

  const DetailSection = ({ icon, title, titleColor, children }: { icon: React.ReactNode; title: string; titleColor: string, children: React.ReactNode }) => {
    if (!children) return null;
    return (
      <div className="space-y-1">
        <div className={`flex items-center gap-2 font-semibold ${titleColor}`}>
          {icon} {title}
        </div>
        {children}
      </div>
    )
  }

  const VerbFormList = ({ items }: { items: [string, any][] }) => (
    <div className="w-full p-2 rounded-lg space-y-2">
      {items.map(([formName, form]: [string, any], i: number) => {
        const shortFormName = formName.match(/\((V\d)\)/)?.[1] || formName.split(' ')[0];
        return (
          <div key={i} className="grid grid-cols-[auto_1fr] gap-x-4 items-center">
            <span className="font-bold text-muted-foreground">{shortFormName}</span>
            <div>
              <span className="font-semibold">{form.word}</span>
              {getPronunciation(form) ? ` (${cleanPronunciation(getPronunciation(form))})` : ''}
              {getMeaning(form) ? ` - ${getMeaning(form)}` : ''}
            </div>
          </div>
        )
      })}
    </div>
  );

  const WordList = ({ items }: { items?: any[] }) => (
    <div className="w-full p-2 rounded-lg space-y-2">
      {items?.map((item, i) => (
        <div key={i}>
          <span className="font-semibold">{item.word}</span>
          {getPronunciation(item) ? ` (${cleanPronunciation(getPronunciation(item))})` : ''} - {getMeaning(item)}
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="w-full shadow-none border-0 bg-transparent">
        <CardHeader className="p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-50 rounded-lg">
                <Lightbulb className="h-5 w-5 text-yellow-500" />
              </div>
              <CardTitle className="font-bold text-xl text-slate-800">Word Learning</CardTitle>
            </div>
            <Button size="icon" variant="ghost" onClick={back} className="h-10 w-10 rounded-xl bg-white shadow-sm hover:bg-red-50 group">
              <X className="h-5 w-5 text-slate-400 group-hover:text-red-500 transition-colors" />
            </Button>
          </div>
          <div className="flex items-center justify-between mb-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
             <span>{`Book ${book.id.split('-')[1]}`}</span>
             <span>{`CH ${chapter.id.split('-')[1]}`}</span>
             <span>{`LVL ${level.id.split('-')[1]}`}</span>
          </div>
          <Progress value={progress} className="h-2.5 bg-slate-200" />
        </CardHeader>

        <CardContent className="p-4 pt-0 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Word */}
            <Card className="premium-card relative border-none ring-1 ring-black/5 overflow-visible">
              <div className="absolute -top-3 -left-3 bg-indigo-600 text-white rounded-xl h-8 w-8 flex items-center justify-center text-sm font-bold shadow-lg ring-4 ring-white">
                {currentIndex + 1}
              </div>
              <CardContent className="p-6 text-center flex items-center justify-center min-h-[100px]">
                <div className="flex flex-col items-center gap-2">
                  <h3 className="font-bold text-3xl tracking-tight text-slate-800 capitalize">{currentWord.word}</h3>
                  <div className="px-4 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-semibold border border-indigo-100">
                    {cleanPronunciation(getPronunciation(currentWord))}
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Meaning */}
            <Card className="premium-card border-none ring-1 ring-black/5">
              <CardContent className="p-6 text-center flex flex-col items-center justify-center min-h-[100px]">
                 <div className="flex flex-col items-center gap-2">
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Meaning</p>
                   <p className="text-2xl font-bold text-emerald-600">
                    {getMeaning(currentWord)}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {detailedWord.partOfSpeech && (
              <Card className='shadow-md h-full'>
                <CardContent className='p-2'>
                  <DetailSection icon={<BookText className="h-4 w-4" />} title="Part of Speech" titleColor="text-orange-600">
                    <div className="w-full p-2 rounded-lg font-semibold">{detailedWord.partOfSpeech}</div>
                  </DetailSection>
                </CardContent>
              </Card>
            )}
            {confusingWords && confusingWords.length > 0 && (
              <Card className='shadow-md h-full'>
                <CardContent className='p-2'>
                  <DetailSection icon={<BrainCircuit className="h-4 w-4" />} title="Confusing Words" titleColor="text-indigo-600">
                    <WordList items={confusingWords} />
                  </DetailSection>
                </CardContent>
              </Card>
            )}
          </div>

          {verbForms && verbForms.length > 0 && (
            <Card className='shadow-md h-full'>
              <CardContent className='p-2'>
                <DetailSection icon={<GraduationCap className="h-4 w-4" />} title="Verb Forms" titleColor="text-purple-600">
                  <VerbFormList items={verbForms} />
                </DetailSection>
              </CardContent>
            </Card>
          )}

          <div className="max-w-2xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {synonyms && synonyms.length > 0 && (
                <Card className='shadow-md h-full'>
                  <CardContent className='p-2'>
                    <DetailSection icon={<Star className="h-4 w-4" />} title="Synonyms" titleColor="text-yellow-600">
                      <WordList items={synonyms} />
                    </DetailSection>
                  </CardContent>
                </Card>
              )}
              {antonyms && antonyms.length > 0 && (
                <Card className='shadow-md h-full'>
                  <CardContent className='p-2'>
                    <DetailSection icon={<CircleOff className="h-4 w-4" />} title="Antonyms" titleColor="text-red-600">
                      <WordList items={antonyms} />
                    </DetailSection>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {example && example.sentence !== 'No example sentence available.' && (
            <Card className='shadow-md'>
              <CardContent className='p-2'>
                <DetailSection icon={<MessageSquareText className="h-4 w-4" />} title="Example Sentence" titleColor="text-green-600">
                  <div className="w-full p-2 rounded-lg">
                    <p className="font-semibold">"{example.sentence}"</p>
                    {example.pronunciation && (
                      <p className="text-muted-foreground text-xs mt-1">({cleanPronunciation(example.pronunciation)})</p>
                    )}
                    {example.translation && (
                      <p className="text-foreground mt-1">‣ {example.translation}</p>
                    )}
                  </div>
                </DetailSection>
              </CardContent>
            </Card>
          )}

        </CardContent>
        <CardFooter className="flex flex-col gap-4 p-4">
          {/* Input Box */}
          <div className="premium-card w-full max-w-2xl mx-auto space-y-4 p-6 border-none ring-1 ring-black/5">
            <p className="text-center font-bold text-slate-600 text-sm uppercase tracking-wide">
              {getTypingPrompt()}
            </p>
            <div className="flex w-full items-center gap-3">
              <Input
                ref={inputRef}
                type="text"
                placeholder="Type here..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                className="text-center h-14 font-bold text-2xl text-indigo-600 capitalize bg-slate-50/50 border-slate-200 focus:ring-indigo-500 rounded-2xl"
                disabled={isChecked}
                readOnly={isMobile}
                inputMode={isMobile ? 'none' : 'text'}
              />
              <Button onClick={handleCheck} disabled={isChecked || !inputValue.trim()} className="premium-button-indigo h-14 px-8 text-lg rounded-2xl">
                Check
              </Button>
            </div>
            {isChecked && (
              <div
                className={`flex flex-col items-center justify-center p-4 rounded-2xl font-bold gap-3 ${isCorrect ? 'bg-emerald-50 text-emerald-700 animate-correct' : 'bg-rose-50 text-rose-700 animate-wrong'
                  }`}
              >
                <div className="flex items-center gap-2 text-xl">
                  {isCorrect ? (
                    <Check className="h-6 w-6" />
                  ) : (
                    <X className="h-6 w-6" />
                  )}
                  <span>
                    {isCorrect ? 'Correct!' : 'Incorrect!'}
                  </span>
                </div>
                {!isCorrect && (
                  <div className='w-full space-y-3 text-center border-t border-rose-200 pt-3'>
                    <p className="text-base">Correct spelling: <span className="font-bold text-xl underline underline-offset-4">{currentWord.word}</span></p>
                    <Button onClick={handleRetry} variant="outline" size="sm" className="h-10 px-6 bg-white/80 border-rose-300 hover:bg-white rounded-xl">
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Try Again
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>

          {isMobile && (
            <VirtualKeyboard
              onKeyPress={onVirtualKeyPress}
              onEnter={onVirtualEnter}
              onBackspace={onVirtualBackspace}
              isEnterDisabled={!inputValue.trim() || isChecked}
            />
          )}

          <div className="w-full flex flex-col gap-4 pt-2">
            {!isLastWord ? (
              <div className="grid grid-cols-2 gap-4">
                <Button onClick={handlePrevious} disabled={isFirstWord} className="bg-[#882edb] hover:bg-[#7d29c7] text-white">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                <Button onClick={handleNext}>
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ) : (
              <div className='w-full flex flex-col gap-2'>
                <Button onClick={handlePrevious} disabled={isFirstWord} className="bg-[#882edb] hover:bg-[#7d29c7] text-white">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                <Button
                  onClick={startTest}
                  className="w-full text-white font-bold h-12 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative border-none overflow-hidden"
                  style={{
                    background: 'linear-gradient(45deg, #ef4444, #b91c1c, #db2777, #ef4444)',
                    backgroundSize: '400% 400%',
                    animation: 'gradient-flow 2s ease infinite'
                  }}
                >
                  <style jsx>{`
                    @keyframes gradient-flow {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }
                  `}</style>
                  <span className="mr-2 text-xl">📝</span>
                  Start Test
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

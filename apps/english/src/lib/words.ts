

export interface SimpleWord {
  word: string;
  pronunciation: string;
  meaning: string;
  icon?: string;
}

interface ExampleSentence {
  sentence: string;
  gujaratiTranslation?: string;
  hindiTranslation?: string;
  gujaratiPronunciation?: string;
  hindiPronunciation?: string;
}

// Detailed word structure for advanced levels
export interface DetailedWord {
  word: string;
  icon?: string;
  gujaratiPronunciation?: string;
  hindiPronunciation?: string;
  gujaratiMeaning?: string;
  hindiMeaning?: string;
  partOfSpeech?: string;
  verbForms?: any; // Can be defined in more detail if needed
  synonyms?: any[];
  antonyms?: any[];
  exampleSentences?: ExampleSentence[];
  confusingWords?: any[];
}

export type Word = SimpleWord | DetailedWord;

export interface Level {
  id: string;
  title: string;
  words: Word[];
}

export interface Chapter {
  id: string;
  title: string;
  levels?: Level[];
  gujaratiTitle?: string;
  hindiTitle?: string;
}

export interface Book {
  id: string;
  title: string;
  chapters: Omit<Chapter, 'levels'>[];
}

export interface TestResult {
  word: string; // The primary word for the set of questions
  question: string;
  questionType: 'meaning' | 'spelling' | 'partOfSpeech' | 'verbForm';
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
}

export type Language =
  | 'gu'
  | 'hi'
  | 'en';

export interface BeforeInstallPromptEvent extends Event {
  readonly platforms: Array<string>;
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed',
    platform: string
  }>;
  prompt(): Promise<void>;
}

export interface ProgressEntry {
  score: number;
  date: string; // ISO 8601 date string
  chapterTitle?: string;
}

export interface UserProfile {
  spellingProgress?: { [key: string]: ProgressEntry };
  grammarProgress?: { [key: string]: ProgressEntry };
  updatedAt?: string;
}

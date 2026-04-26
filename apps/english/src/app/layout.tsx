
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AppStateProvider } from '@/context/app-context';
import { AuthProvider } from '@/context/auth-context';
import AppLayout from '@/components/AppLayout';
import Script from 'next/script';
import BackgroundBlobs from '@/components/background-blobs';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { Analytics } from '@vercel/analytics/next';
import { withBasePath } from '@/lib/base-path';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans'
});

const siteUrl = "https://englishwordslearn.work";

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Gyan Academy',
  url: 'https://englishwordslearn.work',
  logo: 'https://englishwordslearn.work/app-logo.png',
  description: 'Learn English words with meaning, pronunciation, verb forms, synonyms, antonyms, and examples in multiple Indian languages.',
  sameAs: [
    "https://www.facebook.com/",
    "https://www.instagram.com/",
    "https://www.youtube.com/"
  ]
};

const webSiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Gyan Academy - English Learning',
  url: 'https://englishwordslearn.work',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://englishwordslearn.work/translate?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "English Words Learn | Free Vocabulary and Test Practice for All Indian Languages",
  description: "Learn English words from 1st to 12th standard — meanings, synonyms, antonyms, pronunciation and example sentences in Gujarati, Hindi and all Indian languages. Free vocabulary learning and test practice available online!",
  keywords: [
    "English Learning", "English Words", "Daily Vocabulary", "Word Meanings", "English Grammar", "Vocabulary Builder", "Learn English", "Dictionary Online", "English Test", "English Quiz", "Word of the day",
    "English Learning free", "English Words free", "Daily Vocabulary free", "Word Meanings free", "English Grammar free", "Vocabulary Builder free", "Learn English free", "Dictionary Online free", "English Test free", "English Quiz free",
    "learn english words", "english vocabulary learning", "english vocabulary builder", "english words with meaning", "english learning app", "english vocabulary app", "english learning website", "learn english online free", "english language learning", "english vocabulary practice",
    "daily english words", "learn 10 english words daily", "new english words daily", "daily vocabulary builder", "vocabulary of the day", "english word of the day", "daily vocabulary practice", "english word learning daily", "english daily learning", "vocabulary improvement daily",
    "learn new english words", "improve english vocabulary", "vocabulary training online", "english vocabulary course", "vocabulary learning website", "vocabulary learning app", "vocabulary improvement app", "english vocabulary lessons", "english vocabulary study", "vocabulary learning platform",
    "english words for beginners", "beginner english vocabulary", "basic english words list", "easy english vocabulary", "english learning for beginners", "simple english words", "basic vocabulary english", "beginner vocabulary practice", "english words basic level", "english learning basics",
    "1000 english words list", "3000 english words list", "5000 english words list", "10000 english words list", "english vocabulary list", "common english words list", "english words list with meaning", "vocabulary words list", "english vocabulary pdf", "english words database",
    "english vocabulary quiz", "english vocabulary test", "vocabulary quiz online", "english word test", "vocabulary practice test", "english quiz online", "vocabulary challenge", "english vocabulary exam", "english word game", "vocabulary practice quiz",
    "english vocabulary for students", "english words for competitive exams", "vocabulary for govt exams", "english vocabulary for ssc exam", "english vocabulary for upsc", "english vocabulary for bank exams", "english vocabulary for ielts", "english vocabulary for toefl", "english vocabulary for gre", "english vocabulary for school students",
    "best english learning app", "free english vocabulary app", "vocabulary builder app", "english learning platform", "english study app", "learn english mobile app", "english practice app", "vocabulary learning tool", "english learning online platform", "english vocabulary practice app",
    "fastest way to learn english words", "how to improve vocabulary fast", "best way to learn english vocabulary", "memorize english words fast", "learn english vocabulary quickly", "vocabulary learning techniques", "english vocabulary improvement tips", "english vocabulary exercises", "english words memory technique", "vocabulary building exercises",
    "learn english vocabulary fast", "10000 english words list pdf", "advanced english vocabulary", "english words with pronunciation", "english vocabulary for speaking", "spoken english vocabulary", "daily english learning app", "english vocabulary practice online", "learn english vocabulary free", "english word learning website", "vocabulary builder online"
  ],

  manifest: withBasePath('/manifest.webmanifest'),
  other: {
    'application/ld+json': JSON.stringify([jsonLd, webSiteJsonLd]),
  },

  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'gu': '/',
      'hi': '/',
    },
  },

  openGraph: {
    title: "Learn English Words in Your Language | Free Vocabulary 1st–12th Std",
    description: "Meaning, verb forms, synonyms, antonyms, example sentences & more — learn English the smart way!",
    url: siteUrl,
    type: 'website',
    images: [
      {
        url: `${siteUrl}/seo-preview.jpg`,
        width: 1200,
        height: 630,
        alt: 'Learn English Words in Your Language',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: "Learn English Words in Your Language",
    description: "Free English learning with meanings, synonyms, antonyms, examples & more.",
    images: [`${siteUrl}/seo-preview.jpg`],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      { url: withBasePath('/favicon.png'), type: 'image/png', sizes: '32x32' },
      { url: withBasePath('/favicon.ico'), sizes: 'any' },
    ],
    shortcut: withBasePath('/favicon.png'),
    apple: [
      { url: withBasePath('/apple-touch-icon.png'), sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'icon',
        url: withBasePath('/icons/icon-192x192.png'),
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: withBasePath('/icons/icon-512x512.png'),
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="bg-gradient-to-br from-gray-50 to-blue-100">
        <AuthProvider>
          <AppStateProvider>
            <AppLayout>
              <BackgroundBlobs />
              {children}
            </AppLayout>
          </AppStateProvider>
        </AuthProvider>
        <GoogleAnalytics GA_MEASUREMENT_ID="G-B514H7LG5E" />
        <Analytics />
      </body>
    </html>
  );
}

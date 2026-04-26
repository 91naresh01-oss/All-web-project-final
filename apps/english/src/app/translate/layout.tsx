import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Online English Translator - Gyan Academy',
  description: 'Instantly translate English words and sentences to your local language with Gyan Academy\'s fast online translator tool.',
  alternates: {
    canonical: '/translate',
  },
};

export default function TranslateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

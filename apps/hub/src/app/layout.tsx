import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Edu Platform — શીખો, પ્રેક્ટિસ કરો, સફળ થાઓ',
  description:
    'ગુજરાતી વ્યાકરણ, English Words, ગણિત — બધું એક જ platform પર. Theory, Test અને PDF — Complete Education Hub.',
  keywords: ['education', 'gujarati grammar', 'english words', 'maths', 'exam preparation'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="gu">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

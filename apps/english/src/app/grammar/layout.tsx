import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'English Grammar Guide - Gyan Academy | Rules & Tests',
  description: 'Master English grammar with easy-to-understand rules and interactive practice tests in Gujarati and Hindi.',
  alternates: {
    canonical: '/grammar',
  },
};

export default function GrammarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

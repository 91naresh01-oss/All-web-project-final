import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Gyan Academy | Learn English Words',
  description: 'Learn about Gyan Academy, our mission, language learning philosophy and the features we offer to help students master English grammar effortlessly.',
  alternates: {
    canonical: '/about-us',
  },
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

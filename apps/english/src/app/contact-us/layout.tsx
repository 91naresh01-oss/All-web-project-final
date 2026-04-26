import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Gyan Academy | Learn English Words',
  description: 'Get in touch with Gyan Academy. Find our office address in Gandhinagar, email support, and social media links. Download our app to learn English.',
  alternates: {
    canonical: '/contact-us',
  },
};

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

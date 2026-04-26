import type { MetadataRoute } from 'next';
import { withBasePath } from '@/lib/base-path';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'English Words Learn',
    short_name: 'Eng Words',
    description:
      'Learn English words with meaning, pronunciation, verb forms, synonyms, antonyms, and examples in multiple Indian languages.',
    start_url: withBasePath('/'),
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1e88e5',
    icons: [
      {
        src: withBasePath('/icons/icon-192x192.png'),
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: withBasePath('/icons/icon-512x512.png'),
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}

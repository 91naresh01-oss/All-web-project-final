
import type { BookData } from '@/lib/data';

// Statically import all data files for Book 4
import book4chapter1meta from '../../data/book-4/chapter-1/chapter.json';
import book4chapter2meta from '../../data/book-4/chapter-2/chapter.json';
import book4chapter3meta from '../../data/book-4/chapter-3/chapter.json';
import book4chapter4meta from '../../data/book-4/chapter-4/chapter.json';
import book4chapter5meta from '../../data/book-4/chapter-5/chapter.json';
import book4chapter6meta from '../../data/book-4/chapter-6/chapter.json';
import book4chapter7meta from '../../data/book-4/chapter-7/chapter.json';
import book4chapter8meta from '../../data/book-4/chapter-8/chapter.json';
import book4chapter9meta from '../../data/book-4/chapter-9/chapter.json';
import book4chapter10meta from '../../data/book-4/chapter-10/chapter.json';


export const book4Data: BookData = {
    title: 'Book 4 - Verbs 2',
    chapters: {
        'chapter-1': { meta: {...book4chapter1meta, id: 'chapter-1'}, levels: { } },
        'chapter-2': { meta: {...book4chapter2meta, id: 'chapter-2'}, levels: { } },
        'chapter-3': { meta: {...book4chapter3meta, id: 'chapter-3'}, levels: { } },
        'chapter-4': { meta: {...book4chapter4meta, id: 'chapter-4'}, levels: { } },
        'chapter-5': { meta: {...book4chapter5meta, id: 'chapter-5'}, levels: { } },
        'chapter-6': { meta: {...book4chapter6meta, id: 'chapter-6'}, levels: { } },
        'chapter-7': { meta: {...book4chapter7meta, id: 'chapter-7'}, levels: { } },
        'chapter-8': { meta: {...book4chapter8meta, id: 'chapter-8'}, levels: { } },
        'chapter-9': { meta: {...book4chapter9meta, id: 'chapter-9'}, levels: { } },
        'chapter-10': { meta: {...book4chapter10meta, id: 'chapter-10'}, levels: { } },
    }
};

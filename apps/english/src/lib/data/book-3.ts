
import type { BookData } from '@/lib/data';

// Statically import all data files for Book 3
import book3chapter1meta from '../../data/book-3/chapter-1/chapter.json';
import book3chapter2meta from '../../data/book-3/chapter-2/chapter.json';
import book3chapter3meta from '../../data/book-3/chapter-3/chapter.json';
import book3chapter4meta from '../../data/book-3/chapter-4/chapter.json';
import book3chapter5meta from '../../data/book-3/chapter-5/chapter.json';
import book3chapter6meta from '../../data/book-3/chapter-6/chapter.json';
import book3chapter7meta from '../../data/book-3/chapter-7/chapter.json';
import book3chapter8meta from '../../data/book-3/chapter-8/chapter.json';
import book3chapter9meta from '../../data/book-3/chapter-9/chapter.json';
import book3chapter10meta from '../../data/book-3/chapter-10/chapter.json';


export const book3Data: BookData = {
    title: 'Book 3 - Verbs',
    chapters: {
        'chapter-1': { meta: book3chapter1meta, levels: {} },
        'chapter-2': { meta: book3chapter2meta, levels: {} },
        'chapter-3': { meta: book3chapter3meta, levels: {} },
        'chapter-4': { meta: book3chapter4meta, levels: {} },
        'chapter-5': { meta: book3chapter5meta, levels: {} },
        'chapter-6': { meta: book3chapter6meta, levels: {} },
        'chapter-7': { meta: book3chapter7meta, levels: {} },
        'chapter-8': { meta: book3chapter8meta, levels: {} },
        'chapter-9': { meta: book3chapter9meta, levels: {} },
        'chapter-10': { meta: book3chapter10meta, levels: {} },
    }
};

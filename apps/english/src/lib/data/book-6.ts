
import type { BookData } from '@/lib/data';

// Statically import only chapter metadata, not the full levels
import book6chapter1meta from '../../data/book-6/chapter-1/chapter.json';
import book6chapter2meta from '../../data/book-6/chapter-2/chapter.json';
import book6chapter3meta from '../../data/book-6/chapter-3/chapter.json';
import book6chapter4meta from '../../data/book-6/chapter-4/chapter.json';
import book6chapter5meta from '../../data/book-6/chapter-5/chapter.json';
import book6chapter6meta from '../../data/book-6/chapter-6/chapter.json';
import book6chapter7meta from '../../data/book-6/chapter-7/chapter.json';
import book6chapter8meta from '../../data/book-6/chapter-8/chapter.json';
import book6chapter9meta from '../../data/book-6/chapter-9/chapter.json';
import book6chapter10meta from '../../data/book-6/chapter-10/chapter.json';

export const book6Data: BookData = {
    title: 'Book 6 [Verbs 4]',
    chapters: {
        'chapter-1': {
            meta: book6chapter1meta,
            levels: {}
        },
        'chapter-2': {
            meta: book6chapter2meta,
            levels: {}
        },
        'chapter-3': {
            meta: book6chapter3meta,
            levels: {}
        },
        'chapter-4': {
            meta: book6chapter4meta,
            levels: {}
        },
        'chapter-5': {
            meta: book6chapter5meta,
            levels: {}
        },
        'chapter-6': {
            meta: book6chapter6meta,
            levels: {}
        },
        'chapter-7': {
            meta: book6chapter7meta,
            levels: {}
        },
        'chapter-8': {
            meta: book6chapter8meta,
            levels: {}
        },
        'chapter-9': {
            meta: book6chapter9meta,
            levels: {}
        },
        'chapter-10': {
            meta: book6chapter10meta,
            levels: {}
        },
    }
};

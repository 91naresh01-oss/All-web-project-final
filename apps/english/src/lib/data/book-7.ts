
import type { BookData } from '@/lib/data';

// Statically import only chapter metadata, not the full levels
import book7chapter1meta from '../../data/book-7/chapter-1/chapter.json';
import book7chapter2meta from '../../data/book-7/chapter-2/chapter.json';
import book7chapter3meta from '../../data/book-7/chapter-3/chapter.json';
import book7chapter4meta from '../../data/book-7/chapter-4/chapter.json';
import book7chapter5meta from '../../data/book-7/chapter-5/chapter.json';
import book7chapter6meta from '../../data/book-7/chapter-6/chapter.json';
import book7chapter7meta from '../../data/book-7/chapter-7/chapter.json';
import book7chapter8meta from '../../data/book-7/chapter-8/chapter.json';
import book7chapter9meta from '../../data/book-7/chapter-9/chapter.json';
import book7chapter10meta from '../../data/book-7/chapter-10/chapter.json';

export const book7Data: BookData = {
    title: 'Book 7 [Verbs 5]',
    chapters: {
        'chapter-1': {
            meta: book7chapter1meta,
            levels: {}
        },
        'chapter-2': {
            meta: book7chapter2meta,
            levels: {}
        },
        'chapter-3': {
            meta: book7chapter3meta,
            levels: {}
        },
        'chapter-4': {
            meta: book7chapter4meta,
            levels: {}
        },
        'chapter-5': {
            meta: book7chapter5meta,
            levels: {}
        },
        'chapter-6': {
            meta: book7chapter6meta,
            levels: {}
        },
        'chapter-7': {
            meta: book7chapter7meta,
            levels: {}
        },
        'chapter-8': {
            meta: book7chapter8meta,
            levels: {}
        },
        'chapter-9': {
            meta: book7chapter9meta,
            levels: {}
        },
        'chapter-10': {
            meta: book7chapter10meta,
            levels: {}
        },
    }
};

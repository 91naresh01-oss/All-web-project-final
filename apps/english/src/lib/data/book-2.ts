
import type { BookData } from '@/lib/data';

// Statically import all data files for Book 2
import book2chapter1meta from '../../data/book-2/chapter-1/chapter.json';
import book2chapter2meta from '../../data/book-2/chapter-2/chapter.json';
import book2chapter3meta from '../../data/book-2/chapter-3/chapter.json';
import book2chapter4meta from '../../data/book-2/chapter-4/chapter.json';
import book2chapter5meta from '../../data/book-2/chapter-5/chapter.json';
import book2chapter6meta from '../../data/book-2/chapter-6/chapter.json';
import book2chapter7meta from '../../data/book-2/chapter-7/chapter.json';
import book2chapter8meta from '../../data/book-2/chapter-8/chapter.json';
import book2chapter9meta from '../../data/book-2/chapter-9/chapter.json';
import book2chapter10meta from '../../data/book-2/chapter-10/chapter.json';
import book2chapter11meta from '../../data/book-2/chapter-11/chapter.json';
import book2chapter12meta from '../../data/book-2/chapter-12/chapter.json';
import book2chapter13meta from '../../data/book-2/chapter-13/chapter.json';
import book2chapter14meta from '../../data/book-2/chapter-14/chapter.json';
import book2chapter15meta from '../../data/book-2/chapter-15/chapter.json';
import book2chapter16meta from '../../data/book-2/chapter-16/chapter.json';

export const book2Data: BookData = {
    title: 'Book 2 [Easy 2]',
    chapters: {
        'chapter-1': { meta: book2chapter1meta, levels: {} },
        'chapter-2': { meta: book2chapter2meta, levels: {} },
        'chapter-3': { meta: book2chapter3meta, levels: {} },
        'chapter-4': { meta: book2chapter4meta, levels: {} },
        'chapter-5': { meta: book2chapter5meta, levels: {} },
        'chapter-6': { meta: book2chapter6meta, levels: {} },
        'chapter-7': { meta: book2chapter7meta, levels: {} },
        'chapter-8': { meta: book2chapter8meta, levels: {} },
        'chapter-9': { meta: book2chapter9meta, levels: {} },
        'chapter-10': { meta: book2chapter10meta, levels: {} },
        'chapter-11': { meta: book2chapter11meta, levels: {} },
        'chapter-12': { meta: book2chapter12meta, levels: {} },
        'chapter-13': { meta: book2chapter13meta, levels: {} },
        'chapter-14': { meta: book2chapter14meta, levels: {} },
        'chapter-15': { meta: book2chapter15meta, levels: {} },
        'chapter-16': { meta: book2chapter16meta, levels: {} },
    }
};

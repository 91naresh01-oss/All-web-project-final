
import type { BookData } from '@/lib/data';

// Statically import only chapter metadata, not the full levels
import book1chapter1meta from '../../data/book-1/chapter-1/chapter.json';
import book1chapter2meta from '../../data/book-1/chapter-2/chapter.json';
import book1chapter3meta from '../../data/book-1/chapter-3/chapter.json';
import book1chapter4meta from '../../data/book-1/chapter-4/chapter.json';
import book1chapter5meta from '../../data/book-1/chapter-5/chapter.json';
import book1chapter6meta from '../../data/book-1/chapter-6/chapter.json';
import book1chapter7meta from '../../data/book-1/chapter-7/chapter.json';
import book1chapter8meta from '../../data/book-1/chapter-8/chapter.json';
import book1chapter9meta from '../../data/book-1/chapter-9/chapter.json';
import book1chapter10meta from '../../data/book-1/chapter-10/chapter.json';
import book1chapter11meta from '../../data/book-1/chapter-11/chapter.json';
import book1chapter12meta from '../../data/book-1/chapter-12/chapter.json';
import book1chapter13meta from '../../data/book-1/chapter-13/chapter.json';
import book1chapter14meta from '../../data/book-1/chapter-14/chapter.json';
import book1chapter15meta from '../../data/book-1/chapter-15/chapter.json';
import book1chapter16meta from '../../data/book-1/chapter-16/chapter.json';
import book1chapter17meta from '../../data/book-1/chapter-17/chapter.json';
import book1chapter18meta from '../../data/book-1/chapter-18/chapter.json';
import book1chapter19meta from '../../data/book-1/chapter-19/chapter.json';
import book1chapter20meta from '../../data/book-1/chapter-20/chapter.json';


export const book1Data: BookData = {
    title: 'Book 1 [Easy 1]',
    chapters: {
        'chapter-1': { meta: book1chapter1meta, levels: {} },
        'chapter-2': { meta: book1chapter2meta, levels: {} },
        'chapter-3': { meta: book1chapter3meta, levels: {} },
        'chapter-4': { meta: book1chapter4meta, levels: {} },
        'chapter-5': { meta: book1chapter5meta, levels: {} },
        'chapter-6': { meta: book1chapter6meta, levels: {} },
        'chapter-7': { meta: book1chapter7meta, levels: {} },
        'chapter-8': { meta: book1chapter8meta, levels: {} },
        'chapter-9': { meta: book1chapter9meta, levels: {} },
        'chapter-10': { meta: book1chapter10meta, levels: {} },
        'chapter-11': { meta: book1chapter11meta, levels: {} },
        'chapter-12': { meta: book1chapter12meta, levels: {} },
        'chapter-13': { meta: book1chapter13meta, levels: {} },
        'chapter-14': { meta: book1chapter14meta, levels: {} },
        'chapter-15': { meta: book1chapter15meta, levels: {} },
        'chapter-16': { meta: book1chapter16meta, levels: {} },
        'chapter-17': { meta: book1chapter17meta, levels: {} },
        'chapter-18': { meta: book1chapter18meta, levels: {} },
        'chapter-19': { meta: book1chapter19meta, levels: {} },
        'chapter-20': { meta: book1chapter20meta, levels: {} },
    }
};

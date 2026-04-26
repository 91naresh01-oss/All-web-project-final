
import type { BookData } from '@/lib/data';

// Statically import all data files for Book 5
import book5chapter1meta from '../../data/book-5/chapter-1/chapter.json';
import book5chapter2meta from '../../data/book-5/chapter-2/chapter.json';
import book5chapter3meta from '../../data/book-5/chapter-3/chapter.json';
import book5chapter4meta from '../../data/book-5/chapter-4/chapter.json';
import book5chapter5meta from '../../data/book-5/chapter-5/chapter.json';
import book5chapter6meta from '../../data/book-5/chapter-6/chapter.json';
import book5chapter7meta from '../../data/book-5/chapter-7/chapter.json';
import book5chapter8meta from '../../data/book-5/chapter-8/chapter.json';
import book5chapter9meta from '../../data/book-5/chapter-9/chapter.json';
import book5chapter10meta from '../../data/book-5/chapter-10/chapter.json';


export const book5Data: BookData = {
    title: 'Book 5 - Verbs 3',
    chapters: {
        'chapter-1': { meta: {...book5chapter1meta, id: 'chapter-1'}, levels: { } },
        'chapter-2': { meta: {...book5chapter2meta, id: 'chapter-2'}, levels: { } },
        'chapter-3': { meta: {...book5chapter3meta, id: 'chapter-3'}, levels: { } },
        'chapter-4': { meta: {...book5chapter4meta, id: 'chapter-4'}, levels: { } },
        'chapter-5': { meta: {...book5chapter5meta, id: 'chapter-5'}, levels: { } },
        'chapter-6': { meta: {...book5chapter6meta, id: 'chapter-6'}, levels: { } },
        'chapter-7': { meta: {...book5chapter7meta, id: 'chapter-7'}, levels: { } },
        'chapter-8': { meta: {...book5chapter8meta, id: 'chapter-8'}, levels: { } },
        'chapter-9': { meta: {...book5chapter9meta, id: 'chapter-9'}, levels: { } },
        'chapter-10': { meta: {...book5chapter10meta, id: 'chapter-10'}, levels: { } },
    }
};


                import type { Book, Level } from './words';
                import { book1Data } from './data/book-1';
                import { book2Data } from './data/book-2';
                import { book3Data } from './data/book-3';
                import { book4Data } from './data/book-4';
                import { book5Data } from './data/book-5';
                import { book6Data } from './data/book-6';
                import { book7Data } from './data/book-7';

                export interface BookData {
                    title: string;
                    chapters: {
                        [chapterId: string]: {
                            meta: any;
                            levels: {
                                // This will be empty initially and loaded on demand
                            };
                        };
                    };
                }

                export const booksData: { [key: string]: BookData } = {
                    'book-1': book1Data,
                    'book-2': book2Data,
                    'book-3': book3Data,
                    'book-4': book4Data,
                    'book-5': book5Data,
                    'book-6': book6Data,
                    'book-7': book7Data,
                };
                

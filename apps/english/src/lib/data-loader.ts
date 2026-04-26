
import { booksData, type BookData } from '@/lib/data';
import type { Chapter, Level } from './words';
// Import the metadata directly so it's bundled by Next.js
import grammarMetadata from '@/grammar-data/metadata.json';
import { type Question } from '@/components/grammar/GrammarTestRunner';

// ===== IN-MEMORY CACHE =====
const chapterCache = new Map<string, Chapter>();
const levelCache = new Map<string, Level>();

// Helper function to dynamically import level files for a given chapter
async function loadLevelsForChapter(bookId: string, chapterId: string): Promise<Level[]> {
  const book = (booksData as Record<string, BookData>)[bookId];
  if (!book) {
    throw new Error(`Book with id ${bookId} not found.`);
  }

  const chapterMeta = book.chapters[chapterId]?.meta;
  if (!chapterMeta) {
    throw new Error(`Chapter with id ${chapterId} not found in book ${bookId}.`);
  }

  const levelsInfo = chapterMeta.levels;
  if (!Array.isArray(levelsInfo) || levelsInfo.length === 0) {
    return [];
  }

  const levelPromises: Promise<Level | null>[] = levelsInfo.map(levelInfo => {
    const levelId = levelInfo && levelInfo.id;
    if (!levelId) {
      console.warn(`Skipping level with invalid format in ${bookId}/${chapterId}:`, levelInfo);
      return Promise.resolve(null);
    }

    const cacheKey = `${bookId}-${chapterId}-${levelId}`;
    if (levelCache.has(cacheKey)) {
      return Promise.resolve(levelCache.get(cacheKey)!);
    }

    return import(`@/data/${bookId}/${chapterId}/${levelId}.json`)
      .then(module => {
        const level = module.default as Level;
        levelCache.set(cacheKey, level);
        return level;
      })
      .catch((err) => {
        console.error(`Failed to load level ${bookId}/${chapterId}/${levelId}.json:`, err);
        return null;
      });
  });

  const levels = await Promise.all(levelPromises);
  return levels.filter((level): level is Level => level !== null);
}

export async function getChapter(bookId: string, chapterId: string): Promise<Chapter> {
  const cacheKey = `${bookId}-${chapterId}`;

  // Return cached chapter immediately
  if (chapterCache.has(cacheKey)) {
    return chapterCache.get(cacheKey)!;
  }

  const book = (booksData as Record<string, BookData>)[bookId];
  if (!book) {
    throw new Error(`Book with id ${bookId} not found.`);
  }

  const chapterData = book.chapters[chapterId];
  if (!chapterData) {
    throw new Error(`Chapter with id ${chapterId} not found in book ${bookId}.`);
  }

  const levels = await loadLevelsForChapter(bookId, chapterId);

  const chapter: Chapter = {
    ...chapterData.meta,
    levels: levels,
  };

  chapterCache.set(cacheKey, chapter);
  return chapter;
}

export async function getLevel(bookId: string, chapterId: string, levelId: string): Promise<Level> {
  const cacheKey = `${bookId}-${chapterId}-${levelId}`;

  // Return cached level immediately
  if (levelCache.has(cacheKey)) {
    return levelCache.get(cacheKey)!;
  }

  try {
    const levelModule = await import(`@/data/${bookId}/${chapterId}/${levelId}.json`);
    const level = levelModule.default as Level;
    levelCache.set(cacheKey, level);
    return level;
  } catch (error) {
    console.error(`Failed to load level: ${bookId}/${chapterId}/${levelId}.json`, error);
    throw new Error(`Could not load data for level '${levelId}' in chapter '${chapterId}' of book '${bookId}'.`);
  }
}

// Determines the language from the topic ID
export const getLanguageFromTopicId = (topicId: string) => {
  return topicId.endsWith('-h') ? 'h' : 'gu';
};

// Loads the available tests for a given grammar topic
export const loadTopicTests = async (topicId: string): Promise<string[]> => {
  const lang = getLanguageFromTopicId(topicId);

  // Use the topic ID as is (since -gu is removed from folders and IDs)
  // For Hindi legacy URLs ending in -h, normalize it
  const metadataTopicId = topicId.endsWith('-h') ? topicId.replace(/-h$/, '') : topicId;

  try {
    // Cast the imported JSON to a Record type to access keys dynamically
    const metadata = grammarMetadata as Record<string, number>;

    const totalTests = metadata[metadataTopicId] || 0;

    if (totalTests === 0) {
      return [];
    }

    // Generate test IDs like ["test-1", "test-2", ...]
    return Array.from({ length: totalTests }, (_, i) => `test-${i + 1}`);

  } catch (error) {
    console.error(`Failed to load tests for topic ${topicId}:`, error);
    return [];
  }
};

// Grammar test cache
const grammarTestCache = new Map<string, Question[] | null>();

// Loads a specific test file
export const loadTestFile = async (topicId: string, testId: string, langParam?: string): Promise<Question[] | null> => {
  const cacheKey = `${topicId}-${testId}-${langParam || 'default'}`;

  if (grammarTestCache.has(cacheKey)) {
    return grammarTestCache.get(cacheKey)!;
  }

  // Determine language from explicit parameter or topic ID
  const isHindi = langParam === 'hi' || topicId.endsWith('-h');

  // Map topicId to folder name (remove -h if present)
  const dataTopicId = topicId.endsWith('-h') ? topicId.replace(/-h$/, '') : topicId;

  try {
    const testFileName = isHindi ? 'hi-tests' : 'g-tests';
    const topicModule = await import(`@/grammar-data/${dataTopicId}/test/${testFileName}`);

    const tests = topicModule.tests;
    if (!tests || !tests[testId]) {
      console.warn(`Test ${testId} not found in ${dataTopicId}`);
      grammarTestCache.set(cacheKey, null);
      return null;
    }

    const result = tests[testId];
    grammarTestCache.set(cacheKey, result);
    return result;
  } catch (error) {
    console.error(`Failed to load test data for ${topicId}/${testId}:`, error);
    grammarTestCache.set(cacheKey, null);
    return null;
  }
};

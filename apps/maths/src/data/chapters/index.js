// Dynamic import file for chapter data — lazy loading per chapter
// Instead of loading ALL 21 chapters upfront, only load what's needed

const chapterImports = {
  '1': { questions: () => import('./ch1/questions'), theory: () => import('./ch1/theory') },
  '2': { questions: () => import('./ch2/questions'), theory: () => import('./ch2/theory') },
  '3': { questions: () => import('./ch3/questions'), theory: () => import('./ch3/theory') },
  '4': { questions: () => import('./ch4/questions'), theory: () => import('./ch4/theory') },
  '5': { questions: () => import('./ch5/questions'), theory: () => import('./ch5/theory') },
  '6': { questions: () => import('./ch6/questions'), theory: () => import('./ch6/theory') },
  '7': { questions: () => import('./ch7/questions'), theory: () => import('./ch7/theory') },
  '8': { questions: () => import('./ch8/questions'), theory: () => import('./ch8/theory') },
  '9': { questions: () => import('./ch9/questions'), theory: () => import('./ch9/theory') },
  '10': { questions: () => import('./ch10/questions'), theory: () => import('./ch10/theory') },
  '11': { questions: () => import('./ch11/questions'), theory: () => import('./ch11/theory') },
  '12': { questions: () => import('./ch12/questions'), theory: () => import('./ch12/theory') },
  '13': { questions: () => import('./ch13/questions'), theory: () => import('./ch13/theory') },
  '14': { questions: () => import('./ch14/questions'), theory: () => import('./ch14/theory') },
  '15': { questions: () => import('./ch15/questions'), theory: () => import('./ch15/theory') },
  '16': { questions: () => import('./ch16/questions'), theory: () => import('./ch16/theory') },
  '17': { questions: () => import('./ch17/questions'), theory: () => import('./ch17/theory') },
  '18': { questions: () => import('./ch18/questions'), theory: () => import('./ch18/theory') },
  '19': { questions: () => import('./ch19/questions'), theory: () => import('./ch19/theory') },
  '20': { questions: () => import('./ch20/questions'), theory: () => import('./ch20/theory') },
  '21': { questions: () => import('./ch21/questions'), theory: () => import('./ch21/theory') },
  '22': { questions: () => import('./ch22/questions'), theory: () => import('./ch22/theory') },
  '23': { questions: () => import('./ch23/questions'), theory: () => import('./ch23/theory') },
  '24': { questions: () => import('./ch24/questions'), theory: () => import('./ch24/theory') },
  '25': { questions: () => import('./ch25/questions'), theory: () => import('./ch25/theory') },
  '26': { questions: () => import('./ch26/questions'), theory: () => import('./ch26/theory') },
  '27': { questions: () => import('./ch27/questions'), theory: () => import('./ch27/theory') },
  '28': { questions: () => import('./ch28/questions'), theory: () => import('./ch28/theory') },
  '29': { questions: () => import('./ch29/questions'), theory: () => import('./ch29/theory') },
  '30': { questions: () => import('./ch30/questions'), theory: () => import('./ch30/theory') },
  '31': { questions: () => import('./ch31/questions'), theory: () => import('./ch31/theory') },
  '32': { questions: () => import('./ch32/questions'), theory: () => import('./ch32/theory') },
  '33': { questions: () => import('./ch33/questions'), theory: () => import('./ch33/theory') },
  '34': { questions: () => import('./ch34/questions'), theory: () => import('./ch34/theory') },
  '35': { questions: () => import('./ch35/questions'), theory: () => import('./ch35/theory') },
  '36': { questions: () => import('./ch36/questions'), theory: () => import('./ch36/theory') },
  '37': { questions: () => import('./ch37/questions'), theory: () => import('./ch37/theory') },
  '38': { questions: () => import('./ch38/questions'), theory: () => import('./ch38/theory') },
  '39': { questions: () => import('./ch39/questions'), theory: () => import('./ch39/theory') },
  '40': { questions: () => import('./ch40/questions'), theory: () => import('./ch40/theory') },
  '41': { questions: () => import('./ch41/questions'), theory: () => import('./ch41/theory') },
  '42': { questions: () => import('./ch42/questions'), theory: () => import('./ch42/theory') },
  '43': { questions: () => import('./ch43/questions'), theory: () => import('./ch43/theory') },
  '44': { questions: () => import('./ch44/questions'), theory: () => import('./ch44/theory') },
  '45': { questions: () => import('./ch45/questions'), theory: () => import('./ch45/theory') },
  '46': { questions: () => import('./ch46/questions'), theory: () => import('./ch46/theory') },
  '47': { questions: () => import('./ch47/questions'), theory: () => import('./ch47/theory') },
  '48': { questions: () => import('./ch48/questions'), theory: () => import('./ch48/theory') },
  '49': { questions: () => import('./ch49/questions') },
};

// Cache loaded data so we don't re-import
const cache = {
  questions: {},
  theory: {},
};

const shouldUseCache = process.env.NODE_ENV === 'production';

export async function getChapterQuestions(chapterId) {
  const id = String(chapterId);
  if (shouldUseCache && cache.questions[id]) return cache.questions[id];
  
  const importer = chapterImports[id];
  if (!importer) return [];
  
  try {
    const mod = await importer.questions();
    const questions = mod.questions || [];
    if (shouldUseCache) cache.questions[id] = questions;
    return questions;
  } catch (e) {
    console.error(`Failed to load questions for chapter ${id}:`, e);
    return [];
  }
}

export async function getChapterTheory(chapterId) {
  const id = String(chapterId);
  if (shouldUseCache && cache.theory[id]) return cache.theory[id];
  
  const importer = chapterImports[id];
  if (!importer) return null;
  
  try {
    const mod = await importer.theory();
    const theory = mod.theory || null;
    if (shouldUseCache) cache.theory[id] = theory;
    return theory;
  } catch (e) {
    console.error(`Failed to load theory for chapter ${id}:`, e);
    return null;
  }
}

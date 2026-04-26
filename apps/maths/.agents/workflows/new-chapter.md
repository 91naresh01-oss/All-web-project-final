---
description: Maths App — new chapter add workflow
---

# New Chapter Workflow

**All formats/rules → see `chapter-management` skill**

## Steps
1. **Scope** — User theory/test/both માંગે? Chapter N, title, source note.
2. **Files** — Create `src/data/chapters/ch{N}/theory.js` + `questions.js`
3. **Theory** — CH27 format follow. Intro → Confusion → solvedExamples
4. **Test** — MCQ format. No test = `export const questions = [];`
5. **Register** — `chapters/index.js` + `chaptersData.js` update
6. **Verify** — Chapter card, theory page, test page check
7. **Summary** — What added, files changed, test status

---
name: file-index
description: બધી ફાઇલોનો direct path index — search tools ના વાપરો
---

# 📂 File Index

**RULE: File search ના કરો — આ index વાપરો.**

## Root
| File | Path |
|------|------|
| package.json | `MATHS/package.json` |
| next.config.mjs | `MATHS/next.config.mjs` |
| jsconfig.json | `MATHS/jsconfig.json` |

## App Pages (`src/app/`)
| File | Route |
|------|-------|
| `layout.js` | Root Layout |
| `page.js` | `/` Home |
| `globals.css` | Global Styles |
| `chapters/page.js` | `/chapters` |
| `chapters/[chapterId]/theory/page.js` | `/chapters/:id/theory` |
| `chapters/[chapterId]/test/page.js` | `/chapters/:id/test` |
| `chapters/[chapterId]/test/[id]/page.js` | `/chapters/:id/test/:testId` |

## Components (`src/components/ui/`)
| File | Purpose |
|------|---------|
| `Header.js` | Top header |
| `Footer.js` | Footer |

## Data (`src/data/`)
| File | Purpose |
|------|---------|
| `chaptersData.js` | Master chapters config |
| `chapters/index.js` | Central lazy-import map |

## Chapters (`src/data/chapters/ch{N}/`)
Chapters 1-29 exist. Each has: `questions.js` + `theory.js`

Active chapters: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 49

## Public
| File | Purpose |
|------|---------|
| `public/logo.png` | App Logo |

## Quick Access
| Need | Path |
|------|------|
| Styling fix | `src/app/globals.css` |
| Home page | `src/app/page.js` |
| Layout/Header | `src/app/layout.js` |
| New chapter data | `src/data/chapters/ch{N}/` |
| Chapter registry | `src/data/chapters/index.js` |
| Dashboard config | `src/data/chaptersData.js` |

## Rules
1. NEVER search — use this index
2. ALWAYS absolute paths
3. New file → update this index
4. File delete → update this index

**Base path:** `c:\Users\NARESH\OneDrive\Desktop\Project\MATHS`

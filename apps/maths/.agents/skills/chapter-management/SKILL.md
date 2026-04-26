---
name: chapter-management
description: Chapter add/update કરવાનું single-source-of-truth. Theory, Test, Registration — બધું અહીં.
---

# Chapter Management Skill

## File Structure
```
src/data/chapters/ch{N}/
  theory.js      — theory content
  questions.js   — test MCQs (empty array if no test)
```

## Registration (2 files update)
1. **`src/data/chapters/index.js`** — lazy import:
   ```js
   '{N}': { questions: () => import('./ch{N}/questions'), theory: () => import('./ch{N}/theory') },
   ```
2. **`src/data/chaptersData.js`** — dashboard entry:
   ```js
   { id: N, number: "N", title: "...", subtitle: "...",
     theoryLink: "/chapters/N/theory", testLink: "/chapters/N/test",
     pdf: "/pdfs/ch-N.pdf", hasLock: false, hasTheory: true,
     hasTest: true, lockMessage: "", color: "#ef4444" }
   ```

---

## 🚫 MATH FORMATTING (CRITICAL)
**LaTeX BANNED** — Frontend parse નથી કરતું!

| ❌ LaTeX | ✅ Unicode |
|----------|-----------|
| `$x^2$` | `x²` |
| `$x^3$` | `x³` |
| `\frac{A}{B}` | `A/B` |
| `\times` | `×` |
| `\sqrt{36}` | `√36` |
| `$...$` signs | NEVER use |

---

## Theory Format (`theory.js`)
Reference: **CH27 format exactly follow કરો.**

```js
export const theory = {
  id: N,
  title: "પ્રકરણ N: નામ (English)",
  content: [
    // 1️⃣ Quick Notes
    { type: "intro", icon: "📌", title: "મુખ્ય મુદ્દાઓ",
      text: "Overview...", list: ["Point 1", "Point 2"] },

    // 2️⃣ Confusion Points (title માં "મૂંઝવ" or "confusion" REQUIRED)
    { type: "intro", icon: "⚠️", title: "કન્ફ્યુઝન પોઇન્ટ્સ (Confusion Points)",
      text: "...", list: ["Mistake 1", "Mistake 2"] },

    // 3️⃣ Solved Examples (Type 1, 2, 3...)
    { type: "solvedExamples", icon: "📏",
      title: "Type 1: નામ (English)",   // "Type N:" prefix REQUIRED
      text: "સૂત્ર: ...",
      examples: [
        { id: "Type 1 - E1", title: "label", question: "પ્રશ્ન...",
          color: "blue",   // REQUIRED
          steps: ["Step 1", "Step 2", { main: "જવાબ: ...", tone: "answer" }]
        }
      ]
    }
  ]
};
```

**Color rotation:** Type1→blue, 2→green, 3→amber, 4→purple, 5→indigo, 6→rose, 7+→repeat

### UI Auto-Detection (by title keywords)
| Title contains | Header Color | Badge |
|---|---|---|
| "મુખ્ય", "quick", "points" | 🟢 Emerald | Quick Notes |
| "મૂંઝવ", "confusion" | 🟡 Gold | Confusion Points |
| "Type", "દાખલા" | 🟠 Orange | Type N |

---

## Test Format (`questions.js`)
Questions 10 ના group માં auto-split (Test1=Q1-10, Test2=Q11-20...)

```js
export const questions = [
  { id: 1, question: "પ્રશ્ન...?",
    options: ["A", "B", "C", "D"],   // exactly 4
    correct: 0,                       // 0-based index (0=A,1=B,2=C,3=D)
    solution: ["Step 1", "Step 2", { main: "જવાબ: ...", tone: "answer" }]
  }
];
```

---

## ❌ Common Mistakes
| Mistake | Fix |
|---------|-----|
| `correct: "A"` | `correct: 0` (number) |
| Answer plain string | `{ main: "...", tone: "answer" }` |
| `type: "section"` for examples | Use `solvedExamples` |
| Missing `id`/`color` in examples | Always include |
| `\n` in strings | Separate array items |
| LaTeX (`$`, `\frac`) | Unicode (`²`, `×`, `√`) |
| < 4 options | Always exactly 4 |

## Execution Flow
1. Check `chaptersData.js` for existing entry
2. Create/update `ch{N}/theory.js` + `questions.js`
3. Update `chapters/index.js` (lazy import)
4. Update `chaptersData.js` (dashboard)
5. Verify → Task Completed Summary

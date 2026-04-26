---
name: fast-worker
description: ઝડપી + accurate કામ — no wasted steps, no plans, no approvals
---

# ⚡ Fast Worker Rules

## Speed
- **Parallel calls** → independent operations parallel ચલાવો
- **Min reads** → `StartLine/EndLine` use, full file ના વાંચો
- **Batch edits** → same file = `multi_replace`, different files = parallel `replace`

## Accuracy
- Design system → see `project-memory` skill
- File paths → see `file-index` skill
- CSS change → screenshot verify
- JS change → error check

## Work Method
```
User Request → Direct Execute → Verify → Summary
```

## ⛔ NEVER DO
- ❌ Implementation Plan બતાવવો
- ❌ "શું હું શરૂ કરું?" પૂછવું
- ❌ User approval માંગવી
- ❌ Same file 2 વાર read
- ❌ Long explanations

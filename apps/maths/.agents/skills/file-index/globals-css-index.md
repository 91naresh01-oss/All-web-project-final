# 📋 globals.css — Complete Class Index

## Quick Reference — Line Numbers

### 🎨 CSS Variables (Lines 3-27)
| Variable | Value | Line |
|----------|-------|------|
| `--bg-gradient-1` | `#e0e5ec` | 5 |
| `--bg-gradient-2` | `#f5f7fa` | 6 |
| `--bg-gradient-3` | `#dfe9f3` | 7 |
| `--accent-primary` | `#6c5ce7` | 8 |
| `--accent-secondary` | `#a29bfe` | 9 |
| `--accent-glow` | `rgba(108,92,231,0.3)` | 10 |
| `--glass-bg` | `rgba(255,255,255,0.55)` | 11 |
| `--glass-bg-hover` | `rgba(255,255,255,0.75)` | 12 |
| `--glass-border` | `rgba(255,255,255,0.6)` | 13 |
| `--glass-shadow` | `0 8px 32px ...` | 14 |
| `--glass-shadow-hover` | `0 12px 40px ...` | 15 |
| `--text-primary` | `#2d3436` | 16 |
| `--text-secondary` | `#636e72` | 17 |
| `--text-light` | `#b2bec3` | 18 |
| `--radius-sm` | `8px` | 19 |
| `--radius-md` | `12px` | 20 |
| `--radius-lg` | `16px` | 21 |
| `--radius-xl` | `20px` | 22 |
| `--font-main` | `'Outfit'` | 23 |
| `--font-body` | `'Poppins'` | 24 |
| `--transition-smooth` | `cubic-bezier(0.25...)` | 25 |
| `--transition-bounce` | `cubic-bezier(0.68...)` | 26 |

### 🔧 Reset & Base (Lines 29-50)
| Class/Selector | Line |
|----------------|------|
| `*, *::before, *::after` (reset) | 30-36 |
| `html` (smooth scroll) | 38-40 |
| `body` (font, bg, color) | 42-50 |

### 🎨 Background Blobs (Lines 52-112)
| Selector | Line |
|----------|------|
| `body::before, body::after` (blobs) | 53-62 |
| `body::before` (purple blob) | 64-71 |
| `body::after` (pink blob) | 73-80 |
| `@keyframes blobFloat1` | 82-96 |
| `@keyframes blobFloat2` | 98-112 |

### 🪟 Glass Card (Lines 114-141)
| Class | Purpose | Line |
|-------|---------|------|
| `.glass-card` | Base glass card | 115-125 |
| `.glass-card::before` | Top shine line | 127-135 |
| `.glass-card:hover` | Hover lift | 137-141 |

### 📦 Container (Lines 143-153)
| Class | Purpose | Line |
|-------|---------|------|
| `.main-container` | Max-width wrapper | 144-153 |

### 🔝 Header/Navbar (Lines 155-219)
| Class | Purpose | Line |
|-------|---------|------|
| `.app-header` | Sticky glass header | 156-171 |
| `.app-logo` | Logo wrapper | 173-179 |
| `.app-logo-icon` | Logo image | 181-187 |
| `.app-logo-text` | Logo gradient text | 189-197 |
| `.nav-links` | Nav list | 199-203 |
| `.nav-link` | Nav item | 205-213 |
| `.nav-link:hover, .active` | Nav active state | 215-219 |

### 🦸 Hero Section (Lines 221-259)
| Class | Purpose | Line |
|-------|---------|------|
| `.hero-section` | Hero wrapper | 222-226 |
| `.hero-badge` | Badge pill | 228-239 |
| `.hero-title` | H1 gradient | 241-251 |
| `.hero-subtitle` | Subtitle | 253-259 |

### 📌 Section Title (Lines 261-283)
| Class | Purpose | Line |
|-------|---------|------|
| `.section-title` | Section heading | 262-271 |
| `.section-title-icon` | Icon box | 273-283 |

### 📗 Chapter Cards (Lines 285-404)
| Class | Purpose | Line |
|-------|---------|------|
| `.chapters-grid` | Grid layout | 286-292 |
| `.chapter-card` | Card base | 294-309 |
| `.chapter-card::before` | Top gradient bar | 311-321 |
| `.chapter-card:hover` | Hover effect | 323-327 |
| `.chapter-number` | Number badge | 333-347 |
| `.chapter-title` | Card title | 349-355 |
| `.chapter-subtitle` | Card desc | 357-362 |
| `.chapter-actions` | Buttons row | 364-367 |

### 🔘 Buttons (Lines 369-404)
| Class | Purpose | Line |
|-------|---------|------|
| `.btn` | Base button | 369-382 |
| `.btn-primary` | Purple gradient | 384-388 |
| `.btn-primary:hover` | Hover glow | 390-393 |
| `.btn-secondary` | Outline button | 395-399 |
| `.btn-secondary:hover` | Hover fill | 401-404 |

### 📄 Page Header (Lines 406-458)
| Class | Purpose | Line |
|-------|---------|------|
| `.page-header` | Page top | 407-413 |
| `.back-btn` | Back arrow | 415-433 |
| `.back-btn:hover` | Hover scale | 435-438 |
| `.page-title` | Page H1 | 440-446 |
| `.page-tag` | Badge tag | 448-458 |

### 📖 Theory (Lines 460-605)
| Class | Purpose | Line |
|-------|---------|------|
| `.theory-container` | Wrapper | 461-465 |
| `.theory-content` | Flex column | 467-472 |
| `.theory-block` | Card block | 474-486 |
| `.theory-block:nth-child(1-8)` | Stagger anim | 488-518 |
| `@keyframes fadeInUp` | Fade in | 520-530 |
| `.theory-block::before` | Left bar | 532-541 |
| `.theory-block-title` | Block title | 543-552 |
| `.example-box` | Example card | 578-584 |
| `.example-box-title` | Example title | 586-592 |
| `.highlight` | Highlight text | 599-605 |

### 📊 Table (Lines 607-640)
| Class | Purpose | Line |
|-------|---------|------|
| `.number-table` | Table base | 608-615 |
| `.number-table th` | Header cell | 617-625 |
| `.number-table td` | Data cell | 627-632 |

### 📝 Test/Quiz (Lines 642-782)
| Class | Purpose | Line |
|-------|---------|------|
| `.test-container` | Test wrapper | 643-647 |
| `.test-header-card` | Test header | 649-658 |
| `.test-info` | Info row | 660-666 |
| `.question-card` | Question block | 680-690 |
| `.question-number` | Q number | 692-698 |
| `.question-text` | Q text | 700-706 |
| `.options-grid` | 2x2 grid | 708-712 |
| `.option-btn` | Option button | 714-728 |
| `.option-btn.selected` | Selected | 736-741 |
| `.option-btn.correct` | Correct ✅ | 743-747 |
| `.option-btn.incorrect` | Wrong ❌ | 749-753 |
| `.option-label` | A/B/C/D label | 755-767 |

### 🏆 Score (Lines 784-818)
| Class | Purpose | Line |
|-------|---------|------|
| `.score-card` | Score wrapper | 785-794 |
| `.score-circle` | Score circle | 796-806 |
| `.score-value` | Score text | 808-813 |
| `.score-label` | Score label | 815-819 |

### 📊 Progress (Lines 821-849)
| Class | Purpose | Line |
|-------|---------|------|
| `.progress-container` | Flex wrapper | 822-827 |
| `.progress-bar-bg` | Bar bg | 829-835 |
| `.progress-bar-fill` | Bar fill | 837-842 |
| `.progress-text` | Percentage | 844-849 |

### 🦶 Footer (Lines 851-863)
| Class | Purpose | Line |
|-------|---------|------|
| `.app-footer` | Footer | 852-858 |
| `.app-footer a` | Footer link | 860-863 |

### 🏠 Start Card — Home (Lines 865-987)
| Class | Purpose | Line |
|-------|---------|------|
| `.start-card-wrapper` | Center wrapper | 866-872 |
| `.start-card` | Card base | 874-881 |
| `.start-card::after` | Shine effect | 883-898 |
| `@keyframes cardShine` | Rotate shine | 900-908 |
| `.start-card-icon` | Emoji icon | 910-914 |
| `@keyframes iconBounce` | Bounce anim | 916-926 |
| `.start-card-title` | Title | 928-937 |
| `.start-card-desc` | Description | 939-944 |
| `.start-card-stats` | Stats row | 946-951 |
| `.start-stat` | Stat item | 953-958 |
| `.start-btn` | CTA button | 970-975 |
| `@keyframes glowPulse` | Glow anim | 977-987 |

### 📱 Responsive (Lines 989-1206)
| Breakpoint | Line |
|------------|------|
| `.no-scroll` | 992-1001 |
| `@media (max-width: 768px)` — Tablet | 1004-1110 |
| `@media (max-width: 480px)` — Mobile | 1113-1191 |
| `@media (min-width: 1400px)` — Large | 1194-1206 |

---
**Total Lines: 1206 | Total Classes: 65+ | Total Animations: 6**

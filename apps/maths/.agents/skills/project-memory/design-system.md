# 🎨 Design System — Maths App

## Color Palette

### Primary Colors
```
Purple (Primary):     #6c5ce7  → buttons, accents, highlights
Purple (Secondary):   #a29bfe  → gradients, hover states
Glow:                 rgba(108, 92, 231, 0.3) → shadows
```

### Background Gradient
```
Light Gray:   #e0e5ec  (0%)
White:        #f5f7fa  (50%)
Pale Blue:    #dfe9f3  (100%)
Direction:    135deg
```

### Text Colors
```
Primary:    #2d3436  → headings, main text
Secondary:  #636e72  → subtitles, descriptions
Light:      #b2bec3  → footer, hints
```

### Glass Colors
```
Glass BG:        rgba(255, 255, 255, 0.55)
Glass BG Hover:  rgba(255, 255, 255, 0.75)
Glass Border:    rgba(255, 255, 255, 0.6)
```

### Status Colors
```
Success (Correct):  #00b894
Error (Incorrect):  #d63031
Locked (Coming):    #b2bec3 → #636e72 gradient
Pink Accent:        #fd79a8
Orange Accent:      #e17055
```

## Typography

### Fonts
```css
/* Headings — Modern, Bold */
font-family: 'Outfit', sans-serif;  /* var(--font-main) */

/* Body — Clean, Readable */
font-family: 'Poppins', sans-serif; /* var(--font-body) */

/* Google Fonts Import */
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap');
```

### Font Sizes
| Element | Size | Weight | Font |
|---------|------|--------|------|
| Hero Title | 2.2rem | 800 | Outfit |
| Page Title | 1.4rem | 700 | Outfit |
| Section Title | 1.35rem | 700 | Outfit |
| Start Card Title | 1.45rem | 700 | Outfit |
| Chapter Title | 1.15rem | 700 | Outfit |
| Body Text | 0.92rem | 400 | Poppins |
| Button | 0.85rem | 600 | Poppins |
| Nav Link | 0.9rem | 500 | Poppins |
| Badge | 0.8rem | 500 | Poppins |
| Footer | 0.75rem | 400 | Poppins |

## Border Radius
```
Small:   8px   → var(--radius-sm) → buttons, badges
Medium:  12px  → var(--radius-md) → inner cards
Large:   16px  → var(--radius-lg) → main cards
XLarge:  20px  → var(--radius-xl) → hero sections
Pill:    50px  → badges, progress bars
```

## Shadows
```css
/* Default */
box-shadow: 0 8px 32px rgba(31, 38, 135, 0.12);

/* Hover */
box-shadow: 0 12px 40px rgba(31, 38, 135, 0.2);

/* Button Glow */
box-shadow: 0 4px 15px rgba(108, 92, 231, 0.3);

/* Button Hover Glow */
box-shadow: 0 6px 20px rgba(108, 92, 231, 0.45);
```

## Transitions
```css
/* Smooth (default) */
all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

/* Bounce (special) */
all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

## Animations (6 Total)
| Name | Purpose | Duration |
|------|---------|----------|
| `blobFloat1` | Background blob 1 | 15s infinite |
| `blobFloat2` | Background blob 2 | 18s infinite |
| `fadeInUp` | Page load fade | 0.5s |
| `cardShine` | Card shine rotate | 8s infinite |
| `iconBounce` | Icon bounce | 3s infinite |
| `glowPulse` | Button glow | 2.5s infinite |

## Glassmorphism Recipe
```css
/* Standard Glass Card */
background: rgba(255, 255, 255, 0.55);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.6);
border-radius: 16px;
box-shadow: 0 8px 32px rgba(31, 38, 135, 0.12);
```

## Gradient Patterns
```css
/* Primary Button */
background: linear-gradient(135deg, #6c5ce7, #a29bfe);

/* Logo Text */
background: linear-gradient(135deg, #6c5ce7, #e17055);

/* Hero Title */
background: linear-gradient(135deg, #2d3436, #6c5ce7);

/* Top Bar (chapter card) */
background: linear-gradient(90deg, #6c5ce7, #a29bfe, #fd79a8);

/* Left Bar (theory block) */
background: linear-gradient(180deg, #6c5ce7, #a29bfe);
```

## Responsive Breakpoints
| Breakpoint | Target | Changes |
|------------|--------|---------|
| `max-width: 480px` | Mobile | Stack buttons, smaller text |
| `max-width: 768px` | Tablet | Single column grid |
| `min-width: 1400px` | Desktop XL | 3-column grid |

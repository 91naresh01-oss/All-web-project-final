# 🧩 Component Patterns — Reusable Code Snippets

## 1. Header (દરેક page માં)
```jsx
<header className="app-header">
  <Link href="/" className="app-logo">
    <img src="/logo.png" alt="Maths Logo" className="app-logo-icon" />
    <span className="app-logo-text">ગણિત શીખો</span>
  </Link>
  <nav>
    <ul className="nav-links">
      <li><Link href="/" className="nav-link">🏠 હોમ</Link></li>
      <li><Link href="/chapters" className="nav-link active">📚 પ્રકરણો</Link></li>
    </ul>
  </nav>
</header>
```
**Note:** `active` class current page ના link પર મૂકો.

## 2. Footer (દરેક page માં)
```jsx
<footer className="app-footer">
  <p>© 2026 ગણિત શીખો</p>
</footer>
```

## 3. Page Header (Back Button + Title)
```jsx
<div className="page-header">
  <Link href="/chapters" className="back-btn">←</Link>
  <h1 className="page-title">
    પેજ ટાઇટલ
    <span className="page-tag">📖 ટેગ</span>
  </h1>
</div>
```

## 4. Glass Card
```jsx
<div className="glass-card">
  {/* content */}
</div>
```

## 5. Chapter Card
```jsx
<div className="chapter-card">
  <div className="chapter-number">1</div>
  <h3 className="chapter-title">સંખ્યાજ્ઞાન</h3>
  <p className="chapter-subtitle">
    Description text here
  </p>
  <div className="chapter-actions">
    <Link href="/chapter/1/theory" className="btn btn-primary">
      📖 થ્યોરી વાંચો
    </Link>
    <Link href="/chapter/1/test" className="btn btn-secondary">
      📝 ટેસ્ટ આપો
    </Link>
  </div>
</div>
```

## 6. Locked Chapter Card
```jsx
<div className="chapter-card" style={{ opacity: 0.6 }}>
  <div className="chapter-number" style={{ background: 'linear-gradient(135deg, #b2bec3, #636e72)' }}>2</div>
  <h3 className="chapter-title">Chapter Name</h3>
  <p className="chapter-subtitle">ટૂંક સમયમાં ઉપલબ્ધ થશે.</p>
  <div className="chapter-actions">
    <span className="btn btn-secondary" style={{ cursor: 'default' }}>🔒 ટૂંક સમયમાં</span>
  </div>
</div>
```

## 7. Theory Block
```jsx
<div className="theory-block">
  <h3 className="theory-block-title">
    <span className="icon">📌</span> ટાઇટલ
  </h3>
  <p>Content text here...</p>
  <ul>
    <li>Point 1</li>
    <li>Point 2</li>
  </ul>
</div>
```

## 8. Example Box (Theory inside)
```jsx
<div className="example-box">
  <h4 className="example-box-title">✏️ ઉદાહરણ:</h4>
  <p>Example text with <span className="highlight">highlighted</span> parts.</p>
</div>
```

## 9. Number Table
```jsx
<table className="number-table">
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Data</td><td>Data</td></tr>
  </tbody>
</table>
```

## 10. Question Card (Test)
```jsx
<div className="question-card" style={{ animationDelay: `${index * 0.1}s` }}>
  <div className="question-number">પ્રશ્ન {index + 1}</div>
  <div className="question-text">{question.text}</div>
  <div className="options-grid">
    {question.options.map((opt, i) => (
      <button
        key={i}
        className={`option-btn ${selected === i ? 'selected' : ''}`}
        onClick={() => handleSelect(i)}
      >
        <span className="option-label">{['A','B','C','D'][i]}</span>
        {opt}
      </button>
    ))}
  </div>
</div>
```

## 11. Score Card (Test Result)
```jsx
<div className="score-card">
  <div className="score-circle">
    <span className="score-value">{score}/{total}</span>
  </div>
  <p className="score-label">તમારો સ્કોર</p>
</div>
```

## 12. Progress Bar
```jsx
<div className="progress-container">
  <div className="progress-bar-bg">
    <div className="progress-bar-fill" style={{ width: `${percent}%` }}></div>
  </div>
  <span className="progress-text">{percent}%</span>
</div>
```

## 13. Button Variants
```jsx
{/* Primary (gradient purple) */}
<Link href="/..." className="btn btn-primary">📖 થ્યોરી વાંચો</Link>

{/* Secondary (outline) */}
<Link href="/..." className="btn btn-secondary">📝 ટેસ્ટ આપો</Link>

{/* Start Button (home page CTA) */}
<Link href="/chapters" className="btn btn-primary start-btn">🚀 શરૂ કરો</Link>
```

## 14. Section Title
```jsx
<div className="section-title">
  <div className="section-title-icon">📚</div>
  Section Name
</div>
```

## 15. Page Layout Template (New Page)
```jsx
import Link from 'next/link';

export const metadata = {
  title: 'Page Title | ગણિત શીખો',
  description: 'Page description in Gujarati',
};

export default function PageName() {
  return (
    <>
      {/* Header */}
      <header className="app-header">
        <Link href="/" className="app-logo">
          <img src="/logo.png" alt="Maths Logo" className="app-logo-icon" />
          <span className="app-logo-text">ગણિત શીખો</span>
        </Link>
        <nav>
          <ul className="nav-links">
            <li><Link href="/" className="nav-link">🏠 હોમ</Link></li>
            <li><Link href="/chapters" className="nav-link active">📚 પ્રકરણો</Link></li>
          </ul>
        </nav>
      </header>

      <main className="main-container">
        {/* Page Header */}
        <div className="page-header">
          <Link href="/chapters" className="back-btn">←</Link>
          <h1 className="page-title">
            ટાઇટલ
            <span className="page-tag">📖 ટેગ</span>
          </h1>
        </div>

        {/* Content */}
        {/* ... */}
      </main>

      <footer className="app-footer">
        <p>© 2026 ગણિત શીખો</p>
      </footer>
    </>
  );
}
```

## RULES
- દરેક page માં Header + Footer MUST
- Logo always `/logo.png`
- Font: Outfit (headings), Poppins (body)
- Glass effect → `.glass-card` class OR manual glassmorphism CSS
- Animations → `fadeInUp` for page load elements

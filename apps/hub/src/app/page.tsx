import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const subjects = [
  {
    id: 'english',
    icon: '🇬🇧',
    title: 'English Words',
    subtitle: 'Vocabulary • Grammar • Spelling',
    description:
      'English શબ્દો શીખો, Grammar practice કરો, Spelling Journey explore કરો. 7 Books with complete lessons.',
    href: '/english',
    cardClass: 'card-english',
    chapters: '7 Books',
  },
  {
    id: 'gujarati',
    icon: '📖',
    title: 'ગુજરાતી વ્યાકરણ',
    subtitle: 'Theory • Test • PDF',
    description:
      'ગુજરાતી વ્યાકરણ ના 39 પ્રકરણો — Theory, MCQ Test, અને PDF notes. સ્પર્ધાત્મક પરીક્ષા માટે ઉત્તમ.',
    href: '/gujarati',
    cardClass: 'card-gujarati',
    chapters: '39 Chapters',
  },
  {
    id: 'maths',
    icon: '📐',
    title: 'ગણિત (Maths)',
    subtitle: 'Chapters • Practice • Solutions',
    description:
      'ગણિત ના તમામ chapters — Theory, Practice questions, અને step-by-step solutions. PDF viewer included.',
    href: '/maths',
    cardClass: 'card-maths',
    chapters: '25+ Chapters',
  },
];

const stats = [
  { number: '70+', label: 'Chapters' },
  { number: '3', label: 'Subjects' },
  { number: '1000+', label: 'Questions' },
  { number: 'Free', label: 'Forever' },
];

export default function HomePage() {
  return (
    <>
      {/* Background Blobs */}
      <div className="bg-blobs">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <main className="main-container">
        {/* Header */}
        <header className="header">
          <div className="header-icon">🎓</div>
          <h1>Edu Platform</h1>
          <p>શીખો • પ્રેક્ટિસ કરો • સફળ થાઓ</p>
        </header>

        {/* Subject Cards */}
        <div className="cards-grid">
          {subjects.map((subject) => (
            <Link
              key={subject.id}
              href={subject.href}
              className={`subject-card ${subject.cardClass}`}
              id={`card-${subject.id}`}
            >
              <div className="card-icon">{subject.icon}</div>
              <div className="card-title">{subject.title}</div>
              <div className="card-subtitle">{subject.subtitle}</div>
              <div className="card-description">{subject.description}</div>
              <div className="card-arrow">
                {subject.chapters} — શરૂ કરો <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>

        {/* Stats */}
        <div className="stats-bar">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="footer">
          <p>© 2026 Edu Platform — Made with ❤️ for Students</p>
        </footer>
      </main>
    </>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/ui/Header';


export default function Home() {
  return (
    <div className="home-fullscreen">

      {/* Topbar (Header) */}
      <div className="w-full px-4 pt-1.5 sm:pt-2 z-50">
        <Header />
      </div>

      {/* Academy Logo */}
      <div className="w-full flex justify-center mt-1 sm:mt-2 z-20 animate-[titleSlideUp_0.8s_ease-out]">
        <div className="relative hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center justify-center animate-[titleSlideUp_0.6s_ease-out]">
            <Image
              src="/gyan-logo.png"
              alt="Gyan Academy"
              width={160}
              height={70}
              className="transition-all duration-500 drop-shadow-md scale-90 sm:scale-100"
              priority
            />
          </div>
        </div>
      </div>

      {/* Main Content — vertically centered in remaining space */}
      <div className="home-center-area">

        {/* Inspiring Quote */}
        <div className="px-4 text-center animate-[titleSlideUp_0.8s_ease-out] mb-3 sm:mb-5">
          <p className="text-slate-700 font-main font-semibold text-[0.85rem] sm:text-[1rem] tracking-wide opacity-90 drop-shadow-sm">
            &quot;તમારો આજનો અભ્યાસ, તમારું આવતીકાલનું ભવિષ્ય છે.&quot;
          </p>
        </div>

        {/* Main Glassmorphism Card */}
        <div
          className="w-full max-w-[285px] sm:max-w-[340px] px-4 py-8 sm:px-5 flex items-center justify-center relative animate-[fadeInScale_1.2s_ease-out]"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.55)',
            borderRadius: '24px',
            border: '2px solid var(--aura-glass-border)',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.06)',
          }}
        >
          <main className="flex flex-col items-center gap-5 sm:gap-6 text-center w-full">

            {/* Title Section */}
            <div className="space-y-2 animate-[titleSlideUp_1s_ease-out] w-full sm:mt-1">
              <h1
                className="text-[1.8rem] sm:text-[2.1rem] font-bold leading-none tracking-tight font-gujarati drop-shadow-sm"
                style={{
                  color: 'var(--aura-text-dark)',
                  letterSpacing: '-0.02em'
                }}
              >
                ગણિત
              </h1>
            </div>

            {/* Features Row */}
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 w-full animate-[fadeInScale_1.4s_ease-out]">
              <div className="flex flex-1 z-10 items-center justify-center gap-1.5 px-1 py-1 cursor-default transition-transform hover:scale-105">
                <span className="text-[0.95rem] sm:text-[1.05rem]">📖</span>
                <span className="text-[#1e3a8a] font-extrabold text-[0.65rem] sm:text-[0.75rem] uppercase tracking-wide drop-shadow-sm">THEORY</span>
              </div>
              <div className="flex flex-1 z-10 items-center justify-center gap-1.5 px-1 py-1 cursor-default transition-transform hover:scale-105">
                <span className="text-[0.95rem] sm:text-[1.05rem]">📝</span>
                <span className="text-[#6b21a8] font-extrabold text-[0.65rem] sm:text-[0.75rem] uppercase tracking-wide drop-shadow-sm">TEST</span>
              </div>
              <div className="flex flex-1 z-10 items-center justify-center gap-1.5 px-1 py-1 cursor-default transition-transform hover:scale-105">
                <span className="text-[0.95rem] sm:text-[1.05rem]">🏆</span>
                <span className="text-[#be123c] font-extrabold text-[0.65rem] sm:text-[0.75rem] uppercase tracking-wide drop-shadow-sm">SCORE</span>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/chapters"
              prefetch={false}
              className="group relative overflow-hidden text-white w-full py-[9px] sm:py-[12px] rounded-xl font-bold text-[0.9rem] sm:text-[0.95rem] shadow-[0_8px_15px_rgba(99,102,241,0.25)] transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_12px_25px_rgba(99,102,241,0.35)] active:scale-[0.95] mt-1 sm:mb-1"
              style={{
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                fontFamily: 'var(--font-main)',
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">🚀 શરૂ કરો — Start</span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

          </main>
        </div>
      </div>

      {/* Compact Footer */}
      <div className="w-full py-2 flex items-center justify-center gap-5 animate-[fadeIn_1.5s_ease-out] z-20">
        <Link
          href="/about"
          className="text-slate-400 hover:text-indigo-500 text-[0.8rem] sm:text-[0.85rem] font-medium transition-all duration-300"
        >
          About Us
        </Link>
        <div className="w-[1px] h-4 bg-slate-300" />
        <Link
          href="/contact"
          className="text-slate-400 hover:text-indigo-500 text-[0.8rem] sm:text-[0.85rem] font-medium transition-all duration-300"
        >
          Contact Us
        </Link>
      </div>

    </div>
  );
}

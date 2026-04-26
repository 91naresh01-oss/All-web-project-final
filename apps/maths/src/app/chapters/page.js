import Link from 'next/link';
import Header from '../../components/ui/Header';

import { chaptersData } from '../../data/chaptersData';

export const metadata = {
    title: 'પ્રકરણો — Chapters | ગણિત શીખો',
    description: 'ગણિતના બધા પ્રકરણોની યાદી. સંખ્યાજ્ઞાન, પૂર્ણાંક, અપૂર્ણાંક અને વધુ.',
};

// Theme color definitions for dynamic Tailwind classes
const themeColors = {
    1: { stripe: 'from-rose-600 to-rose-400', badge: 'from-rose-600 to-rose-800', glow: 'shadow-rose-500/10' },
    2: { stripe: 'from-indigo-500 to-indigo-300', badge: 'from-indigo-500 to-indigo-800', glow: 'shadow-indigo-500/10' },
    3: { stripe: 'from-sky-500 to-sky-300', badge: 'from-sky-500 to-sky-800', glow: 'shadow-sky-500/10' },
    4: { stripe: 'from-emerald-500 to-emerald-300', badge: 'from-emerald-500 to-emerald-800', glow: 'shadow-emerald-500/10' },
    5: { stripe: 'from-amber-500 to-amber-300', badge: 'from-amber-500 to-amber-600', glow: 'shadow-amber-500/10' },
    6: { stripe: 'from-slate-600 to-slate-400', badge: 'from-slate-600 to-slate-800', glow: 'shadow-slate-500/10' },
    7: { stripe: 'from-violet-500 to-violet-300', badge: 'from-violet-500 to-violet-800', glow: 'shadow-violet-500/10' },
    8: { stripe: 'from-teal-500 to-teal-300', badge: 'from-teal-500 to-teal-800', glow: 'shadow-teal-500/10' },
    9: { stripe: 'from-rose-500 to-rose-300', badge: 'from-rose-500 to-rose-800', glow: 'shadow-rose-500/10' },
    10: { stripe: 'from-teal-400 to-teal-200', badge: 'from-teal-400 to-teal-700', glow: 'shadow-teal-400/10' },
};

export default function ChaptersPage() {
    return (
        <>
            <Header rightIconHref="/chapters" rightIconText="" />

            {/* Page-specific background override */}
            <div
                className="fixed inset-0 -z-10 pointer-events-none"
                style={{
                    background: `
                        radial-gradient(circle at 0% 0%, #7ED6A5 0%, transparent 65%),
                        radial-gradient(circle at 100% 100%, #C4A1E0 0%, transparent 65%),
                        #ffffff
                    `,
                }}
            />

            <main className="w-full flex-1 max-w-[1200px] mx-auto px-3 sm:px-5 pb-8">

                {/* Page Header */}
                <div className="w-full max-w-[1000px] mx-auto pt-4 px-1">
                    <div className="flex items-center justify-center gap-3 mb-5 relative w-full">
                        <Link
                            href="/"
                            className="absolute left-0 top-1/2 -translate-y-1/2 custom-back-btn"
                            title="Home"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                        </Link>
                        <h1 
                            className="font-main text-[1.5rem] font-extrabold leading-tight text-center tracking-tight"
                            style={{ color: 'var(--aura-text-dark)' }}
                        >
                            Chapters
                        </h1>
                    </div>
                </div>

                {/* Chapters Grid — slightly larger cards on PC */}
                <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-4 sm:gap-5 w-full max-w-[1000px] mx-auto mb-8">
                    {chaptersData.map((chapter, index) => {
                        const themeNum = (index % 10) + 1;
                        const theme = themeColors[themeNum];
                        const testAvailable = chapter.hasTest !== false;

                        return (
                            <div
                                key={chapter.id}
                                className={`relative flex flex-col overflow-hidden group`}
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.55)',
                                    borderRadius: '24px',
                                    border: '2px solid var(--aura-glass-border)',
                                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
                                    ...(chapter.hasLock ? { opacity: 0.6 } : {})
                                }}
                            >

                                {/* Left Accent Stripe */}
                                <div className={`absolute top-0 left-0 w-[5px] h-full rounded-l-[24px] z-10 opacity-40 bg-gradient-to-b ${theme.stripe}`}></div>

                                {/* Card Content — responsive spacing */}
                                <div className="relative z-10 pl-4 pr-3 pt-4 sm:pt-6 pb-4 sm:pb-6 flex flex-col gap-3 sm:gap-4">
                                    {/* Title Row */}
                                    <div className="flex items-center gap-2.5 sm:gap-3">
                                        <span className={`w-[32px] sm:w-[34px] h-[32px] sm:h-[34px] min-w-[32px] sm:min-w-[34px] rounded-[10px] flex items-center justify-center text-[0.9rem] sm:text-[0.95rem] font-extrabold text-white font-main shadow-[0_3px_10px_rgba(0,0,0,0.12)] bg-gradient-to-br ${theme.badge}`}>
                                            {chapter.number}
                                        </span>
                                        <span className="font-main text-[1rem] sm:text-[1.05rem] font-bold text-slate-900 tracking-tight truncate whitespace-nowrap leading-normal">
                                            {chapter.title}
                                        </span>
                                    </div>

                                    {/* Subtitle — 2 line clamp */}
                                    <p className="text-[0.8rem] sm:text-[0.85rem] text-slate-500 leading-relaxed font-medium line-clamp-2 pl-[42px] sm:pl-[46px]">
                                        {chapter.subtitle}
                                    </p>
                                </div>

                                {/* Card Actions — responsive padding */}
                                <div className="flex gap-2 px-3 sm:px-4 pb-4 sm:pb-6 mt-auto">
                                    {!chapter.hasLock ? (
                                        <>
                                            {chapter.hasTheory !== false && chapter.theoryLink && (
                                                <Link
                                                    href={chapter.theoryLink}
                                                    prefetch={false}
                                                    className="flex-1 inline-flex items-center justify-center h-[32px] sm:h-[34px] rounded-xl font-main font-bold text-[0.8rem] sm:text-[0.85rem] no-underline border-2 border-transparent relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-700 text-white shadow-[0_3px_12px_rgba(30,41,59,0.18)]"
                                                >
                                                    Theory
                                                </Link>
                                            )}
                                            {chapter.hasPractice === true && chapter.practiceLink && (
                                                <Link
                                                    href={chapter.practiceLink}
                                                    prefetch={false}
                                                    className="flex-1 inline-flex items-center justify-center h-[32px] sm:h-[34px] rounded-xl font-main font-bold text-[0.8rem] sm:text-[0.85rem] no-underline border-2 border-transparent relative overflow-hidden bg-gradient-to-br from-emerald-600 to-emerald-500 text-white shadow-[0_3px_12px_rgba(16,185,129,0.22)]"
                                                >
                                                    Practice
                                                </Link>
                                            )}
                                            {testAvailable ? (
                                                <Link
                                                    href={chapter.testLink}
                                                    prefetch={false}
                                                    className="flex-1 inline-flex items-center justify-center h-[32px] sm:h-[34px] rounded-xl font-main font-bold text-[0.8rem] sm:text-[0.85rem] no-underline border-2 border-transparent relative overflow-hidden bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-[0_3px_12px_rgba(99,102,241,0.22)]"
                                                >
                                                    Test
                                                </Link>
                                            ) : (
                                                <span
                                                    className="flex-1 inline-flex items-center justify-center h-[32px] sm:h-[34px] rounded-xl font-main font-bold text-[0.8rem] sm:text-[0.85rem] no-underline border-2 border-transparent relative overflow-hidden bg-[#b2bec3] text-white opacity-55 gray cursor-default pointer-events-none"
                                                >
                                                    T-Soon
                                                </span>
                                            )}
                                            <Link
                                                href={`/pdf-view?file=${chapter.pdf}&title=${chapter.title}`}
                                                prefetch={false}
                                                className="flex-1 inline-flex items-center justify-center h-[32px] sm:h-[34px] rounded-xl font-main font-bold text-[0.8rem] sm:text-[0.85rem] no-underline border-[1.5px] border-slate-400/25 relative overflow-hidden bg-white/90 text-slate-700 shadow-[0_2px_6px_rgba(15,23,42,0.05)]"
                                            >
                                                PDF
                                            </Link>
                                        </>
                                    ) : (
                                        <span
                                            className="flex-1 inline-flex items-center justify-center h-[32px] sm:h-[34px] rounded-xl font-main font-bold text-[0.8rem] sm:text-[0.85rem] no-underline border-2 border-transparent relative overflow-hidden bg-[#b2bec3] text-white opacity-55 gray cursor-default pointer-events-none"
                                        >
                                            {chapter.lockMessage}
                                        </span>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>


        </>
    );
}

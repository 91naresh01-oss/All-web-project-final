import React from 'react';
import Link from 'next/link';
import Header from '../../../../components/ui/Header';

import { chaptersData } from '../../../../data/chaptersData';
import { getChapterTheory, getChapterQuestions } from '../../../../data/chapters';
import {
    RichContentStack,
    getFormulaContent,
    renderMathText,
} from '../../../../lib/richMath';


/* ===== Color Palettes — Unique gradient for each section type ===== */
const PALETTES = {
    intro: {
        kicker: 'Quick Notes',
        titleColor: 'text-white',
        gradient: 'linear-gradient(135deg, #D49B24, #EFD15B)', // Premium Gold Gradient
        border: 'transparent',
        circle: '#E0CC5B',
        accent: '#D49B24',
        lightBg: 'transparent',
        subBorder: 'rgba(255,255,255,0.4)',
    },
    section: {
        kicker: 'Base Theory',
        titleColor: 'text-white',
        gradient: 'linear-gradient(135deg, #059669, #34D399)', // Emerald Green
        border: 'transparent',
        circle: '#047857',
        accent: '#059669',
        lightBg: '#ECFDF5',
        subBorder: '#A7F3D0',
    },
    formulaGrid: {
        kicker: 'Formula',
        titleColor: 'text-white',
        gradient: 'linear-gradient(135deg, #059669, #34D399)', // Emerald Green
        border: '#10B981',
        circle: 'linear-gradient(135deg, #059669, #34D399)',
        accent: '#059669',
        lightBg: '#ECFDF5',
        subBorder: '#A7F3D0',
    },
    signRules: {
        kicker: 'Rules',
        titleColor: 'text-white',
        gradient: 'linear-gradient(135deg, #059669, #34D399)', // Emerald Green
        border: '#10B981',
        circle: 'linear-gradient(135deg, #059669, #34D399)',
        accent: '#059669',
        lightBg: '#ECFDF5',
        subBorder: '#A7F3D0',
    },
    confusionPoints: {
        kicker: 'Confusion Points',
        titleColor: 'text-white',
        gradient: 'linear-gradient(135deg, #D49B24, #EFD15B)', // Premium Gold Gradient
        border: 'transparent',
        circle: '#E0CC5B',
        accent: '#D49B24',
        lightBg: 'transparent',
        subBorder: 'rgba(255,255,255,0.4)',
    },
    solvedExamples: {
        kicker: 'Examples',
        titleColor: 'text-white',
        gradient: 'linear-gradient(135deg, #EA580C, #F97316)', // Deep Orange
        border: 'transparent',
        circle: '#C2410C',
        accent: '#C2410C',
        lightBg: '#FFF7ED',
        subBorder: '#FED7AA',
    },
    comparisonCard: {
        kicker: 'Comparison',
        titleColor: 'text-white',
        gradient: 'linear-gradient(135deg, #C026D3, #E879F9)', // Purple
        border: '#D946EF',
        circle: 'linear-gradient(135deg, #C026D3, #E879F9)',
        accent: '#C026D3',
        lightBg: '#FDF4FF',
        subBorder: '#F5D0FE',
    },
};

/* Rotating colors for sub-cards (examples, formulas) */
const CARD_COLORS = [
    { bg: '#F3E8FF', border: '#C084FC', accent: '#7E22CE' }, // Dark Purple
    { bg: '#ECFDF5', border: '#A7F3D0', accent: '#059669' }, // Green
    { bg: '#FFF1F2', border: '#FECDD3', accent: '#E11D48' }, // Rose
    { bg: '#FFFBEB', border: '#FDE68A', accent: '#D97706' }, // Amber
    { bg: '#FDF4FF', border: '#F5D0FE', accent: '#C026D3' }, // Fuchsia
    { bg: '#F0FDF4', border: '#BBF7D0', accent: '#16A34A' }, // Emerald
];

function getPalette(type, title = '') {
    const t = title.toLowerCase();

    if (t.includes('ગૂંચવ') || t.includes('ગુંચવ') || t.includes('મુંઝવ') || t.includes('મૂંઝવ') || t.includes('confusion')) {
        return PALETTES.confusionPoints;
    }
    if (t.includes('ઝડપી') || t.includes('quick')) {
        return PALETTES.intro;
    }
    if (t.includes('સિદ્ધાંત') || t.includes('મુખ્ય') || t.includes('theory') || t.includes('base') || t.includes('ખ્યાલ') || t.includes('points')) {
        if (!t.includes('confusion')) return PALETTES.section;
    }
    if (t.includes('સૂત્ર') || t.includes('formula')) {
        return PALETTES.formulaGrid;
    }
    if (t.includes('નિયમ') || t.includes('rules')) {
        return PALETTES.signRules;
    }
    if (t.includes('દાખલા') || t.includes('ઉદાહરણ') || t.includes('type') || t.includes('examples') || t.includes('example')) {
        return PALETTES.solvedExamples;
    }
    if (t.includes('સરખામણી') || t.includes('તફાવત') || t.includes('comparison')) {
        return PALETTES.comparisonCard;
    }

    return PALETTES[type] || PALETTES.section;
}

function TheoryCard({ children, palette }) {
    return (
        <div
            className="rounded-2xl overflow-hidden mb-3"
            style={{
                background: 'rgba(255,255,255,0.65)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.5)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                contentVisibility: 'auto',
                containIntrinsicSize: 'auto 300px',
            }}
        >
            {children}
        </div>
    );
}

/* ===== Gradient Header (Premium Redesign) ===== */
function TheoryHeader({ item, palette }) {
    // If title starts with "Type N: ", we separate it
    let badgeText = palette.kicker;
    let mainTitle = item.title;

    const typeMatch = item.title && item.title.match(/^(Type\s*\d+|પ્રકાર\s*\d+)\s*[:-]\s*(.*)$/i);
    if (typeMatch) {
        badgeText = typeMatch[1];
        mainTitle = typeMatch[2];
    }

    return (
        <div
            className="px-4 py-3 sm:px-5 sm:py-3.5 flex items-center gap-3.5 sm:gap-4 relative overflow-hidden"
            style={{
                background: palette.gradient,
                borderBottom: '1px solid rgba(255,255,255,0.3)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4)'
            }}
        >
            {/* Glossy sheen */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.02) 100%)' }} />

            {/* Premium Icon Box */}
            <div className="relative">
                <div
                    className="relative flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-md shadow-[0_4px_12px_rgba(0,0,0,0.15)] z-10"
                    style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.1) 100%)',
                        backdropFilter: 'blur(10px)',
                        borderTop: '1px solid rgba(255,255,255,0.6)',
                        borderLeft: '1px solid rgba(255,255,255,0.6)',
                        borderBottom: '1px solid rgba(255,255,255,0.2)',
                        borderRight: '1px solid rgba(255,255,255,0.2)'
                    }}
                >
                    <span className="text-[1.15rem] sm:text-[1.25rem] drop-shadow-md filter saturate-150 transform transition-transform hover:scale-110">{item.icon || '✨'}</span>
                </div>
            </div>

            <div className="flex-1 flex flex-col justify-center relative z-10">
                {/* Upgraded Pill Badge for Kicker */}
                <div className="mb-0.5 sm:mb-1">
                    <span
                        className="inline-flex items-center px-2 py-0.5 rounded-full text-[0.6rem] sm:text-[0.65rem] font-black tracking-[0.12em] uppercase shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
                        style={{
                            background: 'rgba(255,255,255,0.25)',
                            border: '1px solid rgba(255,255,255,0.4)',
                            color: palette.titleColor === 'text-transparent' ? '#fff' : 'rgba(255,255,255,0.95)',
                            textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                        }}
                    >
                        {badgeText}
                    </span>
                </div>
                {/* Main Title Typography */}
                <h2
                    className={`text-[1.05rem] sm:text-[1.15rem] font-black leading-tight tracking-tight drop-shadow-lg ${palette.titleColor || 'text-white'}`}
                    style={{ textShadow: '0 2px 4px rgba(0,0,0,0.15)' }}
                >
                    {mainTitle}
                </h2>
            </div>
        </div>
    );
}

/* ===== Text Block ===== */
function TextContent({ content, lineKeyPrefix, className = '', palette }) {
    if (!content) return null;

    return (
        <div className={`relative mb-3.5 mt-1.5`}>
            <RichContentStack
                content={content}
                className={`text-[0.92rem] sm:text-[0.98rem] leading-relaxed text-slate-700 italic px-1 ${className}`}
                lineClassName="theory-text-line"
                mainClassName="theory-text-mainline font-medium opacity-90"
                subtextClassName="theory-text-subline"
                lineKeyPrefix={lineKeyPrefix}
            />
        </div>
    );
}

/* ===== Numbered List ===== */
function NumberedList({ items, palette, lineKeyPrefix }) {
    if (!items || !items.length) return null;

    return (
        <div className="flex flex-col mb-2 px-1">
            {items.map((li, idx) => (
                <div key={idx} className={`flex items-start gap-3.5 py-3 ${idx !== items.length - 1 ? 'border-b border-white/50' : ''}`}>
                    <span
                        className="flex-shrink-0 w-[28px] h-[28px] mt-0.5 rounded-full flex items-center justify-center text-white font-bold text-[0.85rem] shadow-sm drop-shadow-sm"
                        style={{ background: palette.circle }}
                    >
                        {idx + 1}
                    </span>
                    <div className="flex-1 pt-1">
                        <RichContentStack
                            content={li}
                            className="text-slate-700 text-[0.9rem] sm:text-[0.98rem]"
                            lineClassName="leading-relaxed"
                            mainClassName="font-medium"
                            subtextClassName="text-[0.8rem] opacity-70"
                            lineKeyPrefix={`${lineKeyPrefix}-${idx}`}
                            highlightClassName="bg-amber-100/50 text-amber-800 px-1 py-0.5 rounded font-bold"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

/* ===== Tip / Formula Bar ===== */
function TipBar({ tip, palette, index }) {
    if (!tip) return null;
    const isString = typeof tip === 'string';
    const tipTitle = isString ? null : (tip.title || 'યાદ રાખો :');
    const tipText = isString ? tip : tip.text;
    const tipPoints = isString ? null : tip.points;

    return (
        <div
            className="mt-3 rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 relative overflow-hidden"
            style={{
                background: 'rgba(255,255,255,0.35)',
                border: '1px solid rgba(255,255,255,0.5)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6), 0 4px 16px rgba(0,0,0,0.06)',
            }}
        >
            {/* Tinted glass tint based on palette */}
            <div className="absolute inset-0 rounded-xl pointer-events-none opacity-20" style={{ background: palette.gradient }} />
            {tipTitle && (
                <div className="flex items-center gap-1.5 font-extrabold text-slate-800 mb-1 md:text-[0.9rem] text-[0.85rem] relative z-10">
                    ⚡ {tipTitle}
                </div>
            )}
            {tipText && (
                <RichContentStack
                    content={tipText}
                    className="text-slate-700 font-semibold text-[0.85rem] md:text-[0.9rem] relative z-10"
                    lineClassName="leading-snug"
                    mainClassName="font-bold"
                    subtextClassName="text-[0.75rem] opacity-80"
                    lineKeyPrefix={`tip-${index}`}
                />
            )}
            {tipPoints && (
                <ul className="flex flex-col gap-1 mt-1 relative z-10">
                    {tipPoints.map((pt, pi) => (
                        <li key={pi} className="flex items-start gap-1.5 text-slate-700 text-[0.85rem] md:text-[0.9rem]">
                            <span className="mt-0.5 font-bold" style={{ color: palette.accent || '#059669' }}>✓</span>
                            <RichContentStack
                                content={pt}
                                className="flex-1"
                                lineClassName="leading-snug"
                                mainClassName="font-bold"
                                subtextClassName="text-[0.75rem] opacity-80"
                                lineKeyPrefix={`tip-p-${index}-${pi}`}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

/* ===== Formula Body (unchanged logic) ===== */
function FormulaBody({ formula, lineKeyPrefix }) {
    const { formulaLines, fraction, exampleLines, noteLines } = getFormulaContent(formula);
    return (
        <>
            <div className="bg-white/80 p-2.5 rounded-xl border border-slate-100/80 flex flex-col items-center justify-center min-h-[45px]">
                {fraction ? (
                    <div className="flex flex-col items-center gap-1 w-full">
                        <RichContentStack content={fraction.numerator} className="text-center w-full" lineClassName="leading-tight text-slate-800 font-bold" mainClassName="" subtextClassName="text-xs opacity-60" lineKeyPrefix={`${lineKeyPrefix}-ft`} />
                        <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-slate-400 to-transparent min-w-[40px] max-w-[120px]" />
                        <RichContentStack content={fraction.denominator} className="text-center w-full" lineClassName="leading-tight text-slate-800 font-bold" mainClassName="" subtextClassName="text-[0.65rem] opacity-60" lineKeyPrefix={`${lineKeyPrefix}-fb`} />
                    </div>
                ) : (
                    <RichContentStack content={formulaLines} className="text-center" lineClassName="leading-snug text-slate-900 font-bold text-base" mainClassName="" subtextClassName="text-xs opacity-60 font-normal" lineKeyPrefix={`${lineKeyPrefix}-f`} />
                )}
            </div>
            {exampleLines.length ? (
                <div className="mt-2 pt-1.5 border-t border-dashed border-slate-200/80">
                    <RichContentStack content={exampleLines} className="text-slate-500 italic text-xs" lineClassName="leading-normal" mainClassName="font-medium" subtextClassName="text-[0.65rem] opacity-70 not-italic" lineKeyPrefix={`${lineKeyPrefix}-ex`} />
                </div>
            ) : null}
            {noteLines.length ? (
                <div className="mt-1.5 bg-amber-50/60 p-1.5 rounded-md border border-amber-100/60">
                    <RichContentStack content={noteLines} className="text-sm text-amber-700/70 font-medium" lineClassName="leading-tight" mainClassName="" subtextClassName="text-xs opacity-60" lineKeyPrefix={`${lineKeyPrefix}-n`} fallbackTone="note" />
                </div>
            ) : null}
        </>
    );
}

/* ===== Main Page ===== */
export default async function DynamicChapterTheory({ params }) {
    const resolvedParams = await params;
    const chapterId = resolvedParams.chapterId;
    const chapterInfo = chaptersData.find((c) => c.id.toString() === chapterId);

    // Server-side fetching (instant HTML)
    const [theoryData, questions] = await Promise.all([
        getChapterTheory(chapterId),
        getChapterQuestions(chapterId),
    ]);
    const hasTests = questions && questions.length > 0;

    const actionHref = hasTests
        ? `/chapters/${chapterId}/test`
        : chapterInfo?.pdf
            ? `/pdf-view?file=${chapterInfo.pdf}&title=${chapterInfo.title}`
            : '/chapters';
    const actionText = hasTests ? '📝' : '📄';

    if (!theoryData) {
        return (
            <>
                <Header />
                <div className="flex items-center justify-center min-h-screen">
                    <p className="text-slate-500 font-medium">No theory data found for this chapter.</p>
                </div>
            </>
        );
    }

    return (
        <>
            <Header rightIconHref={actionHref} rightIconText={actionText} />
            {/* Page-specific background override */}
            <div
                className="fixed inset-0 -z-10 pointer-events-none"
                style={{
                    background: `
                        radial-gradient(circle at 0% 0%, #C4A1E0 0%, transparent 65%),
                        radial-gradient(circle at 100% 100%, #F4A0BF 0%, transparent 65%),
                        #ffffff
                    `,
                }}
            />

            {/* Floating Back Button — PC */}
            <Link
                href="/chapters"
                className="fixed top-1/2 -translate-y-1/2 custom-back-btn theory-desktop-back-btn z-50 group"
                aria-label="Back to Chapters"
                style={{ left: 'max(16px, calc(50% - 31rem))' }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
            </Link>

            <main className="relative z-1 max-w-4xl mx-auto px-3 sm:px-4 pb-8 min-h-screen flex flex-col">
                <div className="w-full">

                    {/* ===== Top Header Bar ===== */}
                    <div className="flex items-center gap-2.5 sm:gap-3 mt-1.5 mb-5">
                        <section
                            className="relative flex-1 flex items-center justify-between gap-2 px-3 py-2.5 sm:px-4 sm:py-3 mb-0 rounded-2xl overflow-hidden min-h-[58px] sm:min-h-[70px] border border-white/50"
                            style={{
                                background: 'rgba(255, 255, 255, 0.5)',
                                backdropFilter: 'blur(10px)',
                                WebkitBackdropFilter: 'blur(10px)',
                                boxShadow: '0 8px 32px rgba(31, 38, 135, 0.07)'
                            }}
                        >

                            <div className="relative z-10 flex items-center flex-shrink-0 gap-2">
                                <Link
                                    href="/chapters"
                                    className="lg:hidden flex items-center justify-center w-8 h-8 rounded-full custom-back-btn"
                                    aria-label="Back to Chapters"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M19 12H5M12 19l-7-7 7-7" />
                                    </svg>
                                </Link>

                            </div>
                            <div className="relative z-10 flex flex-col items-center gap-0 min-w-0 flex-1 text-center px-2">
                                <div className="flex items-center flex-wrap gap-1 justify-center mb-1">
                                    <span
                                        className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full font-black text-[0.65rem] sm:text-[0.75rem] uppercase tracking-[0.08em] text-indigo-600 bg-indigo-50/90 border border-indigo-200/90 shadow-[0_4px_12px_rgba(99,102,241,0.1)]"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                        {`CH - ${chapterId}`}
                                    </span>
                                </div>
                                <h1 className="text-slate-800 font-black text-[0.98rem] sm:text-[1.45rem] leading-tight tracking-tight m-0 max-w-full truncate whitespace-nowrap">
                                    {chapterInfo?.title || `Chapter ${chapterId}`}
                                </h1>
                            </div>

                        </section>
                    </div>

                    {/* ===== Theory Content ===== */}
                    {theoryData && theoryData.content.length > 0 ? (
                        <>
                            <div className="flex flex-col gap-0.5">
                                {theoryData.content.map((item, index) => {
                                    const palette = getPalette(item.type, item.title);

                                    /* ---- Intro / Section ---- */
                                    if (item.type === 'intro' || item.type === 'section') {
                                        return (
                                            <TheoryCard key={index} palette={palette}>
                                                <TheoryHeader item={item} palette={palette} />
                                                <div className="px-3.5 py-3 sm:px-4 sm:py-3.5">
                                                    <TextContent content={item.text} lineKeyPrefix={`text-${index}`} />

                                                    {item.table ? (
                                                        <div className="overflow-x-auto my-3 rounded-lg shadow-sm" style={{ border: `1.5px solid ${palette.subBorder}` }}>
                                                            <table className="w-full border-collapse text-left text-sm">
                                                                <thead>
                                                                    <tr>
                                                                        {item.table.headers.map((h, hi) => (
                                                                            <th key={hi} className="px-2 py-1.5 font-bold text-white text-xs" style={{ background: palette.gradient }}>{renderMathText(h, `th-${index}-${hi}`)}</th>
                                                                        ))}
                                                                    </tr>
                                                                </thead>
                                                                <tbody className="divide-y divide-slate-100">
                                                                    {item.table.rows.map((row, ri) => (
                                                                        <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : ''} style={ri % 2 !== 0 ? { background: palette.lightBg } : {}}>
                                                                            {row.map((cell, ci) => (
                                                                                <td key={ci} className="px-2 py-1.5 min-w-[90px]">
                                                                                    <RichContentStack content={cell} className="text-slate-600" lineClassName="leading-snug text-sm" mainClassName="font-medium" subtextClassName="text-[0.8rem] opacity-70 italic" lineKeyPrefix={`td-${index}-${ri}-${ci}`} />
                                                                                </td>
                                                                            ))}
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    ) : null}

                                                    {item.list ? (
                                                        <NumberedList items={item.list} palette={palette} lineKeyPrefix={`list-${index}`} />
                                                    ) : null}

                                                    {item.examples || item.example ? (
                                                        <div className="flex flex-col gap-2.5 my-3">
                                                            {(item.examples || [item.example]).map((ex, ei) => (
                                                                <div
                                                                    key={ei}
                                                                    className="p-3 rounded-xl shadow-sm"
                                                                    style={{
                                                                        background: palette.lightBg,
                                                                        border: `1px solid ${palette.subBorder}`,
                                                                        borderLeft: `3px solid ${palette.accent}`,
                                                                    }}
                                                                >
                                                                    <h4 className="flex items-center gap-1.5 font-bold mb-1.5 text-[0.9rem]" style={{ color: palette.accent }}>
                                                                        <span
                                                                            className="w-5 h-5 rounded flex items-center justify-center text-white text-[0.65rem] shadow-sm"
                                                                            style={{ background: palette.accent }}
                                                                        >💡</span>
                                                                        <RichContentStack content={typeof ex.text === 'string' ? { main: ex.text, tone: 'normal' } : { ...ex.text, tone: 'normal' }} as="span" lineAs="span" mainAs="span" subtextAs="span" lineKeyPrefix={`ex-t-${index}-${ei}`} />
                                                                    </h4>
                                                                    <div className="flex flex-col gap-1.5 ml-0.5">
                                                                        {ex.steps.map((step, si) => (
                                                                            <div key={si} className="flex items-start gap-2">
                                                                                <span
                                                                                    className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-white text-[0.55rem] font-bold mt-0.5 shadow-sm"
                                                                                    style={{ background: palette.accent }}
                                                                                >{si + 1}</span>
                                                                                <RichContentStack content={step} className="flex-1 text-slate-700 text-[0.85rem]" lineClassName="leading-snug" mainClassName="font-medium" subtextClassName="text-[0.75rem] opacity-70" lineKeyPrefix={`ex-s-${index}-${ei}-${si}`} />
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    ) : null}

                                                    <TipBar tip={item.tip} palette={palette} index={index} />
                                                </div>
                                            </TheoryCard>
                                        );
                                    }

                                    /* ---- Sign Rules ---- */
                                    if (item.type === 'signRules') {
                                        return (
                                            <TheoryCard key={index} palette={palette}>
                                                <TheoryHeader item={item} palette={palette} />
                                                <div className="px-3.5 py-3 sm:px-4 sm:py-3.5">
                                                    <TextContent content={item.text} lineKeyPrefix={`sr-t-${index}`} />

                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-2.5">
                                                        {item.grids.map((grid, gi) => (
                                                            <div
                                                                key={gi}
                                                                className="p-3 rounded-xl shadow-sm"
                                                                style={{ background: palette.lightBg, border: `1.5px solid ${palette.subBorder}` }}
                                                            >
                                                                <h3 className="text-[0.9rem] font-bold mb-2 flex items-center gap-1.5" style={{ color: palette.accent }}>
                                                                    <span
                                                                        className="w-5 h-5 rounded-md flex items-center justify-center text-white text-[0.6rem] font-bold shadow-sm"
                                                                        style={{ background: palette.accent }}
                                                                    >{gi + 1}</span>
                                                                    {renderMathText(grid.title, `sr-gt-${index}-${gi}`)}
                                                                </h3>
                                                                <ul className="flex flex-col gap-1">
                                                                    {grid.items.map((gItem, ii) => (
                                                                        <li key={ii} className="flex items-start gap-1.5 text-slate-600 text-[0.85rem]">
                                                                            <span
                                                                                className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5"
                                                                                style={{ background: palette.accent }}
                                                                            />
                                                                            <RichContentStack content={gItem} className="flex-1" lineClassName="leading-snug" mainClassName="" subtextClassName="text-[0.75rem] opacity-70" lineKeyPrefix={`sr-i-${index}-${gi}-${ii}`} />
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <TipBar tip={item.tip} palette={palette} index={index} />
                                                </div>
                                            </TheoryCard>
                                        );
                                    }

                                    /* ---- Solved Examples ---- */
                                    if (item.type === 'solvedExamples') {
                                        return (
                                            <TheoryCard key={index} palette={palette}>
                                                {/* TheoryHeader correctly extracts 'Type N' automatically, giving an identical look for all */}
                                                {item.title && (
                                                    <TheoryHeader item={item} palette={palette} />
                                                )}
                                                <div className="px-3.5 py-3 sm:px-4 sm:py-3.5">
                                                    <TextContent content={item.text} lineKeyPrefix={`se-t-${index}`} />

                                                    <div className="flex flex-col gap-4 my-2">
                                                        {item.examples && item.examples.map((example, ei) => {
                                                            const cc = { bg: palette.light, border: palette.border, accent: palette.accent };
                                                            const exNum = ei + 1;
                                                            return (
                                                                <div
                                                                    key={ei}
                                                                    className="relative rounded-[8px] sm:rounded-[12px] overflow-hidden bg-white sm:mb-2"
                                                                    style={{ border: `1.5px solid #e2e8f0`, boxShadow: `0 4px 20px -5px rgba(0, 0, 0, 0.05)` }}
                                                                >
                                                                    {/* Question Section — exact match to 1st image (Indigo/Purple Gradient) */}
                                                                    <div
                                                                        className="relative px-4 py-2 sm:px-5 sm:py-2.5 overflow-hidden"
                                                                        style={{
                                                                            background: 'linear-gradient(90deg, #7e6ed1 0%, #604da5 100%)',
                                                                        }}
                                                                    >
                                                                        {/* Decorative subtle circle right side (matching 1st image) */}
                                                                        <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-white/5 pointer-events-none shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]" />
                                                                        <div className="absolute right-[-10%] top-[20%] w-60 h-60 rounded-full bg-white/5 pointer-events-none" />

                                                                        <div className="relative z-10 flex items-center gap-3 sm:gap-4">
                                                                            {/* Big transparent background number */}
                                                                            <div className="text-white/30 text-[2.2rem] sm:text-[2.6rem] font-black leading-none tracking-tight flex-shrink-0">
                                                                                {String(exNum).padStart(2, '0')}
                                                                            </div>

                                                                            {/* Question text - White */}
                                                                            <div className="flex-1">
                                                                                <RichContentStack
                                                                                    content={example.question || example.subtitle || example.text || example.title}
                                                                                    className="leading-snug"
                                                                                    mainClassName="font-bold text-[0.95rem] sm:text-[1.05rem] text-white"
                                                                                    subtextClassName="font-semibold text-[0.85rem] text-white/90 mt-1"
                                                                                    lineKeyPrefix={`se-q-${index}-${ei}`}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    {/* Solution Section — Clean pill-shaped boxes like 2nd image */}
                                                                    <div className="px-3 py-3 sm:px-4 sm:py-4 bg-[#f8fafc]">
                                                                        <div className="flex flex-col gap-2 sm:gap-2.5">
                                                                            {(example.solution || example.steps || []).map((step, si) => {
                                                                                const stepText = typeof step === 'string' ? step : (step.main || '');
                                                                                const isExHeader = stepText.startsWith('ઉદાહરણ') || stepText.startsWith('દા.ત.');
                                                                                const cObj = isExHeader
                                                                                    ? (typeof step === 'string' ? { main: step, tone: 'normal' } : { ...step, tone: 'normal' })
                                                                                    : step;

                                                                                return (
                                                                                    <div
                                                                                        key={si}
                                                                                        className="relative flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 transition-all duration-300 bg-white border border-slate-200"
                                                                                        style={{
                                                                                            borderRadius: '50px',
                                                                                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.03)'
                                                                                        }}
                                                                                    >
                                                                                        {isExHeader && (
                                                                                            <span className="flex-shrink-0 text-[1rem] mr-0.5">🎯</span>
                                                                                        )}
                                                                                        <RichContentStack content={cObj} className="flex-1" lineClassName="leading-snug text-[0.88rem] sm:text-[0.95rem] font-bold text-slate-800" mainClassName="font-bold text-slate-800" subtextClassName="text-[0.78rem] text-slate-500 block mt-0.5" lineKeyPrefix={`se-s-${index}-${ei}-${si}`} />
                                                                                    </div>
                                                                                );
                                                                            })}
                                                                            {example.ans && (
                                                                                <div
                                                                                    className="relative flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 mt-1 bg-white border border-slate-200 overflow-hidden"
                                                                                    style={{
                                                                                        borderRadius: '50px',
                                                                                        boxShadow: '0 3px 12px rgba(66, 133, 244, 0.08)'
                                                                                    }}
                                                                                >
                                                                                    <div className="absolute left-0 top-0 bottom-0 w-[5px] sm:w-[6px] bg-[#604da5] rounded-l-full" />
                                                                                    <span className="font-extrabold text-[0.95rem] sm:text-[1.05rem] text-slate-900 ml-1">
                                                                                        જવાબ: {example.ans}
                                                                                    </span>
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            </TheoryCard>
                                        );
                                    }

                                    /* ---- Formula Grid ---- */
                                    if (item.type === 'formulaGrid') {
                                        return (
                                            <TheoryCard key={index} palette={palette}>
                                                <TheoryHeader item={item} palette={palette} />
                                                <div className="px-3.5 py-3 sm:px-4 sm:py-3.5">
                                                    <TextContent content={item.text} lineKeyPrefix={`fg-t-${index}`} />

                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-1.5">
                                                        {item.formulas.map((formula, fi) => {
                                                            const fc = CARD_COLORS[fi % CARD_COLORS.length];
                                                            return (
                                                                <div
                                                                    key={fi}
                                                                    className="p-3 rounded-xl shadow-sm"
                                                                    style={{ background: fc.bg, border: `1px solid ${fc.border}` }}
                                                                >
                                                                    <div className="flex items-start gap-2 mb-2">
                                                                        <span
                                                                            className="w-5 h-5 rounded-md text-white flex items-center justify-center font-bold text-[0.65rem] flex-shrink-0 shadow-sm"
                                                                            style={{ background: fc.accent }}
                                                                        >{fi + 1}</span>
                                                                        <div className="flex-1 min-w-0">
                                                                            <RichContentStack content={formula.desc} className="text-slate-700 font-bold text-[0.85rem] leading-tight" lineKeyPrefix={`fd-${index}-${fi}`} />
                                                                        </div>
                                                                    </div>
                                                                    <FormulaBody formula={formula} lineKeyPrefix={`fb-${index}-${fi}`} />
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            </TheoryCard>
                                        );
                                    }

                                    /* ---- Comparison Card ---- */
                                    if (item.type === 'comparisonCard') {
                                        return (
                                            <TheoryCard key={index} palette={palette}>
                                                <TheoryHeader item={item} palette={palette} />
                                                <div className="px-3.5 py-3 sm:px-4 sm:py-3.5">
                                                    <TextContent content={item.text} lineKeyPrefix={`cc-t-${index}`} />

                                                    <div
                                                        className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-3 my-2.5 p-2 sm:p-3 rounded-xl"
                                                        style={{ background: palette.lightBg, border: `1.5px solid ${palette.subBorder}` }}
                                                    >
                                                        {/* Indian System */}
                                                        <div className="bg-white p-3 rounded-lg shadow-sm" style={{ border: `1px solid ${palette.subBorder}` }}>
                                                            <h3 className="font-black mb-2 text-center border-b pb-1.5 uppercase tracking-wider text-[0.8rem]" style={{ color: palette.accent, borderColor: palette.subBorder }}>
                                                                {renderMathText(item.indian.title, `ci-t-${index}`)}
                                                            </h3>
                                                            <ul className="flex flex-col gap-1.5">
                                                                {item.indian.items.map((ci, cii) => (
                                                                    <li key={cii} className="flex items-center justify-between gap-2 py-1 border-b last:border-0" style={{ borderColor: `${palette.subBorder}80` }}>
                                                                        <span className="text-[0.75rem] font-bold text-slate-400 uppercase tracking-tight">
                                                                            <RichContentStack content={ci.label} as="span" lineAs="span" mainAs="span" subtextAs="span" lineKeyPrefix={`ci-l-${index}-${cii}`} />
                                                                        </span>
                                                                        <span className="font-extrabold text-[0.85rem]" style={{ color: palette.accent }}>
                                                                            <RichContentStack content={ci.value} as="span" lineAs="span" mainAs="span" subtextAs="span" lineKeyPrefix={`ci-v-${index}-${cii}`} />
                                                                        </span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>

                                                        {/* VS Badge */}
                                                        <div className="flex items-center justify-center">
                                                            <div
                                                                className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-[0.65rem] shadow-sm ring-2 ring-white relative z-10"
                                                                style={{ background: palette.gradient }}
                                                            >VS</div>
                                                        </div>

                                                        {/* International System */}
                                                        <div className="bg-white p-3 rounded-lg shadow-sm" style={{ border: `1px solid ${palette.subBorder}` }}>
                                                            <h3 className="font-black mb-2 text-center border-b pb-1.5 uppercase tracking-wider text-[0.8rem]" style={{ color: palette.accent, borderColor: palette.subBorder }}>
                                                                {renderMathText(item.international.title, `cit-t-${index}`)}
                                                            </h3>
                                                            <ul className="flex flex-col gap-1.5">
                                                                {item.international.items.map((ci, cii) => (
                                                                    <li key={cii} className="flex items-center justify-between gap-2 py-1 border-b last:border-0" style={{ borderColor: `${palette.subBorder}80` }}>
                                                                        <span className="text-[0.7rem] font-bold text-slate-400 uppercase tracking-tight">
                                                                            <RichContentStack content={ci.label} as="span" lineAs="span" mainAs="span" subtextAs="span" lineKeyPrefix={`cil-${index}-${cii}`} />
                                                                        </span>
                                                                        <span className="font-extrabold text-[0.8rem]" style={{ color: palette.accent }}>
                                                                            <RichContentStack content={ci.value} as="span" lineAs="span" mainAs="span" subtextAs="span" lineKeyPrefix={`civ-${index}-${cii}`} />
                                                                        </span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TheoryCard>
                                        );
                                    }

                                    /* ---- Table Cards Grid (Multiplication Style) ---- */
                                    if (item.type === 'tableCards') {
                                        const TABLE_CARD_COLORS = [
                                            { gradient: 'linear-gradient(135deg, #6366f1, #818cf8)', bg: '#EEF2FF', border: '#C7D2FE' },
                                            { gradient: 'linear-gradient(135deg, #059669, #34d399)', bg: '#ECFDF5', border: '#A7F3D0' },
                                            { gradient: 'linear-gradient(135deg, #D97706, #FBBF24)', bg: '#FFFBEB', border: '#FDE68A' },
                                            { gradient: 'linear-gradient(135deg, #DC2626, #F87171)', bg: '#FEF2F2', border: '#FECACA' },
                                            { gradient: 'linear-gradient(135deg, #7C3AED, #A78BFA)', bg: '#F5F3FF', border: '#DDD6FE' },
                                            { gradient: 'linear-gradient(135deg, #0891B2, #22D3EE)', bg: '#ECFEFF', border: '#A5F3FC' },
                                            { gradient: 'linear-gradient(135deg, #C026D3, #E879F9)', bg: '#FDF4FF', border: '#F5D0FE' },
                                            { gradient: 'linear-gradient(135deg, #EA580C, #FB923C)', bg: '#FFF7ED', border: '#FED7AA' },
                                            { gradient: 'linear-gradient(135deg, #0D9488, #2DD4BF)', bg: '#F0FDFA', border: '#99F6E4' },
                                            { gradient: 'linear-gradient(135deg, #4F46E5, #6366F1)', bg: '#EEF2FF', border: '#C7D2FE' },
                                        ];

                                        return (
                                            <TheoryCard key={index} palette={palette}>
                                                <TheoryHeader item={item} palette={palette} />
                                                <div className="px-3 py-3 sm:px-4 sm:py-4">
                                                    <TextContent content={item.text} lineKeyPrefix={`tc-t-${index}`} />
                                                    <div
                                                        style={{
                                                            display: 'grid',
                                                            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
                                                            gap: '10px',
                                                        }}
                                                    >
                                                        {item.cards.map((card, ci) => {
                                                            const cc = TABLE_CARD_COLORS[ci % TABLE_CARD_COLORS.length];
                                                            return (
                                                                <div
                                                                    key={ci}
                                                                    className="rounded-xl overflow-hidden shadow-sm"
                                                                    style={{
                                                                        background: cc.bg,
                                                                        border: `1.5px solid ${cc.border}`,
                                                                    }}
                                                                >
                                                                    {/* Card Header */}
                                                                    <div
                                                                        className="px-3 py-1.5 text-center"
                                                                        style={{ background: cc.gradient }}
                                                                    >
                                                                        <span className="text-white font-black text-[0.85rem] sm:text-[0.95rem] uppercase tracking-wider drop-shadow-sm">
                                                                            {card.title}
                                                                        </span>
                                                                    </div>
                                                                    {/* Card Body — entries */}
                                                                    <div className="px-2 py-1.5 flex flex-col gap-0">
                                                                        {card.entries.map((entry, ei) => {
                                                                            const parts = entry.split('=');
                                                                            const left = parts[0] + '=';
                                                                            const right = parts[1] || '';
                                                                            return (
                                                                                <div
                                                                                    key={ei}
                                                                                    className="text-[0.82rem] sm:text-[0.88rem] text-slate-800 font-bold leading-[1.2] flex justify-between"
                                                                                >
                                                                                    <span>{left}</span>
                                                                                    <span style={{ color: cc.border, filter: 'brightness(0.5)' }}>{right.trim()}</span>
                                                                                </div>
                                                                            );
                                                                        })}
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            </TheoryCard>
                                        );
                                    }

                                    return null;
                                })}
                            </div>

                            {/* ===== Bottom Nav Bar ===== */}
                            <div className="flex items-center gap-2.5 sm:gap-3 mt-6 mb-8">
                                <section
                                    className="relative flex-1 flex items-center justify-between gap-2 px-3 py-2.5 sm:px-4 sm:py-3 mb-0 rounded-2xl overflow-hidden min-h-[58px] sm:min-h-[70px] border border-white/50"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.5)',
                                        backdropFilter: 'blur(10px)',
                                        WebkitBackdropFilter: 'blur(10px)',
                                        boxShadow: '0 8px 32px rgba(31, 38, 135, 0.07)'
                                    }}
                                >
                                    <div className="relative z-10 flex items-center flex-shrink-0 gap-2">
                                        {chapterInfo?.pdf && (
                                            <Link
                                                href={`/pdf-view?file=${chapterInfo.pdf}&title=${chapterInfo.title}`}
                                                className="btn-pdf inline-flex items-center justify-center gap-1.5 rounded-[14px] px-3 py-1.5 no-underline"
                                                style={{
                                                    background: 'linear-gradient(135deg, #0d9488 0%, #06b6d4 100%)',
                                                    boxShadow: '0 4px 14px rgba(6,182,212,0.35), inset 0 1px 0 rgba(255,255,255,0.25)',
                                                }}
                                            >
                                                <span className="inline-flex items-center justify-center w-[22px] h-[22px] rounded-lg bg-white/20 text-[0.72rem]">📄</span>
                                                <span className="text-white font-black text-[0.72rem] uppercase tracking-[0.18em] drop-shadow-sm">PDF</span>
                                            </Link>
                                        )}
                                    </div>
                                    <div className="relative z-10 flex flex-col items-center gap-0 min-w-0 flex-1 text-center px-2">
                                        <div className="flex items-center flex-wrap gap-1 justify-center mb-1">
                                            <span
                                                className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full font-black text-[0.65rem] sm:text-[0.75rem] uppercase tracking-[0.08em] text-indigo-600 bg-indigo-50/90 border border-indigo-200/90 shadow-[0_4px_12px_rgba(99,102,241,0.1)]"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                                {`CH - ${chapterId}`}
                                            </span>
                                        </div>
                                        <h2 className="text-slate-800 font-black text-[0.98rem] sm:text-[1.45rem] leading-tight tracking-tight m-0 max-w-full truncate whitespace-nowrap">
                                            {chapterInfo?.title || `Chapter ${chapterId}`}
                                        </h2>
                                    </div>
                                    <div className="relative z-10 flex-shrink-0">
                                        <Link
                                            href={`/chapters/${chapterId}/test`}
                                            className="btn-test inline-flex items-center justify-center gap-1.5 rounded-[14px] px-3 py-1.5 no-underline"
                                            style={{
                                                background: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)',
                                                boxShadow: '0 4px 14px rgba(245,158,11,0.40), inset 0 1px 0 rgba(255,255,255,0.25)',
                                            }}
                                        >
                                            <span className="inline-flex items-center justify-center w-[22px] h-[22px] rounded-lg bg-white/20 text-[0.72rem]">📝</span>
                                            <span className="text-white font-black text-[0.72rem] uppercase tracking-[0.18em] drop-shadow-sm">TEST</span>
                                        </Link>
                                    </div>
                                </section>
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center p-6 mt-4 text-center bg-white/50 backdrop-blur-md rounded-2xl border border-slate-200/60 shadow-md">
                            <div className="w-10 h-10 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center text-lg mb-2">📚</div>
                            <h2 className="text-base font-black text-slate-800 mb-1.5">Theory for Chapter {chapterId} will be available soon.</h2>
                            <p className="text-slate-500 max-w-sm mb-4 leading-relaxed text-xs">Until then, you can continue with the available chapter resources.</p>
                            <Link href={actionHref} className="inline-flex items-center justify-center px-5 py-2 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white font-bold text-xs shadow-md shadow-indigo-500/20">
                                {hasTests ? 'Go to Test 📝' : chapterInfo?.pdf ? 'Read PDF 📄' : 'Back to Chapters 🔙'}
                            </Link>
                        </div>
                    )}
                </div>
            </main>


        </>
    );
}

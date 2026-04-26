import Link from 'next/link';
import Header from '../../../../components/ui/Header';

import { chaptersData } from '../../../../data/chaptersData';
import { getChapterQuestions } from '../../../../data/chapters';
import TestGrid from './TestGrid';

/* ===== Server Component — instant HTML ===== */
export default async function DynamicChapterTestList({ params }) {
    const resolvedParams = await params;
    const chapterId = resolvedParams.chapterId;
    const chapterInfo = chaptersData.find(c => c.id.toString() === chapterId);
    const chapterQuestions = await getChapterQuestions(chapterId);
    const hasTests = chapterQuestions && chapterQuestions.length > 0;

    const totalTests = Math.ceil((chapterQuestions?.length || 0) / 10);
    const tests = Array.from({ length: totalTests }, (_, i) => i + 1);

    // Colorful gradient palette
    const gradients = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
        'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
        'linear-gradient(135deg, #ec4899 0%, #f97316 100%)',
        'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
        'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        'linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)',
        'linear-gradient(135deg, #f97316 0%, #eab308 100%)',
        'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
        'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
        'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)',
        'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
        'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header rightIconHref={`/chapters/${chapterId}/theory`} rightIconText="📖" />

            <main className="flex-1 py-5 sm:py-8 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto">

                    <div className="bg-white/80 rounded-3xl shadow-lg border border-white/60 overflow-hidden relative">
                        {/* Top accent line */}
                        <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

                        <div className="p-5 sm:p-8 md:p-10">
                            {/* Header Section */}
                            <div className="flex flex-col items-center mb-7 relative">
                                <Link
                                    href="/chapters"
                                    className="absolute left-0 top-1/2 -translate-y-1/2 custom-back-btn shadow-md"
                                    title="Back to Chapters"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M19 12H5M12 19l-7-7 7-7" />
                                    </svg>
                                </Link>

                                <div className="flex flex-col items-center text-center px-10">
                                    <div className="mb-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[0.8rem] font-black uppercase tracking-widest shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                        Chapter {chapterId}
                                    </div>

                                    <h1 className="text-lg sm:text-xl font-black text-slate-800 tracking-tight leading-tight">
                                        {chapterInfo?.title || ''}
                                    </h1>
                                </div>
                            </div>

                            {/* Test Grid — client component for localStorage scores */}
                            {hasTests ? (
                                <TestGrid
                                    tests={tests}
                                    chapterId={chapterId}
                                    gradients={gradients}
                                    chapterInfo={chapterInfo}
                                />
                            ) : (
                                <div className="text-center py-12 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                                    <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-3">📝</div>
                                    <h2 className="text-lg font-black text-slate-800 mb-2">Study material is ready!</h2>
                                    <p className="text-slate-500 mx-auto px-4 mb-6 font-medium text-sm">
                                        This chapter theory and the source PDF are already available.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                                        <Link href={`/chapters/${chapterId}/theory`} className="px-6 py-2.5 rounded-2xl bg-primary text-white font-black shadow-lg shadow-primary/20 text-sm">
                                            📖 Open Theory
                                        </Link>
                                        {chapterInfo?.pdf && (
                                            <Link href={`/pdf-view?file=${chapterInfo.pdf}&title=${chapterInfo.title}`} className="px-6 py-2.5 rounded-2xl bg-white text-slate-700 font-bold border border-slate-200 text-sm">
                                                📄 Open PDF
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>


        </div>
    );
}

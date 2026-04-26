'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

// Percentage color
const getPctColor = (pct) => {
    if (pct >= 80) return '#10b981';
    if (pct >= 50) return '#f59e0b';
    return '#ef4444';
};

export default function TestGrid({ tests, chapterId, gradients, chapterInfo }) {
    const [scores, setScores] = useState({});

    useEffect(() => {
        const loaded = {};
        tests.forEach(testNum => {
            try {
                const raw = localStorage.getItem(`score_chapter_${chapterId}_test_${testNum}`);
                if (raw) loaded[testNum] = JSON.parse(raw);
            } catch (e) {}
        });
        setScores(loaded);
    }, [chapterId, tests]);

    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {tests.map((testNum) => {
                const scoreData = scores[testNum];
                const isDone = !!scoreData;
                const pct = scoreData?.percentage ?? null;
                const gradient = gradients[(testNum - 1) % gradients.length];

                return (
                    <Link
                        href={`/chapters/${chapterId}/test/${testNum}`}
                        key={testNum}
                        className="group relative overflow-hidden rounded-2xl px-3 py-3 flex items-center gap-3 border border-white/20 shadow-md min-h-[56px]"
                        style={{ background: gradient }}
                    >
                        {/* Glossy Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none opacity-40" />

                        {/* Left: Number Circle */}
                        <div className="w-8 h-8 rounded-full bg-white/25 border border-white/40 flex flex-shrink-0 items-center justify-center text-white font-black text-sm shadow-sm">
                            {testNum}
                        </div>

                        {/* Right: Info */}
                        <div className="flex-1 min-w-0 pr-1 relative z-10 flex flex-col justify-center">
                            <div className="flex items-center justify-between gap-2">
                                <span className="text-white font-black text-[0.95rem] tracking-tight truncate">Test</span>

                                {isDone && (
                                    <div
                                        className="px-1.5 py-0.5 rounded-lg bg-white shadow-md text-[0.78rem] font-black tracking-tighter flex-shrink-0"
                                        style={{ color: getPctColor(pct) }}
                                    >
                                        {pct}%
                                    </div>
                                )}
                            </div>


                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

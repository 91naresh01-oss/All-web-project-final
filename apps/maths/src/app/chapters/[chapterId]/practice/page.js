"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { chaptersData } from '@/data/chaptersData';

const TOPIC_TABLE = 'TABLE';
const TOPIC_SQUARE = 'SQUARE';
const TOPIC_CUBE = 'CUBE';
const TOPIC_ALGEBRA = 'ALGEBRA';
const TOPIC_SERIES = 'SERIES';

// 25 unique colors — દરેક table number ને unique color assign
const tableColors = [
    '#ef4444', '#f97316', '#f59e0b', '#84cc16', '#22c55e',
    '#14b8a6', '#06b6d4', '#3b82f6', '#6366f1', '#8b5cf6',
    '#a855f7', '#ec4899', '#f43f5e', '#e11d48', '#be185d',
    '#10b981', '#0ea5e9', '#2563eb', '#4f46e5', '#7c3aed',
    '#9333ea', '#c026d3', '#db2777', '#dc2626', '#ea580c'
];

export default function PracticePage() {
    const params = useParams();
    const router = useRouter();
    const chapterId = params.chapterId;
    const chapter = chaptersData.find(c => c.id === parseInt(chapterId));

    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    if (!mounted || !chapter) return null;

    const startPractice = (type, value) => {
        router.push(`/chapters/${chapterId}/practice/${type}-${value}`);
    };

    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #f8fafc 0%, #e8f0fe 50%, #f0f4ff 100%)',
            fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
            paddingBottom: '32px',
            overflowX: 'hidden'
        }}>
            <div style={{ maxWidth: '640px', width: '100%', margin: '0 auto', padding: '16px 16px 0' }}>

                {/* ────── Header ────── */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '28px' }}>
                    <button
                        onClick={() => router.push(`/chapters`)}
                        style={{
                            width: '42px', height: '42px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            borderRadius: '14px', background: 'white', border: '1.5px solid #e2e8f0',
                            color: '#475569', cursor: 'pointer', boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                            transition: 'all 0.2s', flexShrink: 0
                        }}
                    >
                        <ArrowLeft size={18} />
                    </button>
                    
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingRight: '42px' }}>
                        <h1 style={{
                            fontSize: '24px', fontWeight: 900, margin: 0, lineHeight: 1.1,
                            background: 'linear-gradient(135deg, #1e1b4b, #4f46e5)',
                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                            textAlign: 'center'
                        }}>Maths Practice</h1>
                        <p style={{ fontSize: '12px', fontWeight: 700, color: '#64748b', margin: '6px 0 0', textAlign: 'center' }}>
                            વર્ગ, ઘન અથવા ઘડિયા — તમારી પ્રેક્ટિસ શરૂ કરો!
                        </p>
                    </div>
                </div>

                {/* ────── Squares & Cubes Cards ────── */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '14px' }}>

                    {/* Squares Card */}
                    <button
                        onClick={() => startPractice(TOPIC_SQUARE, 'all')}
                        style={{
                            position: 'relative', overflow: 'hidden',
                            borderRadius: '12px', padding: '10px 8px',
                            background: 'linear-gradient(135deg, #ec4899, #be185d)',
                            border: 'none', cursor: 'pointer', textAlign: 'center',
                            boxShadow: '0 4px 12px rgba(236,72,153,0.2)',
                            transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1px'
                        }}
                        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)'; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; }}
                    >
                        {/* Decorative circle */}
                        <div style={{
                            position: 'absolute', right: '-12px', top: '-12px',
                            width: '48px', height: '48px', borderRadius: '50%',
                            background: 'rgba(255,255,255,0.12)', filter: 'blur(4px)'
                        }} />
                        <div style={{ position: 'relative', zIndex: 2 }}>
                            <div style={{ fontSize: '24px', fontWeight: 900, color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.15)', marginBottom: '1px' }}>x²</div>
                            <div style={{ fontSize: '13px', fontWeight: 900, color: 'white', textShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>વર્ગ (1-30)</div>
                            <div style={{ fontSize: '9px', fontWeight: 700, color: 'rgba(255,255,255,0.8)', marginTop: '2px' }}>Play Now 🚀</div>
                        </div>
                    </button>

                    {/* Cubes Card */}
                    <button
                        onClick={() => startPractice(TOPIC_CUBE, 'all')}
                        style={{
                            position: 'relative', overflow: 'hidden',
                            borderRadius: '12px', padding: '10px 8px',
                            background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
                            border: 'none', cursor: 'pointer', textAlign: 'center',
                            boxShadow: '0 4px 12px rgba(139,92,246,0.2)',
                            transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1px'
                        }}
                        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)'; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; }}
                    >
                        <div style={{
                            position: 'absolute', right: '-12px', top: '-12px',
                            width: '48px', height: '48px', borderRadius: '50%',
                            background: 'rgba(255,255,255,0.12)', filter: 'blur(4px)'
                        }} />
                        <div style={{ position: 'relative', zIndex: 2 }}>
                            <div style={{ fontSize: '24px', fontWeight: 900, color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.15)', marginBottom: '1px' }}>x³</div>
                            <div style={{ fontSize: '13px', fontWeight: 900, color: 'white', textShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>ઘન (1-15)</div>
                            <div style={{ fontSize: '9px', fontWeight: 700, color: 'rgba(255,255,255,0.8)', marginTop: '2px' }}>Play Now 🚀</div>
                        </div>
                    </button>
                </div>

                {/* ────── Tables Grid (1-25) ────── */}
                <div style={{ marginBottom: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                        <div style={{
                            width: '24px', height: '24px', borderRadius: '6px',
                            background: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                            border: '1px solid #e2e8f0',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px'
                        }}>📚</div>
                        <h2 style={{ fontSize: '15px', fontWeight: 900, color: '#1e1b4b', margin: 0 }}>
                            ઘડિયા ની પ્રેક્ટિસ (1-25)
                        </h2>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(5, 1fr)',
                        gap: '6px'
                    }}>
                        {Array.from({ length: 25 }, (_, i) => i + 1).map(num => {
                            const color = tableColors[num - 1];
                            return (
                                <button
                                    key={`table-${num}`}
                                    onClick={() => startPractice(TOPIC_TABLE, num)}
                                    style={{
                                        background: 'white', borderRadius: '10px',
                                        padding: '6px 2px',
                                        display: 'flex', flexDirection: 'column',
                                        alignItems: 'center', justifyContent: 'center',
                                        border: '2px solid transparent',
                                        boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                                        cursor: 'pointer',
                                        transition: 'all 0.25s cubic-bezier(0.4,0,0.2,1)'
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = 'translateY(-3px)';
                                        e.currentTarget.style.background = color;
                                        e.currentTarget.style.boxShadow = `0 8px 20px ${color}40`;
                                        e.currentTarget.style.borderColor = color;
                                        // Invert text color
                                        const numEl = e.currentTarget.querySelector('.tbl-num');
                                        const lblEl = e.currentTarget.querySelector('.tbl-lbl');
                                        if (numEl) numEl.style.color = 'white';
                                        if (lblEl) lblEl.style.color = 'rgba(255,255,255,0.85)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.background = 'white';
                                        e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.05)';
                                        e.currentTarget.style.borderColor = 'transparent';
                                        const numEl = e.currentTarget.querySelector('.tbl-num');
                                        const lblEl = e.currentTarget.querySelector('.tbl-lbl');
                                        if (numEl) numEl.style.color = color;
                                        if (lblEl) lblEl.style.color = color;
                                    }}
                                >
                                    <span className="tbl-num" style={{
                                        fontSize: '18px', fontWeight: 900, lineHeight: 1,
                                        color: color, marginBottom: '1px',
                                        transition: 'color 0.2s'
                                    }}>{num}</span>
                                    <span className="tbl-lbl" style={{
                                        fontSize: '8px', fontWeight: 800,
                                        color: color, opacity: 0.75,
                                        letterSpacing: '0.5px', textTransform: 'uppercase',
                                        transition: 'color 0.2s'
                                    }}>ટેબલ</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* ────── Algebra & Series ────── */}
                <div style={{
                    borderTop: '1.5px solid rgba(226,232,240,0.6)',
                    paddingTop: '14px', paddingBottom: '6px'
                }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                        {/* Algebra */}
                        <button
                            onClick={() => startPractice(TOPIC_ALGEBRA, 'formulas')}
                            style={{
                                background: 'white', borderRadius: '10px', padding: '10px',
                                border: '1.5px solid #e2e8f0', cursor: 'pointer',
                                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px',
                                transition: 'all 0.25s', boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = '#7dd3fc';
                                e.currentTarget.style.boxShadow = '0 4px 16px rgba(14,165,233,0.12)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = '#e2e8f0';
                                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)';
                            }}
                        >
                            <div style={{
                                width: '32px', height: '32px', borderRadius: '8px',
                                background: '#f0f9ff', display: 'flex', alignItems: 'center',
                                justifyContent: 'center', fontSize: '16px'
                            }}>🧮</div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontWeight: 900, fontSize: '12px', color: '#1e293b' }}>Algebra</div>
                                <div style={{ fontSize: '9px', fontWeight: 700, color: '#64748b', marginTop: '1px' }}>બીજગણિત સૂત્રો</div>
                            </div>
                        </button>

                        {/* Series */}
                        <button
                            onClick={() => startPractice(TOPIC_SERIES, 'sum')}
                            style={{
                                background: 'white', borderRadius: '10px', padding: '10px',
                                border: '1.5px solid #e2e8f0', cursor: 'pointer',
                                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px',
                                transition: 'all 0.25s', boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = '#f9a8d4';
                                e.currentTarget.style.boxShadow = '0 4px 16px rgba(236,72,153,0.12)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = '#e2e8f0';
                                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)';
                            }}
                        >
                            <div style={{
                                width: '32px', height: '32px', borderRadius: '8px',
                                background: '#fdf2f8', display: 'flex', alignItems: 'center',
                                justifyContent: 'center', fontSize: '16px'
                            }}>📈</div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontWeight: 900, fontSize: '12px', color: '#1e293b' }}>Series</div>
                                <div style={{ fontSize: '9px', fontWeight: 700, color: '#64748b', marginTop: '1px' }}>શ્રેણી સરવાળો</div>
                            </div>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

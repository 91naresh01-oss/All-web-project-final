"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, CheckCircle2, ChevronRight } from 'lucide-react';
import { playAnswerSound } from '../../../../../lib/answerSounds';

const TOPIC_TABLE = 'TABLE';
const TOPIC_SQUARE = 'SQUARE';
const TOPIC_CUBE = 'CUBE';
const TOPIC_ALGEBRA = 'ALGEBRA';
const TOPIC_SERIES = 'SERIES';

export default function PracticeSessionPage() {
    const params = useParams();
    const router = useRouter();
    const chapterId = params.chapterId;
    const topicParam = params.topic; // Format: TYPE-value

    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    // ── Parse topic param ──
    const parsedTopic = useMemo(() => {
        if (!topicParam) return null;
        const [type, value] = topicParam.split('-');
        return { type, value, numericValue: isNaN(value) ? value : parseInt(value, 10) };
    }, [topicParam]);

    // ── Generate questions using useMemo (performance optimized) ──
    const questions = useMemo(() => {
        if (!parsedTopic) return [];
        const { type, value, numericValue } = parsedTopic;
        const qs = [];

        if (type === TOPIC_TABLE) {
            for (let i = 1; i <= 10; i++) {
                qs.push({
                    base: numericValue, multiplier: i,
                    symbol: '×', answer: numericValue * i
                });
            }
        } else if (type === TOPIC_SQUARE) {
            const count = value === 'all' ? 30 : 10;
            const start = value === 'all' ? 1 : numericValue;
            for (let i = 0; i < count; i++) {
                const n = start + i;
                qs.push({ base: n, multiplier: null, symbol: '²', answer: n * n });
            }
        } else if (type === TOPIC_CUBE) {
            const count = value === 'all' ? 15 : (numericValue === 11 ? 5 : 10);
            const start = value === 'all' ? 1 : numericValue;
            for (let i = 0; i < count; i++) {
                const n = start + i;
                qs.push({ base: n, multiplier: null, symbol: '³', answer: n * n * n });
            }
        } else if (type === TOPIC_ALGEBRA) {
            const pairs = [[3, 2], [5, 3], [4, 1], [6, 4], [7, 2]];
            pairs.forEach(([a, b]) => {
                qs.push({ base: `(${a}+${b})`, multiplier: null, symbol: '²', answer: (a + b) * (a + b) });
                qs.push({ base: `${a}²-${b}²`, multiplier: null, symbol: '', answer: (a * a) - (b * b) });
            });
        } else if (type === TOPIC_SERIES) {
            const limits = [5, 10, 15, 20, 25, 30, 40, 50, 60, 100];
            limits.forEach(n => {
                qs.push({ base: `1+..+${n}`, multiplier: null, symbol: '', answer: (n * (n + 1)) / 2 });
            });
        }
        return qs;
    }, [parsedTopic]);

    const length = questions.length;

    // ── State Management ──
    const [userAnswers, setUserAnswers] = useState([]);
    const [showAnswers, setShowAnswers] = useState(false);
    const [revealedHints, setRevealedHints] = useState([]);
    const inputRefs = useRef([]);
    const lastEvaluatedAnswersRef = useRef([]);

    // Reset states when questions change
    useEffect(() => {
        if (length > 0) {
            setUserAnswers(Array(length).fill(""));
            setRevealedHints(Array(length).fill(false));
            setShowAnswers(false);
            inputRefs.current = Array(length).fill(null);
            lastEvaluatedAnswersRef.current = Array(length).fill("");
        }
    }, [length]);

    if (!mounted || !parsedTopic) return null;

    // ── Score & Progress ──
    const correctCount = userAnswers.filter(
        (ans, i) => ans !== "" && parseInt(ans) === questions[i]?.answer
    ).length;
    const answeredCount = userAnswers.filter(ans => ans !== "").length;
    const progressPercentage = length > 0 ? Math.round((answeredCount / length) * 100) : 0;
    const isCompleted = correctCount === length && length > 0;

    // ── Topic Title ──
    const getTitle = () => {
        const { type, value, numericValue } = parsedTopic;
        if (type === TOPIC_TABLE) return `${numericValue} નો ટેબલ`;
        if (type === TOPIC_SQUARE) return value === 'all' ? 'વર્ગ (1-30)' : `Squares (${numericValue}-${numericValue + 9})`;
        if (type === TOPIC_CUBE) return value === 'all' ? 'ઘન (1-15)' : `Cubes (${numericValue}-${numericValue + (numericValue === 11 ? 4 : 9)})`;
        if (type === TOPIC_ALGEBRA) return 'Algebra Formulas';
        if (type === TOPIC_SERIES) return 'Series Sum';
        return '';
    };

    // ── Handlers ──
    const handleAnswer = (i, value) => {
        if (value !== '' && !/^-?\d*$/.test(value)) return;
        const newAns = [...userAnswers];
        newAns[i] = value;
        setUserAnswers(newAns);
    };

    const playFeedbackForAnswer = (i, rawValue) => {
        if (showAnswers) return;

        const value = rawValue?.trim();
        if (!value) return;

        if (lastEvaluatedAnswersRef.current[i] === value) return;
        lastEvaluatedAnswersRef.current[i] = value;

        const isCorrect = parseInt(value, 10) === questions[i]?.answer;
        playAnswerSound(isCorrect ? 'correct' : 'wrong');
    };

    const handleKeyDown = (e, i) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            playFeedbackForAnswer(i, userAnswers[i]);
            if (i + 1 < length && inputRefs.current[i + 1]) {
                inputRefs.current[i + 1]?.focus();
            }
        }
    };

    const toggleHint = (i) => {
        const newHints = [...revealedHints];
        newHints[i] = true;
        setRevealedHints(newHints);
    };

    const handleReset = () => {
        setUserAnswers(Array(length).fill(""));
        setRevealedHints(Array(length).fill(false));
        setShowAnswers(false);
        lastEvaluatedAnswersRef.current = Array(length).fill("");
        setTimeout(() => inputRefs.current[0]?.focus(), 50);
    };

    // ── Input Color Logic ──
    const getInputStyle = (i) => {
        const ans = userAnswers[i];
        const q = questions[i];
        const isAnswered = ans !== "";
        const isCorrect = isAnswered && parseInt(ans) === q.answer;
        const isWrong = isAnswered && !isCorrect;

        if (showAnswers) return {
            color: '#10b981', background: '#f0fdf4',
            border: '2px solid #bbf7d0', boxShadow: 'none'
        };
        if (isCorrect) return {
            color: '#10b981', background: '#f0fdf4',
            border: '2px solid #34d399',
            boxShadow: '0 4px 12px rgba(52,211,153,0.15)'
        };
        if (isWrong) return {
            color: '#ef4444', background: '#fef2f2',
            border: '2px solid #fca5a5',
            boxShadow: '0 4px 12px rgba(239,68,68,0.15)'
        };
        return {
            color: '#0f172a', background: 'white',
            border: '2px solid #e2e8f0', boxShadow: 'none'
        };
    };

    // ── Hint Button Style ──
    const getHintStyle = (i) => {
        if (revealedHints[i]) return {
            background: '#dcfce7', border: '1.5px solid #86efac',
            color: '#15803d', cursor: 'default'
        };
        return {
            background: '#f1f5f9', border: '1.5px solid #e2e8f0',
            color: '#cbd5e1', cursor: 'pointer'
        };
    };

    // ── Question Display Text ──
    const getQuestionText = (q) => {
        if (q.multiplier !== null) {
            return <><span style={{ color: '#8b5cf6', fontWeight: 900 }}>{q.base}</span> {q.symbol} {q.multiplier}</>;
        }
        return <><span style={{ color: '#8b5cf6', fontWeight: 900 }}>{q.base}</span>{q.symbol}</>;
    };

    return (
        <div style={{
            minHeight: '100vh',
            background: '#f8fafc',
            fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
            paddingBottom: '40px',
            overflowX: 'hidden'
        }}>
            {/* ────── Sticky Header ────── */}
            <div style={{
                position: 'sticky', top: 0, zIndex: 50,
                background: 'rgba(248,250,252,0.85)',
                backdropFilter: 'blur(12px)',
                borderBottom: '1.5px solid #e0e7ff',
                padding: '12px 16px 0'
            }}>
                <div style={{ maxWidth: '440px', width: '100%', margin: '0 auto' }}>
                    {/* Top Row: Back + Title + Score */}
                    <div style={{
                        display: 'grid', gridTemplateColumns: '40px 1fr 80px',
                        alignItems: 'center', gap: '12px'
                    }}>
                        <button
                            onClick={() => router.back()}
                            style={{
                                width: '40px', height: '40px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                borderRadius: '12px', background: 'white', border: '1.5px solid #e2e8f0',
                                color: '#475569', cursor: 'pointer', boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                                transition: 'all 0.2s'
                            }}
                        >
                            <ArrowLeft size={18} />
                        </button>

                        <div style={{ textAlign: 'center' }}>
                            <div style={{
                                display: 'inline-block', padding: '2px 10px',
                                background: '#eef2ff', borderRadius: '16px',
                                fontSize: '10px', fontWeight: 800, color: '#4f46e5',
                                letterSpacing: '0.5px', marginBottom: '2px'
                            }}>PRACTICE MODE</div>
                            <h1 style={{
                                fontSize: '18px', fontWeight: 900, margin: 0,
                                background: 'linear-gradient(135deg, #1e1b4b, #3b82f6)',
                                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'
                            }}>{getTitle()}</h1>
                        </div>

                        {/* Score */}
                        <div style={{
                            background: 'white', border: '1.5px solid #e2e8f0',
                            borderRadius: '12px', padding: '4px 10px',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                            display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '2px'
                        }}>
                            <span style={{ fontSize: '16px', fontWeight: 900, color: '#1e293b' }}>{correctCount}</span>
                            <span style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8' }}>/{length}</span>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div style={{
                        display: 'flex', alignItems: 'center', gap: '8px',
                        marginTop: '10px', paddingBottom: '10px'
                    }}>
                        <span style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', minWidth: '50px' }}>
                            Progress
                        </span>
                        <div style={{
                            flex: 1, height: '6px', background: '#e2e8f0',
                            borderRadius: '100px', overflow: 'hidden'
                        }}>
                            <div style={{
                                height: '100%', borderRadius: '100px',
                                background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
                                transition: 'width 0.5s cubic-bezier(0.4,0,0.2,1)',
                                width: `${progressPercentage}%`
                            }} />
                        </div>
                        <span style={{ fontSize: '11px', fontWeight: 800, color: '#4f46e5', minWidth: '30px', textAlign: 'right' }}>
                            {progressPercentage}%
                        </span>
                    </div>
                </div>
            </div>

            {/* ────── Main Content ────── */}
            <main style={{ maxWidth: '440px', width: '100%', margin: '0 auto', padding: '20px 16px 0' }}>

                {/* Completion Banner */}
                {isCompleted && (
                    <div style={{
                        background: '#ecfdf5', border: '1.5px solid #a7f3d0',
                        borderRadius: '20px', padding: '16px',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px',
                        marginBottom: '20px', animation: 'fadeIn 0.5s ease'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{
                                width: '40px', height: '40px', borderRadius: '12px',
                                background: '#10b981', color: 'white',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                boxShadow: '0 4px 12px rgba(16,185,129,0.25)'
                            }}>
                                <CheckCircle2 size={20} />
                            </div>
                            <div>
                                <div style={{ fontSize: '15px', fontWeight: 900, color: '#064e3b' }}>અદભુત કામ!</div>
                                <div style={{ fontSize: '11px', fontWeight: 700, color: '#047857' }}>બધા પ્રશ્નોના સાચા જવાબ! 🎉</div>
                            </div>
                        </div>
                        <button
                            onClick={() => router.back()}
                            style={{
                                padding: '8px 16px', background: '#10b981', color: 'white',
                                borderRadius: '12px', border: 'none', fontWeight: 900, fontSize: '13px',
                                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px',
                                boxShadow: '0 4px 12px rgba(16,185,129,0.2)'
                            }}
                        >
                            મેનૂ <ChevronRight size={16} />
                        </button>
                    </div>
                )}

                {/* Questions Card */}
                <div style={{
                    background: 'white', borderRadius: '24px',
                    border: '1.5px solid #e2e8f0',
                    boxShadow: '0 8px 32px rgba(99,102,241,0.06)',
                    overflow: 'hidden', marginBottom: '16px'
                }}>
                    {questions.map((q, i) => {
                        const inputStyle = getInputStyle(i);
                        const hintStyle = getHintStyle(i);
                        const isCorrect = userAnswers[i] !== "" && parseInt(userAnswers[i]) === q.answer;

                        return (
                            <div
                                key={i}
                                style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    gap: '16px',
                                    padding: '10px 20px',
                                    background: i % 2 === 0 ? '#fafbff' : 'white',
                                    borderBottom: i < length - 1 ? '1px solid #f1f5f9' : 'none',
                                    transition: 'background 0.2s'
                                }}
                            >
                                {/* Question */}
                                <div style={{
                                    width: '90px', textAlign: 'right', flexShrink: 0,
                                    fontSize: '16px', fontWeight: 900, color: '#1e293b',
                                    letterSpacing: '0.3px'
                                }}>
                                    {getQuestionText(q)}
                                </div>

                                {/* = sign */}
                                <div style={{ fontSize: '16px', fontWeight: 900, color: '#cbd5e1' }}>=</div>

                                {/* Input */}
                                <div style={{ width: '80px', flexShrink: 0 }}>
                                    <input
                                        ref={el => { if (el) inputRefs.current[i] = el; }}
                                        type="text"
                                        inputMode="numeric"
                                        value={showAnswers ? q.answer : userAnswers[i]}
                                        onChange={e => !showAnswers && handleAnswer(i, e.target.value)}
                                        onKeyDown={e => handleKeyDown(e, i)}
                                        readOnly={showAnswers || isCorrect}
                                        placeholder="?"
                                        style={{
                                            width: '100%', height: '38px',
                                            textAlign: 'center', fontSize: '18px', fontWeight: 800,
                                            borderRadius: '10px', outline: 'none',
                                            transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                                            ...inputStyle
                                        }}
                                        onFocus={e => {
                                            if (!showAnswers && !isCorrect) {
                                                e.target.style.border = '2px solid #8b5cf6';
                                                e.target.style.boxShadow = '0 0 0 3px rgba(139,92,246,0.15)';
                                            }
                                        }}
                                        onBlur={e => {
                                            const s = getInputStyle(i);
                                            e.target.style.border = s.border;
                                            e.target.style.boxShadow = s.boxShadow;
                                            playFeedbackForAnswer(i, userAnswers[i]);
                                        }}
                                    />
                                </div>

                                {/* Hint / Status */}
                                <button
                                    onClick={() => !revealedHints[i] && !isCorrect && toggleHint(i)}
                                    style={{
                                        width: '38px', height: '38px', flexShrink: 0,
                                        borderRadius: '10px', display: 'flex',
                                        alignItems: 'center', justifyContent: 'center',
                                        fontSize: revealedHints[i] ? '13px' : '16px',
                                        fontWeight: 900,
                                        transition: 'all 0.2s',
                                        ...hintStyle
                                    }}
                                    onMouseEnter={e => {
                                        if (!revealedHints[i] && !isCorrect) {
                                            e.currentTarget.style.background = '#fef3c7';
                                            e.currentTarget.style.borderColor = '#fcd34d';
                                            e.currentTarget.style.color = '#f59e0b';
                                        }
                                    }}
                                    onMouseLeave={e => {
                                        const s = getHintStyle(i);
                                        e.currentTarget.style.background = s.background;
                                        e.currentTarget.style.borderColor = s.border?.replace('1.5px solid ', '') || '#e2e8f0';
                                        e.currentTarget.style.color = s.color;
                                    }}
                                >
                                    {isCorrect ? '✓' : revealedHints[i] ? q.answer : '💡'}
                                </button>
                            </div>
                        );
                    })}

                    {/* ────── Action Buttons ────── */}
                    <div style={{
                        padding: '10px 14px', background: '#fafbff',
                        borderTop: '1.5px solid #f1f5f9',
                        display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px'
                    }}>
                        {/* Show/Hide Answers */}
                        <button
                            onClick={() => setShowAnswers(!showAnswers)}
                            style={{
                                height: '34px', borderRadius: '8px',
                                fontWeight: 800, fontSize: '11px',
                                border: showAnswers ? '1.5px solid #818cf8' : '1.5px solid #e2e8f0',
                                background: showAnswers ? '#eef2ff' : 'white',
                                color: showAnswers ? '#4338ca' : '#475569',
                                cursor: 'pointer', transition: 'all 0.2s',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3px'
                            }}
                        >
                            👁️ {showAnswers ? 'On' : 'Off'}
                        </button>

                        {/* Reset */}
                        <button
                            onClick={handleReset}
                            style={{
                                height: '34px', borderRadius: '8px',
                                fontWeight: 800, fontSize: '11px',
                                border: '1.5px solid #e2e8f0', background: 'white',
                                color: '#475569', cursor: 'pointer', transition: 'all 0.2s',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3px'
                            }}
                        >
                            🔄 Reset
                        </button>

                        {/* Change / Back */}
                        <button
                            onClick={() => router.push(`/chapters/${chapterId}/practice`)}
                            style={{
                                height: '34px', borderRadius: '8px',
                                fontWeight: 800, fontSize: '11px',
                                border: 'none', background: 'linear-gradient(135deg, #4f46e5, #6366f1)',
                                color: 'white', cursor: 'pointer', transition: 'all 0.2s',
                                boxShadow: '0 3px 10px rgba(99,102,241,0.2)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3px'
                            }}
                        >
                            📋 Change
                        </button>
                    </div>
                </div>

                {/* Help Tip */}
                <div style={{
                    textAlign: 'center', padding: '8px',
                    fontSize: '13px', fontWeight: 600, color: '#94a3b8'
                }}>
                    💡 જવાબ લખીને Enter દબાવો — આગળના પ્રશ્ન પર જશો
                </div>
            </main>

            {/* Fade-in animation */}
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-8px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}

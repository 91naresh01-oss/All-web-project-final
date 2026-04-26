'use client';

import Link from 'next/link';
import { useEffect, useState} from 'react';
import { useParams, useRouter} from 'next/navigation';
import Header from '../../../../../components/ui/Header';

import { chaptersData} from '../../../../../data/chaptersData';
import { getChapterQuestions } from '../../../../../data/chapters';
import {
 RichContentStack,
 getSolutionSteps,
} from '../../../../../lib/richMath';
import { playAnswerSound } from '../../../../../lib/answerSounds';

const optionLabels = ['A', 'B', 'C', 'D'];

function QuestionCopy({ content, lineKeyPrefix, variant = 'dark'}) {
 return (
 <RichContentStack
 content={content}
 className={variant === 'light' ? 'text-white leading-snug' : 'text-slate-800 leading-snug'}
 lineClassName="mb-0.5"
 mainClassName={variant === 'light' ? 'font-bold text-[0.95rem] sm:text-base text-white' : 'font-bold text-[0.95rem] sm:text-base'}
 subtextClassName={variant === 'light' ? 'text-white/70 text-[0.85rem] font-medium text-white' : 'text-slate-500 text-[0.85rem] font-medium'}
 lineKeyPrefix={lineKeyPrefix}
 as="div"
 lineAs="div"
 mainAs="span"
 subtextAs="span"
 />
);
}

function OptionCopy({ content, lineKeyPrefix, animated = false}) {
 return (
 <RichContentStack
 content={content}
 className={`text-inherit ${animated ? '' : ''}`}
 lineClassName="flex items-center"
 mainClassName="font-bold"
 subtextClassName="text-[0.8em] opacity-80 font-medium ml-1"
 lineKeyPrefix={lineKeyPrefix}
 as="span"
 lineAs="span"
 mainAs="span"
 subtextAs="span"
 />
);
}

function SolutionCard({ solution, solvedCorrectly, lineKeyPrefix, reviewMode = false}) {
 const steps = getSolutionSteps(solution);

 if (!steps.length) return null;

 return (
 <div className={`mt-3 overflow-hidden rounded-xl border-2 shadow-lg ${
 solvedCorrectly 
 ? 'bg-emerald-50 border-emerald-200 shadow-emerald-100/50' 
 : 'bg-indigo-50 border-indigo-200 shadow-indigo-100/50'
}`}>
 <div className={`px-3 py-1.5 flex items-center gap-2 border-b-2 ${
 solvedCorrectly ? 'bg-emerald-100 border-emerald-200' : 'bg-indigo-100 border-indigo-200'
}`}>
 <span className="text-base">💡</span>
 <span className={`text-[0.72rem] sm:text-[0.78rem] font-black uppercase tracking-[0.1em] ${
 solvedCorrectly ? 'text-emerald-800' : 'text-indigo-800'
}`}>
 પગલાવાર સમજુતી {reviewMode ? '' : '(Solution)'}
 </span>
 </div>

 <div className="p-1.5 sm:p-2 flex flex-col gap-1.5">
 {steps.map((step, index) => (
 <div
 key={index}
 className={`flex items-start gap-2 p-2 rounded-lg border shadow-sm ${
 solvedCorrectly 
 ? 'bg-white border-emerald-100 ' 
 : 'bg-white border-indigo-100 '
}`}
 >
 <span className={`min-w-5 h-5 rounded-md flex items-center justify-center text-[0.65rem] font-black shrink-0 border-2 ${
 solvedCorrectly 
 ? 'bg-emerald-500 text-white border-emerald-600 shadow-sm shadow-emerald-200' 
 : 'bg-indigo-500 text-white border-indigo-600 shadow-sm shadow-indigo-200'
}`}>
 {index + 1}
 </span>

 <RichContentStack
 content={step}
 className="flex-1"
 lineClassName="mb-0.5 last:mb-0"
 mainClassName="font-bold text-slate-800 text-sm"
 subtextClassName="text-slate-500 text-[0.75rem] font-semibold"
 lineKeyPrefix={`${lineKeyPrefix}-${index}`}
 />
 </div>
))}
 </div>
 </div>
);
}

export default function DynamicTest() {
  const getCorrectIndex = (question) => {
    if (question.correct !== undefined) return question.correct;
    if (question.answer !== undefined) return question.options.indexOf(String(question.answer));
    return -1;
  };

 const params = useParams();
 const router = useRouter();
 const chapterId = params.chapterId;
 const testId = parseInt(params.id, 10);

 const chapterInfo = chaptersData.find((chapter) => chapter.id.toString() === chapterId);

 const [chapterQuestions, setChapterQuestions] = useState([]);
 const [questions, setQuestions] = useState([]);
 const [answers, setAnswers] = useState({});
 const [submitted, setSubmitted] = useState(false);
 const [loading, setLoading] = useState(true);
 const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
 const [feedbackType, setFeedbackType] = useState(null);
 const [expandedReview, setExpandedReview] = useState({});

 // Dynamic load chapter questions
 useEffect(() => {
  let cancelled = false;
  getChapterQuestions(chapterId).then((qs) => {
   if (cancelled) return;
   setChapterQuestions(qs);
  });
  return () => { cancelled = true; };
 }, [chapterId]);

 const toggleReview = (id) => {
 setExpandedReview((prev) => ({ ...prev, [id]: !prev[id]}));
};

 useEffect(() => {
 if (chapterQuestions.length > 0 && testId > 0 && testId <= Math.ceil(chapterQuestions.length / 10)) {
 const startIndex = (testId - 1) * 10;
 const endIndex = startIndex + 10;
 setQuestions(chapterQuestions.slice(startIndex, endIndex));
 setLoading(false);
} else if (chapterQuestions.length > 0) {
 router.push(`/chapters/${chapterId}/test`);
}
}, [chapterId, chapterQuestions, router, testId]);

 const handleSelect = (questionId, optionIndex) => {
 if (submitted || answers[questionId] !== undefined) return;
 const currentQuestion = questions[currentQuestionIndex];
 setAnswers((prev) => ({ ...prev, [questionId]: optionIndex}));
 if (optionIndex === getCorrectIndex(currentQuestion)) {
 setFeedbackType('correct');
 playAnswerSound('correct');
} else {
 setFeedbackType('incorrect');
 playAnswerSound('wrong');
}
 setTimeout(() => setFeedbackType(null), 1000);
};

 const handleSubmit = () => {
 setSubmitted(true);
 const currentScore = questions.reduce(
 (scoreValue, question) => scoreValue + (answers[question.id] === getCorrectIndex(question) ? 1 : 0),
 0
 );
 const pct = Math.round((currentScore / questions.length) * 100);
 try {
 localStorage.setItem(
`score_chapter_${chapterId}_test_${testId}`,
 JSON.stringify({ score: currentScore, total: questions.length, percentage: pct})
 );
} catch {}
 if (currentScore / questions.length >= 0.5) {
 playAnswerSound('complete');
 setTimeout(() => playAnswerSound('complete'), 400);
}
 window.scrollTo({ top: 0, behavior: 'smooth'});
};

 const handleReset = () => {
 setAnswers({});
 setSubmitted(false);
 setCurrentQuestionIndex(0);
 setFeedbackType(null);
 setExpandedReview({});
 window.scrollTo({ top: 0, behavior: 'smooth'});
};

 const score = submitted
 ? questions.reduce(
 (scoreValue, question) => scoreValue + (answers[question.id] === getCorrectIndex(question) ? 1 : 0),
 0
)
 : 0;
 const percentage = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;

 if (loading) {
 return (
 <div className="flex items-center justify-center min-h-screen bg-slate-50">
 <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full" />
 </div>
);
}

 return (
 <div className="min-h-screen bg-slate-50 flex flex-col">
 <Header rightIconHref={`/chapters/${chapterId}/test`} rightIconText="📝" />

 <main className="flex-1 py-2 sm:py-4 px-2 sm:px-4">
 <div className="max-w-4xl mx-auto relative">
 {/* Top Info HUD — Combined Single Row */}
 <div className="flex items-center justify-center gap-3 mb-4 relative min-h-[40px] px-10">
 <Link
 href={`/chapters/${chapterId}/test`}
 className="absolute left-0 top-1/2 -translate-y-1/2 custom-back-btn"
 title="પાછા જાઓ"
 >
 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
 <path d="M19 12H5M12 19l-7-7 7-7"/>
 </svg>
 </Link>

 <div className="flex items-center gap-2.5 flex-wrap justify-center">
 <div className="flex items-center gap-1.5 order-2 sm:order-1">
 <span className="px-2 py-0.5 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-600 text-[0.72rem] font-black tracking-widest uppercase shadow-sm">
 Ch {chapterId}
 </span>
 <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-500 text-[0.72rem] font-black tracking-widest uppercase shadow-sm">
 Test {testId}
 </span>
 </div>
 
 <h1 className="text-[0.85rem] sm:text-base font-black text-slate-800 tracking-tight flex items-center gap-1.5 order-1 sm:order-2">
 {chapterInfo?.title || 'MCQ'} <span className="text-lg">🧍</span>
 </h1>
 </div>
 </div>

 {submitted ? (
 <div className="">
 {/* Score Card */}
 <div className="mb-4 bg-gradient-to-br from-white via-indigo-50/30 to-white p-4 sm:p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-2 border-indigo-100 relative overflow-hidden text-center group">
 {/* Decorative backgrounds */}
 <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full opacity-50" />
 <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-indigo-500/10 rounded-full opacity-50" />
 
 <div className="relative z-10">
 <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-gradient-to-br from-primary via-indigo-500 to-purple-600 p-1 shadow-2xl shadow-indigo-500/40 mb-4 group-">
 <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center">
 <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-indigo-600">
 {score}
 </span>
 <div className="h-px w-8 bg-slate-200 my-0.5" />
 <span className="text-xs font-black text-slate-400">
 {questions.length}
 </span>
 </div>
 </div>

 <h2 className="text-xl sm:text-2xl font-black text-slate-800 mb-1 drop-shadow-sm">
 {percentage >= 80 ? '🎉 ઉત્તમ!' : percentage >= 50 ? '👍 સારું!' : '📖 ફરી પ્રયત્ન કરો.'}
 </h2>
 <p className="text-indigo-600 font-extrabold tracking-wide uppercase text-[0.7rem] mb-4">
 તમારો ફાઈનલ સ્કોર: {percentage}%
 </p>

 <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
 <button
 onClick={handleReset}
 className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary to-indigo-600 text-white font-black shadow-xl shadow-indigo-500/30 text-sm"
 >
 🔄 ફરીથી ગણો
 </button>
 <Link
 href={`/chapters/${chapterId}/test`}
 className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-white text-slate-700 font-extrabold border-2 border-slate-200 shadow-lg shadow-black/5 text-sm"
 >
 📋 લિસ્ટમાં જાઓ
 </Link>
 </div>
 </div>
 </div>

 {/* Review List */}
 <div className="space-y-4">
 <h3 className="text-base font-black text-slate-800 px-2 flex items-center gap-2">
 <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 flex items-center justify-center text-xs italic font-black">i</span>
 બધા પ્રશ્નો અને ઉકેલ (Review)
 </h3>
 
 {questions.map((question, questionIndex) => {
 const userAnswer = answers[question.id];
 const isAnswered = userAnswer !== undefined;
 const isCorrectAnswer = isAnswered && userAnswer === getCorrectIndex(question);
 const isOpen = expandedReview[question.id];

 let containerStyles ="bg-white border-slate-200 shadow-lg shadow-black/5";
 let statusChipStyles ="bg-slate-50 border-slate-200 text-slate-500";
 let dotColor ="bg-slate-300";

 if (isAnswered) {
 if (isCorrectAnswer) {
 containerStyles ="bg-emerald-50/50 border-emerald-200 shadow-xl shadow-emerald-950/5";
 statusChipStyles ="bg-emerald-500 border-emerald-600 text-white shadow-md shadow-emerald-500/20";
 dotColor ="bg-white";
} else {
 containerStyles ="bg-red-50/50 border-red-200 shadow-xl shadow-red-950/5";
 statusChipStyles ="bg-red-500 border-red-600 text-white shadow-md shadow-red-500/20";
 dotColor ="bg-white";
}
} else {
 containerStyles ="bg-slate-50/50 border-slate-200 shadow-lg shadow-black/5 opacity-90";
}

 return (
 <div 
 key={question.id} 
 className={`rounded-2xl border-2 overflow-hidden ${containerStyles} ${
 isOpen ? 'ring-2 ring-indigo-500/10 ring-offset-2' : ''
}`}
 >
 <div
 onClick={() => toggleReview(question.id)}
 className={`p-3 sm:p-4 cursor-pointer flex flex-col gap-2 select-none ${
 isOpen ? 'bg-white/40' : ''
}`}
 >
 <div className="flex justify-between items-center">
 <span className={`px-2.5 py-1 rounded-lg text-[0.6rem] font-black uppercase tracking-wider border-b-2 flex items-center gap-1.5 ${statusChipStyles}`}>
 <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
 {isAnswered ? (isCorrectAnswer ? 'Correct' : 'Wrong') : 'Skipped'}
 </span>

 <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${isOpen ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 ' : 'bg-white border-2 border-slate-100 text-slate-400 shadow-sm'}`}>
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
 <polyline points="6 9 12 15 18 9"></polyline>
 </svg>
 </div>
 </div>

 <div className="flex items-start gap-3">
 <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black shrink-0 border-2 shadow-sm ${
 isCorrectAnswer ? 'bg-emerald-500 text-white border-emerald-600' : (isAnswered ? 'bg-red-500 text-white border-red-600' : 'bg-slate-400 text-white border-slate-500')
}`}>
 {questionIndex + 1}
 </span>
 <div className="flex-1 mt-0.5">
 {question.context && (
 <div className="mb-2 text-slate-600 text-sm font-medium">
 <QuestionCopy content={question.context} lineKeyPrefix={`rev-ctx-${question.id}`} />
 </div>
 )}
 {question.table && (
 <div className="my-2 overflow-x-auto rounded-xl border border-slate-200">
 <table className="w-full text-sm text-center border-collapse">
 <thead>
 <tr className="bg-slate-100">
 {question.table.headers.map((h, i) => (
 <th key={i} className="p-2 border border-slate-200 text-slate-700 font-black">{h}</th>
 ))}
 </tr>
 </thead>
 <tbody>
 {question.table.rows.map((row, i) => (
 <tr key={i} className="even:bg-slate-50/50">
 {row.map((cell, j) => (
 <td key={j} className="p-2 border border-slate-200 text-slate-600 font-medium">{cell}</td>
 ))}
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 )}
 <QuestionCopy content={question.question} lineKeyPrefix={`rev-${question.id}`} />
 </div>
 </div>
 </div>

 {isOpen && (
 <div className="p-3 sm:p-4 pt-0 border-t-2 border-black/5">
 <div className="space-y-2 mt-4">
 {question.options.map((option, optionIndex) => {
 const isSelected = userAnswer === optionIndex;
 const isCorrect = optionIndex === getCorrectIndex(question);
 
 let stateStyles ="bg-white/80 border-slate-100 text-slate-500 opacity-60 gray";
 if (isCorrect) stateStyles ="bg-emerald-100 border-emerald-400 text-emerald-900 opacity-100 shadow-md ring-2 ring-emerald-500/20";
 else if (isSelected) stateStyles ="bg-red-100 border-red-400 text-red-900 opacity-100 shadow-md ring-2 ring-red-500/20";

 return (
 <div key={optionIndex} className={`flex items-start gap-3 p-3 rounded-xl border-2 font-black ${stateStyles}`}>
 <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black shrink-0 border-2 ${
 isCorrect ? 'bg-emerald-500 text-white border-emerald-600 shadow-md' : (isSelected ? 'bg-red-500 text-white border-red-600 shadow-md' : 'bg-white border-slate-200 text-slate-500')
}`}>
 {optionLabels[optionIndex]}
 </span>
 <div className="flex-1">
 <OptionCopy content={option} lineKeyPrefix={`rev-opt-${question.id}-${optionIndex}`} />
 </div>
 </div>
);
})}
 </div>

 {question.solution && (
 <SolutionCard
 solution={question.solution}
 solvedCorrectly={isCorrectAnswer}
 lineKeyPrefix={`rev-sol-${question.id}`}
 reviewMode
 />
)}
 </div>
)}
 </div>
);
})}
 
 {/* Bottom padding for list */}
 <div className="h-10" />
 </div>
 </div>
) : (
 <div className="">
 {/* Active Quiz Card */}
 <div className="bg-white rounded-2xl shadow-xl shadow-black/10 border border-slate-100 p-3 sm:p-4 relative overflow-hidden group">
 {/* Decorative glow */}
 <div className="absolute -right-16 -top-16 w-48 h-48 bg-primary/5 rounded-full opacity-50" />
 
 {questions.map((question, index) => {
 if (index !== currentQuestionIndex) return null;

 const isAnswered = answers[question.id] !== undefined;
 const isCorrectAnswer = isAnswered && answers[question.id] === getCorrectIndex(question);

 return (
 <div key={question.id} className="relative z-10">
 {/* Question Section — Colorful Gradient */
 (() => {
 const qGradients = [
 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
 'linear-gradient(135deg, #ec4899 0%, #f97316 100%)',
 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
 'linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)',
 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
 ];
 const qGrad = qGradients[currentQuestionIndex % qGradients.length];
 return (
 <div
 className="mb-3.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-[16px] sm:rounded-[20px] relative overflow-hidden shadow-xl"
 style={{ background: qGrad }}
 >
 {/* Glossy overlay */}
 <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.08) 100%)' }} />
 {/* Decorative circles */}
 <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-white/10 pointer-events-none" />
 <div className="absolute -left-4 -bottom-4 w-20 h-20 rounded-full bg-white/5 pointer-events-none" />
 
 <div className="relative z-10 flex items-center gap-3 sm:gap-4">
 <div className="text-white/30 text-[2.2rem] sm:text-[2.6rem] font-black leading-none tracking-tight flex-shrink-0">
 {String(currentQuestionIndex + 1).padStart(2, '0')}
 </div>
 <div className="text-white font-bold text-[0.95rem] sm:text-[1.05rem] leading-snug drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)] flex-1">
 {question.context && (
 <div className="mb-2.5 opacity-90 text-[0.85em] font-medium leading-relaxed bg-white/10 p-2 rounded-xl border border-white/20">
 <QuestionCopy content={question.context} lineKeyPrefix={`q-ctx-${question.id}`} variant="light" />
 </div>
 )}
 {question.table && (
 <div className="mb-3 overflow-x-auto rounded-xl border border-white/20 bg-black/10 backdrop-blur-sm shadow-inner">
 <table className="w-full text-sm text-center border-collapse">
 <thead>
 <tr className="bg-white/10">
 {question.table.headers.map((h, i) => (
 <th key={i} className="p-2 border border-white/10 text-white font-black tracking-wide">{h}</th>
 ))}
 </tr>
 </thead>
 <tbody>
 {question.table.rows.map((row, i) => (
 <tr key={i} className="even:bg-white/5">
 {row.map((cell, j) => (
 <td key={j} className="p-2 border border-white/10 text-white/90 font-medium">{cell}</td>
 ))}
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 )}
 <QuestionCopy content={question.question} lineKeyPrefix={`q-${question.id}`} variant="light" />
 </div>
 </div>
 </div>
 );
 })()}

 {/* Options Grid */}
 <div className="space-y-1.5">
 {question.options.map((option, optionIndex) => {
 const isSelected = answers[question.id] === optionIndex;
 const isCorrect = optionIndex === getCorrectIndex(question);
 
 let btnStyles ="bg-white border-slate-100 text-slate-800";
 let badgeStyles ="bg-slate-50 border-slate-200 text-slate-400";
 
 if (isAnswered) {
 if (isCorrect) {
 btnStyles ="bg-emerald-50 border-emerald-300 ring-1 ring-emerald-100 text-emerald-700 shadow-lg shadow-emerald-100/50";
 badgeStyles ="bg-emerald-500 border-emerald-400 text-white shadow-lg shadow-emerald-500/30 ring-0";
} else if (isSelected) {
 btnStyles ="bg-red-50 border-red-300 ring-1 ring-red-100 text-red-700 shadow-lg shadow-red-100/50";
 badgeStyles ="bg-red-500 border-red-400 text-white shadow-lg shadow-red-500/30 ring-0";
} else {
 btnStyles ="bg-white opacity-40 border-slate-100 text-slate-300 pointer-events-none";
 badgeStyles ="bg-slate-50 border-slate-100 text-slate-300 ring-0 shadow-none";
}
} else if (isSelected) {
 btnStyles ="bg-primary border-primary text-white shadow-xl shadow-primary/30";
 badgeStyles ="bg-white text-primary border-transparent";
}

 return (
 <button
 key={optionIndex}
 className={`w-full text-left p-2 sm:p-2.5 rounded-lg border-2 flex items-center gap-2.5 font-bold group/opt relative overflow-hidden ${btnStyles}`}
 onClick={() => handleSelect(question.id, optionIndex)}
 disabled={isAnswered}
 >
 {/* Inner Glow for active selection */}
 {!isAnswered && isSelected && (
 <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent pointer-events-none" />
)}
 
 <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-sm font-black shrink-0 border-2 ${badgeStyles}`}>
 {optionLabels[optionIndex]}
 </span>
 
 <OptionCopy
 content={option}
 lineKeyPrefix={`opt-${question.id}-${optionIndex}`}
 animated={isSelected && isCorrectAnswer}
 />
 
 {/* Success/Error checkmark placeholder */}
 {isAnswered && isCorrect && isSelected && (
 <span className="ml-auto text-xl">✅</span>
)}
 {isAnswered && !isCorrect && isSelected && (
 <span className="ml-auto text-xl">❌</span>
)}
 </button>
);
})}
 </div>

 {/* Solution Summary (Show instantly on answer) */}
 {isAnswered && question.solution && (
 <SolutionCard
 solution={question.solution}
 solvedCorrectly={isCorrectAnswer}
 lineKeyPrefix={`sol-${question.id}`}
 />
)}
 </div>
);
})}

 {/* Footer HUD & Control */}
 <div className="mt-3 border-t border-slate-100 pt-3">
 <div className="flex items-center justify-between mb-2 px-1">
 <span className="text-[0.78rem] font-black text-slate-400 tracking-widest uppercase">
 Progress: {currentQuestionIndex + 1} / {questions.length}
 </span>
 <span className="text-[0.78rem] font-black text-primary tracking-widest uppercase">
 {Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}%
 </span>
 </div>
 
 {/* Progress Bar */}
 <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner mb-4">
 <div 
 className="h-full bg-gradient-to-r from-primary via-indigo-500 to-purple-500 shadow-[0_0_10px_rgba(79,70,229,0.3)]"
 style={{ width:`${((currentQuestionIndex + 1) / questions.length) * 100}%`}}
 />
 </div>

 <div className="flex gap-3">
 {/* Previous Button */}
 <button
 className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white border border-slate-200 text-slate-500 flex items-center justify-center shrink-0 disabled:opacity-30 disabled:pointer-events-none transition-all active:scale-95 shadow-sm"
 onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
 disabled={currentQuestionIndex === 0}
 title="અગાઉનો પ્રશ્ન"
 >
 <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-[22px] sm:h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
 <path d="M19 12H5M12 19l-7-7 7-7"/>
 </svg>
 </button>
 <button
 className="flex-1 px-3 py-2 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl bg-white border border-slate-200 text-slate-600 font-bold text-sm sm:text-base flex items-center justify-center gap-1.5 sm:gap-2 group/skip"
 onClick={() => {
 if (currentQuestionIndex < questions.length - 1) {
 setCurrentQuestionIndex((prev) => prev + 1);
} else {
 handleSubmit();
}
}}
 >
 <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-[18px] sm:h-[18px] group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
 <polygon points="5 4 15 12 5 20 5 4"></polygon>
 <line x1="19" y1="5" x2="19" y2="19"></line>
 </svg>
 {currentQuestionIndex < questions.length - 1 ? 'Skip' : 'Skip & Finish'}
 </button>

 <button
 className="flex-[2] px-4 py-2 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl bg-primary text-white font-black text-sm sm:text-base shadow-lg shadow-primary/20 flex items-center justify-center gap-1.5 sm:gap-2 group/next"
 onClick={() => {
 if (currentQuestionIndex < questions.length - 1) {
 setCurrentQuestionIndex((prev) => prev + 1);
} else {
 handleSubmit();
}
}}
 >
 {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Finish Test'}
 <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
 <line x1="5" y1="12" x2="19" y2="12"></line>
 <polyline points="12 5 19 12 12 19"></polyline>
 </svg>
 </button>
 </div>
 </div>
 </div>
 </div>
)}
 </div>
 </main>


 </div>
);
}

import Link from 'next/link';
import Header from '../../components/ui/Header';


export const metadata = {
    title: 'About | ગણિત શીખો',
    description: 'અમારા વિશે - ગણિત શીખવાનું સૌથી સરળ માધ્યમ',
};

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header rightIconHref="/chapters" rightIconText="" />

            {/* Background */}
            <div
                className="fixed inset-0 -z-10 pointer-events-none"
                style={{
                    background: `
                        radial-gradient(ellipse at 20% 0%, rgba(99,102,241,0.12) 0%, transparent 50%),
                        radial-gradient(ellipse at 80% 100%, rgba(168,85,247,0.10) 0%, transparent 50%),
                        linear-gradient(180deg, #f8fafc 0%, #f1f0fb 100%)
                    `,
                }}
            />

            <style>{`
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(16px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes scaleIn {
                    from { opacity: 0; transform: scale(0.92); }
                    to { opacity: 1; transform: scale(1); }
                }
                @keyframes gradientShift {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
            `}</style>

            <main className="w-full flex-1 flex flex-col items-center justify-center max-w-[600px] mx-auto px-4 sm:px-6 py-2">
                
                {/* Back + Title Row */}
                <div className="relative flex items-center justify-center w-full mb-6" style={{ animation: 'fadeUp 0.5s ease-out' }}>
                    <Link href="/" className="custom-back-btn absolute left-0" title="Home">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                    </Link>
                    <h2 className="text-2xl sm:text-3xl font-extrabold font-main tracking-tight drop-shadow-sm text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600">
                        About Us
                    </h2>
                </div>

                {/* ===== MAIN CARD ===== */}
                <div 
                    className="w-full relative overflow-hidden"
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        borderRadius: '28px',
                        border: '1.5px solid rgba(255,255,255,0.8)',
                        boxShadow: '0 20px 60px rgba(99, 102, 241, 0.08), 0 1px 3px rgba(0,0,0,0.04)',
                        backdropFilter: 'blur(20px)',
                        animation: 'scaleIn 0.6s ease-out',
                    }}
                >
                    {/* ===== HERO SECTION ===== */}
                    <div 
                        className="relative px-6 pt-6 pb-5 text-center overflow-hidden"
                        style={{
                            background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 40%, #a855f7 100%)',
                            backgroundSize: '200% 200%',
                            animation: 'gradientShift 6s ease infinite',
                        }}
                    >
                        {/* Decorative circles */}
                        <div className="absolute top-[-30px] right-[-30px] w-28 h-28 rounded-full bg-white/10"></div>
                        <div className="absolute bottom-[-20px] left-[-20px] w-20 h-20 rounded-full bg-white/10"></div>
                        <div className="absolute top-3 left-6 w-3 h-3 rounded-full bg-white/20"></div>
                        <div className="absolute bottom-4 right-8 w-2 h-2 rounded-full bg-white/25"></div>

                        {/* Logo / Icon */}
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm mb-2 border border-white/20 shadow-lg">
                            <span className="text-2xl">📐</span>
                        </div>

                        {/* Brand Name */}
                        <h1 className="text-[2rem] sm:text-[2.6rem] font-black text-white tracking-tight leading-none mb-1.5" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.15)' }}>
                            Gyan Academy
                        </h1>
                        
                        <p className="text-white/80 text-[0.82rem] sm:text-[0.92rem] font-medium tracking-wider uppercase">
                            ગણિત શીખવાનું સૌથી સરળ માધ્યમ
                        </p>
                    </div>

                    {/* ===== STATS ROW ===== */}
                    <div className="flex items-center justify-center gap-6 sm:gap-10 py-2 border-b border-slate-100 bg-white/40">
                        <div className="text-center">
                            <p className="text-[1.1rem] sm:text-[1.3rem] font-extrabold text-indigo-600 leading-none">48+</p>
                            <p className="text-[0.65rem] sm:text-[0.72rem] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">Chapters</p>
                        </div>
                        <div className="w-px h-7 bg-slate-200"></div>
                        <div className="text-center">
                            <p className="text-[1.1rem] sm:text-[1.3rem] font-extrabold text-purple-600 leading-none">1000+</p>
                            <p className="text-[0.65rem] sm:text-[0.72rem] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">Questions</p>
                        </div>
                        <div className="w-px h-7 bg-slate-200"></div>
                        <div className="text-center">
                            <p className="text-[1.1rem] sm:text-[1.3rem] font-extrabold text-violet-600 leading-none">Free</p>
                            <p className="text-[0.65rem] sm:text-[0.72rem] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">Access</p>
                        </div>
                    </div>

                    {/* ===== BODY ===== */}
                    <div className="px-5 sm:px-7 py-3 font-main">
                        
                        <p className="text-center text-slate-600 text-[0.85rem] sm:text-[0.92rem] leading-relaxed mb-3 sm:px-4">
                            સ્પર્ધાત્મક પરીક્ષાઓની તૈયારી કરતા વિદ્યાર્થીઓ માટે ગણિતના ખ્યાલો <strong className="text-slate-800">પાયાથી લઈને એડવાન્સ લેવલ</strong> સુધી સ્પષ્ટ કરાવવાનું અમારું મિશન છે.
                        </p>

                        {/* Features Grid */}
                        <div className="gap-2.5 sm:gap-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                            {/* Theory */}
                            <div className="group relative rounded-xl p-2.5 sm:p-3 text-center border border-slate-100 bg-gradient-to-b from-white to-slate-50/80 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 hover:-translate-y-0.5">
                                <div className="w-8 h-8 mx-auto mb-1.5 rounded-xl bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                                    <span className="text-base">📖</span>
                                </div>
                                <h3 className="font-bold text-slate-800 text-[0.8rem] sm:text-[0.85rem] mb-0.5">Theory</h3>
                                <p className="text-[0.65rem] sm:text-[0.7rem] text-slate-400 leading-snug">સમજૂતી, સૂત્રો અને ઉદાહરણો</p>
                            </div>

                            {/* Test */}
                            <div className="group relative rounded-xl p-2.5 sm:p-3 text-center border border-slate-100 bg-gradient-to-b from-white to-slate-50/80 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300 hover:-translate-y-0.5">
                                <div className="w-8 h-8 mx-auto mb-1.5 rounded-xl bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                                    <span className="text-base">📝</span>
                                </div>
                                <h3 className="font-bold text-slate-800 text-[0.8rem] sm:text-[0.85rem] mb-0.5">Test</h3>
                                <p className="text-[0.65rem] sm:text-[0.7rem] text-slate-400 leading-snug">સ્માર્ટ ઓનલાઈન ટેસ્ટ</p>
                            </div>

                            {/* PDF */}
                            <div className="group relative rounded-xl p-2.5 sm:p-3 text-center border border-slate-100 bg-gradient-to-b from-white to-slate-50/80 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-300 hover:-translate-y-0.5">
                                <div className="w-8 h-8 mx-auto mb-1.5 rounded-xl bg-violet-50 flex items-center justify-center group-hover:bg-violet-100 transition-colors">
                                    <span className="text-base">📄</span>
                                </div>
                                <h3 className="font-bold text-slate-800 text-[0.8rem] sm:text-[0.85rem] mb-0.5">PDF</h3>
                                <p className="text-[0.65rem] sm:text-[0.7rem] text-slate-400 leading-snug">ડાઉનલોડ કરો, વાંચો</p>
                            </div>
                        </div>

                        {/* Bottom CTA */}
                        <div className="mt-3 mb-1 text-center">
                            <Link 
                                href="/chapters" 
                                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[0.82rem] font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                style={{ 
                                    background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                                    boxShadow: '0 4px 15px rgba(99,102,241,0.3)'
                                }}
                            >
                                શીખવાનું શરૂ કરો
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>


        </div>
    );
}

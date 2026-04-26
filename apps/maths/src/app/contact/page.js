import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: 'Contact Us | Gyan Academy',
    description: 'અમારો સંપર્ક કરો - Gyan Academy',
};

export default function ContactUsPage() {
    const mapLink = "https://maps.app.goo.gl/8E9j5JSvLspXTRKk7";
    const youtubeLink = "https://www.youtube.com/@gyanacademyonline";
    const appLink = "https://play.google.com/store/apps/details?id=com.gyanacademy.com";
    const telegramLink = "https://t.me/gyanacademygandhinagar";
    const instagramLink = "https://instagram.com/gyanacademy_official";
    const websiteLink = "https://gyanacademys.com";

    return (
        <div className="min-h-screen flex flex-col font-main relative overflow-hidden">
            {/* Background identical to About page */}
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
            `}</style>

            <main className="w-full flex-1 flex flex-col items-center justify-center max-w-[800px] mx-auto px-4 sm:px-6 py-2" style={{ animation: 'fadeUp 0.6s ease-out' }}>
                
                {/* Header */}
                <div className="flex justify-start w-full mb-2 mt-2">
                    <Link href="/" className="custom-back-btn" title="Home">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                    </Link>
                </div>

                <div className="w-full text-center mb-4 -mt-6">
                    <div className="inline-flex items-center justify-center gap-3 mb-1">
                        <Image src="/gyan-logo.png" alt="Gyan Academy" width={240} height={90} className="object-contain h-16 sm:h-20 w-auto" priority />
                    </div>
                </div>

                {/* Grid */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* Left Card: Contact Info */}
                    <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[20px] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden group hover:shadow-[0_8px_40px_rgba(99,102,241,0.08)] transition-all duration-300">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 to-red-500"></div>
                        
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                                <span className="text-base">📍</span>
                            </div>
                            <h2 className="text-lg font-bold text-slate-800">ઓફિસનું સરનામું</h2>
                        </div>

                        <div className="bg-slate-50/80 rounded-xl p-4 border border-slate-100 mb-4">
                            <h3 className="font-bold text-slate-800 text-sm sm:text-base mb-1">Gyan Academy</h3>
                            <p className="text-slate-600 text-xs sm:text-sm leading-snug mb-3">
                                Navkar Plaza, near Apna Bazar,<br />
                                Sector 6, ગાંધીનગર - 382006,<br />
                                ગુજરાત.
                            </p>
                            <a href={mapLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[11px] font-bold text-slate-700 hover:border-indigo-300 hover:text-indigo-600 transition-colors shadow-sm">
                                <span>🔗</span> Google Map પર જુઓ
                            </a>
                        </div>

                        <div className="pt-3 border-t border-slate-100">
                            <h3 className="flex items-center gap-2 font-bold text-slate-800 text-xs sm:text-sm mb-2">
                                <span>📧</span> ઈમેલ સપોર્ટ
                            </h3>
                            <a href="mailto:webcustomerservice01@gmail.com" className="block w-full p-2.5 bg-blue-50/50 border border-blue-100 rounded-lg text-blue-600 font-bold text-[13px] hover:bg-blue-100 transition-colors truncate">
                                webcustomerservice01@gmail.com
                            </a>
                            <p className="flex items-center gap-1.5 text-[11px] text-slate-500 mt-2 font-medium">
                                <span>🕒</span> 24-48 કલાકમાં જવાબ મળશે.
                            </p>
                        </div>
                    </div>

                    {/* Right Card: Social & App */}
                    <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[20px] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden group hover:shadow-[0_8px_40px_rgba(34,197,94,0.08)] transition-all duration-300 flex flex-col">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-green-500"></div>
                        
                        <div className="flex items-center gap-3 mb-1">
                            <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
                                <span className="text-base">💬</span>
                            </div>
                            <h2 className="text-lg font-bold text-slate-800">સોશિયલ મીડિયા</h2>
                        </div>
                        <p className="text-[11px] text-slate-500 font-medium mb-4 ml-11">અમારી સાથે જોડાયેલા રહો</p>

                        <div className="flex-1 flex flex-col justify-between">
                            <div className="grid grid-cols-2 gap-2 mb-4">
                                <a href={youtubeLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 p-2 rounded-lg border border-red-100 bg-white hover:bg-red-50 text-red-600 font-bold text-xs transition-all hover:-translate-y-0.5 shadow-sm">
                                    <span>▶️</span> YouTube
                                </a>
                                <a href={telegramLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 p-2 rounded-lg border border-blue-100 bg-white hover:bg-blue-50 text-blue-600 font-bold text-xs transition-all hover:-translate-y-0.5 shadow-sm">
                                    <span>✈️</span> Telegram
                                </a>
                                <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 p-2 rounded-lg border border-pink-100 bg-white hover:bg-pink-50 text-pink-600 font-bold text-xs transition-all hover:-translate-y-0.5 shadow-sm">
                                    <span>📸</span> Instagram
                                </a>
                                <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 p-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs transition-all hover:-translate-y-0.5 shadow-sm">
                                    <span>🌐</span> Website
                                </a>
                                <div className="col-span-2 mt-1">
                                    <a href={appLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 w-full p-2.5 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-[13px] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                                        <span className="text-base">📱</span> App ડાઉનલોડ કરો
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-2 p-3 bg-amber-50/80 border border-amber-100 rounded-xl">
                                <span className="text-lg mt-0.5">💡</span>
                                <div>
                                    <h4 className="font-bold text-[13px] text-amber-900 mb-0.5">અભિપ્રાય આપો</h4>
                                    <p className="text-[11px] text-amber-700/80 leading-snug font-medium">
                                        એપ્લિકેશન સુધારવા માટે કોઈ વિચાર છે? અમને ઈમેલ કરો.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}

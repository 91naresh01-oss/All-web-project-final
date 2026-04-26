export default function TestLoading() {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="w-full px-4 pt-2 mb-3">
                <div className="h-[42px] rounded-2xl bg-white/50 animate-pulse max-w-[1200px] mx-auto" />
            </div>
            <main className="flex-1 py-5 sm:py-8 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white/80 rounded-3xl border border-white/60 overflow-hidden">
                        <div className="h-1 w-full bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 animate-pulse" />
                        <div className="p-5 sm:p-8 md:p-10">
                            <div className="flex flex-col items-center mb-7">
                                <div className="h-6 w-28 bg-indigo-100 rounded-full animate-pulse mb-2" />
                                <div className="h-6 w-40 bg-slate-200 rounded-lg animate-pulse" />
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                                {[1,2,3,4,5,6].map(i => (
                                    <div key={i} className="rounded-2xl h-[56px] bg-slate-200/60 animate-pulse" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

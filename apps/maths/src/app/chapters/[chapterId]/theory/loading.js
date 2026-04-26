export default function TheoryLoading() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Skeleton Header */}
            <div className="w-full px-4 pt-2 mb-3">
                <div className="h-[42px] rounded-2xl bg-white/50 animate-pulse max-w-[1200px] mx-auto" />
            </div>

            <main className="max-w-4xl mx-auto px-3 sm:px-4 pb-8 w-full flex-1">
                {/* Skeleton Title Bar */}
                <div className="mt-1.5 mb-5 rounded-2xl bg-white/40 h-[62px] sm:h-[70px] animate-pulse" />

                {/* Skeleton Cards */}
                <div className="flex flex-col gap-3">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="rounded-2xl overflow-hidden bg-white/50 animate-pulse">
                            <div className="h-[52px] bg-gradient-to-r from-emerald-200/40 to-emerald-100/30" />
                            <div className="px-4 py-4 space-y-3">
                                <div className="h-3 bg-slate-200/60 rounded-full w-[85%]" />
                                <div className="h-3 bg-slate-200/50 rounded-full w-[70%]" />
                                <div className="h-3 bg-slate-200/40 rounded-full w-[55%]" />
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

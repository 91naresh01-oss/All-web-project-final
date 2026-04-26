
// આ ફાઈલ Google Analytics માં Custom Events મોકલવા માટે છે.
// આનાથી આપણે જાણી શકીશું કે યુઝર કયા બટન પર ક્લિક કરે છે.

export const trackEvent = (eventName: string, params?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', eventName, params);
    }
};

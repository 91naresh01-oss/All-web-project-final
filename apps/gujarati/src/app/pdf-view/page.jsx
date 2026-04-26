'use client';

import dynamic from 'next/dynamic';

const PdfViewerClient = dynamic(() => import('./PdfViewerClient'), {
    ssr: false,
    loading: () => (
        <div style={{ textAlign: 'center', padding: '50px', color: '#fff' }}>
            <h2>PDF લોડ થઈ રહી છે...</h2>
        </div>
    )
});

export default function Page() {
    return <PdfViewerClient />;
}

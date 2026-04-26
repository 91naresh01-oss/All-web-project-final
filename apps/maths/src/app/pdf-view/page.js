'use client';

import dynamic from 'next/dynamic';
import { Suspense} from 'react';

// Dynamically import the PDF viewer with SSR disabled
const PDFViewer = dynamic(() => import('./PDFViewer'), {
 ssr: false,
 loading: () => (
 <div className="pdf-viewer-container">
 <div className="pdf-loading">
 <div className="pdf-loader-spinner"></div>
 <p>PDF વ્યૂઅર લોડ થઈ રહ્યો છે...</p>
 </div>
 </div>
),
});

export default function PDFViewPage() {
 return (
 <Suspense fallback={
 <div className="pdf-viewer-container">
 <div className="pdf-loading">
 <div className="pdf-loader-spinner"></div>
 <p>પ્રતીક્ષા કરો...</p>
 </div>
 </div>
}>
 <PDFViewer />
 </Suspense>
);
}

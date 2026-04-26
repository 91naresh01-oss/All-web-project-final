'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import * as pdfjsLib from 'pdfjs-dist';
import { 
  ArrowLeft, 
  ZoomIn, 
  ZoomOut, 
  Maximize, 
  Minimize
} from 'lucide-react';
import '../pdf-viewer.css';

// ===== Worker: Local file (NOT CDN) =====
if (typeof window !== 'undefined') {
  const isProd = process.env.NODE_ENV === 'production';
  pdfjsLib.GlobalWorkerOptions.workerSrc = isProd ? '/maths/pdf.worker.mjs' : '/pdf.worker.mjs';
}

// ===== Helper: localStorage key for scroll position =====
const getScrollKey = (file) => `pdf-scroll-${file}`;

// ===== Single PDF Page — renders independently via canvas =====
function PDFPageCanvas({ pdf, pageNumber, scale, onPageVisible }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const renderTaskRef = useRef(null);
  const [rendered, setRendered] = useState(false);
  const [pageSize, setPageSize] = useState(null);
  const isPriority = pageNumber <= 2;
  const [shouldRender, setShouldRender] = useState(isPriority);

  // Lazy loading: only render when near viewport
  useEffect(() => {
    if (isPriority || shouldRender) return;
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: '800px 0px', threshold: 0.01 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isPriority, shouldRender]);

  // Track current page for indicator
  useEffect(() => {
    if (!onPageVisible) return;
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onPageVisible(pageNumber);
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [pageNumber, onPageVisible]);

  // Render page to canvas
  useEffect(() => {
    if (!shouldRender || !pdf) return;
    let cancelled = false;

    const renderPage = async () => {
      try {
        const page = await pdf.getPage(pageNumber);
        if (cancelled) return;

        // Get the device pixel ratio for high-res rendering
        const dpr = window.devicePixelRatio || 1;
        const viewport = page.getViewport({ scale: scale * dpr });
        
        // CSS dimensions (how big it looks on screen)
        const cssScale = scale;
        const cssViewport = page.getViewport({ scale: cssScale });
        setPageSize({ width: cssViewport.width, height: cssViewport.height });

        const canvas = canvasRef.current;
        if (!canvas || cancelled) return;

        // Cancel any previous render
        if (renderTaskRef.current) {
          try { renderTaskRef.current.cancel(); } catch (e) {}
        }

        const ctx = canvas.getContext('2d', { alpha: false });
        
        // Actual pixel size (how many pixels are drawn)
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        
        // No fixed style height here! We use CSS width: 100% and aspect-ratio.

        const renderTask = page.render({
          canvasContext: ctx,
          viewport: viewport,
        });
        renderTaskRef.current = renderTask;

        await renderTask.promise;
        if (!cancelled) setRendered(true);
      } catch (err) {
        if (err?.name !== 'RenderingCancelled' && !cancelled) {
          console.error(`Page ${pageNumber} render error:`, err);
        }
      }
    };

    renderPage();
    return () => { cancelled = true; };
  }, [pdf, pageNumber, scale, shouldRender]);

  // Placeholder size estimate (A4 ratio)
  const placeholderStyle = pageSize
    ? { width: '100%', maxWidth: `${pageSize.width}px`, aspectRatio: `${pageSize.width}/${pageSize.height}` }
    : { width: '100%', maxWidth: '800px', aspectRatio: '1/1.414' };

  return (
    <div
      ref={containerRef}
      className="pdf-page-wrapper"
      data-page={pageNumber}
    >
      {shouldRender ? (
        <div style={{ position: 'relative', width: '100%', maxWidth: pageSize ? `${pageSize.width}px` : '800px' }}>
          <canvas
            ref={canvasRef}
            style={{
              width: '100%',
              height: 'auto',
              display: rendered ? 'block' : 'none',
              aspectRatio: pageSize ? `${pageSize.width}/${pageSize.height}` : 'auto',
              boxShadow: '0 5px 25px rgba(0,0,0,0.3)',
              borderRadius: '4px',
              backgroundColor: 'white',
            }}
          />
          {!rendered && (
            <div className="pdf-page-skeleton" style={placeholderStyle}>
              <div className="skeleton-line-long" />
              <div className="skeleton-line-md" />
              <div className="skeleton-line-short" />
              <div className="skeleton-line-long" />
              <div className="skeleton-line-md" />
            </div>
          )}
        </div>
      ) : (
        <div className="pdf-page-skeleton" style={placeholderStyle}>
          <div className="skeleton-line-long" />
          <div className="skeleton-line-md" />
          <div className="skeleton-line-short" />
        </div>
      )}
    </div>
  );
}

// ===== Main PDFViewer =====
export default function PDFViewer() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const rawFile = searchParams.get('file');
  const title = searchParams.get('title') || 'PDF Viewer';

  // Memoized file source to handle basePath in production
  const file = useMemo(() => {
    if (!rawFile) return null;
    const isProd = process.env.NODE_ENV === 'production';
    if (isProd && rawFile.startsWith('/') && !rawFile.startsWith('/maths')) {
      return `/maths${rawFile}`;
    }
    return rawFile;
  }, [rawFile]);

  const [pdf, setPdf] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [scale, setScale] = useState(1.0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadError, setLoadError] = useState(null);
  const [loadingPhase, setLoadingPhase] = useState('init'); // init → loading → done
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const scrollRestoredRef = useRef(false);

  // ===== Mounted pages: start with 2, grow progressively =====
  const [mountedCount, setMountedCount] = useState(2);

  // ===== Load PDF with direct pdf.js — page 1 renders IMMEDIATELY =====
  useEffect(() => {
    if (!file) return;
    let cancelled = false;

    const loadPdf = async () => {
      setLoadingPhase('loading');
      setPdf(null);
      setNumPages(null);
      setMountedCount(5); // Start with more pages immediately to fill the view

      try {
        // Check cache first
        let fileSource = file;
        try {
          const cache = await caches.open('maths-pdf-cache-v1');
          const cachedRes = await cache.match(file);
          if (cachedRes) {
            const blob = await cachedRes.blob();
            const arrayBuffer = await blob.arrayBuffer();
            fileSource = { data: new Uint8Array(arrayBuffer) };
          }
        } catch (e) { /* cache not available */ }

        // Load PDF document — with strict progressive fetching
        const loadingTask = pdfjsLib.getDocument({
          ...(typeof fileSource === 'string' ? { url: fileSource } : fileSource),
          disableAutoFetch: true,  // ONLY fetch what is needed for current page
          disableStream: false,    // Allow streaming data
          cMapPacked: true,
        });

        const pdfDoc = await loadingTask.promise;
        if (cancelled) return;

        setPdf(pdfDoc);
        setNumPages(pdfDoc.numPages);
        setLoadingPhase('done');

        // Progressive mount: much faster intervals (100ms → 300ms → 800ms)
        setTimeout(() => {
          if (!cancelled) setMountedCount(Math.min(10, pdfDoc.numPages));
        }, 100);
        setTimeout(() => {
          if (!cancelled) setMountedCount(Math.min(20, pdfDoc.numPages));
        }, 300);
        setTimeout(() => {
          if (!cancelled) setMountedCount(pdfDoc.numPages);
        }, 800);

        // Cache for next time (background)
        if (typeof fileSource === 'string') {
          setTimeout(async () => {
            try {
              const cache = await caches.open('maths-pdf-cache-v1');
              const existing = await cache.match(file);
              if (!existing) {
                const res = await fetch(file);
                if (res.ok) cache.put(file, res);
              }
            } catch (e) {}
          }, 3000);
        }

      } catch (err) {
        if (!cancelled) {
          console.error('PDF load error:', err);
          setLoadError(err.message || 'Failed to load PDF');
          setLoadingPhase('done');
        }
      }
    };

    loadPdf();
    return () => { cancelled = true; };
  }, [file]);

  // ===== Scroll Position Memory — Save =====
  useEffect(() => {
    if (!file || !contentRef.current) return;

    let saveTimer = null;
    const handleScroll = () => {
      clearTimeout(saveTimer);
      saveTimer = setTimeout(() => {
        try {
          const el = contentRef.current;
          if (!el) return;
          localStorage.setItem(getScrollKey(file), JSON.stringify({
            scrollTop: el.scrollTop,
            page: currentPage,
            timestamp: Date.now()
          }));
        } catch (e) {}
      }, 300);
    };

    const el = contentRef.current;
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(saveTimer);
      el.removeEventListener('scroll', handleScroll);
    };
  }, [file, currentPage]);

  // ===== Scroll Position Memory — Restore =====
  useEffect(() => {
    if (!file || !numPages || scrollRestoredRef.current) return;

    try {
      const saved = localStorage.getItem(getScrollKey(file));
      if (!saved) return;

      const data = JSON.parse(saved);
      if (Date.now() - data.timestamp > 7 * 24 * 60 * 60 * 1000) return;

      const timer = setTimeout(() => {
        if (contentRef.current && data.scrollTop) {
          contentRef.current.scrollTop = data.scrollTop;
          scrollRestoredRef.current = true;
        }
      }, 800);
      return () => clearTimeout(timer);
    } catch (e) {}
  }, [file, numPages]);

  // ===== Security: Block keyboard shortcuts =====
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && (e.key === 'p' || e.key === 's' || e.key === 'u' || e.key === 'i')) {
        e.preventDefault();
        return false;
      }
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // ===== Security: Block Right Click =====
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    window.addEventListener('contextmenu', handleContextMenu);
    return () => window.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  // ===== Zoom =====
  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.25, 3.0));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.25, 0.5));

  // ===== Fullscreen =====
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  // ===== Page Indicator callback =====
  const handlePageVisible = useCallback((pageNum) => {
    setCurrentPage(pageNum);
  }, []);

  // ===== Error/No File states =====
  if (!file) {
    return (
      <div className="pdf-viewer-container">
        <div className="pdf-loading">
          <p>Error: No PDF file specified.</p>
          <button onClick={() => router.back()} className="btn">Go Back</button>
        </div>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="pdf-viewer-container">
        <div className="pdf-loading">
          <p>❌ PDF લોડ થઈ શક્યું નહીં</p>
          <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>{loadError}</p>
          <button onClick={() => router.back()} style={{ marginTop: 16, padding: '8px 20px', borderRadius: 8, background: 'white', border: 'none', cursor: 'pointer', fontWeight: 600 }}>← પાછા જાઓ</button>
        </div>
      </div>
    );
  }

  const pagesToRender = Math.min(mountedCount, numPages || 0);

  return (
    <div className="pdf-viewer-container" ref={containerRef}>
      {/* Floating Back Button - Desktop Only */}
      <button className="custom-back-btn floating-back-btn hidden lg:flex" onClick={() => router.back()} title="પાછા જાઓ">
        <ArrowLeft size={24} strokeWidth={2.5} />
      </button>

      {/* Topbar */}
      <div className="pdf-topbar">
        <div className="pdf-topbar-left">
          {/* Back Button - Mobile Only */}
          <button className="custom-back-btn lg:hidden" onClick={() => router.back()} title="પાછા જાઓ">
            <ArrowLeft size={18} strokeWidth={2.5} />
          </button>
          <h2 className="pdf-title">{title}</h2>
        </div>

        <div className="pdf-topbar-right">
          <div className="zoom-controls">
            <button className="zoom-btn" onClick={handleZoomOut} disabled={scale <= 0.5} title="Zoom Out">
              <ZoomOut size={16} />
            </button>
            <span className="zoom-value">{Math.round(scale * 100)}%</span>
            <button className="zoom-btn" onClick={handleZoomIn} disabled={scale >= 3.0} title="Zoom In">
              <ZoomIn size={16} />
            </button>
          </div>
          <button className="fullscreen-btn" onClick={toggleFullscreen} title="Full Screen">
            {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="pdf-content-area" ref={contentRef} onCopy={(e) => e.preventDefault()}>
        {loadingPhase === 'loading' && !pdf && (
          <div className="pdf-loading">
            <div className="pdf-loader-spinner"></div>
            <p>PDF લોડ થઈ રહી છે...</p>
          </div>
        )}

        {pdf && pagesToRender > 0 && (
          <>
            {Array.from({ length: pagesToRender }, (_, i) => (
              <PDFPageCanvas
                key={`page-${i + 1}-${scale}`}
                pdf={pdf}
                pageNumber={i + 1}
                scale={scale}
                onPageVisible={handlePageVisible}
              />
            ))}
          </>
        )}
      </div>

      {/* Floating Page Indicator */}
      {numPages && (
        <div className="pdf-page-indicator">
          {currentPage} / {numPages}
        </div>
      )}

      {/* Skeleton Styles */}
      <style jsx global>{`
        .pdf-page-skeleton {
          background: white;
          padding: 40px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          border-radius: 4px;
          box-shadow: 0 5px 25px rgba(0, 0, 0, 0.3);
          margin: 0 auto;
          position: relative;
          overflow: hidden;
        }
        .pdf-page-skeleton::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(0,0,0,0.03), transparent);
          animation: shimmer 1.5s infinite;
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .skeleton-line-long { height: 20px; width: 90%; background: #e5e7eb; border-radius: 4px; }
        .skeleton-line-md { height: 20px; width: 70%; background: #e5e7eb; border-radius: 4px; }
        .skeleton-line-short { height: 20px; width: 40%; background: #e5e7eb; border-radius: 4px; }
      `}</style>
    </div>
  );
}

'use client';

import Link from 'next/link';
import Header from '@/components/header';
import { useAppState } from '@/context/app-context';
import { Separator } from '@/components/ui/separator';
import { Toaster } from '@/components/ui/toaster';
import { useEffect } from 'react';
import { cn } from '@/lib/utils';
import type { BeforeInstallPromptEvent } from '@/lib/words';
import { usePathname } from 'next/navigation';
import { withBasePath } from '@/lib/base-path';

// This component handles the browser's back button for the spelling journey part of the app.
function SystemBackHandler() {
  const { back, appState, history } = useAppState();
  const pathname = usePathname();

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      // Only handle SPA-like navigation within the spelling journey on the home page
      if (pathname === '/') {
        // If the state is not the initial one, call the app's back function.
        if (history.length > 1) {
          back();
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [back, appState, history, pathname]);

  return null; // This component does not render anything.
}


export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { fontSize, setInstallPrompt, setIsInstalled, appState } = useAppState();
  const pathname = usePathname();

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register(withBasePath('/sw.js'))
        .then(() => console.log("🔥 Service Worker Registered"))
        .catch((err) => console.error("SW registration failed:", err));
    }

    const handleInstallPrompt = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);
    };

    const handleAppInstalled = () => {
      setInstallPrompt(null);
      setIsInstalled(true);
    };

    window.addEventListener('beforeinstallprompt', handleInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, [setInstallPrompt, setIsInstalled]);

  return (
    <div className={cn("flex flex-col min-h-screen font-sans antialiased text-foreground", fontSize)}>
      <SystemBackHandler />
      <Header />
      <main
        className="flex-grow flex flex-col items-center px-3 sm:px-4 md:px-6 pt-2 pb-4"
      >
        <div className="flex w-full flex-col items-center">
          {children}
        </div>
      </main>

      {pathname === '/' && appState === 'main-menu' && (
        <footer className="py-6 px-4 space-y-4">
          <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground flex-wrap">
            <Link href="/about-us" className="hover:text-primary">About Us</Link>
            <Separator orientation="vertical" className="h-4" />
            <Link href="/contact-us" className="hover:text-primary">Contact Us</Link>
            <Separator orientation="vertical" className="h-4" />
            <Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
            <Separator orientation="vertical" className="h-4" />
            <Link href="/terms-of-service" className="hover:text-primary">Terms of Service</Link>
          </div>
        </footer>
      )}
      <Toaster />
    </div>
  );
}

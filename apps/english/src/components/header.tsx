'use client';

import { useState, Suspense } from 'react';
import { Settings, Home, Download, Award } from 'lucide-react';
import { Button } from './ui/button';
import SettingsPanel from './settings-panel';
import UserAvatar from './user-avatar';
import { useRouter, usePathname } from 'next/navigation';
import { useAppState } from '@/context/app-context';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function Header() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { installPrompt, triggerInstallPrompt, isInstalled, finishTest } = useAppState();
  const router = useRouter();
  const pathname = usePathname();

  const handleHomeClick = () => {
    if (pathname === '/') {
      // If on the spelling journey, just reset the state
      finishTest();
    } else {
      // If on another page, navigate to home
      router.push('/');
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md shadow-sm">
        <div className="flex h-11 w-full items-center justify-between px-3 sm:px-4">
          <div className="flex w-20 items-center justify-start">
            {installPrompt && !isInstalled && (
              <Button
                type="button"
                variant="default"
                size="sm"
                onClick={triggerInstallPrompt}
                className={cn(
                  "flex items-center gap-1 bg-red-500 text-white hover:bg-red-600 shadow-md",
                  "rounded-full h-7 px-2"
                )}
                aria-label="Install App"
                title="Install App"
              >
                <Download className="h-3 w-3" />
                <span className="hidden sm:inline text-[10px] font-bold">Install</span>
              </Button>
            )}
          </div>
          <div className="flex justify-center">
            <Button type="button" variant="ghost" size="icon" aria-label="Home" onClick={handleHomeClick} className="h-8 w-8">
              <Home className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex w-28 items-center justify-end gap-0.5">
            <Link href="/profile" passHref>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label="My Progress"
                className="h-8 w-8"
              >
                <Award className="h-4 w-4" />
                <span className="sr-only">My Progress</span>
              </Button>
            </Link>
            <UserAvatar />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => setIsSettingsOpen(true)}
              aria-label="Settings"
              className="h-8 w-8"
            >
              <Settings className="h-4 w-4" />
              <span className="sr-only">Settings</span>
            </Button>
          </div>
        </div>
      </header>
      <Suspense fallback={null}>
        <SettingsPanel open={isSettingsOpen} onOpenChange={setIsSettingsOpen} />
      </Suspense>
    </>
  );
}


'use client';

import React from 'react';
import Link from 'next/link';
import { useAppState } from '@/context/app-context';
import { useAuth } from '@/context/auth-context';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, ArrowLeft, BookOpen, TestTube2, RefreshCw, Calendar, Clock, Trash2, AlertTriangle, Cloud, HardDrive, Wifi, WifiOff } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { format } from 'date-fns';
import type { ProgressEntry } from '@/lib/words';


const getLinkForId = (id: string) => {
  if (id.startsWith('book-')) {
    const parts = id.split('-');
    // Example ID: book-1-chapter-1-level-1
    if (parts.length === 6) {
      const bookId = `${parts[0]}-${parts[1]}`;
      const chapterId = `${parts[2]}-${parts[3]}`;
      const levelId = `${parts[4]}-${parts[5]}`;
      // This link structure depends on how you handle navigation back to a specific level.
      // For now, let's assume it just goes back to the chapter.
      return `/`; // You might need a more specific link
    }
  } else {
    // Example ID: adjectives-gu-test-1
    const parts = id.split('-test-');
    if (parts.length === 2) {
      const topic = parts[0];
      const test = `test-${parts[1]}`;
      return `/grammar/${topic}/test/${test}`;
    }
  }
  return '/';
};


const ProgressItem = ({ id, progressEntry }: { id: string; progressEntry: ProgressEntry }) => {
  const { score, date } = progressEntry;
  const isPassed = score >= 80;
  const scoreColor = isPassed ? 'text-green-700 bg-green-100/80' : 'text-red-700 bg-red-100/80';
  const formattedDate = date ? format(new Date(date), 'PP') : ''; // Format: Dec 25, 2023
  const formattedTime = date ? format(new Date(date), 'p') : '';   // Format: 5:30 PM

  const isSpelling = id.startsWith('book-');

  // Parse spelling ID: book-1-chapter-1-level-1
  const parseSpellingId = (id: string) => {
    const parts = id.split('-');
    if (parts.length === 6) {
      return { bookNum: parts[1], chNum: parts[3], levelNum: parts[5] };
    }
    return null;
  };

  // Parse grammar ID: adjectives-gu-test-1
  const parseGrammarId = (id: string) => {
    const parts = id.split('-test-');
    if (parts.length === 2) {
      const topicName = parts[0]
        .replace(/-gu$/, '')
        .replace(/-hi$/, '')
        .replace(/-/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase());
      return { topic: topicName, testNum: parts[1] };
    }
    return null;
  };

  const spellingData = isSpelling ? parseSpellingId(id) : null;
  const grammarData = !isSpelling ? parseGrammarId(id) : null;

  return (
    <div className="flex flex-col p-4 bg-white/70 backdrop-blur-sm rounded-lg border border-white/50 shadow-lg space-y-3">
      <div className="flex items-center justify-between">
        {spellingData && (
          <div className="flex flex-col gap-2">
            <div>
              {progressEntry.chapterTitle && (() => {
                const titleText = progressEntry.chapterTitle.replace(/\s*[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]\s*$/u, '');
                const emoji = progressEntry.chapterTitle.match(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u)?.[0] || '';

                return (
                  <div className="flex items-center gap-1 mb-0.5 max-w-[200px] sm:max-w-[300px]">
                    <span className="text-sm font-extrabold text-slate-800 truncate">
                      {titleText}
                    </span>
                    {emoji && <span className="text-sm">{emoji}</span>}
                  </div>
                );
              })()}
            </div>
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/30 border border-white/50 shadow-lg backdrop-blur-md ring-1 ring-white/20 w-fit">
              <span className="text-indigo-900 text-xs font-black tracking-wider uppercase">Test</span>
              <span className="bg-white text-purple-600 text-xs font-bold px-2 py-0.5 rounded-full shadow-md border border-white/60">B-{spellingData.bookNum}</span>
              <span className="text-black/20 text-xs">|</span>
              <span className="bg-white text-blue-600 text-xs font-bold px-2 py-0.5 rounded-full shadow-md border border-white/60">Ch-{spellingData.chNum}</span>
              <span className="text-black/20 text-xs">|</span>
              <span className="bg-white text-indigo-600 text-xs font-bold px-2 py-0.5 rounded-full shadow-md border border-white/60">L-{spellingData.levelNum}</span>
            </div>
          </div>
        )}

        {grammarData && (
          <div className="flex flex-col gap-1.5">
            <span className="text-sm font-extrabold text-slate-800">
              {grammarData.topic}
            </span>
            <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/60 border border-orange-200 shadow-sm w-fit">
              <span className="text-orange-600 text-xs font-bold">Test</span>
              <span className="bg-gradient-to-br from-orange-500 to-amber-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">#{grammarData.testNum}</span>
            </div>
          </div>
        )}

        <div className={`text-base font-bold px-3 py-1 rounded-full ${scoreColor}`}>
          {score}%
        </div>
      </div>
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            <span>{formattedTime}</span>
          </div>
        </div>
        <Link href={getLinkForId(id)} passHref>
          <Button variant="ghost" size="sm" className="h-9 text-primary hover:bg-primary/10 hover:text-primary font-semibold">
            <RefreshCw className="h-4 w-4 mr-2" />
            Retry
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default function ProfilePage() {
  const { progress, grammarProgress, clearAllProgress } = useAppState();
  const { user } = useAuth();

  const spellingEntries = Object.entries(progress || {});
  const grammarEntries = Object.entries(grammarProgress || {});

  const spellingLevelsCompleted = spellingEntries.length;
  const grammarTestsCompleted = grammarEntries.length;

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4 pb-12">
      <div className="flex items-center justify-between w-full mb-4">
        <Link href="/" passHref>
          <Button variant="ghost" size="icon" className="bg-white/60 backdrop-blur-sm shadow-md rounded-lg h-8 w-8 border border-white/40">
            <ArrowLeft className="h-4 w-4 text-destructive" />
          </Button>
        </Link>
        <h1 className="font-bold text-xl text-3d-blue-white-shadow flex items-center gap-2">
          <Award className="h-6 w-6 text-primary" />
          My Progress
        </h1>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="ghost" size="icon" className="bg-white/60 backdrop-blur-sm shadow-md rounded-lg h-8 w-8 border border-white/40">
              <Trash2 className="h-4 w-4 text-destructive" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-destructive" />
                Are you absolutely sure?
              </AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete all your spelling and grammar progress data from this device.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={clearAllProgress} className="bg-destructive hover:bg-destructive/90">
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      {/* Sync Status Indicator */}
      <div className={`w-full p-2.5 mb-4 rounded-xl flex items-center justify-between shadow-sm border ${user ? 'bg-blue-50/80 border-blue-200 text-blue-900' : 'bg-orange-50/80 border-orange-200 text-orange-900'}`}>
        <div className="flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
                <AvatarImage src={user.photoURL || undefined} alt={user.displayName || 'User'} />
                <AvatarFallback className="bg-blue-200 text-blue-700 font-bold">
                  {user.displayName?.[0] || user.email?.[0]?.toUpperCase() || 'U'}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-blue-600/80">
                  <Cloud className="h-3 w-3" />
                  <span>Sync Active</span>
                </div>
                <span className="text-sm font-bold truncate max-w-[160px] sm:max-w-none">
                  {user.email}
                </span>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-sm font-bold p-2">
              <HardDrive className="h-5 w-5 opacity-70" />
              <span>Status: Local Storage Only</span>
            </div>
          )}
        </div>
        <div className="flex flex-col items-end gap-1 px-3">
          <div className="flex items-center gap-1.5">
            <span className={`flex h-2 w-2 rounded-full ${user ? 'bg-green-500 animate-pulse' : 'bg-orange-400'}`}></span>
            <span className="text-[10px] font-black uppercase tracking-tighter opacity-70">{user ? 'Online' : 'Offline'}</span>
          </div>
          <span className="text-[10px] font-medium opacity-60 italic">{user ? 'Cloud Protected' : 'On Device'}</span>
        </div>
      </div>

      <Tabs defaultValue="spelling" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-white/60 backdrop-blur-sm border">
          <TabsTrigger value="spelling" className="gap-2">
            <BookOpen className="h-4 w-4" />
            Spelling Journey
            {spellingLevelsCompleted > 0 && (
              <span className="ml-1 bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-blue-200">
                {spellingLevelsCompleted}
              </span>
            )}
          </TabsTrigger>
          <TabsTrigger value="grammar" className="gap-2">
            <TestTube2 className="h-4 w-4" />
            Grammar Guide
            {grammarTestsCompleted > 0 && (
              <span className="ml-1 bg-orange-100 text-orange-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-orange-200">
                {grammarTestsCompleted}
              </span>
            )}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="spelling">
          <Card className="bg-transparent border-none shadow-none mt-4">
            <CardContent className="space-y-2 p-0">
              {spellingLevelsCompleted > 0 ? (
                spellingEntries.map(([key, value]) => (
                  value && <ProgressItem key={key} id={key} progressEntry={value} />
                ))
              ) : (
                <p className="text-sm text-muted-foreground text-center p-8 bg-white/50 rounded-xl border border-dashed">You have not completed any spelling levels yet.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="grammar">
          <Card className="bg-transparent border-none shadow-none mt-4">
            <CardContent className="space-y-2 p-0">
              {grammarTestsCompleted > 0 ? (
                grammarEntries.map(([key, value]) => (
                  value && <ProgressItem key={key} id={key} progressEntry={value} />
                ))
              ) : (
                <p className="text-sm text-muted-foreground text-center p-8 bg-white/50 rounded-xl border border-dashed">You have not attempted any grammar tests yet.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

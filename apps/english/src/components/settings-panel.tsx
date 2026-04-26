'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from '@/components/ui/sheet';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useAppState, type FontSize, type Language } from '@/context/app-context';
import { SlidersHorizontal, Text, X, Languages } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

interface SettingsPanelProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SettingsPanel({
  open,
  onOpenChange,
}: SettingsPanelProps) {
  const { fontSize, setFontSize, language, setLanguage } = useAppState();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const options: { value: FontSize; label: string; px: string; sampleSize: string; }[] = [
    { value: 'text-12px', label: '12px', px: '12px', sampleSize: '12px' },
    { value: 'text-13px', label: '13px', px: '13px', sampleSize: '13px' },
    { value: 'text-14px', label: '14px', px: '14px', sampleSize: '14px' },
    { value: 'text-15px', label: 'Default (15px)', px: '15px', sampleSize: '15px' },
    { value: 'text-16px', label: '16px', px: '16px', sampleSize: '16px' },
    { value: 'text-17px', label: '17px', px: '17px', sampleSize: '17px' },
    { value: 'text-18px', label: '18px', px: '18px', sampleSize: '18px' },
  ];

  const langOptions = [
    { value: 'gu', label: 'ગુજરાતી (Gujarati)' },
    { value: 'hi', label: 'हिन्दी (Hindi)' }
  ];

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="bg-gradient-to-br from-blue-50/80 to-purple-100/80 backdrop-blur-xl border-l border-white/20 p-0 flex flex-col">
        <SheetHeader className="p-4 border-b border-white/20">
          <SheetTitle className="text-lg font-bold text-foreground flex items-center gap-2">
            <SlidersHorizontal className="h-5 w-5" />
            Settings
          </SheetTitle>
        </SheetHeader>

        <div className="flex-grow p-5 space-y-6 overflow-y-auto">

          {/* Font Size Section - Replaced List with Slider */}
          <div className="space-y-4">
            <div className="flex items-center justify-between px-1">
              <Label className="font-semibold text-sm flex items-center gap-2">
                <Text className="h-4 w-4 text-primary" />
                Font Size
              </Label>
              <span className="text-xs font-medium text-muted-foreground bg-muted/50 px-2 py-1 rounded-md">
                {options.find(o => o.value === fontSize)?.px || '15px'}
              </span>
            </div>

            <Card className="bg-card/40 border-white/20 shadow-sm overflow-hidden">
              <div className="p-4 bg-muted/20 border-b border-white/10 flex items-center justify-center min-h-[80px]">
                <p className={cn("text-center transition-all duration-300 leading-relaxed text-foreground/90", fontSize)}>
                  The quick brown fox jumps over the lazy dog.
                </p>
              </div>
              <CardContent className="p-5 pt-6">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-muted-foreground">A</span>
                  <Slider
                    defaultValue={[options.findIndex(o => o.value === fontSize)]}
                    value={[options.findIndex(o => o.value === fontSize)]}
                    max={options.length - 1}
                    step={1}
                    onValueChange={(vals) => setFontSize(options[vals[0]].value)}
                    className="flex-grow cursor-pointer"
                  />
                  <span className="text-xl font-bold text-foreground">A</span>
                </div>
                <div className="flex justify-between mt-2 px-1">
                  {options.map((opt, i) => (
                    <div key={opt.value} className="flex flex-col items-center gap-1">
                      <div className={cn("h-1 w-0.5 rounded-full transition-colors",
                        options.findIndex(o => o.value === fontSize) === i ? "bg-primary h-2" : "bg-muted-foreground/30")}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Language Section - Compact Grid */}
          <div className="space-y-3">
            <Label className="font-semibold text-sm flex items-center gap-2 px-1">
              <Languages className="h-4 w-4 text-emerald-600" />
              App Language
            </Label>
            <div className="grid grid-cols-2 gap-3">
              {langOptions.map((option) => (
                <div
                  key={option.value}
                  onClick={() => {
                    setLanguage(option.value as Language);
                    if (pathname.includes('/grammar')) {
                      const params = new URLSearchParams(searchParams.toString());
                      params.set('lang', option.value);
                      router.push(`${pathname}?${params.toString()}`);
                    }
                  }}
                  className={cn(
                    "cursor-pointer rounded-xl border p-3 flex flex-col items-center justify-center gap-2 transition-all duration-200",
                    language === option.value
                      ? "bg-primary/10 border-primary text-primary shadow-sm"
                      : "bg-card/50 border-white/20 hover:bg-accent/50 hover:border-white/40"
                  )}
                >
                  <span className={cn("text-lg", language === option.value ? "font-bold" : "font-medium text-muted-foreground")}>
                    {option.value === 'gu' ? 'ગુજરાતી' : 'हिन्दी'}
                  </span>
                  <span className="text-xs text-muted-foreground">{option.label.split('(')[1].replace(')', '')}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        <SheetFooter className="p-4 bg-transparent border-t border-white/20">
          <SheetClose asChild>
            <Button variant="outline" className="w-full h-11 bg-background/80 border-destructive/50 text-destructive hover:bg-destructive hover:text-destructive-foreground transition-colors shadow-sm">
              <X className="h-4 w-4 mr-2" />
              Close
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

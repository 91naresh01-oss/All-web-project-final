
'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useAppState } from '@/context/app-context';

interface HeaderProps {
  title: string;
  onBack?: () => void;
}

export default function Header({ title, onBack }: HeaderProps) {
  const { back } = useAppState();
  const handleBack = onBack || back;

  return (
    <div className="flex items-center w-full relative justify-center">
      <Button
        variant="ghost"
        size="icon"
        onClick={handleBack}
        className="absolute left-0 bg-white shadow-md rounded-lg h-10 w-10"
      >
        <ArrowLeft className="h-5 w-5 text-destructive" />
      </Button>
      <h2 className="text-base font-bold text-3d-blue-white-shadow">
        {title}
      </h2>
    </div>
  );
}

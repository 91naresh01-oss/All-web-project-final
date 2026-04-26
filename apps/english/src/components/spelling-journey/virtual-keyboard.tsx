
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowUp, Delete } from 'lucide-react';

interface VirtualKeyboardProps {
  onKeyPress: (key: string) => void;
  onEnter: () => void;
  onBackspace: () => void;
  isEnterDisabled?: boolean;
}

const VirtualKeyboard: React.FC<VirtualKeyboardProps> = ({
  onKeyPress,
  onEnter,
  onBackspace,
  isEnterDisabled = false,
}) => {
  const keysLayout = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
    ['enter', 'space', 'backspace'],
  ];

  const handleKeyClick = (key: string) => {
    if (key === 'enter') {
      onEnter();
    } else if (key === 'space') {
      onKeyPress(' ');
    } else if (key === 'backspace') {
      onBackspace();
    } else {
      onKeyPress(key);
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto p-2 bg-blue-50 dark:bg-gray-800/50 rounded-xl shadow-2xl shadow-black/30">
      <div className="space-y-2">
        {keysLayout.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center space-x-1">
            {row.map((key) => {
              if (key === 'enter') {
                return (
                  <Button
                    key={key}
                    onClick={onEnter}
                    disabled={isEnterDisabled}
                    className="h-10 flex-1 font-bold bg-blue-500 text-white hover:bg-blue-600 shadow-md px-4"
                  >
                    Enter
                  </Button>
                );
              }
              if (key === 'space') {
                return (
                  <Button
                    key={key}
                    onClick={() => handleKeyClick(key)}
                    className="h-10 flex-[2] font-bold bg-white text-gray-800 hover:bg-gray-100 shadow-md"
                  >
                    Space
                  </Button>
                );
              }
              if (key === 'backspace') {
                return (
                  <Button
                    key={key}
                    onClick={onBackspace}
                    className="h-10 flex-1 font-bold bg-red-400 text-white hover:bg-red-500 shadow-md"
                  >
                    <Delete className="h-5 w-5" />
                  </Button>
                );
              }
              return (
                <Button
                  key={key}
                  onClick={() => handleKeyClick(key)}
                  className="h-12 w-8 text-lg font-bold bg-white text-gray-800 hover:bg-gray-100 shadow-md p-0"
                >
                  {key.toUpperCase()}
                </Button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualKeyboard;

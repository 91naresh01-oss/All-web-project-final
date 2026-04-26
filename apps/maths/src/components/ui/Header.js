'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header({ rightIconHref, rightIconText }) {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [fontSize, setFontSize] = useState('medium');
    const dropdownRef = useRef(null);

    // Load saved font size on mount
    useEffect(() => {
        let savedSize = localStorage.getItem('appFontSize');

        if (!savedSize) {
            const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
            savedSize = isMobile ? 'small' : 'medium';
            localStorage.setItem('appFontSize', savedSize);
        }

        setFontSize(savedSize);
        document.documentElement.setAttribute('data-font-size', savedSize);
    }, []);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsSettingsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleFontSizeChange = (size) => {
        setFontSize(size);
        localStorage.setItem('appFontSize', size);
        document.documentElement.setAttribute('data-font-size', size);
        setIsSettingsOpen(false);
    };

    const fontSizes = [
        { key: 'xsmall', label: 'Extra Small', num: '12px', sizeClass: 'text-[0.7rem]' },
        { key: 'small', label: 'Small', num: '14px', sizeClass: 'text-xs' },
        { key: 'medium', label: 'Default', num: '15px', sizeClass: 'text-[15px]' },
        { key: 'large', label: 'Large', num: '16px', sizeClass: 'text-base' },
        { key: 'xlarge', label: 'X-Large', num: '18px', sizeClass: 'text-lg' },
    ];

    return (
        <header className="bg-white/70 backdrop-blur-sm border border-white/70 rounded-lg shadow-[0_6px_24px_rgba(31,38,135,0.07)] px-4 py-0.5 inline-grid grid-cols-[1fr_auto_1fr] items-center sticky top-2 z-50 w-full mb-3 mx-auto max-w-[1200px]">
            <div className="justify-self-start">
                <Link href="/" className="flex items-center gap-3 no-underline text-text-primary">
                    <Image src="/logo.png" alt="Maths Logo" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6 rounded-md shadow-[0_3px_8px_rgba(108,92,231,0.25)] object-cover" />
                </Link>
            </div>

            <div className="justify-self-center">
                {rightIconHref ? (
                    <Link href={rightIconHref} className="px-2 py-0.5 rounded text-text-secondary font-medium text-[1.1rem] opacity-0 pointer-events-none">{rightIconText}</Link>
                ) : (
                    <Link href="/" className="px-2 py-0.5 rounded text-text-secondary font-medium text-[1.1rem]">🏠</Link>
                )}
            </div>

            <div className="justify-self-end">
                {/* Settings Button & Dropdown */}
                <div className="relative" ref={dropdownRef}>
                    <button
                        className="bg-transparent border-none cursor-pointer text-lg px-1.5 py-0.5 rounded"
                        onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                        title="Settings"
                    >
                        ⚙️
                    </button>

                    {isSettingsOpen && (
                        <div className="absolute top-[calc(100%+8px)] right-0 p-3 min-w-[180px] z-50 bg-white border border-primary/10 rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] text-left">
                            <h4 className="m-0 mb-2.5 text-xs font-bold text-text-primary border-b border-black/5 pb-2 flex items-center gap-1.5">
                                <span className="text-base">🔤</span> Text Size
                            </h4>
                            <div className="flex flex-col gap-1">
                                {fontSizes.map(({ key, label, num, sizeClass }) => (
                                    <button
                                        key={key}
                                        className={`w-full p-2 rounded-lg border-none text-left cursor-pointer font-medium flex items-center justify-between ${fontSize === key
                                                ? 'bg-primary/15 text-primary font-semibold'
                                                : 'bg-transparent text-text-secondary '
                                            }`}
                                        onClick={() => handleFontSizeChange(key)}
                                    >
                                        <span className={sizeClass}>{label}</span>
                                        <span className="text-[0.65rem] opacity-60 font-mono tracking-tighter px-1.5 py-0.5 rounded bg-black/5">{num}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

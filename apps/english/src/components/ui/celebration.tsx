'use client';

import { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

interface CelebrationProps {
    trigger: boolean; // true when correct answer
}

export default function Celebration({ trigger }: CelebrationProps) {
    const firedRef = useRef(false);

    useEffect(() => {
        if (trigger && !firedRef.current) {
            firedRef.current = true;

            // Burst from center
            confetti({
                particleCount: 80,
                spread: 70,
                origin: { x: 0.5, y: 0.6 },
                colors: ['#22c55e', '#3b82f6', '#f59e0b', '#ec4899', '#8b5cf6'],
                scalar: 1.1,
                ticks: 120,
            });

            // Left side burst
            setTimeout(() => {
                confetti({
                    particleCount: 30,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0, y: 0.65 },
                    colors: ['#22c55e', '#84cc16', '#fbbf24'],
                    ticks: 100,
                });
            }, 80);

            // Right side burst
            setTimeout(() => {
                confetti({
                    particleCount: 30,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1, y: 0.65 },
                    colors: ['#3b82f6', '#a855f7', '#ec4899'],
                    ticks: 100,
                });
            }, 160);
        }

        if (!trigger) {
            firedRef.current = false;
        }
    }, [trigger]);

    return null; // No visible element - just triggers confetti
}

export const SOUNDS = {
    CORRECT: 'https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3',
};

// Web Audio API context (reused across calls)
let audioCtx: AudioContext | null = null;

function getAudioCtx(): AudioContext {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return audioCtx;
}

/**
 * Double Beep Error — Two short beeps, soft error feel
 * Offline ready (Web Audio API generated)
 */
const playDoubleBeepError = () => {
    try {
        const ctx = getAudioCtx();
        [0, 0.15].forEach(delay => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.value = 300;
            gain.gain.setValueAtTime(0.3, ctx.currentTime + delay);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + delay + 0.1);
            osc.connect(gain).connect(ctx.destination);
            osc.start(ctx.currentTime + delay);
            osc.stop(ctx.currentTime + delay + 0.12);
        });
    } catch (error) {
        console.error("Error playing wrong sound:", error);
    }
};

export const playSound = (type: 'correct' | 'wrong') => {
    if (type === 'correct') {
        const audio = new Audio(SOUNDS.CORRECT);
        audio.play().catch(error => console.error("Error playing sound:", error));
    } else {
        playDoubleBeepError();
    }
};

export const playCorrectSound = () => playSound('correct');
export const playWrongSound = () => playSound('wrong');

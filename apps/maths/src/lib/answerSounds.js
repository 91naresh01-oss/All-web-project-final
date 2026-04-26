"use client";

let audioContext = null;

function getAudioContext() {
  if (typeof window === "undefined") return null;

  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return null;

  if (!audioContext || audioContext.state === "closed") {
    audioContext = new Ctx();
  }

  if (audioContext.state === "suspended") {
    audioContext.resume().catch(() => {});
  }

  return audioContext;
}

function playTone(ctx, { type, frequency, startTime, duration, gainValue, rampTo, frequencyRampTo }) {
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, startTime);
  if (frequencyRampTo) {
    oscillator.frequency.exponentialRampToValueAtTime(frequencyRampTo, startTime + duration);
  }

  // Soft attack to avoid clicking noise
  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.exponentialRampToValueAtTime(gainValue, startTime + 0.015);
  // Exponential decay
  gain.gain.exponentialRampToValueAtTime(rampTo || 0.0001, startTime + duration);

  oscillator.connect(gain);
  gain.connect(ctx.destination);
  oscillator.start(startTime);
  oscillator.stop(startTime + duration);
}

export function playAnswerSound(type) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    if (type === "correct") {
      // Sweet "Ding-Ding" (E5 -> C6)
      playTone(ctx, { type: "sine", frequency: 659.25, startTime: now, duration: 0.12, gainValue: 0.1, rampTo: 0.001 });
      playTone(ctx, { type: "sine", frequency: 1046.50, startTime: now + 0.1, duration: 0.4, gainValue: 0.12, rampTo: 0.001 });
      return;
    }

    if (type === "wrong") {
      // Soft "Buh-bow" (descending triangle wave)
      playTone(ctx, { type: "triangle", frequency: 250, frequencyRampTo: 200, startTime: now, duration: 0.15, gainValue: 0.25, rampTo: 0.001 });
      playTone(ctx, { type: "triangle", frequency: 200, frequencyRampTo: 130, startTime: now + 0.15, duration: 0.35, gainValue: 0.25, rampTo: 0.001 });
      return;
    }

    if (type === "complete") {
      // Level complete arpeggio (C5, E5, G5, C6)
      [
        { f: 523.25, delay: 0 },
        { f: 659.25, delay: 0.1 },
        { f: 783.99, delay: 0.2 },
        { f: 1046.50, delay: 0.3 },
      ].forEach((note, i) => {
        playTone(ctx, {
          type: "sine",
          frequency: note.f,
          startTime: now + note.delay,
          duration: i === 3 ? 0.6 : 0.15,
          gainValue: 0.08,
          rampTo: 0.001,
        });
      });
    }
  } catch {}
}

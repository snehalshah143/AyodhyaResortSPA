'use client';

import { useState } from 'react';
import { X, Sparkles } from 'lucide-react';

export default function ComingSoonBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className="fixed top-20 left-0 right-0 z-40 flex items-center justify-center gap-3 px-4 py-3 text-base font-medium text-white"
      style={{
        background: 'linear-gradient(90deg, #8B1A1A 0%, #B8860B 40%, #FF8C00 70%, #B8860B 100%)',
      }}
    >
      <Sparkles className="h-4 w-4 shrink-0 text-yellow-300" />
      <p className="text-center leading-snug pr-8 sm:pr-0">
        <span className="font-bold tracking-widest uppercase text-yellow-200 mr-1 text-lg">Coming Soon</span>
        — Ayodhya Resort is opening its doors soon. Stay tuned for something extraordinary!
      </p>
      <Sparkles className="h-4 w-4 shrink-0 text-yellow-300 hidden sm:block" />
      <button
        onClick={() => setVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-white/20 transition-colors"
        aria-label="Dismiss banner"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
}

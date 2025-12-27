'use client';

import { useEffect, useRef } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export default function GlitchText({ text, className = '' }: GlitchTextProps) {
  const textRef = useRef<HTMLSpanElement>(null);

  return (
    <span className={`relative inline-block ${className}`} ref={textRef}>
      <span className="relative z-10">{text}</span>

      {/* Glitch layers */}
      <span
        className="absolute top-0 left-0 w-full h-full text-red-500 opacity-80 animate-glitch"
        style={{
          clipPath: 'inset(0 0 0 0)',
          textShadow: '-2px 0 #ff0000',
        }}
        aria-hidden="true"
      >
        {text}
      </span>

      <span
        className="absolute top-0 left-0 w-full h-full text-cyan-500 opacity-80 animate-glitch"
        style={{
          clipPath: 'inset(0 0 0 0)',
          textShadow: '2px 0 #00ffff',
          animationDelay: '0.2s',
        }}
        aria-hidden="true"
      >
        {text}
      </span>
    </span>
  );
}

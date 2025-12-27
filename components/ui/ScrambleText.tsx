'use client';

import { useState, useRef } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
}

const SCRAMBLE_CHARS = '.:';

export default function ScrambleText({ text, className = '' }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scramble = () => {
    let iteration = 0;
    const originalText = text;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setDisplayText(
        originalText
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return originalText[index];
            }
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          })
          .join('')
      );

      if (iteration >= originalText.length) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      }

      iteration += 1;
    }, 30);
  };

  const handleMouseEnter = () => {
    scramble();
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setDisplayText(text);
  };

  return (
    <span
      className={`cursor-pointer transition-colors ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {displayText}
    </span>
  );
}

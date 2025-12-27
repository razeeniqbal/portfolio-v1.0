'use client';

import { useEffect, useRef } from 'react';

interface StarBorderProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  color?: string;
}

export default function StarBorder({
  children,
  className = '',
  speed = 6,
  color = '#4ade80',
}: StarBorderProps) {
  const borderRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`relative ${className}`}>
      {/* Animated border */}
      <div
        ref={borderRef}
        className="absolute inset-0 rounded-lg opacity-75"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          backgroundSize: '200% 100%',
          animation: `shine ${speed}s linear infinite`,
        }}
      />

      {/* Content */}
      <div className="relative">{children}</div>
    </div>
  );
}

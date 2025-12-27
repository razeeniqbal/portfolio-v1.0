'use client';

import React from 'react';

interface RetroLoaderProps {
  type?: 'bar' | 'spinner' | 'dots';
  text?: string;
}

const RetroLoader: React.FC<RetroLoaderProps> = ({
  type = 'bar',
  text = 'LOADING...',
}) => {
  if (type === 'bar') {
    return (
      <div className="flex flex-col items-center gap-4">
        <p className="pixel-font text-xs text-dark-brown">{text}</p>
        <div className="w-64 h-6 border-3 border-dark-brown bg-cream">
          <div className="h-full bg-burnt-orange animate-[loading_2s_ease-in-out_infinite]" style={{
            animation: 'loading 2s ease-in-out infinite',
          }} />
        </div>
        <style jsx>{`
          @keyframes loading {
            0% { width: 0%; }
            50% { width: 100%; }
            100% { width: 0%; }
          }
        `}</style>
      </div>
    );
  }

  if (type === 'spinner') {
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-dark-brown border-t-burnt-orange animate-spin-slow rounded-none" />
        <p className="pixel-font text-xs text-dark-brown">{text}</p>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <p className="pixel-font text-xs text-dark-brown">{text}</p>
      <div className="flex gap-1">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 bg-burnt-orange animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default RetroLoader;

'use client';

interface ShinyTextProps {
  text: string;
  className?: string;
}

export default function ShinyText({ text, className = '' }: ShinyTextProps) {
  return (
    <span
      className={`inline-block bg-gradient-to-r from-transparent via-white to-transparent bg-clip-text text-transparent animate-shine ${className}`}
      style={{
        backgroundSize: '200% auto',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      {text}
    </span>
  );
}

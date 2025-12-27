'use client';

interface GradientTextProps {
  text: string;
  className?: string;
  colors?: string;
}

export default function GradientText({
  text,
  className = '',
  colors = 'from-primary-400 via-primary-500 to-primary-600'
}: GradientTextProps) {
  return (
    <span
      className={`inline-block bg-gradient-to-r ${colors} bg-clip-text text-transparent animate-gradient ${className}`}
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

'use client';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  blur?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function GlassCard({
  children,
  className = '',
  blur = 'md',
}: GlassCardProps) {
  const blurClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
  };

  return (
    <div
      className={`
        ${blurClasses[blur]}
        bg-white/10 dark:bg-black/10
        border border-white/20 dark:border-white/10
        shadow-glass
        ${className}
      `}
    >
      {children}
    </div>
  );
}

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface AnimatedButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

export const AnimatedButton = ({
  href,
  children,
  variant = 'primary',
  className = '',
  onClick
}: AnimatedButtonProps) => {
  const baseClasses = 'group relative cursor-pointer p-2 px-6 border rounded-full overflow-hidden text-center font-semibold transition-all duration-300';

  const variantClasses = variant === 'primary'
    ? 'bg-white border-primary-600 text-gray-900'
    : 'bg-primary-50 dark:bg-primary-900 border-primary-300 dark:border-primary-700 text-gray-900 dark:text-white';

  const hoverBgClasses = variant === 'primary'
    ? 'bg-accent-blue'
    : 'bg-accent-purple';

  const content = (
    <>
      <span className='translate-y-0 group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300 inline-block'>
        {children}
      </span>
      <div className={`flex gap-2 text-white ${hoverBgClasses} z-10 items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full group-hover:rounded-none`}>
        <span>{children}</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${variantClasses} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses} ${className}`}>
      {content}
    </button>
  );
};

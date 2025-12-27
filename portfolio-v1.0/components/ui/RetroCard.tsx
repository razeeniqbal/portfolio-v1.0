'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface RetroCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'polaroid' | 'postcard';
  hover?: boolean;
}

const RetroCard: React.FC<RetroCardProps> = ({
  children,
  className = '',
  variant = 'default',
  hover = true,
}) => {
  const variantStyles = {
    default: 'retro-box bg-cream p-6',
    polaroid: 'polaroid p-4',
    postcard: 'retro-box bg-warm-beige p-5 dithered-bg',
  };

  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, rotate: Math.random() > 0.5 ? 1 : -1 } : {}}
      transition={{ type: 'spring', stiffness: 300 }}
      className={`
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default RetroCard;

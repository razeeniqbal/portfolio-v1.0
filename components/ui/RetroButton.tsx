'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface RetroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  children: React.ReactNode;
}

const RetroButton: React.FC<RetroButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const variantStyles = {
    primary: 'bg-burnt-orange hover:bg-mustard-yellow',
    secondary: 'bg-retro-teal hover:bg-olive-green',
    success: 'bg-olive-green hover:bg-[#6B9D82]',
    danger: 'bg-retro-brown hover:bg-dark-brown',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        retro-button
        ${variantStyles[variant]}
        px-6 py-3
        font-pixel text-xs
        text-cream
        transition-all
        duration-100
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default RetroButton;

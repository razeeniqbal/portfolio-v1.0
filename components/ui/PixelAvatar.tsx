'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PixelAvatarProps {
  size?: number;
  className?: string;
}

const PixelAvatar: React.FC<PixelAvatarProps> = ({
  size = 200,
  className = '',
}) => {
  const pixelSize = size / 16;

  // Create a simple pixel art pattern (16x16 grid)
  const pattern = [
    [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0],
    [1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1],
    [1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1],
    [1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1],
    [1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0],
    [0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0],
    [0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],
  ];

  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.05 }}
      style={{ width: size, height: size }}
    >
      <motion.div
        className="glitch"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(16, ${pixelSize}px)`,
          gridTemplateRows: `repeat(16, ${pixelSize}px)`,
          gap: '1px',
          backgroundColor: '#4A3728',
          border: '3px solid #4A3728',
          boxShadow: '4px 4px 0px 0px rgba(0,0,0,0.8)',
        }}
      >
        {pattern.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              style={{
                width: pixelSize,
                height: pixelSize,
                backgroundColor: cell
                  ? `hsl(${20 + Math.random() * 10}, ${70 + Math.random() * 10}%, ${60 + Math.random() * 10}%)`
                  : 'transparent',
              }}
            />
          ))
        )}
      </motion.div>
    </motion.div>
  );
};

export default PixelAvatar;

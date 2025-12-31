'use client';

import { motion } from 'framer-motion';

interface SkillIconProps {
  name: string;
  icon: string;
  color: string;
  delay?: number;
}

export default function SkillIcon({ name, icon, color, delay = 0 }: SkillIconProps) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      type="button"
      aria-label={name}
      className="relative bg-transparent outline-none border-none cursor-pointer w-[2.8em] h-[2.8em] [perspective:20em] [transform-style:preserve-3d] group"
    >
      {/* Background Shadow Layer */}
      <span
        className="absolute top-0 left-0 w-full h-full rounded-[1em] block transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[100%_100%] rotate-[15deg] [will-change:transform] group-hover:[transform:rotate(25deg)_translate3d(-0.4em,-0.4em,0.4em)]"
        style={{
          background: color,
          boxShadow: '0.4em -0.4em 0.6em hsla(223, 10%, 10%, 0.15)'
        }}
      ></span>

      {/* Glass Front Layer */}
      <span
        className="absolute top-0 left-0 w-full h-full rounded-[1em] bg-[hsla(0,0%,100%,0.15)] dark:bg-[hsla(0,0%,10%,0.3)] transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[80%_50%] flex backdrop-blur-[0.6em] [-webkit-backdrop-filter:blur(0.6em)] [will-change:transform] transform group-hover:[transform:translate3d(0,0,1.5em)]"
        style={{
          boxShadow: '0 0 0 0.08em hsla(0, 0%, 100%, 0.3) inset'
        }}
      >
        <span className="m-auto w-[1.3em] h-[1.3em] flex items-center justify-center" aria-hidden="true">
          <img
            src={icon}
            alt={name}
            className="w-full h-full object-contain transition-all duration-300"
          />
        </span>
      </span>

      {/* Label Tooltip */}
      <span className="absolute top-full left-0 right-0 text-center whitespace-nowrap leading-[2] text-xs text-gray-900 dark:text-white opacity-0 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] translate-y-0 group-hover:opacity-100 group-hover:[transform:translateY(20%)]">
        {name}
      </span>
    </motion.button>
  );
}

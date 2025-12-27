'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Chat Room', href: '/chat' },
  { name: 'Contact', href: '/contact' },
];

const RetroNav: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation - Windows 95 style */}
      <nav className="hidden md:block bg-retro-teal border-b-5 border-dark-brown shadow-retro sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="pixel-font text-sm text-cream wobble">
              RAZEEN.EXE
            </Link>
            <div className="flex gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    retro-button
                    px-4 py-2
                    pixel-font text-xs
                    ${pathname === item.href
                      ? 'bg-burnt-orange text-cream'
                      : 'bg-warm-beige text-dark-brown hover:bg-mustard-yellow'
                    }
                  `}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden bg-retro-teal border-b-5 border-dark-brown sticky top-0 z-50">
        <div className="px-4 py-3 flex items-center justify-between">
          <Link href="/" className="pixel-font text-xs text-cream">
            RAZEEN.EXE
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="retro-button bg-burnt-orange text-cream p-2"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-warm-beige border-t-3 border-dark-brown overflow-hidden"
            >
              <div className="p-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      block retro-button px-4 py-3 pixel-font text-xs text-center
                      ${pathname === item.href
                        ? 'bg-burnt-orange text-cream'
                        : 'bg-cream text-dark-brown'
                      }
                    `}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default RetroNav;

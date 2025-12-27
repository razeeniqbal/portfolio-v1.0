'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Award, Briefcase, LayoutDashboard, MessageSquare, Mail, Sparkles, Sun, Moon } from 'lucide-react';
import { Github, Linkedin } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: User },
  { name: 'Achievements', href: '/achievements', icon: Award },
  { name: 'Projects', href: '/projects', icon: Briefcase },
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Chat Room', href: '/chat', icon: MessageSquare },
  { name: 'Contact', href: '/contact', icon: Mail },
];

export default function MobileMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between px-4 h-16">
          <Link href="/" className="text-xl font-bold text-gradient">
            Razeen Iqbal
          </Link>

          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>

            {/* Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 z-40 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="lg:hidden fixed left-0 top-16 bottom-0 w-80 max-w-[85vw] z-40 bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 overflow-y-auto"
          >
            <div className="p-6">
              {/* Profile Section */}
              <div className="mb-8">
                <div className="relative mb-4">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 p-1 mx-auto">
                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden">
                      <span className="text-3xl font-bold text-gradient">RI</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    Razeen Iqbal
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">@razeeniqbal</p>
                </div>
              </div>

              {/* Navigation */}
              <nav className="space-y-1 mb-6">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  );
                })}

                {/* Smart Talk */}
                <Link
                  href="/smart-talk"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 text-white transition-all duration-200 mt-4"
                >
                  <Sparkles className="w-5 h-5" />
                  <span className="font-medium">Smart Talk</span>
                </Link>
              </nav>

              {/* Social Links */}
              <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                <div className="flex items-center justify-center gap-3">
                  <a
                    href="https://github.com/razeeniqbal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </a>
                  <a
                    href="https://linkedin.com/in/razeeniqbal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </a>
                  <a
                    href="mailto:razeeniqbal98@gmail.com"
                    className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

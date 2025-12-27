'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, Award, Briefcase, LayoutDashboard, MessageSquare, Mail, Sparkles, Sun, Moon } from 'lucide-react';
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

export default function ModernSidebar() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
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
    <aside className="fixed left-0 top-0 h-screen w-72 bg-[#1d1d1f] text-gray-100 p-6 flex flex-col overflow-y-auto hidden lg:flex border-r border-gray-800/50">
      {/* Profile Section */}
      <div className="mb-8">
        <div className="relative mb-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mx-auto shadow-lg">
            <div className="w-full h-full rounded-full flex items-center justify-center overflow-hidden">
              <span className="text-3xl font-semibold text-white">RI</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-lg font-semibold text-white mb-0.5">
            Razeen Iqbal
          </h2>
          <p className="text-sm text-gray-400 mb-4">Data Engineer & AI Specialist</p>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-200 text-sm text-gray-300"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <>
                <Sun className="w-4 h-4" />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4" />
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-0.5">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-white/10 text-white'
                  : 'text-gray-400 hover:bg-white/5 hover:text-gray-300'
              }`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? 'text-blue-400' : ''}`} />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          );
        })}

        {/* Smart Talk - Special Button */}
        <div className="pt-2">
          <Link
            href="/smart-talk"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transition-all duration-200 shadow-lg"
          >
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium">Smart Talk</span>
          </Link>
        </div>
      </nav>

      {/* Footer */}
      <div className="mt-6 pt-6 border-t border-white/5">
        {/* Social Links */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <a
            href="https://github.com/razeeniqbal"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-200"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4 text-gray-400" />
          </a>
          <a
            href="https://linkedin.com/in/razeeniqbal"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4 text-gray-400" />
          </a>
          <a
            href="mailto:razeeniqbal98@gmail.com"
            className="p-2.5 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-200"
            aria-label="Email"
          >
            <Mail className="w-4 h-4 text-gray-400" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-center text-gray-500 leading-relaxed">
          © 2025 Razeen Iqbal
          <br />
          All rights reserved.
        </p>
      </div>
    </aside>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, Award, Briefcase, LayoutDashboard, MessageSquare, Mail, Sparkles } from 'lucide-react';
import { Github, Linkedin } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

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

  return (
    <aside className="fixed left-1/2 -translate-x-[calc(50%+30rem)] top-8 bottom-8 w-72 bg-primary-50/80 dark:bg-primary-950/80 backdrop-blur-xl text-gray-900 dark:text-gray-100 p-6 flex flex-col overflow-hidden hidden lg:flex rounded-2xl shadow-2xl">
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
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-0.5">
            Razeen Iqbal
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Data Engineer & AI Specialist</p>

          {/* Theme Toggle */}
          <div className="flex justify-center">
            <ThemeToggle />
          </div>
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
                  ? 'bg-primary-200 dark:bg-primary-800 text-gray-900 dark:text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-gray-900 dark:hover:text-gray-300'
              }`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? 'text-accent-blue' : ''}`} />
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
      <div className="mt-6 pt-6 border-t border-primary-200 dark:border-primary-800">
        {/* Social Links */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <a
            href="https://github.com/razeeniqbal"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-primary-200 dark:bg-primary-800 hover:bg-primary-300 dark:hover:bg-primary-700 rounded-full transition-all duration-200"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4 text-gray-700 dark:text-gray-400" />
          </a>
          <a
            href="https://linkedin.com/in/razeeniqbal"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-primary-200 dark:bg-primary-800 hover:bg-primary-300 dark:hover:bg-primary-700 rounded-full transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4 text-gray-700 dark:text-gray-400" />
          </a>
          <a
            href="mailto:razeeniqbal98@gmail.com"
            className="p-2.5 bg-primary-200 dark:bg-primary-800 hover:bg-primary-300 dark:hover:bg-primary-700 rounded-full transition-all duration-200"
            aria-label="Email"
          >
            <Mail className="w-4 h-4 text-gray-700 dark:text-gray-400" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-center text-gray-600 dark:text-gray-500 leading-relaxed">
          © 2025 Razeen Iqbal
          <br />
          All rights reserved.
        </p>
      </div>
    </aside>
  );
}

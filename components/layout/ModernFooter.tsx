'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function ModernFooter() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/razeeniqbal',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/razeeniqbal',
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: 'mailto:razeeniqbal98@gmail.com',
      icon: Mail,
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="border-t border-gray-200 dark:border-slate-800 mt-20">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Razeen Iqbal
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Data Engineer & AI Specialist passionate about building intelligent
              data solutions and exploring cutting-edge technologies.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>razeeniqbal98@gmail.com</li>
              <li>(+60) 13-7441727</li>
              <li>Seri Kembangan, Malaysia</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-slate-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Razeen Iqbal
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

const RetroFooter: React.FC = () => {
  return (
    <footer className="bg-retro-brown border-t-5 border-dark-brown mt-20">
      <div className="container mx-auto px-6 py-8">
        {/* ASCII Art Divider */}
        <div className="font-mono text-xs text-mustard-yellow mb-6 overflow-x-auto whitespace-pre">
{`═══════════════════════════════════════════════════════════════════════════`}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-6">
          {/* Quick Links */}
          <div>
            <h3 className="pixel-font text-xs text-cream mb-4">QUICK.LINKS</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-warm-beige hover:text-mustard-yellow transition text-sm">
                &gt; Home
              </Link>
              <Link href="/projects" className="block text-warm-beige hover:text-mustard-yellow transition text-sm">
                &gt; Projects
              </Link>
              <Link href="/dashboard" className="block text-warm-beige hover:text-mustard-yellow transition text-sm">
                &gt; Dashboard
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="pixel-font text-xs text-cream mb-4">CONTACT.ME</h3>
            <div className="space-y-2 text-sm text-warm-beige">
              <p>razeeniqbal98@gmail.com</p>
              <p>Seri Kembangan, Malaysia</p>
              <div className="flex gap-3 mt-4">
                <a
                  href="https://github.com/razeeniqbal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="retro-button bg-warm-beige p-2 hover:bg-mustard-yellow"
                >
                  <Github size={20} className="text-dark-brown" />
                </a>
                <a
                  href="https://linkedin.com/in/razeeniqbal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="retro-button bg-warm-beige p-2 hover:bg-mustard-yellow"
                >
                  <Linkedin size={20} className="text-dark-brown" />
                </a>
                <a
                  href="mailto:razeeniqbal98@gmail.com"
                  className="retro-button bg-warm-beige p-2 hover:bg-mustard-yellow"
                >
                  <Mail size={20} className="text-dark-brown" />
                </a>
              </div>
            </div>
          </div>

          {/* Web Ring Style */}
          <div>
            <h3 className="pixel-font text-xs text-cream mb-4">WEB.RING</h3>
            <div className="space-y-2">
              <div className="retro-box bg-warm-beige p-3 text-center">
                <p className="pixel-font text-[10px] text-dark-brown">
                  [ PREV ] • [ RANDOM ] • [ NEXT ]
                </p>
              </div>
              <div className="retro-box bg-mustard-yellow p-2 text-center">
                <p className="text-xs text-dark-brown font-bold">
                  🎮 VISITOR #001337
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-3 border-dark-brown pt-6 text-center">
          <p className="text-cream text-sm mb-2">
            Made with ❤️ and lots of coffee
          </p>
          <p className="pixel-font text-[10px] text-mustard-yellow">
            © 2025 RAZEEN IQBAL • BEST VIEWED IN NETSCAPE NAVIGATOR 😄
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='31'%3E%3Crect fill='%23E07A5F' width='88' height='31'/%3E%3Ctext x='44' y='20' font-family='Arial' font-size='12' fill='white' text-anchor='middle'%3EHTML%3C/text%3E%3C/svg%3E"
              alt="HTML Badge"
              className="retro-box"
            />
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='31'%3E%3Crect fill='%2381B29A' width='88' height='31'/%3E%3Ctext x='44' y='20' font-family='Arial' font-size='12' fill='white' text-anchor='middle'%3EReact%3C/text%3E%3C/svg%3E"
              alt="React Badge"
              className="retro-box"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default RetroFooter;

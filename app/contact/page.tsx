'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import RetroCard from '@/components/ui/RetroCard';
import RetroButton from '@/components/ui/RetroButton';
import { personalInfo } from '@/lib/data';
import { Mail, Github, Linkedin, MapPin, Phone, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate sending
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-primary-50 dark:bg-primary-950">
      <div className="container mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="retro-box bg-burnt-orange p-6 mb-12 text-center">
        <h1 className="pixel-font text-2xl md:text-3xl text-cream">
          📬 CONTACT.ME
        </h1>
        <p className="mt-2 text-cream">Let's connect and build something amazing!</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Contact Form - Vintage Postcard Style */}
        <div>
          <RetroCard variant="postcard">
            <div className="mb-4">
              <h2 className="pixel-font text-sm text-dark-brown mb-2">
                SEND A MESSAGE
              </h2>
              <p className="text-xs text-dark-brown">
                Fill out the form below and I'll get back to you via carrier pigeon 🐦
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label className="block pixel-font text-[10px] text-dark-brown mb-2">
                  YOUR NAME:
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-2 border-3 border-dark-brown bg-cream text-dark-brown focus:outline-none focus:border-burnt-orange"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block pixel-font text-[10px] text-dark-brown mb-2">
                  YOUR EMAIL:
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-2 border-3 border-dark-brown bg-cream text-dark-brown focus:outline-none focus:border-burnt-orange"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block pixel-font text-[10px] text-dark-brown mb-2">
                  MESSAGE:
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border-3 border-dark-brown bg-cream text-dark-brown focus:outline-none focus:border-burnt-orange resize-none"
                  placeholder="Your message here..."
                />
              </div>

              {/* Submit Button */}
              <RetroButton
                type="submit"
                variant="primary"
                disabled={status === 'sending'}
                className="w-full text-[10px]"
              >
                {status === 'sending' && '⏳ SENDING...'}
                {status === 'sent' && '✓ MESSAGE SENT VIA CARRIER PIGEON!'}
                {status === 'idle' && (
                  <>
                    <Send size={12} className="inline mr-2" />
                    SEND MESSAGE
                  </>
                )}
                {status === 'error' && '✗ ERROR! TRY AGAIN'}
              </RetroButton>

              {status === 'sent' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="retro-box bg-olive-green p-3 text-center"
                >
                  <p className="text-xs text-cream">
                    Thanks! I'll respond as soon as possible!
                  </p>
                </motion.div>
              )}
            </form>
          </RetroCard>

          {/* Fun Note */}
          <div className="mt-6 retro-box bg-mustard-yellow p-4 text-center">
            <p className="pixel-font text-[10px] text-dark-brown">
              💡 NOTE: Form submissions are currently in demo mode!
            </p>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="space-y-4">
          <RetroCard>
            <h2 className="pixel-font text-sm text-dark-brown mb-4">
              OTHER WAYS TO REACH ME
            </h2>

            <div className="space-y-3">
              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="retro-box bg-warm-beige p-4 flex items-center gap-3 hover:bg-mustard-yellow transition-colors"
              >
                <div className="retro-button bg-burnt-orange p-2">
                  <Mail className="text-cream" size={20} />
                </div>
                <div>
                  <p className="pixel-font text-[10px] text-dark-brown">EMAIL</p>
                  <p className="text-sm text-dark-brown">{personalInfo.email}</p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="retro-box bg-warm-beige p-4 flex items-center gap-3 hover:bg-mustard-yellow transition-colors"
              >
                <div className="retro-button bg-dark-brown p-2">
                  <Github className="text-cream" size={20} />
                </div>
                <div>
                  <p className="pixel-font text-[10px] text-dark-brown">GITHUB</p>
                  <p className="text-sm text-dark-brown">@razeeniqbal</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="retro-box bg-warm-beige p-4 flex items-center gap-3 hover:bg-mustard-yellow transition-colors"
              >
                <div className="retro-button bg-retro-teal p-2">
                  <Linkedin className="text-cream" size={20} />
                </div>
                <div>
                  <p className="pixel-font text-[10px] text-dark-brown">LINKEDIN</p>
                  <p className="text-sm text-dark-brown">@razeeniqbal</p>
                </div>
              </a>

              {/* Phone */}
              <div className="retro-box bg-warm-beige p-4 flex items-center gap-3">
                <div className="retro-button bg-olive-green p-2">
                  <Phone className="text-cream" size={20} />
                </div>
                <div>
                  <p className="pixel-font text-[10px] text-dark-brown">PHONE</p>
                  <p className="text-sm text-dark-brown">{personalInfo.phone}</p>
                </div>
              </div>

              {/* Location */}
              <div className="retro-box bg-warm-beige p-4 flex items-center gap-3">
                <div className="retro-button bg-mustard-yellow p-2">
                  <MapPin className="text-dark-brown" size={20} />
                </div>
                <div>
                  <p className="pixel-font text-[10px] text-dark-brown">LOCATION</p>
                  <p className="text-sm text-dark-brown">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </RetroCard>

          {/* Status Card */}
          <RetroCard variant="default" className="bg-olive-green">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-mustard-yellow rounded-full animate-pulse" />
              <div>
                <p className="pixel-font text-xs text-cream">STATUS</p>
                <p className="text-sm text-cream">{personalInfo.status}</p>
              </div>
            </div>
          </RetroCard>
        </div>
      </div>

      {/* Map Placeholder / Fun Element */}
      <div className="retro-box bg-retro-teal p-8 text-center">
        <h2 className="pixel-font text-base text-cream mb-4">
          📍 FIND ME AT
        </h2>
        <p className="text-cream mb-4">
          Based in {personalInfo.location}, working remotely and locally
        </p>
        <div className="retro-box bg-dark-brown p-12 inline-block">
          <p className="pixel-font text-xs text-olive-green">
            [ MAP LOADING... ]<br />
            [ ERROR: TOO RETRO FOR GOOGLE MAPS ]<br />
            <span className="animate-blink">▋</span>
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Database, Brain, Briefcase, Award, MessageSquare } from 'lucide-react';
import { personalInfo, skills } from '@/lib/data';

export default function Home() {
  const features = [
    {
      icon: Briefcase,
      title: 'Projects',
      description: 'Explore my portfolio of data engineering and AI projects',
      href: '/projects',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Code2,
      title: 'Skills & Tools',
      description: 'Technologies and frameworks I work with',
      href: '/about',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Database,
      title: 'Dashboard',
      description: 'Real-time coding statistics and activity',
      href: '/dashboard',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Award,
      title: 'Achievements',
      description: 'Certifications, awards, and milestones',
      href: '/achievements',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: MessageSquare,
      title: 'Chat Room',
      description: 'Connect and chat in real-time',
      href: '/chat',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Brain,
      title: 'About Me',
      description: 'Learn more about my journey and experience',
      href: '/about',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="container-custom py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 p-1">
                <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center">
                  <span className="text-4xl md:text-5xl font-bold text-gradient">RI</span>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white dark:border-slate-900"></div>
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            {personalInfo.name}
          </h1>
          <p className="text-xl md:text-2xl text-primary-600 dark:text-primary-400 mb-6">
            {personalInfo.role}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
            📍 {personalInfo.location}
          </p>

          {/* Bio */}
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            {personalInfo.bio}
          </p>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">{personalInfo.status}</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/projects" className="btn-primary inline-flex items-center gap-2">
              View Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-50 dark:bg-slate-900/50 py-16">
        <div className="container-custom">
          <h2 className="section-heading text-center mb-12">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 text-center hover-lift"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap justify-center gap-1">
                  {skill.items.slice(0, 3).map((item) => (
                    <span key={item} className="badge text-xs">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="container-custom py-20">
        <h2 className="section-heading text-center mb-12">Explore</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={feature.href}>
                <div className="card p-6 hover-lift h-full group">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {feature.description}
                  </p>
                  <div className="mt-4 flex items-center text-primary-600 dark:text-primary-400 text-sm font-medium group-hover:gap-2 transition-all">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

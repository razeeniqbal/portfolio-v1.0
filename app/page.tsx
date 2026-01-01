'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code2, MapPin, Briefcase, Award, MessageSquare, Database, Brain } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import { pythonStack } from '@/lib/skillsData';
import SkillIcon from '@/components/ui/SkillIcon';
import MagicCard from '@/components/ui/MagicCard';

export default function Home() {

  const features = [
    {
      icon: Briefcase,
      title: 'Projects',
      description: 'Explore my portfolio of data engineering and AI projects',
      href: '/projects',
      color: 'from-blue-500 to-cyan-500',
      gradientColor: '#3b82f6',
    },
    {
      icon: Database,
      title: 'Dashboard',
      description: 'Real-time coding statistics and activity',
      href: '/dashboard',
      color: 'from-orange-500 to-red-500',
      gradientColor: '#f97316',
    },
    {
      icon: Award,
      title: 'Achievements',
      description: 'Certifications, awards, and milestones',
      href: '/achievements',
      color: 'from-green-500 to-emerald-500',
      gradientColor: '#4ade80',
    },
    {
      icon: Brain,
      title: 'About Me',
      description: 'Learn more about my journey and experience',
      href: '/about',
      color: 'from-pink-500 to-rose-500',
      gradientColor: '#ec4899',
    },
    {
      icon: MessageSquare,
      title: 'Contact',
      description: 'Get in touch with me',
      href: '/contact',
      color: 'from-indigo-500 to-blue-500',
      gradientColor: '#6366f1',
    },
    {
      icon: Code2,
      title: 'Talk to My AI Bot',
      description: 'Chat with AI about my portfolio and expertise',
      href: '/smart-talk',
      color: 'from-purple-500 to-pink-500',
      gradientColor: '#a855f7',
    },
  ];

  return (
    <div className="min-h-screen bg-primary-50 dark:bg-primary-950">
      {/* Hero Section - Simple */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Greeting */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Hi, I'm {personalInfo.name}
          </h1>

          {/* Location & Status */}
          <div className="flex flex-col gap-1 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              <span>Based in {personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-4 h-4 flex items-center justify-center">•</span>
              <span>{personalInfo.status}</span>
            </div>
          </div>

          {/* Bio/Description */}
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            {personalInfo.role} passionate about building intelligent data solutions and transforming raw data into actionable insights.
            Currently pursuing Master's in Artificial Intelligence with deep expertise in ETL pipelines, machine learning model development,
            statistical analysis, and cloud-based data infrastructure. Experienced in designing scalable data architectures,
            implementing automated workflows, and deploying AI-driven analytics solutions across AWS, Azure, and GCP platforms.
          </p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="bg-primary-50 dark:bg-primary-950 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Code2 className="w-6 h-6 text-accent-blue" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Tech Stack
              </h2>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Technologies and tools I work with.
            </p>
          </div>

          {/* Tech Stack Icons Grid */}
          <div className="flex flex-wrap justify-center gap-x-[2em] gap-y-[2.5em] py-[2em] px-[2em]">
            {pythonStack.map((skill, index) => (
              <SkillIcon
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                color={skill.color}
                delay={index * 0.02}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-12">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Explore
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Discover my work, achievements, and more
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Link key={feature.title} href={feature.href}>
              <MagicCard
                className="cursor-pointer group bg-white dark:bg-primary-900 rounded-xl border border-primary-200 dark:border-primary-800 shadow-card hover:shadow-card-hover"
                gradientColor={feature.gradientColor}
              >
                <div className="p-6">
                  <div className={`w-12 h-12 mb-4 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-accent-blue transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </div>
              </MagicCard>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

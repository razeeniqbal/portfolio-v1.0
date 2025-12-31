'use client';

import { motion } from 'framer-motion';
import RetroCard from '@/components/ui/RetroCard';
import { personalInfo, educationCards, careers } from '@/lib/data';
import { Award, Languages, GraduationCap, User } from 'lucide-react';
import { EducationSection, CareerSection, GlowCard } from '@/components/ui';
import { AnimatedListDemo } from '@/components/ui/AnimatedListDemo';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary-50 dark:bg-primary-950">
      <div className="container mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-gray-900 dark:bg-gray-100 p-2 rounded">
            <User className="w-6 h-6 text-white dark:text-gray-900" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">Get to know the person behind the code</p>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <div className="mb-12">
        <GlowCard customSize glowColor="blue" className="w-full h-auto bg-white dark:bg-gray-900/80">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gray-900 dark:bg-gray-100 p-2 rounded">
              <GraduationCap className="w-5 h-5 text-white dark:text-gray-900" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">My Story</h2>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              {personalInfo.bio}
            </p>
            <p className="text-sm">
              My journey started in civil engineering, but I discovered my passion for data and AI.
              I made the transition from engineering to data science, and I haven't looked back since.
              Now, I specialize in building end-to-end data pipelines, developing ML models, and
              creating intelligent data solutions that drive real business value.
            </p>
            <p className="text-sm">
              Currently pursuing a Master's degree in AI at {personalInfo.university} with a CGPA of {personalInfo.cgpa},
              while working full-time as a Data Engineer. I love the challenge of solving complex
              data problems and staying on the cutting edge of AI technology.
            </p>
          </div>
        </GlowCard>
      </div>

      {/* Career Section - Full Width */}
      <div className="mb-12">
        <CareerSection careers={careers} />
      </div>

      {/* Education Section */}
      <div className="mt-12">
        <EducationSection education={educationCards} />
      </div>
      </div>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import RetroCard from '@/components/ui/RetroCard';
import { personalInfo, experiences, certifications } from '@/lib/data';
import { Briefcase, Award, Languages, GraduationCap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="retro-box bg-burnt-orange p-6 mb-12 text-center">
        <h1 className="pixel-font text-2xl md:text-3xl text-cream">
          ABOUT.ME
        </h1>
        <p className="mt-2 text-cream">Get to know the person behind the code</p>
      </div>

      {/* Bio Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <RetroCard>
            <div className="flex items-center gap-3 mb-4">
              <div className="retro-button bg-olive-green p-2">
                <GraduationCap className="text-cream" size={24} />
              </div>
              <h2 className="pixel-font text-sm text-dark-brown">MY STORY</h2>
            </div>
            <div className="space-y-4 text-dark-brown">
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
          </RetroCard>
        </div>

        <div className="space-y-6">
          <RetroCard variant="postcard">
            <div className="flex items-center gap-2 mb-3">
              <Award className="text-burnt-orange" size={20} />
              <h3 className="pixel-font text-xs text-dark-brown">QUICK FACTS</h3>
            </div>
            <div className="space-y-2 text-sm text-dark-brown">
              <p>📍 Based in {personalInfo.location}</p>
              <p>🎓 Master's Student in AI</p>
              <p>💼 Full-time Data Engineer</p>
              <p>🏆 Innovation Challenge Champion</p>
              <p>🎤 Google AI Build Speaker</p>
              <p>☕ Coffee enthusiast</p>
            </div>
          </RetroCard>

          <RetroCard variant="default" className="bg-mustard-yellow">
            <div className="flex items-center gap-2 mb-3">
              <Languages className="text-dark-brown" size={20} />
              <h3 className="pixel-font text-xs text-dark-brown">LANGUAGES</h3>
            </div>
            <ul className="space-y-1 text-sm text-dark-brown">
              {personalInfo.languages.map((lang, i) => (
                <li key={i}>• {lang}</li>
              ))}
            </ul>
          </RetroCard>
        </div>
      </div>

      {/* Work Experience */}
      <div className="mb-12">
        <div className="retro-box bg-retro-teal p-4 mb-6 text-center">
          <h2 className="pixel-font text-sm md:text-base text-cream">
            💼 WORK EXPERIENCE
          </h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <RetroCard hover={false}>
                <div className="flex items-start gap-4">
                  <div className="retro-button bg-burnt-orange p-3 flex-shrink-0">
                    <Briefcase className="text-cream" size={24} />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between mb-2">
                      <div>
                        <h3 className="pixel-font text-sm text-dark-brown mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-burnt-orange font-bold">{exp.company}</p>
                      </div>
                      <span className="text-sm text-dark-brown bg-warm-beige px-3 py-1 border-2 border-dark-brown">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-sm text-dark-brown mb-3">
                      {exp.description}
                    </p>

                    <div className="retro-box bg-warm-beige p-3">
                      <p className="pixel-font text-[10px] text-dark-brown mb-2">KEY ACHIEVEMENTS:</p>
                      <ul className="space-y-1">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="text-xs text-dark-brown flex items-start gap-2">
                            <span className="text-olive-green">▸</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </RetroCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div>
        <div className="retro-box bg-olive-green p-4 mb-6 text-center">
          <h2 className="pixel-font text-sm md:text-base text-cream">
            🎓 CERTIFICATIONS
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <RetroCard variant="postcard" className="h-full">
                <div className="text-center">
                  <div className="retro-button bg-mustard-yellow p-2 inline-block mb-3">
                    <Award className="text-dark-brown" size={24} />
                  </div>
                  <h3 className="font-bold text-sm text-dark-brown mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-burnt-orange font-bold">{cert.org}</p>
                  <p className="text-xs text-dark-brown mt-1">{cert.year}</p>
                </div>
              </RetroCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import RetroCard from '@/components/ui/RetroCard';
import RetroButton from '@/components/ui/RetroButton';
import { projects, experiences } from '@/lib/data';
import { Github, ExternalLink, Code, Zap } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-primary-50 dark:bg-primary-950">
      <div className="container mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="retro-box bg-mustard-yellow p-6 mb-12 text-center">
        <h1 className="pixel-font text-2xl md:text-3xl text-dark-brown">
          PROJECTS.PORTFOLIO
        </h1>
        <p className="mt-2 text-dark-brown">My work, research, and side projects</p>
      </div>

      {/* Research Projects */}
      <div className="mb-16">
        <div className="retro-box bg-burnt-orange p-4 mb-6">
          <h2 className="pixel-font text-sm md:text-base text-cream flex items-center gap-2">
            <Zap size={20} />
            RESEARCH & ACADEMIC PROJECTS
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Polaroid Style Card */}
              <div className="polaroid hover:rotate-2 transition-transform">
                <div className="bg-gradient-to-br from-retro-teal to-olive-green h-48 flex items-center justify-center">
                  <Code className="text-cream" size={80} />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="pixel-font text-xs text-dark-brown mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[10px] text-burnt-orange font-bold mb-3">
                    {project.type}
                  </p>
                  <p className="text-sm text-dark-brown mb-3">
                    {project.description}
                  </p>

                  {project.achievement && (
                    <div className="retro-box bg-olive-green p-2 mb-3">
                      <p className="text-xs text-cream font-bold">
                        🏆 {project.achievement}
                      </p>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-warm-beige border-2 border-dark-brown text-[10px] text-dark-brown"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {(project.github || project.demo) && (
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <RetroButton variant="primary" className="w-full text-[8px] py-2">
                            <Github size={12} className="inline mr-1" />
                            CODE
                          </RetroButton>
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <RetroButton variant="secondary" className="w-full text-[8px] py-2">
                            <ExternalLink size={12} className="inline mr-1" />
                            DEMO
                          </RetroButton>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Professional Projects */}
      <div>
        <div className="retro-box bg-retro-teal p-4 mb-6">
          <h2 className="pixel-font text-sm md:text-base text-cream flex items-center gap-2">
            <Code size={20} />
            PROFESSIONAL WORK
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15 }}
            >
              <RetroCard className="h-full" hover={true}>
                <div
                  className={`h-3 bg-gradient-to-r ${exp.color} mb-4`}
                />
                <h3 className="pixel-font text-xs text-dark-brown mb-2">
                  {exp.company}
                </h3>
                <p className="text-sm font-bold text-burnt-orange mb-2">
                  {exp.title}
                </p>
                <p className="text-xs text-dark-brown mb-3">
                  {exp.description}
                </p>
                <div className="retro-box bg-warm-beige p-2">
                  <ul className="space-y-1">
                    {exp.highlights.slice(0, 2).map((highlight, i) => (
                      <li key={i} className="text-[10px] text-dark-brown flex items-start gap-1">
                        <span>✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RetroCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 retro-box bg-olive-green p-8 text-center">
        <h2 className="pixel-font text-base md:text-lg text-cream mb-4">
          GOT A PROJECT IN MIND?
        </h2>
        <p className="text-cream mb-6 max-w-2xl mx-auto">
          I'm always interested in collaborating on exciting data engineering and AI projects.
          Let's build something amazing together!
        </p>
        <a href="/contact">
          <RetroButton variant="primary" className="text-[10px]">
            GET IN TOUCH
          </RetroButton>
        </a>
      </div>
      </div>
    </div>
  );
}

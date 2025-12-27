'use client';

import { motion } from 'framer-motion';
import RetroCard from '@/components/ui/RetroCard';
import { achievements, certifications } from '@/lib/data';
import { Trophy, Award, Star, Medal } from 'lucide-react';

export default function AchievementsPage() {
  const iconMap: Record<string, any> = {
    '🏆': Trophy,
    '🎤': Star,
    '🥉': Medal,
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="retro-box bg-mustard-yellow p-6 mb-12 text-center">
        <h1 className="pixel-font text-2xl md:text-3xl text-dark-brown">
          🏆 ACHIEVEMENT.HALL 🏆
        </h1>
        <p className="mt-2 text-dark-brown">My milestones, awards, and accomplishments</p>
      </div>

      {/* Trophy Case */}
      <div className="mb-16">
        <div className="retro-box bg-burnt-orange p-4 mb-8 text-center">
          <h2 className="pixel-font text-sm md:text-base text-cream">
            TROPHY CASE
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = iconMap[achievement.icon] || Trophy;

            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{
                  delay: index * 0.2,
                  type: 'spring',
                  stiffness: 100,
                }}
              >
                <RetroCard
                  className="h-full relative overflow-hidden"
                  hover={true}
                >
                  {/* Trophy Display */}
                  <div className="retro-box bg-gradient-to-br from-mustard-yellow to-burnt-orange p-6 mb-4 text-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                      className="inline-block"
                    >
                      <IconComponent className="text-cream" size={64} />
                    </motion.div>
                  </div>

                  {/* Achievement Details */}
                  <div className="text-center">
                    <div className="inline-block px-3 py-1 bg-dark-brown mb-3">
                      <span className="pixel-font text-[8px] text-mustard-yellow">
                        {achievement.type.toUpperCase()}
                      </span>
                    </div>

                    <h3 className="pixel-font text-xs text-dark-brown mb-2">
                      {achievement.title}
                    </h3>

                    <p className="text-sm text-dark-brown mb-3">
                      {achievement.description}
                    </p>

                    <div className="retro-box bg-warm-beige p-2 inline-block">
                      <p className="text-xs font-bold text-burnt-orange">
                        {achievement.date}
                      </p>
                    </div>
                  </div>

                  {/* Sparkle Effect */}
                  <div className="absolute top-2 right-2">
                    <motion.div
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    >
                      <Star className="text-mustard-yellow" size={16} />
                    </motion.div>
                  </div>
                </RetroCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Certification Wall */}
      <div className="mb-16">
        <div className="retro-box bg-retro-teal p-4 mb-8 text-center">
          <h2 className="pixel-font text-sm md:text-base text-cream">
            CERTIFICATION WALL
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Certificate Frame */}
              <div className="border-8 border-retro-brown bg-cream p-4 shadow-retro-lg">
                <div className="border-2 border-mustard-yellow p-4 text-center">
                  <Award className="text-burnt-orange mx-auto mb-3" size={40} />

                  <h3 className="pixel-font text-[10px] text-dark-brown mb-2">
                    {cert.name}
                  </h3>

                  <div className="h-px bg-dark-brown my-3" />

                  <p className="text-xs font-bold text-burnt-orange mb-1">
                    {cert.org}
                  </p>

                  <p className="text-xs text-dark-brown">
                    {cert.year}
                  </p>

                  {/* Decorative Seal */}
                  <div className="mt-4">
                    <div className="w-12 h-12 rounded-full border-3 border-burnt-orange bg-mustard-yellow mx-auto flex items-center justify-center">
                      <span className="pixel-font text-[8px] text-dark-brown">
                        ✓
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Overview */}
      <div className="retro-box bg-olive-green p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="pixel-font text-3xl md:text-4xl text-cream mb-2">
              {achievements.length}
            </p>
            <p className="text-xs text-cream">Major Awards</p>
          </div>
          <div>
            <p className="pixel-font text-3xl md:text-4xl text-cream mb-2">
              {certifications.length}
            </p>
            <p className="text-xs text-cream">Certifications</p>
          </div>
          <div>
            <p className="pixel-font text-3xl md:text-4xl text-cream mb-2">
              3
            </p>
            <p className="text-xs text-cream">Years Experience</p>
          </div>
          <div>
            <p className="pixel-font text-3xl md:text-4xl text-cream mb-2">
              10M+
            </p>
            <p className="text-xs text-cream">Records Analyzed</p>
          </div>
        </div>
      </div>

      {/* Under Construction Note */}
      <div className="mt-12 text-center">
        <div className="inline-block retro-box bg-mustard-yellow p-4">
          <p className="pixel-font text-[10px] text-dark-brown">
            🎯 MORE ACHIEVEMENTS COMING SOON!
          </p>
        </div>
      </div>
    </div>
  );
}

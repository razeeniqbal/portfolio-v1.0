'use client';

import { motion } from 'framer-motion';
import RetroCard from '@/components/ui/RetroCard';
import { Github, Code, Award, Zap } from 'lucide-react';

export default function DashboardPage() {
  // Mock data - Replace with real API calls
  const stats = {
    github: {
      contributions: 1247,
      repos: 42,
      followers: 156,
      following: 89,
    },
    wakatime: {
      hoursThisWeek: 38.5,
      dailyAverage: 5.5,
      topLanguage: 'Python',
      totalHours: 1850,
    },
    codewars: {
      rank: '3 kyu',
      honor: 1285,
      challenges: 147,
    },
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="retro-box bg-retro-teal p-6 mb-12 text-center">
        <h1 className="pixel-font text-2xl md:text-3xl text-cream">
          📊 DEV.DASHBOARD
        </h1>
        <p className="mt-2 text-cream">Real-time coding statistics and activity</p>
      </div>

      {/* GitHub Stats */}
      <div className="mb-12">
        <div className="retro-box bg-dark-brown p-4 mb-6">
          <h2 className="pixel-font text-sm text-olive-green flex items-center gap-2">
            <Github size={20} />
            GITHUB.STATS
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Contributions', value: stats.github.contributions, icon: '📈' },
            { label: 'Repositories', value: stats.github.repos, icon: '📁' },
            { label: 'Followers', value: stats.github.followers, icon: '👥' },
            { label: 'Following', value: stats.github.following, icon: '➕' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <RetroCard className="text-center">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <p className="pixel-font text-2xl text-burnt-orange mb-1">
                  {stat.value}
                </p>
                <p className="text-xs text-dark-brown">{stat.label}</p>
              </RetroCard>
            </motion.div>
          ))}
        </div>

        {/* Contribution Graph Placeholder */}
        <RetroCard className="bg-dark-brown p-6">
          <h3 className="pixel-font text-xs text-olive-green mb-4">
            CONTRIBUTION GRAPH
          </h3>
          <div className="grid grid-cols-12 gap-1">
            {Array.from({ length: 120 }).map((_, i) => {
              const intensity = Math.floor(Math.random() * 5);
              const colors = [
                'bg-warm-beige',
                'bg-olive-green opacity-25',
                'bg-olive-green opacity-50',
                'bg-olive-green opacity-75',
                'bg-olive-green',
              ];
              return (
                <div
                  key={i}
                  className={`h-3 w-3 ${colors[intensity]} border border-dark-brown`}
                />
              );
            })}
          </div>
          <p className="text-xs text-olive-green mt-4">
            🟩 = More contributions • ⬜ = Fewer contributions
          </p>
        </RetroCard>
      </div>

      {/* Wakatime Stats */}
      <div className="mb-12">
        <div className="retro-box bg-burnt-orange p-4 mb-6">
          <h2 className="pixel-font text-sm text-cream flex items-center gap-2">
            <Code size={20} />
            WAKATIME.STATS
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <RetroCard>
            <div className="text-center">
              <p className="text-xs text-dark-brown mb-2">THIS WEEK</p>
              <p className="pixel-font text-3xl text-burnt-orange mb-1">
                {stats.wakatime.hoursThisWeek}h
              </p>
              <p className="text-xs text-dark-brown">Total coding time</p>
            </div>
          </RetroCard>

          <RetroCard>
            <div className="text-center">
              <p className="text-xs text-dark-brown mb-2">DAILY AVERAGE</p>
              <p className="pixel-font text-3xl text-olive-green mb-1">
                {stats.wakatime.dailyAverage}h
              </p>
              <p className="text-xs text-dark-brown">Per day</p>
            </div>
          </RetroCard>

          <RetroCard>
            <div className="text-center">
              <p className="text-xs text-dark-brown mb-2">TOP LANGUAGE</p>
              <p className="pixel-font text-3xl text-retro-teal mb-1">
                {stats.wakatime.topLanguage}
              </p>
              <p className="text-xs text-dark-brown">Most used</p>
            </div>
          </RetroCard>
        </div>

        {/* Progress Bars */}
        <RetroCard className="mt-6">
          <h3 className="pixel-font text-xs text-dark-brown mb-4">
            LANGUAGE BREAKDOWN
          </h3>
          <div className="space-y-3">
            {[
              { lang: 'Python', percent: 45, color: 'bg-burnt-orange' },
              { lang: 'SQL', percent: 25, color: 'bg-retro-teal' },
              { lang: 'JavaScript', percent: 15, color: 'bg-mustard-yellow' },
              { lang: 'TypeScript', percent: 10, color: 'bg-olive-green' },
              { lang: 'Other', percent: 5, color: 'bg-retro-brown' },
            ].map((item) => (
              <div key={item.lang}>
                <div className="flex justify-between mb-1">
                  <span className="text-xs text-dark-brown">{item.lang}</span>
                  <span className="text-xs font-bold text-dark-brown">{item.percent}%</span>
                </div>
                <div className="h-4 border-3 border-dark-brown bg-cream">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.percent}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className={`h-full ${item.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </RetroCard>
      </div>

      {/* Codewars Stats */}
      <div>
        <div className="retro-box bg-mustard-yellow p-4 mb-6">
          <h2 className="pixel-font text-sm text-dark-brown flex items-center gap-2">
            <Award size={20} />
            CODEWARS.RANK
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <RetroCard className="bg-gradient-to-br from-burnt-orange to-retro-brown">
            <div className="text-center">
              <Zap className="text-cream mx-auto mb-2" size={32} />
              <p className="text-xs text-cream mb-2">CURRENT RANK</p>
              <p className="pixel-font text-4xl text-mustard-yellow">
                {stats.codewars.rank}
              </p>
            </div>
          </RetroCard>

          <RetroCard>
            <div className="text-center">
              <p className="text-xs text-dark-brown mb-2">HONOR POINTS</p>
              <p className="pixel-font text-3xl text-burnt-orange mb-1">
                {stats.codewars.honor}
              </p>
              <p className="text-xs text-dark-brown">Total honor</p>
            </div>
          </RetroCard>

          <RetroCard>
            <div className="text-center">
              <p className="text-xs text-dark-brown mb-2">CHALLENGES</p>
              <p className="pixel-font text-3xl text-olive-green mb-1">
                {stats.codewars.challenges}
              </p>
              <p className="text-xs text-dark-brown">Completed</p>
            </div>
          </RetroCard>
        </div>
      </div>

      {/* Note */}
      <div className="mt-12 text-center">
        <div className="inline-block retro-box bg-warm-beige p-4">
          <p className="pixel-font text-[10px] text-dark-brown">
            💡 NOTE: Connect your GitHub API key to see live stats!
          </p>
        </div>
      </div>
    </div>
  );
}

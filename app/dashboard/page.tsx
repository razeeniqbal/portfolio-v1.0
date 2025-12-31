'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GlowCard } from '@/components/ui';
import { Github, Code, LayoutDashboard, TrendingUp, MessageSquare } from 'lucide-react';
import Link from 'next/link';

interface GitHubStats {
  repos: number;
  followers: number;
  following: number;
  totalStars: number;
  contributions: number;
  topLanguages: { [key: string]: number };
  contributionCalendar?: {
    totalContributions: number;
    weeks: Array<{
      contributionDays: Array<{
        contributionCount: number;
        date: string;
      }>;
    }>;
  };
}

export default function DashboardPage() {
  const [githubStats, setGithubStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const response = await fetch('/api/github');
        if (response.ok) {
          const data = await response.json();
          setGithubStats(data);
        }
      } catch (error) {
        console.error('Failed to fetch GitHub stats:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, []);

  // Use GitHub stats or fallback to mock data
  const stats = {
    github: {
      contributions: githubStats?.contributions || 1247,
      repos: githubStats?.repos || 42,
      followers: githubStats?.followers || 156,
      following: githubStats?.following || 89,
    },
  };

  // Calculate language breakdown from GitHub stats
  const calculateLanguageBreakdown = () => {
    if (!githubStats?.topLanguages) {
      return [
        { lang: 'Python', percent: 45, color: 'bg-orange-500' },
        { lang: 'SQL', percent: 25, color: 'bg-blue-500' },
        { lang: 'JavaScript', percent: 15, color: 'bg-yellow-500' },
        { lang: 'TypeScript', percent: 10, color: 'bg-green-500' },
        { lang: 'Other', percent: 5, color: 'bg-gray-500' },
      ];
    }

    const languages = githubStats.topLanguages;
    const total = Object.values(languages).reduce((sum, count) => sum + count, 0);

    const colorMap: { [key: string]: string } = {
      'Python': 'bg-orange-500',
      'TypeScript': 'bg-blue-500',
      'JavaScript': 'bg-yellow-500',
      'SQL': 'bg-purple-500',
      'Go': 'bg-cyan-500',
      'Java': 'bg-red-500',
      'C++': 'bg-pink-500',
      'Jupyter Notebook': 'bg-orange-400',
    };

    return Object.entries(languages).map(([lang, count]) => ({
      lang,
      percent: Math.round((count / total) * 100),
      color: colorMap[lang] || 'bg-gray-500',
    }));
  };

  const languageBreakdown = calculateLanguageBreakdown();

  return (
    <div className="min-h-screen bg-primary-50 dark:bg-primary-950">
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gray-900 dark:bg-gray-100 p-2 rounded">
              <LayoutDashboard className="w-6 h-6 text-white dark:text-gray-900" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Real-time coding statistics and activity tracking
              </p>
            </div>
          </div>
        </div>

        {/* GitHub Stats */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">GitHub Statistics</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Contributions', value: stats.github.contributions, icon: TrendingUp, color: 'green' },
              { label: 'Repositories', value: stats.github.repos, icon: Code, color: 'blue' },
              { label: 'Followers', value: stats.github.followers, icon: Github, color: 'purple' },
              { label: 'Following', value: stats.github.following, icon: Github, color: 'orange' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlowCard
                  customSize
                  glowColor={stat.color as any}
                  className="w-full h-auto bg-white dark:bg-gray-900/80"
                >
                  <div className="text-center">
                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-gray-700 dark:text-gray-300" />
                    <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>

          {/* Contribution Graph */}
          <GlowCard
            customSize
            glowColor="green"
            className="w-full h-auto bg-white dark:bg-gray-900/80"
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Contribution Activity {githubStats?.contributionCalendar && `(${githubStats.contributionCalendar.totalContributions} total)`}
            </h3>
            <div className="grid grid-cols-12 gap-1">
              {(() => {
                // Use real contribution data if available, otherwise show mock data
                if (githubStats?.contributionCalendar) {
                  const allDays = githubStats.contributionCalendar.weeks
                    .flatMap(week => week.contributionDays)
                    .slice(-84); // Last ~12 weeks (84 days)

                  return allDays.map((day, i) => {
                    const count = day.contributionCount;
                    let opacity = 'opacity-0';
                    if (count === 0) opacity = 'opacity-0';
                    else if (count <= 2) opacity = 'opacity-25';
                    else if (count <= 5) opacity = 'opacity-50';
                    else if (count <= 10) opacity = 'opacity-75';
                    else opacity = 'opacity-100';

                    return (
                      <div
                        key={i}
                        className={`h-3 w-3 bg-green-500 ${opacity} rounded-sm hover:ring-2 hover:ring-green-400 transition-all cursor-pointer`}
                        title={`${count} contributions on ${day.date}`}
                      />
                    );
                  });
                } else {
                  // Fallback to mock data
                  return Array.from({ length: 84 }).map((_, i) => {
                    const intensity = Math.floor(Math.random() * 5);
                    const opacities = ['opacity-0', 'opacity-25', 'opacity-50', 'opacity-75', 'opacity-100'];
                    return (
                      <div
                        key={i}
                        className={`h-3 w-3 bg-green-500 ${opacities[intensity]} rounded-sm`}
                        title={`${intensity} contributions`}
                      />
                    );
                  });
                }
              })()}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
              {githubStats?.contributionCalendar
                ? '🟩 Real contribution data from GitHub'
                : '🟩 More contributions • ⬜ Fewer contributions (Mock data)'}
            </p>
          </GlowCard>

          {/* Language Breakdown */}
          <GlowCard
            customSize
            glowColor="orange"
            className="w-full h-auto bg-white dark:bg-gray-900/80"
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Language Breakdown
            </h3>
            <div className="space-y-4">
              {languageBreakdown.map((item, index) => (
                <div key={item.lang}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {item.lang}
                    </span>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                      {item.percent}%
                    </span>
                  </div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percent}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-full ${item.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlowCard>
        </div>

        {/* Smart Talk CTA */}
        <div className="mt-12">
          <Link href="/smart-talk">
            <GlowCard
              customSize
              glowColor="purple"
              className="w-full h-auto bg-gradient-to-br from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      Come Talk to My AI Bot
                    </h3>
                    <p className="text-sm text-white/80">
                      Chat with an AI about my portfolio, projects, and expertise
                    </p>
                  </div>
                </div>
                <div className="text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </GlowCard>
          </Link>
        </div>

        {/* Note */}
        {!githubStats && !loading && (
          <div className="mt-6">
            <GlowCard
              customSize
              glowColor="blue"
              className="w-full h-auto bg-blue-50 dark:bg-blue-900/20"
            >
              <div className="flex items-start gap-3">
                <div className="bg-blue-500 p-2 rounded-lg flex-shrink-0">
                  <Github className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                    Using Mock Data
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Add your GitHub token to .env.local to see real-time statistics from your GitHub account.
                  </p>
                </div>
              </div>
            </GlowCard>
          </div>
        )}
      </div>
    </div>
  );
}

// Core types for the retro portfolio

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  color: string;
}

export interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  achievement?: string;
  tech: string[];
  image?: string;
  github?: string;
  demo?: string;
  color: string;
}

export interface Skill {
  category: string;
  items: string[];
  level: number;
}

export interface Certification {
  name: string;
  org: string;
  year: string;
  icon?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'award' | 'certification' | 'milestone';
  icon: string;
}

export interface ChatMessage {
  id: string;
  userId: string;
  username: string;
  message: string;
  timestamp: number;
  avatar?: string;
}

export interface GitHubStats {
  contributions: number;
  repos: number;
  followers: number;
  following: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

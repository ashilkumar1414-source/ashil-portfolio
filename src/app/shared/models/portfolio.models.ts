export type ThemeMode = 'dark' | 'light';

export type ProjectFilter = 'All' | 'Angular' | 'AI' | 'Dashboard' | 'SaaS';

export interface NavLink {
  label: string;
  href: string;
  id: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'email';
}

export interface StatCard {
  value: string;
  label: string;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export interface SkillItem {
  name: string;
  highlighted?: boolean;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  points: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  description: string;
  contribution: string;
  technologies: string[];
  filters: ProjectFilter[];
  githubUrl?: string;
  liveUrl?: string;
  visual: 'farming' | 'marketing' | 'analytics' | 'campaign';
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface WhyCard {
  title: string;
  description: string;
  icon: 'architecture' | 'pixel' | 'product' | 'ai';
}

export interface AngularPoint {
  title: string;
  description: string;
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
}

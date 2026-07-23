import {
  AngularPoint,
  ContactInfo,
  ExperienceItem,
  NavLink,
  ProcessStep,
  ProjectItem,
  SkillCategory,
  SocialLink,
  StatCard,
  WhyCard,
} from '../shared/models/portfolio.models';

export const PROFILE = {
  name: 'Ashil Kumar',
  role: 'Angular & Frontend Developer',
  experienceYears: '4+',
  headline: 'Angular Developer Building Scalable & Modern Web Experiences',
  tagline:
    "I'm Ashil Kumar, a frontend developer with 4+ years of experience building scalable, responsive, and high-quality web applications using Angular, TypeScript, and modern frontend technologies.",
  about: [
    'With 4+ years of frontend development experience, I specialize in building complex, scalable web applications with Angular and TypeScript.',
    'I design reusable component architectures, integrate REST APIs, and craft responsive interfaces with a strong focus on performance and maintainability.',
    'My work spans AI-powered products, dashboards, campaign platforms, analytics interfaces, and business applications — always with pixel-perfect UI and production-ready code.',
  ],
  resumePath: '/Ashil_Kumar_Resume.pdf',
  resumeFileName: 'Ashil_Kumar_Resume.pdf',
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com/ashilkumar1414-source', icon: 'github' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/ashil-kumar-b90643128/', icon: 'linkedin' },
];

export const CONTACT_INFO: ContactInfo = {
  email: 'ashilkumar1414@gmail.com',
  github: 'https://github.com/ashilkumar1414-source',
  linkedin: 'https://www.linkedin.com/in/ashil-kumar-b90643128/',
};

export const STATS: StatCard[] = [
  { value: '4+', label: 'Years Experience' },
  { value: 'Angular', label: 'Primary Framework' },
  { value: 'AI', label: 'Product Experience' },
  { value: 'Pixel Perfect', label: 'UI Development' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'Angular', highlighted: true },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'SCSS' },
    ],
  },
  {
    title: 'Angular Ecosystem',
    skills: [
      { name: 'Standalone Components' },
      { name: 'Signals' },
      { name: 'RxJS' },
      { name: 'Angular Router' },
      { name: 'Angular Animations' },
    ],
  },
  {
    title: 'UI & Libraries',
    skills: [{ name: 'PrimeNG' }, { name: 'AG Grid' }, { name: 'Tailwind CSS' }],
  },
  {
    title: 'Backend & APIs',
    skills: [{ name: 'REST APIs' }, { name: 'Node.js' }],
  },
  {
    title: 'Tools',
    skills: [{ name: 'Git' }, { name: 'Vite' }, { name: 'CI/CD' }],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'GalaxiQ.ai',
    role: 'React Frontend Developer',
    period: 'Present',
    points: [
      'Built modern web applications from scratch with a focus on scalable frontend architecture.',
      'Developed reusable UI components and design-system patterns across product surfaces.',
      'Shipped features for AI-powered products, including chatbots and customer engagement interfaces.',
      'Integrated REST APIs and built responsive analytics dashboards and campaign workflows.',
      'Worked on audience segmentation, campaign management, and production-ready product experiences.',
      'Applied Angular expertise and modern frontend practices to deliver maintainable, high-quality interfaces.',
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'ai-farming',
    name: 'AI Farming Assistant',
    description:
      'An AI-powered farming assistant designed to help users access intelligent agricultural information and guidance through a modern progressive web experience.',
    contribution:
      'Architected standalone Angular components with Signals, built the PWA shell, and crafted a responsive Tailwind-based UI focused on clarity and performance.',
    technologies: ['Angular', 'TypeScript', 'Signals', 'Standalone Components', 'PWA', 'Tailwind'],
    filters: ['All', 'Angular', 'AI', 'SaaS'],
    visual: 'farming',
  },
  {
    id: 'ai-marketing',
    name: 'AI Marketing Platform',
    description:
      'A marketing platform that helps teams manage campaigns and leverage AI-assisted workflows for customer engagement.',
    contribution:
      'Implemented Angular feature modules, reusable SCSS component patterns, and REST API integrations for campaign and audience flows.',
    technologies: ['Angular', 'TypeScript', 'SCSS', 'REST APIs'],
    filters: ['All', 'Angular', 'AI', 'SaaS'],
    visual: 'marketing',
  },
  {
    id: 'analytics-dashboard',
    name: 'Analytics Dashboard',
    description:
      'An analytics interface for visualizing product and campaign performance with clear, actionable data views.',
    contribution:
      'Built dashboard layouts, chart integrations, and responsive data visualizations using Angular and TypeScript.',
    technologies: ['Angular', 'TypeScript', 'D3', 'SCSS'],
    filters: ['All', 'Angular', 'Dashboard'],
    visual: 'analytics',
  },
  {
    id: 'campaign-platform',
    name: 'Campaign Management Platform',
    description:
      'A business application for planning, executing, and monitoring marketing campaigns at scale.',
    contribution:
      'Developed scalable Angular UI flows, form-driven workflows, and API-backed campaign management screens.',
    technologies: ['Angular', 'TypeScript', 'SCSS', 'REST APIs'],
    filters: ['All', 'Angular', 'SaaS', 'Dashboard'],
    visual: 'campaign',
  },
];

export const ANGULAR_POINTS: AngularPoint[] = [
  {
    title: 'Component-driven architecture',
    description: 'Clear boundaries, reusable building blocks, and predictable composition.',
  },
  {
    title: 'Standalone components',
    description: 'Leaner modules, faster bootstrapping, and simpler feature ownership.',
  },
  {
    title: 'Signals',
    description: 'Fine-grained reactivity for performant, readable state updates.',
  },
  {
    title: 'Reactive programming',
    description: 'RxJS streams for async flows, API orchestration, and event handling.',
  },
  {
    title: 'Reusable UI systems',
    description: 'Shared components and SCSS tokens that scale across products.',
  },
  {
    title: 'Performance-focused development',
    description: 'Change detection strategy, lazy loading, and deliberate rendering choices.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { number: '01', title: 'Understand', description: 'Clarify goals, users, and constraints.' },
  { number: '02', title: 'Architect', description: 'Define structure, state, and boundaries.' },
  { number: '03', title: 'Design', description: 'Map UI flows and interaction details.' },
  { number: '04', title: 'Develop', description: 'Build clean, reusable Angular features.' },
  { number: '05', title: 'Integrate', description: 'Wire APIs, auth, and real data flows.' },
  { number: '06', title: 'Optimize', description: 'Tune performance, a11y, and polish.' },
  { number: '07', title: 'Deploy', description: 'Ship production-ready releases with CI/CD.' },
];

export const WHY_CARDS: WhyCard[] = [
  {
    title: 'Scalable Architecture',
    description: 'I focus on maintainable and scalable frontend solutions.',
    icon: 'architecture',
  },
  {
    title: 'Pixel-Perfect UI',
    description: 'I transform designs into responsive, accurate interfaces.',
    icon: 'pixel',
  },
  {
    title: 'Product Mindset',
    description: 'I understand how frontend decisions affect the overall product experience.',
    icon: 'product',
  },
  {
    title: 'AI Product Experience',
    description: 'I have experience building interfaces for AI-powered products.',
    icon: 'ai',
  },
];

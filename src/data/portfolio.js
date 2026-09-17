/**
 * Portfolio data — add a new project by appending one object here.
 * No component code needs to change.
 */

/** @typedef {{ title: string, context: string, role: string, outcome: string, technologies: string[], demo: string, code: string }} Project */

/** @type {Project[]} */
export const PROJECTS = [
  {
    title: 'SchoolPilot',
    context: 'A full school management platform I built solo — academic operations, attendance, admissions, fees, timetables, and HR, all in one system.',
    role: 'Solo Full-Stack Developer',
    outcome: 'Automated report-card generation, cutting manual processing time by 60%',
    technologies: ['NestJS', 'GraphQL', 'Next.js', 'React Native', 'PostgreSQL', 'Supabase', 'Tailwind CSS', 'Paystack'],
    demo: '',
    code: '',
  },
  {
    title: 'MSGold',
    context: 'The staff and customer platform behind a gold and jewellery business serving roughly 10,000 customers and 168 staff.',
    role: 'Lead Developer, Staff Application',
    outcome: 'Own every staff-app module — schemes, wallet, orders, finance, KYC',
    technologies: ['NestJS', 'GraphQL', 'Next.js', 'React Native/Expo', 'Firebase', 'MongoDB'],
    demo: '',
    code: '',
  },
  {
    title: 'ZyncGold',
    context: 'A gold-commerce platform with live rate tracking and a full e-commerce experience, from browsing to checkout.',
    role: 'Lead Developer, Web & Mobile',
    outcome: 'Live gold-rate updates and complete order/wallet/KYC flow',
    technologies: ['Next.js', 'React Native/Expo', 'GraphQL', 'Firebase'],
    demo: '',
    code: '',
  },
  {
    title: 'Taskr',
    context: 'An offline-first productivity workspace built solo — tasks, habits, goals, and team spaces that stay fast with or without a connection.',
    role: 'Solo System Architect',
    outcome: 'Zero-latency local database operations with reliable sync and conflict resolution',
    technologies: ['NestJS', 'Prisma', 'React Native', 'WatermelonDB', 'Socket.IO'],
    demo: '',
    code: '',
  },
  {
    title: 'Ember',
    context: 'A habit and behaviour-change app I co-built — I designed and built the entire interface.',
    role: 'UI/UX Design & Frontend Engineering',
    outcome: 'Full interface for habit scheduling, streak tracking, budgeting, and analytics',
    technologies: ['React Native', 'Expo', 'TypeScript'],
    demo: '',
    code: '',
  },
  {
    title: 'Documentary Video Automation Engine',
    context: 'An automated production system I designed and built for my own YouTube documentary work — turns voiceover, footage, and a transcript into a publish-ready ~15-minute video without manual scene-by-scene editing.',
    role: 'Solo Developer',
    outcome: 'Automated captioning, title/lower-third/quote cards, kinetic typography, charts, transitions, and rendering',
    technologies: ['React-based video composition', 'structured transcript/episode data pipelines'],
    demo: '',
    code: '',
  },
  {
    title: 'Tracheids',
    context: 'A higher-education management platform I contribute to as a volunteer, focused on the maps-based attendance and venue tracking module.',
    role: 'Volunteer Contributor',
    outcome: 'Lecturers select teaching halls via a map; the system tracks venue usage duration and determines presence-based student attendance',
    technologies: [],
    demo: '',
    code: '',
  },
];

/** @typedef {{ title: string, skills: string[] }} SkillCategory */

/** @type {SkillCategory[]} */
export const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    skills: ['React', 'React Native', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend & Database',
    skills: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'GraphQL'],
  },
  {
    title: 'Languages & Core',
    skills: ['JavaScript', 'TypeScript', 'REST APIs', 'Git'],
  },
];

import { siteAssets } from './siteAssets';

function createProject({
  featured = false,
  links = [],
  imageAlt = 'Project preview image',
  ...project
}) {
  return {
    ...project,
    featured,
    imageAlt,
    links,
  };
}

export const newProjectTemplate = Object.freeze({
  slug: 'new-project-slug',
  title: 'New Project Title',
  summary: 'One short paragraph that explains what the project is and why it matters.',
  image: siteAssets.avatarLogo,
  imageAlt: 'A short description of the project image',
  featured: false,
  isUnderConstruction: false, // This field can be used to indicate if the project is still a work in progress, which can help manage expectations when sharing incomplete projects.
  skills: ['React', 'Design Systems', 'Testing'],
  process: [
    'Describe the main implementation steps.',
    'Explain a technical or product decision you made.',
    'Call out how you validated the result.',
  ],
  outcomes: [
    'Summarize one concrete result.',
    'Add one user or team benefit.',
    'Mention a follow-up improvement if it matters.',
  ],
  links: [
    { label: 'Live Demo', href: 'https://example.com' },
    { label: 'Source Code', href: 'https://github.com/example/repo' },
  ],
});

export const projectEntrySteps = [
  'Open src/data/projects.js and duplicate the newProjectTemplate shape into the projects array.',
  'Import the project image through src/data/siteAssets.js so the file is bundled by the build.',
  'Set featured: true if the new project should show up on the homepage highlights.',
  'Add optional demo or repository links and they will appear automatically on the detail page.',
];

export const projects = [
  createProject({
    slug: 'atlanta-taste-trek',
    title: 'Atlanta Taste Trek',
    summary: 'A full-stack restaurant discovery app built with Django, Figma-designed UI, and integration with Google Maps API for location-based search and reviews.',
    image: siteAssets.atlantaTasteTrekLogo,
    imageAlt: 'Atlanta Taste Trek logo used as the project cover',
    featured: true,
    skills: ['Django', 'Responsive UI', 'Figma Design + Implementation', 'CSS modules', 'Google Maps API', 'Full-Stack Development', 'Frontend Architecture'],
    process: [
      'Mapped the Figma component library into reusable React components.',
      'Implemented the Figma Design Page manually instead of using automated tools to ensure consistency, readability, and maintainability of the front-end.',
      'Refactored multiple front-end components for better performance and maintainability.',
      'Actively contributed in the presentation materials for the project demo and final presentation to effectively communicate the project\'s value and technical achievements.',
    ],
    outcomes: [
      'Created a full-stack restaurant discovery app with location-based search and reviews.',
      'Established a consistent design language across the application ensuring ease-of-use.',
      'Designed for an international audience in mind, with extensive use of symbols and numbers.',
    ],
    links: [
      { label: 'Figma Design File', href: '/projects' },
    ],
  }),
  createProject({
    slug: 'focus-farmer',
    title: 'Focus Farmer',
    summary: 'A pomodoro-styled app designed to improve focus and study habits',
    image: siteAssets.focusFarmerLogo,
    imageAlt: 'Focus Farmer logo used as the project cover',
    featured: true,
    isUnderConstruction: true,
    isPageUnderConstruction: true,
    skills: ['Frontend architecture', 'React', 'UI patterns', 'Psychological Research', 'Prototyping'],
    process: [
      'Started off as a standalone web app, then adapted to work as a Chrome extension that embeds its components into the user\'s current page.',
      'Created Sprites ',
      'Focused on building interactive features to ',
    ],
    outcomes: [
      'A Pomodoro-styled app that improves focus and engagement by combining commitment and gamification techniques.',
      'Acquired experience building a Chrome Extension with React and integrating it into existing web pages.',
      'Implemented randomized AI music from ElevenLabs. (TechValley 2026 ElevenLabs Winners)',
    ],
    links: [
      { label: 'GitHub Repository', href: 'https://github.com/DMCerYT/focus-farmer' },
      { label: 'DevPost Page', href: 'https://devpost.com/software/locked-in-focus-farming?_gl=1*q9afyn*_gcl_au*MjY3ODUwOTgwLjE3NzQ5ODgyODE.*_ga*MTUyNzA2MDIwMi4xNzc0OTg4Mjgx*_ga_0YHJK3Y10M*czE3NzQ5ODgyODAkbzEkZzEkdDE3NzQ5ODgyODgkajUyJGwwJGgw' },
      { label: 'Demo Video', href: 'https://youtu.be/RvEgfpBmBFs' }
    ],
  }),
  createProject({
    slug: 'money-mentor',
    title: 'Money Mentor',
    summary: 'A financial planning application designed to help college students better manage their finances as well as gain financial literacy.',
    image: siteAssets.moneyMentorLogo,
    featured: true,
    imageAlt: 'Money Mentor logo used as the interaction sandbox project cover',
    skills: ['Market Research', 'Storyboarding', 'Prototyping', 'User Research', 'Persona Creation', 'Figma'],
    process: [
      '...',
    ],
    outcomes: [
      'Designed and Prototyped application design through Figma with 5 participants providing feedback',
      'Created an interface designed to assist college students to become more financially literate as well as responsible with budgeting and financial planning.',
      'Produced reusable components for various iterations.',
    ],
  }),
  createProject({
    slug: 'coffee-bean-recommender',
    title: 'BeanI',
    summary: 'A fun coffee bean roast recommender that uses a lightweight OpenCV model to classify roast levels from photos of coffee beans as well as provide guidance for preparing coffee based on user preferences.',
    image: siteAssets.beanILogo,
    imageAlt: 'BeanI logo used as the automation lab project cover',
    skills: ['Automation design', 'Developer productivity', 'Workflow mapping', 'Prompt systems'],
    process: [
      'Identified interaction flow and started off with wireframes.',
      'Designed lightweight prompts and handoff rules for those tasks.',
      'Focused on automations that produce usable intermediate output instead of black-box behavior.',
    ],
    outcomes: [
      'Reduced repetitive project overhead.',
      'Made work status easier to summarize consistently.',
      'Created a more repeatable way to manage recurring engineering chores.',
    ],
    links: [
      { label: 'GitHub Repository', href: 'https://github.com/okBrian/CoffeeBeanRecommender' }, 
      { label: 'Figma Design File', href: 'https://www.figma.com/design/73gFUXWkCaH94bav4nkjc9/Coffee-Bean-Recommender?node-id=0-1&t=BPnM2BT0TmAhMyv3-1' },
      { label: 'DevPost Page', href: 'https://devpost.com/software/beani?_gl=1*12qd6kx*_gcl_au*MjY3ODUwOTgwLjE3NzQ5ODgyODE.*_ga*MTUyNzA2MDIwMi4xNzc0OTg4Mjgx*_ga_0YHJK3Y10M*czE3NzQ5ODgyODAkbzEkZzEkdDE3NzQ5ODg1NTUkajQzJGwwJGgw' },
      { label: 'Demo Video', href: 'https://youtu.be/Gte54Mib1-w' },
    ]
  }),
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

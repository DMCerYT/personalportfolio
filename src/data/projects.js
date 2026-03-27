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
    slug: 'portfolio-refresh',
    title: 'Portfolio Refresh',
    summary: 'Rebuilding this portfolio into a polished, responsive experience with Figma-driven styling.',
    image: siteAssets.avatarLogo,
    imageAlt: 'Avatar logo used as the portfolio refresh project cover',
    featured: true,
    skills: ['React', 'Responsive UI', 'Figma translation', 'CSS modules'],
    process: [
      'Mapped the Figma component library into reusable React components.',
      'Converted the navbar, project cards, and contact cards into responsive shared UI.',
      'Tested mobile and desktop layouts while tightening interaction behavior and layering.',
    ],
    outcomes: [
      'Created a cleaner design system for the site.',
      'Established reusable project and contact card components.',
      'Improved the portfolio foundation so new sections can be added faster.',
    ],
    links: [
      { label: 'Project List', href: '/projects' },
    ],
  }),
  createProject({
    slug: 'campus-builder-toolkit',
    title: 'Campus Builder Toolkit',
    summary: 'A starter kit for launching student-facing tools with authentication, dashboards, and admin flows.',
    image: siteAssets.capybaraIllustration,
    imageAlt: 'Capybara illustration used as the campus builder toolkit cover',
    featured: true,
    skills: ['Frontend architecture', 'DX systems', 'UI patterns', 'Documentation'],
    process: [
      'Defined a base set of flows that most internal campus tools needed.',
      'Built composable page shells, reusable cards, and opinionated setup docs.',
      'Focused on shortening time-to-first-feature for new contributors.',
    ],
    outcomes: [
      'Reduced setup friction for new projects.',
      'Standardized common interaction and layout patterns.',
      'Made onboarding easier for collaborators with different skill levels.',
    ],
  }),
  createProject({
    slug: 'interaction-sandbox',
    title: 'Interaction Sandbox',
    summary: 'A playground for trying out motion, layered UI, and novel navigation patterns before they reach production.',
    image: siteAssets.avatarLogo,
    imageAlt: 'Avatar logo used as the interaction sandbox project cover',
    skills: ['Prototyping', 'Animation systems', 'Interaction design', 'Accessibility'],
    process: [
      'Used small isolated experiments to validate unusual UX directions.',
      'Measured which animations improved clarity versus which ones created noise.',
      'Adapted the successful patterns into production-friendly implementations.',
    ],
    outcomes: [
      'Built confidence in interaction decisions before shipping.',
      'Created a faster workflow for testing UI direction changes.',
      'Produced reusable motion ideas for future projects.',
    ],
  }),
  createProject({
    slug: 'automation-lab',
    title: 'Automation Lab',
    summary: 'Exploring lightweight automations for repetitive engineering tasks, project updates, and content workflows.',
    image: siteAssets.capybaraIllustration,
    imageAlt: 'Capybara illustration used as the automation lab project cover',
    skills: ['Automation design', 'Developer productivity', 'Workflow mapping', 'Prompt systems'],
    process: [
      'Cataloged recurring tasks that cost time but required little judgment.',
      'Designed lightweight prompts and handoff rules for those tasks.',
      'Focused on automations that produce usable intermediate output instead of black-box behavior.',
    ],
    outcomes: [
      'Reduced repetitive project overhead.',
      'Made work status easier to summarize consistently.',
      'Created a more repeatable way to manage recurring engineering chores.',
    ],
  }),
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

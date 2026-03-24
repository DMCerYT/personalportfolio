import logo from '../assets/avatarlogo.jpeg';
import capybara from '../images/cute-cartoon-capybara-cap-sunglasses-600nw-2575177821.jpg.webp';

export const projects = [
  {
    slug: 'portfolio-refresh',
    title: 'Portfolio Refresh',
    summary: 'Rebuilding this portfolio into a polished, responsive experience with Figma-driven styling.',
    image: logo,
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
  },
  {
    slug: 'campus-builder-toolkit',
    title: 'Campus Builder Toolkit',
    summary: 'A starter kit for launching student-facing tools with authentication, dashboards, and admin flows.',
    image: capybara,
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
  },
  {
    slug: 'interaction-sandbox',
    title: 'Interaction Sandbox',
    summary: 'A playground for trying out motion, layered UI, and novel navigation patterns before they reach production.',
    image: logo,
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
  },
  {
    slug: 'automation-lab',
    title: 'Automation Lab',
    summary: 'Exploring lightweight automations for repetitive engineering tasks, project updates, and content workflows.',
    image: capybara,
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
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

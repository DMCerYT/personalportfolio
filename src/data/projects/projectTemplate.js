import { siteAssets } from '../siteAssets';

// Copy this object into a new project file; register it in ../projects.js.
export const newProjectTemplate = Object.freeze({
  slug: 'new-project-slug',
  title: 'New Project Title',
  summary: 'One short paragraph that explains what the project is and why it matters.',
  image: siteAssets.avatarLogo,
  imageAlt: 'A short description of the project image',
  featured: false,
  isUnderConstruction: false,
  skills: ['React', 'Design Systems', 'Testing'],
  process: ['Describe the main implementation steps.', 'Explain a technical or product decision you made.', 'Call out how you validated the result.'],
  details: [{
    title: 'Project Story',
    summary: 'Use this optional section for longer narrative context that complements the bullet-point summary.',
    isVisible: true,
    paragraphs: ['Write one or more paragraphs here to explain the project in more depth, such as the problem space, your design decisions, or what made the work meaningful.', 'These paragraphs are shown inside a collapsible panel on the project detail page so visitors can choose when they want the extra context.'],
    images: [{
      src: siteAssets.avatarLogo,
      alt: 'Replace this placeholder with a project-specific image',
      caption: 'Optional caption text'
    }]
  }],
  outcomes: ['Summarize one concrete result.', 'Add one user or team benefit.', 'Mention a follow-up improvement if it matters.'],
  links: [{
    label: 'Live Demo',
    href: 'https://example.com'
  }, {
    label: 'Source Code',
    href: 'https://github.com/example/repo'
  }]
});

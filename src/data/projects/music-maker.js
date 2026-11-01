import { siteAssets } from '../siteAssets';

// All card and case-study content for this project lives here.
const project = {
  slug: 'music-maker',
  title: 'Musician Paper',
  summary: 'An interactable music sheet editor that allows users to create and interact with their own custom music sheets.',
  image: siteAssets.avatarLogo,
  imageAlt: 'A short description of the project image',
  featured: false,
  isUnderConstruction: true,
  skills: ['Front-End Development', 'UI Implementation', 'UX Design', 'Java Swing'],
  process: ['Paragraph placeholder.', 'Paragraph placeholder.', 'Paragraph placeholder.'],
  details: [{
    title: 'Title Placeholder',
    summary: 'Summary placeholder.',
    paragraphs: ['Paragraph placeholder.', 'Paragraph placeholder.'],
    images: [{
      src: siteAssets.avatarLogo,
      alt: 'Replace this placeholder with a project-specific image',
      caption: 'Optional caption text'
    }]
  }],
  outcomes: ['Placeholder.', 'Placeholder.', 'Placeholder.'],
  links: [{
    label: 'Live Demo',
    href: 'https://example.com'
  }, {
    label: 'Source Code',
    href: ''
  }]
};

export default project;

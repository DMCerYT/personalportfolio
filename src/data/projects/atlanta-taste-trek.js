import { siteAssets } from '../siteAssets';

// All card and case-study content for this project lives here.
const project = {
  slug: 'atlanta-taste-trek',
  title: 'Atlanta Taste Trek',
  summary: 'A restaurant discovery experience bringing location-based search and reviews into a consistent interface.',
  image: siteAssets.atlantaTasteTrekLogo,
  imageAlt: 'Atlanta Taste Trek logo used as the project cover',
  featured: true,
  skills: ['Django', 'Responsive UI', 'Figma Design + Implementation', 'CSS modules', 'Google Maps API', 'Full-Stack Development', 'Frontend Architecture'],
  process: ['Mapped the Figma component library into reusable React components.', 'Implemented the Figma Design Page manually instead of using automated tools to ensure consistency, readability, and maintainability of the front-end.', 'Refactored multiple front-end components for better performance and maintainability.', 'Actively contributed in the presentation materials for the project demo and final presentation to effectively communicate the project\'s value and technical achievements.'],
  details: [{
    title: 'Design-to-code workflow',
    summary: 'How the visual system and front-end implementation were kept aligned.',
    isVisible: false,
    paragraphs: ['Atlanta Taste Trek gave me the chance to work across both implementation and communication. A big part of the effort was translating a Figma-driven interface into a front-end experience that still felt clean, readable, and maintainable once it became real code.', 'Instead of leaning on automated conversion tools, I implemented the interface manually so the component structure stayed understandable and flexible. That gave me more control over layout decisions, reuse patterns, and the overall polish of the experience as the product evolved.'],
    images: [{
      src: siteAssets.atlantaTasteTrekLogo,
      alt: 'Atlanta Taste Trek project mark',
      caption: 'Project identity used throughout the case study.'
    }]
  }],
  outcomes: ['Created a full-stack restaurant discovery app with location-based search and reviews.', 'Established a consistent design language across the application ensuring ease-of-use.', 'Designed for an international audience in mind, with extensive use of symbols and numbers.'],
  links: [],
  discipline: 'UI design · Design engineering',
  contribution: 'Figma-to-code translation, reusable interface components, and demo communication',
  problem: 'Restaurant discovery combines location, search, and reviews. The interface needed to make these functions coherent while translating the Figma design into maintainable front-end components.',
  decision: 'Manually translating Figma components into reusable interface code gave control over layout and consistency. Symbols and numbers were used with an international audience in mind; their clarity still needs to be evaluated with users.',
  evidence: 'The project delivered a full-stack restaurant discovery application with location-based search and reviews. Component refactoring supported maintainability. User-testing results and measured usability outcomes are not documented here.',
  nextStep: 'A next evaluation would ask people to find and compare restaurants, checking whether location controls, symbols, and review information are understandable across different backgrounds.',
  artifacts: [{
    title: 'Discovery experience',
    caption: 'Add the search and restaurant-detail screens, annotated with the key hierarchy and navigation choices.'
  }, {
    title: 'Figma → implementation',
    caption: 'Add a side-by-side component design and implemented interface to demonstrate visual fidelity and reuse.'
  }]
};

export default project;

import { siteAssets } from './siteAssets';

function createProject({
  featured = false,
  links = [],
  imageAlt = 'Project preview image',
  details = [],
  ...project
}) {
  return {
    ...project,
    featured,
    imageAlt,
    links,
    details,
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
  details: [
    {
      title: 'Project Story',
      summary: 'Use this optional section for longer narrative context that complements the bullet-point summary.',
      paragraphs: [
        'Write one or more paragraphs here to explain the project in more depth, such as the problem space, your design decisions, or what made the work meaningful.',
        'These paragraphs are shown inside a collapsible panel on the project detail page so visitors can choose when they want the extra context.',
      ],
      images: [
        {
          src: siteAssets.avatarLogo,
          alt: 'Replace this placeholder with a project-specific image',
          caption: 'Optional caption text',
        },
      ],
    },
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
  'Add optional details sections with paragraphs and up to three images per section for expandable long-form case study content.',
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
    details: [
      {
        title: 'Design-to-code workflow',
        summary: 'How the visual system and front-end implementation were kept aligned.',
        paragraphs: [
          'Atlanta Taste Trek gave me the chance to work across both implementation and communication. A big part of the effort was translating a Figma-driven interface into a front-end experience that still felt clean, readable, and maintainable once it became real code.',
          'Instead of leaning on automated conversion tools, I implemented the interface manually so the component structure stayed understandable and flexible. That gave me more control over layout decisions, reuse patterns, and the overall polish of the experience as the product evolved.',
        ],
        images: [
          {
            src: siteAssets.atlantaTasteTrekLogo,
            alt: 'Atlanta Taste Trek project mark',
            caption: 'Project identity used throughout the case study.',
          },
        ],
      },
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
      'Created sprite-based visual feedback to make progress feel playful and rewarding.',
      'Focused on building interactive features that reinforce focus habits without adding friction to the study flow.',
    ],
    details: [
      {
        title: 'From web app to extension',
        summary: 'The product direction shifted toward meeting users where they already study.',
        paragraphs: [
          'Focus Farmer started as a standalone React app, but the more compelling version of the idea was one that could live directly inside the user\'s browsing routine. Moving it into a Chrome extension changed the technical constraints and made me think much more carefully about how the experience should coexist with someone else\'s page.',
          'That shift also strengthened the product concept. Instead of asking users to open a separate site and maintain a new habit, the tool could support focus in the exact environment where distractions usually happen.',
        ],
        images: [
          {
            src: siteAssets.focusFarmerLogo,
            alt: 'Focus Farmer title art',
            caption: 'Early identity work for the focus and gamification concept.',
          },
        ],
      },
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
      'Identified Problem Space through market and user research by conducting 100+ surveys and 10+ one-on-one interviews with college students to understand their financial habits, challenges, and needs.',
      'Performed an affinity diagram analsyis to identify key pain points and opportunities for intervention in college students\' financial management.',
      'Created user personas and storyboards to visualize the user journey and identify critical opportunties for financial education and intervention.',
      'Performed hierarchical task analysis to understand user goals, plans, and tasks related to financial management and identify areas where a financial planning application would be beneficial.',
      'Brainstormed 10 prorotypes based on previous research insights to address problem space with two in the form of storyboards outlining specific scenarios.',
      'Performed an indepth evaluation of the high-fidelity prototype with user story, testing 5 tasks with 5 participants to gather feedback on usability, design, and overall effectiveness of the application.',
    ],
    details: [
      {
        title: 'Research foundation',
        summary: 'This project was driven by user research before interface decisions were finalized.',
        paragraphs: [
          'Money Mentor was shaped by a strong research phase rather than jumping directly into polished screens. The surveys, interviews, and affinity mapping work helped define what students were actually struggling with, which made the later design decisions much more grounded.',
          'That process also helped me connect abstract financial-literacy goals to concrete user scenarios. By the time the prototype reached testing, there was already a clearer sense of which tasks mattered most and where support could reduce confusion or anxiety.',
        ],
        images: [
          {
            src: siteAssets.moneyMentorLogo,
            alt: 'Money Mentor project identity',
            caption: 'Brand and prototype identity for the financial literacy concept.',
          },
        ],
      },
    ],
    outcomes: [
      'Designed and Prototyped application design through Figma with 5 participants providing feedback',
      'Created an interface designed to assist college students to become more financially literate as well as responsible with budgeting and financial planning.',
      'Produced reusable components for various iterations.',
      'Generated poster demonstrating the best solutions that address the identified problem space.',
      'Adapted and applied feedback from user testing to improve the interaction design and feel of the application.',
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
    details: [
      {
        title: 'Lightweight machine-learning concept',
        summary: 'BeanI balanced playful product design with a focused technical scope.',
        paragraphs: [
          'BeanI was designed to feel approachable while still demonstrating a real technical idea. The project combines image-based roast classification with coffee-preparation guidance, which made it a good exercise in pairing a specialized model with a more consumer-friendly interaction flow.',
          'A lot of the value came from keeping the experience lightweight and understandable. Rather than overcomplicating the system, the concept stays focused on helping users make sense of what they are looking at and how that can inform the way they brew coffee.',
        ],
        images: [
          {
            src: siteAssets.beanILogo,
            alt: 'BeanI logo mark',
            caption: 'Visual identity for the coffee roast recommender.',
          },
        ],
      },
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

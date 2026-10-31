import { siteAssets } from '../siteAssets';

// All card and case-study content for this project lives here.
const project = {
  slug: 'focus-farmer',
  title: 'Focus Farmer',
  summary: 'A playful Pomodoro experience that brings focus sessions and rewarding progress into the browser.',
  image: siteAssets.focusFarmerLogo,
  imageAlt: 'Focus Farmer logo used as the project cover',
  featured: true,
  isPageUnderConstruction: false,
  skills: ['Frontend architecture', 'React', 'UI patterns', 'Psychological Research', 'Prototyping'],
  process: ['Started off as a standalone web app, then adapted to work as a Chrome extension that embeds its components into the user\'s current page.', 'Created sprite-based visual feedback to make progress feel playful and rewarding.', 'Focused on building interactive features that reinforce focus habits without adding friction to the study flow.'],
  details: [{
    title: 'From web app to extension',
    summary: 'The product direction shifted toward meeting users where they already study.',
    isVisible: false,
    paragraphs: ['Focus Farmer started as a standalone React app, but the more compelling version of the idea was one that could live directly inside the user\'s browsing routine. Moving it into a Chrome extension changed the technical constraints and made me think much more carefully about how the experience should coexist with someone else\'s page.', 'That shift also strengthened the product concept. Instead of asking users to open a separate site and maintain a new habit, the tool could support focus in the exact environment where distractions usually happen.'],
    images: [{
      src: siteAssets.focusFarmerLogo,
      alt: 'Focus Farmer title art',
      caption: 'Early identity work for the focus and gamification concept.'
    }]
  }],
  outcomes: ['Adapted a standalone React app into a Chrome extension.', 'Implemented sprite-based feedback and ElevenLabs music generation.', 'Received the TechValley 2026 ElevenLabs award.'],
  links: [{
    label: 'GitHub Repository',
    href: 'https://github.com/DMCerYT/focus-farmer'
  }, {
    label: 'DevPost Page',
    href: 'https://devpost.com/software/locked-in-focus-farming?_gl=1*q9afyn*_gcl_au*MjY3ODUwOTgwLjE3NzQ5ODgyODE.*_ga*MTUyNzA2MDIwMi4xNzc0OTg4Mjgx*_ga_0YHJK3Y10M*czE3NzQ5ODgyODAkbzEkZzEkdDE3NzQ5ODgyODgkajUyJGwwJGgw'
  }, {
    label: 'Demo Video',
    href: 'https://youtu.be/RvEgfpBmBFs'
  }],
  discipline: 'Interaction design · Gamification',
  contribution: 'React interface, extension integration, and playful progress feedback',
  problem: 'A focus tool needs to support study habits without becoming another interruption. The challenge was to make progress rewarding while keeping the experience close to the user’s existing browsing routine.',
  decision: 'The concept moved from a standalone web app to a Chrome extension embedded in the current page. That change reduced the need to visit a separate site. Sprite-based progress feedback gave the focus cycle a playful visual language.',
  evidence: 'The implemented work combines a React-based extension, progress feedback, and AI-generated music. The project received the TechValley 2026 ElevenLabs award. A measured change in focus or study habits has not been documented here.',
  nextStep: 'A next study would examine whether the embedded controls and visual rewards support focus or create distractions, then use those observations to refine placement and feedback frequency.',
  artifacts: [{
    title: 'Focus in context',
    caption: 'Add a screenshot of the extension on a real browser page, showing its scale and placement.'
  }, {
    title: 'Progress and reward states',
    caption: 'Add timer, active-session, and reward states with annotations explaining the feedback.'
  }]
};

export default project;

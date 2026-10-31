import { siteAssets } from '../siteAssets';

// All card and case-study content for this project lives here.
const project = {
  slug: 'coffee-bean-recommender',
  title: 'BeanI',
  summary: 'An approachable coffee-roast recommender connecting a photo of coffee beans with preparation guidance.',
  image: siteAssets.beanILogo,
  imageAlt: 'BeanI logo used as the automation lab project cover',
  skills: ['Interaction design', 'Wireframing', 'Figma', 'OpenCV'],
  process: ['Mapped the interaction flow from photo input to preparation guidance.', 'Created initial wireframes for the recommendation experience.'],
  details: [{
    title: 'Lightweight machine-learning concept',
    summary: 'BeanI balanced playful product design with a focused technical scope - identifying coffee beans to make a good roast.',
    isVisible: false,
    paragraphs: ['BeanI was designed to feel approachable while still demonstrating a real technical idea. The project combines image-based roast classification with coffee-preparation guidance, which made it a good exercise in pairing a specialized model with a more consumer-friendly interaction flow.', 'A lot of the value came from keeping the experience lightweight and understandable. Rather than overcomplicating the system, the concept stays focused on helping users make sense of what they are looking at and how that can inform the way they brew coffee.'],
    images: [{
      src: siteAssets.beanILogo,
      alt: 'BeanI logo mark',
      caption: 'Visual identity for the coffee roast recommender.'
    }]
  }],
  outcomes: ['Created a coffee-roast recommendation concept using image classification.', 'Connected roast identification with coffee-preparation guidance.'],
  links: [{
    label: 'GitHub Repository',
    href: 'https://github.com/okBrian/CoffeeBeanRecommender'
  }, {
    label: 'Figma Design File',
    href: 'https://www.figma.com/design/73gFUXWkCaH94bav4nkjc9/Coffee-Bean-Recommender?node-id=0-1&t=BPnM2BT0TmAhMyv3-1'
  }, {
    label: 'DevPost Page',
    href: 'https://devpost.com/software/beani?_gl=1*12qd6kx*_gcl_au*MjY3ODUwOTgwLjE3NzQ5ODgyODE.*_ga*MTUyNzA2MDIwMi4xNzc0OTg4Mjgx*_ga_0YHJK3Y10M*czE3NzQ5ODgyODAkbzEkZzEkdDE3NzQ5ODg1NTUkajQzJGwwJGgw'
  }, {
    label: 'Demo Video',
    href: 'https://youtu.be/Gte54Mib1-w'
  }],
  discipline: 'Interaction design · Applied ML',
  contribution: 'Interaction flow and initial wireframes',
  problem: 'A specialized image-classification model needs an understandable interaction. The challenge was to connect roast identification with useful guidance for preparing coffee.',
  decision: 'Originally, we were unsure of the approach to take this application. With so many possible methods of executing this idea, a user interaction flow along with respective screens had to be defined first.',
  evidence: 'The project combines an OpenCV roast classifier with a consumer-facing recommendation concept. Model accuracy and usability findings are not documented in this case study.',
  nextStep: 'A next evaluation would test whether users understand the classification result and know how to act on the brewing guidance, including cases where photo quality affects the result.',
  artifacts: [{
    title: 'Photo → recommendation',
    caption: 'Add wireframes and final screens showing photo input, roast classification, and preparation guidance.'
  }]
};

export default project;

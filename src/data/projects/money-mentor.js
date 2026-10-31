import { siteAssets } from '../siteAssets';

// All card and case-study content for this project lives here.
const project = {
  slug: 'money-mentor',
  title: 'Money Mentor',
  summary: 'Exploring how financial planning and education can help college students build confidence managing their money.',
  image: siteAssets.moneyMentorLogo,
  featured: true,
  imageAlt: 'Money Mentor logo used as the interaction sandbox project cover',
  skills: ['Market Research', 'Storyboarding', 'Prototyping', 'User Research', 'Persona Creation', 'Figma'],
  process: ['Identified Problem Space through market and user research by conducting 100+ surveys and 10+ one-on-one interviews with college students to understand their financial habits, challenges, and needs.', 'Performed an affinity diagram analysis to identify key pain points and opportunities for intervention in college students\' financial management.', 'Created user personas and storyboards to visualize the user journey and identify critical opportunities for financial education and intervention.', 'Performed hierarchical task analysis to understand user goals, plans, and tasks related to financial management and identify areas where a financial planning application would be beneficial.', 'Brainstormed 10 prototypes based on previous research insights to address problem space with two in the form of storyboards outlining specific scenarios.', 'Performed an in-depth evaluation of the high-fidelity prototype with user story, testing 5 tasks with 5 participants to gather feedback on usability, design, and overall effectiveness of the application.'],
  details: [{
    title: 'Research foundation',
    summary: 'This project was driven by user research before interface decisions were finalized.',
    isVisible: false,
    paragraphs: ['Money Mentor was shaped by a strong research phase rather than jumping directly into polished screens. The surveys, interviews, and affinity mapping work helped define what students were actually struggling with, which made the later design decisions much more grounded.', 'That process also helped me connect abstract financial-literacy goals to concrete user scenarios. By the time the prototype reached testing, there was already a clearer sense of which tasks mattered most and where support could reduce confusion or anxiety.'],
    images: [{
      src: siteAssets.moneyMentorLogo,
      alt: 'Money Mentor project identity',
      caption: 'Brand and prototype identity for the financial literacy concept.'
    }]
  }],
  outcomes: ['Designed and Prototyped application design through Figma with 5 participants providing feedback', 'Created an interface designed to assist college students to become more financially literate as well as responsible with budgeting and financial planning.', 'Produced reusable components for various iterations.', 'Generated poster demonstrating the best solutions that address the identified problem space.', 'Adapted and applied feedback from user testing to improve the interaction design and feel of the application.'],
  discipline: 'UX research · Product design',
  contribution: 'Research, synthesis, storyboarding, prototyping, and usability evaluation',
  problem: 'College students need support with financial habits, budgeting, and financial literacy. The design challenge was to turn that broad problem into concrete tasks a planning application could support.',
  decision: 'Personas, storyboards, and task analysis connected the research to specific financial-management scenarios before high-fidelity prototyping. Exploring ten concepts made room to compare approaches before refining the interface.',
  evidence: 'The project included 100+ surveys, 10+ interviews, and a five-task prototype evaluation with five participants. Feedback informed further interaction-design changes. These activities establish the scope of evaluation; they do not demonstrate a measured improvement in financial behavior.',
  nextStep: 'A next evaluation would test the revised budgeting and education flows, documenting task completion, points of confusion, and what changed between prototype versions.',
  artifacts: [{
    title: 'Research → opportunity',
    caption: 'Add an affinity map excerpt showing a research theme, an anonymized observation, and the design opportunity it informed.'
  }, {
    title: 'Key financial-planning flow',
    caption: 'Add two or three high-fidelity screens showing how a student completes one important task.'
  }, {
    title: 'Before → feedback → after',
    caption: 'Add the original screen, a specific observation from testing, and the revised screen with a short explanation.'
  }]
};

export default project;

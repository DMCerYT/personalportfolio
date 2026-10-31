import atlantaTasteTrek from './projects/atlanta-taste-trek';
import focusFarmer from './projects/focus-farmer';
import moneyMentor from './projects/money-mentor';
import beanI from './projects/coffee-bean-recommender';
import musicMaker from './projects/music-maker';
import { createProject } from './projectModel';
import { selectShowcaseProjects } from './projectSelectors';

// Registry only: add a project import and include it here.
export const projects = [
  atlantaTasteTrek,
  focusFarmer,
  moneyMentor,
  beanI,
  musicMaker,
].map(createProject);
export const showcaseProjects = selectShowcaseProjects(projects);
export const featuredProjects = showcaseProjects.filter(project => project.featured);

export function getProjectBySlug(slug) {
  return projects.find(project => project.slug === slug);
}

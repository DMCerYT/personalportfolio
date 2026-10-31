import { projects, showcaseProjects, featuredProjects, getProjectBySlug } from './projects';
import { createProject } from './projectModel';
import { selectShowcaseProjects } from './projectSelectors';

test('registered projects have unique routable slugs and complete renderable content', () => {
  expect(new Set(projects.map(project => project.slug)).size).toBe(projects.length);
  projects.forEach(project => {
    expect(project.slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    expect(project.title).toBeTruthy();
    expect(project.image).toBeTruthy();
    ['links', 'details', 'skills', 'process', 'outcomes', 'artifacts'].forEach(field => {
      expect(Array.isArray(project[field])).toBe(true);
    });
    if (project.problem) {
      ['contribution', 'decision', 'evidence', 'nextStep'].forEach(field => expect(project[field]).toBeTruthy());
    }
    expect(getProjectBySlug(project.slug)).toBe(project);
  });
  expect(getProjectBySlug('missing-project')).toBeUndefined();
  expect(featuredProjects).toEqual(showcaseProjects.filter(project => project.featured));
});

test('new projects follow curated entries, drafts are excluded, and selection does not mutate the registry', () => {
  const input = [
    createProject({ slug: 'playpeek' }),
    createProject({ slug: 'draft', isUnderConstruction: true }),
    createProject({ slug: 'atlanta-taste-trek' }),
    createProject({ slug: 'money-mentor' }),
    createProject({ slug: 'block-based-programming' }),
  ];
  const original = [...input];
  expect(selectShowcaseProjects(input).map(project => project.slug)).toEqual([
    'money-mentor', 'atlanta-taste-trek', 'playpeek', 'block-based-programming',
  ]);
  expect(input).toEqual(original);
});

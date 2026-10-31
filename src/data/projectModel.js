/** Supply optional display fields without merging content from another file. */
export function createProject(project) {
  return {
    featured: false,
    links: [],
    details: [],
    imageAlt: 'Project preview image',
    skills: [],
    process: [],
    outcomes: [],
    artifacts: [],
    ...project,
  };
}

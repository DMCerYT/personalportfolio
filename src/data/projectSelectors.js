// Unlisted slugs follow curated projects, retaining their registry order.
const SHOWCASE_ORDER = ['money-mentor', 'focus-farmer', 'atlanta-taste-trek', 'coffee-bean-recommender'];

export function selectShowcaseProjects(projects) {
  const rank = slug => {
    const index = SHOWCASE_ORDER.indexOf(slug);
    return index === -1 ? SHOWCASE_ORDER.length : index;
  };

  return projects
    .filter(project => !project.isUnderConstruction)
    .sort((a, b) => rank(a.slug) - rank(b.slug));
}

import ContentSection from '../components/ContentSection';
import ProjectGrid from '../components/ProjectGrid';
import styles from '../styles/pageLayout.module.css';
import { projectEntrySteps, projects } from '../data/projects';

export default function Projects() {
  return (
    <main className={styles.page}>
      <ContentSection
        title="Projects"
        description="Every project card is now generated from a single data source, so adding a new portfolio item no longer requires editing page markup."
        className={styles.tightSection}
      >
        <ProjectGrid projects={projects} />
      </ContentSection>

      <ContentSection
        title="Add the Next Project"
        description="New entries are intentionally lightweight: import the image once, add a project object, and the homepage and detail pages update automatically."
      >
        <article className={styles.infoCard}>
          <ol className={styles.simpleList}>
            {projectEntrySteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </article>
      </ContentSection>
    </main>
  );
}

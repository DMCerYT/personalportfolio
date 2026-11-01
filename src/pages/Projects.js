import ContentSection from '../components/ContentSection';
import ProjectGrid from '../components/ProjectGrid';
import styles from '../styles/pageLayout.module.css';
import { showcaseProjects } from '../data/projects';

export default function Projects() {
  return (
    <main className={styles.page}>
      <ContentSection
        title="Selected work"
        description="From research to interactive experiences: explore the problem, my contribution, design decisions, and evaluation behind each project."
        className={styles.tightSection}
      >
        <ProjectGrid projects={showcaseProjects} />
      </ContentSection>

    </main>
  );
}

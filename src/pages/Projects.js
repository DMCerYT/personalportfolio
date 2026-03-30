import ContentSection from '../components/ContentSection';
import ProjectGrid from '../components/ProjectGrid';
import styles from '../styles/pageLayout.module.css';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <main className={styles.page}>
      <ContentSection
        title="Projects"
        description="These are some of the projects I have previously worked on. Each one represents a unique challenge and learning experience, and I'm proud to share them with you. Feel free to explore the details of each project to see the process of each project and the evolution of my skills and interests over time."
        className={styles.tightSection}
      >
        <ProjectGrid projects={projects} />
      </ContentSection>

    </main>
  );
}

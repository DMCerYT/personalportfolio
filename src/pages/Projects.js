import ProjectCard from '../components/ProjectCard';
import styles from '../styles/pageLayout.module.css';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <main className={styles.page}>
      <section className={styles.sectionHeader}>
        <h1>Projects</h1>
        <p>
          The project cards follow the Figma desktop and mobile component specs: glass
          shell, inner panel, image-first layout, and a mobile CTA treatment.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.summary}
              image={project.image}
              to={`/projects/${project.slug}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

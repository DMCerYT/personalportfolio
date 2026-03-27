import ProjectCard from './ProjectCard';
import styles from '../styles/pageLayout.module.css';

export default function ProjectGrid({ projects, className = '' }) {
  return (
    <div className={`${styles.projectsGrid} ${className}`.trim()}>
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          title={project.title}
          description={project.summary}
          image={project.image}
          imageAlt={project.imageAlt}
          to={`/projects/${project.slug}`}
        />
      ))}
    </div>
  );
}

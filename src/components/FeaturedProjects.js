import { useState } from 'react';
import ProjectCard from './ProjectCard';
import styles from '../styles/pageLayout.module.css';

function splitIntoPages(projects, pageSize) {
  const pages = [];

  for (let index = 0; index < projects.length; index += pageSize) {
    pages.push(projects.slice(index, index + pageSize));
  }

  return pages;
}

export default function FeaturedProjects({ projects }) {
  const mobilePages = splitIntoPages(projects, 2);
  const [activePage, setActivePage] = useState(0);

  if (projects.length === 0) {
    return null;
  }

  const showPreviousPage = () => {
    setActivePage((currentPage) => (currentPage === 0 ? mobilePages.length - 1 : currentPage - 1));
  };

  const showNextPage = () => {
    setActivePage((currentPage) => (currentPage + 1) % mobilePages.length);
  };

  return (
    <>
      <div className={styles.featuredProjectsDesktop}>
        {projects.slice(0, 2).map((project) => (
          <div key={project.slug} className={styles.featuredProjectItem}>
            <ProjectCard
              title={project.title}
              description={project.summary}
              image={project.image}
              imageAlt={project.imageAlt}
              to={`/projects/${project.slug}`}
            />
          </div>
        ))}
      </div>

      <div className={styles.featuredProjectsMobile}>
        <div className={styles.carouselControls}>
          <button type="button" className={styles.carouselButton} onClick={showPreviousPage}>
            Previous
          </button>
          <p className={styles.carouselStatus}>
            {activePage + 1} / {mobilePages.length}
          </p>
          <button type="button" className={styles.carouselButton} onClick={showNextPage}>
            Next
          </button>
        </div>

        <div className={styles.carouselPage}>
          {mobilePages[activePage].map((project) => (
            <div key={project.slug} className={styles.featuredProjectItem}>
              <ProjectCard
                title={project.title}
                description={project.summary}
                image={project.image}
                imageAlt={project.imageAlt}
                to={`/projects/${project.slug}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

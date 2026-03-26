import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import styles from '../styles/pageLayout.module.css';

export default function Home() {
  const featuredProjects = projects.slice(0, 4);
  const mobileCarouselPages = [];

  for (let index = 0; index < featuredProjects.length; index += 2) {
    mobileCarouselPages.push(featuredProjects.slice(index, index + 2));
  }

  const [activeCarouselPage, setActiveCarouselPage] = useState(0);

  const showPreviousPage = () => {
    setActiveCarouselPage((currentPage) =>
      currentPage === 0 ? mobileCarouselPages.length - 1 : currentPage - 1
    );
  };

  const showNextPage = () => {
    setActiveCarouselPage((currentPage) => (currentPage + 1) % mobileCarouselPages.length);
  };

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <h1>Emmanuel (Emmet) Munoz / DMCer</h1>
          <p>
            Software engineer, builder, and portfolio owner. This homepage now uses the
            Figma-driven visual system so the navigation and shared cards match on desktop
            and mobile while the rest of the site keeps its existing routing behavior.
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.cta} to="/projects">
              View Projects
            </Link>
            <Link className={styles.secondaryCta} to="/contact">
              Contact Links
            </Link>
          </div>
        </div>
        <div className={styles.heroAside}>
          <p className={styles.heroAsideLabel}>Highlighted Work</p>
          <div className={styles.heroAsideList}>
            {projects.slice(0, 2).map((project) => (
              <Link key={project.slug} className={styles.heroAsideItem} to={`/projects/${project.slug}`}>
                <span>{project.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h1>Highlighted Projects</h1>
          <p>
            Desktop dynamically limits visible cards to avoid overlap. Mobile uses a
            button-driven two-project carousel instead of horizontal scrolling.
          </p>
        </div>

        <div className={styles.featuredProjectsDesktop}>
          {featuredProjects.slice(0, 2).map((project) => (
            <div key={project.slug} className={styles.featuredProjectItem}>
              <ProjectCard
                title={project.title}
                description={project.summary}
                image={project.image}
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
              {activeCarouselPage + 1} / {mobileCarouselPages.length}
            </p>
            <button type="button" className={styles.carouselButton} onClick={showNextPage}>
              Next
            </button>
          </div>

          <div className={styles.carouselPage}>
            {mobileCarouselPages[activeCarouselPage].map((project) => (
              <div key={project.slug} className={styles.featuredProjectItem}>
                <ProjectCard
                  title={project.title}
                  description={project.summary}
                  image={project.image}
                  to={`/projects/${project.slug}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

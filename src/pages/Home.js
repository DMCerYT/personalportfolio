import { Link } from 'react-router-dom';
import ContentSection from '../components/ContentSection';
import FeaturedProjects from '../components/FeaturedProjects';
import PageIntro from '../components/PageIntro';
import { featuredProjects } from '../data/projects';
import styles from '../styles/pageLayout.module.css';

export default function Home() {
  return (
    <main className={styles.page}>
      <PageIntro
        title="Emmanuel (Emmet) Munoz / DMCer"
        description="Software engineer, builder, and portfolio owner. This homepage now uses a shared component system so the navigation, project cards, and page sections stay consistent as the portfolio grows."
        actions={
          <>
            <Link className={styles.cta} to="/projects">
              View Projects
            </Link>
            <Link className={styles.secondaryCta} to="/about">
              About Me
            </Link>
          </>
        }
        aside={
          <>
          <p className={styles.heroAsideLabel}>Highlighted Work</p>
          <div className={styles.heroAsideList}>
            {featuredProjects.slice(0, 2).map((project) => (
              <Link
                key={project.slug}
                className={styles.heroAsideItem}
                to={`/projects/${project.slug}`}
              >
                <span>{project.title}</span>
              </Link>
            ))}
          </div>
          </>
        }
      />

      <ContentSection
        title="Highlighted Projects"
        description="These are some of the projects I have had a blast working on."
      >
        <FeaturedProjects projects={featuredProjects} />
      </ContentSection>
    </main>
  );
}

import { Link } from 'react-router-dom';
import styles from '../../styles/homePage.module.css';

export default function HomeHero({ hero }) {
  return (
    <section className={styles.heroSection} aria-labelledby="home-hero-title">
      <div className={styles.heroInner}>
        <div className={styles.heroCard}>
          <p className={styles.heroEyebrow}>{hero.eyebrow}</p>
          <div className={styles.heroContentPanel}>
            <h1 id="home-hero-title" className={styles.heroTitle}>
              {hero.name}
            </h1>
            <p className={styles.heroTagline}>{hero.tagline}</p>
          </div>
        </div>

        <div className={styles.heroPortraitWrap}>
          <div className={styles.heroPortraitFrame}>
            <img
              className={styles.heroPortraitImage}
              src={hero.portrait}
              alt="Portrait artwork from the homepage design"
            />
          </div>
        </div>
      </div>

      <div className={styles.heroActions}>
        <Link className={styles.primaryAction} to="/projects">
          View Projects
        </Link>
        <Link className={styles.secondaryAction} to="/contact">
          Contact Me
        </Link>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import UnderConstruction from '../components/UnderConstruction';
import styles from '../styles/pageLayout.module.css';

export default function Home() {
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
        <UnderConstruction pageName="The full home experience" />
      </section>
    </main>
  );
}

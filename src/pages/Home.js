import HomeHero from '../components/home/HomeHero';
import SkillsSection from '../components/home/SkillsSection';
import WorkSection from '../components/home/WorkSection';
import { currentRoles, homeHero, skillPills } from '../data/homeContent';
import styles from '../styles/homePage.module.css';

export default function Home() {
  return (
    <main className={styles.page}>
      <HomeHero hero={homeHero} />
      <WorkSection roles={currentRoles} />
      <SkillsSection skills={skillPills} />
    </main>
  );
}

import ProjectGrid from '../components/ProjectGrid';
import { featuredProjects } from '../data/projects';
import detailStyles from '../styles/projectDetail.module.css';
import HomeHero from '../components/home/HomeHero';
import SkillsSection from '../components/home/SkillsSection';
import WorkSection from '../components/home/WorkSection';
import { currentRoles, homeHero, skillPills } from '../data/homeContent';
import styles from '../styles/homePage.module.css';

export default function Home() {
  return (
    <main className={styles.page}>
      <HomeHero hero={homeHero} />
      <section className={detailStyles.selectedWork} aria-labelledby="selected-work-title">
        <p className={detailStyles.eyebrow}>Research · Interaction · Implementation</p>
        <h2 id="selected-work-title">Selected design work</h2>
        <p>Explore how I frame problems, develop interactions, and bring designs into working products.</p>
        <ProjectGrid projects={featuredProjects} />
      </section>
      <WorkSection roles={currentRoles} />
      <SkillsSection skills={skillPills} />
    </main>
  );
}

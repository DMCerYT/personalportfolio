import styles from '../../styles/homePage.module.css';

export default function SkillsSection({ skills }) {
  return (
    <section className={styles.skillsSection} aria-labelledby="skills-title">
      <div className={styles.sectionInner}>
        <div className={styles.skillsLayout}>
          <div className={styles.skillsHeadingBlock}>
            <h2 id="skills-title" className={styles.skillsTitle}>
              SKILLS
            </h2>
            <div className={styles.skillsDivider} />
            <p className={styles.skillsCaption}>Those are important too right?</p>
          </div>

          <div className={styles.skillCloud} aria-label="Skill highlights">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className={`${styles.skillPill} ${styles[`skillPill${index + 1}`]}`}
              >
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

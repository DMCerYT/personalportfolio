import { useState } from 'react';
import styles from '../../styles/homePage.module.css';

export default function SkillsSection({ skills }) {
  const [isPaused, setIsPaused] = useState(false);
  const rows = Array.from({ length: 3 }, (_, rowIndex) =>
    skills.filter((_, index) => index % 3 === rowIndex)
  ).filter(row => row.length > 0);

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
            <button
              type="button"
              className={styles.skillsMotionToggle}
              aria-pressed={isPaused}
              onClick={() => setIsPaused(paused => !paused)}
            >
              Pause skills animation
            </button>
          </div>

          <div className={styles.skillCloud} data-paused={isPaused} role="group" aria-label="Skill highlights">
            {rows.map((row, rowIndex) => (
              <div className={styles.skillRow} key={rowIndex}>
                <div className={styles.skillTrack} style={{ '--skills-duration': `${row.length * 8}s` }}>
                  {[false, true].map(isDuplicate => (
                    <ul className={styles.skillGroup} key={String(isDuplicate)} aria-hidden={isDuplicate || undefined}>
                      {row.map(skill => (
                        <li key={skill} className={styles.skillPill}>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

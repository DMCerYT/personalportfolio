import { useState } from 'react';
import { Link } from 'react-router-dom';
import RoleCard from './RoleCard';
import styles from '../../styles/homePage.module.css';

export default function WorkSection({ roles }) {
  const [activeRoleId, setActiveRoleId] = useState(roles[0]?.id ?? null);
  const activeRole = roles.find((role) => role.id === activeRoleId) ?? roles[0];

  return (
    <section className={styles.workSection} aria-labelledby="current-work-title">
      <div className={styles.sectionInner}>
        <div className={styles.sectionHeading}>
          <h2 id="current-work-title" className={styles.sectionTitle}>
            Currently Working As the Following
          </h2>
          <div className={styles.sectionDivider} />
        </div>

        <div className={styles.rolesRow}>
          <div className={styles.rolesGrid}>
            {roles.map((role) => (
              <RoleCard
                key={role.id}
                role={role}
                isActive={role.id === activeRole.id}
                onSelect={setActiveRoleId}
              />
            ))}
          </div>

          <Link
            className={styles.contactPromptButton}
            to="/contact"
            aria-label="Do you want me to be a part of your stellar team?"
          >
            +
          </Link>
        </div>

        <div className={styles.roleSummaryPanel}>
          <p className={styles.roleSummaryLabel}>Selected Role</p>
          <h3 className={styles.roleSummaryTitle}>{activeRole.title}</h3>
          <p className={styles.roleSummaryText}>{activeRole.summary}</p>
        </div>
      </div>
    </section>
  );
}

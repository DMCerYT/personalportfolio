import { AssistantIcon, ResearchIcon, RetailIcon } from './HomeIcons';
import styles from '../../styles/homePage.module.css';

const ICON_MAP = {
  assistant: AssistantIcon,
  research: ResearchIcon,
  retail: RetailIcon,
};

export default function RoleCard({ role, isActive, onSelect }) {
  const Icon = ICON_MAP[role.icon] || AssistantIcon;

  return (
    <button
      type="button"
      className={`${styles.roleCard} ${isActive ? styles.roleCardActive : ''}`}
      onClick={() => onSelect(role.id)}
      aria-pressed={isActive}
    >
      <Icon className={styles.roleIcon} />
      <div className={styles.roleBody}>
        <h3 className={styles.roleTitle}>{role.title}</h3>
        <p className={styles.roleOrganization}>{role.organization}</p>
      </div>
      <p className={styles.roleSince}>{role.since}</p>
    </button>
  );
}

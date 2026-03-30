import { NavLink } from 'react-router-dom';
import styles from '../styles/navbarButton.module.css';

export default function NavbarButton({
  link,
  text,
  icon,
  mobile = false,
  onNavigate,
  onClick,
  iconOnly = false,
  buttonLabel,
  active = false,
  extraClassName = '',
}) {
  const baseClassName = mobile ? styles.mobileButton : styles.button;
  const className = `${baseClassName} ${iconOnly ? styles.iconOnly : ''} ${active ? styles.active : ''} ${extraClassName}`.trim();

  if (!link) {
    return (
      <button
        type="button"
        className={className}
        onClick={onClick}
        aria-label={buttonLabel || text}
        aria-pressed={active}
      >
        <img className={styles.icon} src={icon} alt="" aria-hidden="true" />
        {iconOnly ? null : <span className={styles.text}>{text}</span>}
      </button>
    );
  }

  return (
    <NavLink
      to={link}
      className={({ isActive }) => `${className} ${isActive ? styles.active : ''}`.trim()}
      onClick={onNavigate}
      aria-label={buttonLabel || text}
    >
      <img className={styles.icon} src={icon} alt="" aria-hidden="true" />
      {iconOnly ? null : <span className={styles.text}>{text}</span>}
    </NavLink>
  );
}

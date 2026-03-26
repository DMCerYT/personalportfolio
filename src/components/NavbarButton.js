import { NavLink } from 'react-router-dom';
import styles from '../styles/navbarButton.module.css';

export default function NavbarButton({
  link,
  text,
  icon,
  mobile = false,
  onNavigate,
}) {
  const className = mobile ? styles.mobileButton : styles.button;

  return (
    <NavLink
      to={link}
      className={({ isActive }) => `${className} ${isActive ? styles.active : ''}`.trim()}
      onClick={onNavigate}
    >
      <img className={styles.icon} src={icon} alt="" aria-hidden="true" />
      <span className={styles.text}>{text}</span>
    </NavLink>
  );
}

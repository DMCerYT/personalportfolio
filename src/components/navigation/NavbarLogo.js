import { Link } from 'react-router-dom';
import { siteAssets } from '../../data/siteAssets';
import styles from '../../styles/navbar.module.css';

export default function NavbarLogo() {
  return (
    <Link className={styles.logoLink} to="/" aria-label="Go to home page">
      <img className={styles.logo} src={siteAssets.avatarLogo} alt="Portfolio logo" />
    </Link>
  );
}


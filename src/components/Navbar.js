import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../assets/navbar-icons/home.svg';
import projectsIcon from '../assets/navbar-icons/projects.svg';
import contactIcon from '../assets/navbar-icons/contact.svg';
import menuIcon from '../assets/navbar-icons/menu.svg';
import { siteAssets } from '../data/siteAssets';
import NavbarButton from './NavbarButton';
import styles from '../styles/navbar.module.css';

const ICONS = {
  home: homeIcon,
  projects: projectsIcon,
  contact: contactIcon,
  menu: menuIcon,
};

const NAV_ITEMS = [
  { text: 'Home', link: '/', icon: ICONS.home },
  { text: 'Projects', link: '/projects', icon: ICONS.projects },
  { text: 'Contact', link: '/contact', icon: ICONS.contact },
];

function NavbarLogo() {
  return (
    <Link className={styles.logoLink} to="/" aria-label="Go to home page">
      <img className={styles.logo} src={siteAssets.avatarLogo} alt="Portfolio logo" />
    </Link>
  );
}

export default function NavigationBar() {
  const [menuState, setMenuState] = useState('closed');

  const isMenuMounted = menuState !== 'closed';
  const isMenuOpen = menuState === 'open';

  useEffect(() => {
    if (menuState !== 'closing') {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setMenuState('closed');
    }, 220);

    return () => window.clearTimeout(timeoutId);
  }, [menuState]);

  const openMenu = () => {
    setMenuState('open');
  };

  const closeMenu = () => {
    setMenuState((currentState) => {
      if (currentState === 'closed') {
        return currentState;
      }

      return 'closing';
    });
  };

  const toggleMenu = () => {
    if (menuState === 'open') {
      closeMenu();
      return;
    }

    openMenu();
  };

  return (
    <>
      <header className={styles.desktopHeader}>
        <div className={styles.desktopNavbar}>
          <NavbarLogo />
          <nav className={styles.desktopNavLinks} aria-label="Primary navigation">
            {NAV_ITEMS.map((item) => (
              <NavbarButton
                key={item.link}
                icon={item.icon}
                link={item.link}
                text={item.text}
                onNavigate={closeMenu}
              />
            ))}
          </nav>
        </div>
      </header>

      <div className={styles.mobileNavWrap}>
        {isMenuMounted ? (
          <nav
            className={`${styles.mobileMenu} ${
              menuState === 'closing' ? styles.mobileMenuExit : styles.mobileMenuEnter
            }`}
            aria-label="Mobile navigation"
          >
            {NAV_ITEMS.map((item) => (
              <NavbarButton
                key={item.link}
                icon={item.icon}
                link={item.link}
                text={item.text}
                mobile
                onNavigate={closeMenu}
              />
            ))}
          </nav>
        ) : null}

        <div className={styles.mobileNavbar}>
          <NavbarLogo />
          <button
            type="button"
            className={styles.mobileMenuButton}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={toggleMenu}
          >
            <img src={ICONS.menu} alt="" aria-hidden="true" />
          </button>
        </div>
      </div>
    </>
  );
}

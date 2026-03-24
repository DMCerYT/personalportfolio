import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/avatarlogo.jpeg';
import NavbarButton from './NavbarButton';
import styles from '../styles/navbar.module.css';

const ICONS = {
  home: 'https://www.figma.com/api/mcp/asset/02a37963-5d82-482d-a085-b3a450ccf42a',
  projects: 'https://www.figma.com/api/mcp/asset/d4844a7c-0a80-4d08-bc39-7a9fa77a2eab',
  contact: 'https://www.figma.com/api/mcp/asset/43676bb9-d500-4771-ab68-ef989a243fbf',
  menu: 'https://www.figma.com/api/mcp/asset/d9092adf-5b08-4f5a-8147-970c4eb33f03',
};

const NAV_ITEMS = [
  { text: 'Home', link: '/', icon: ICONS.home },
  { text: 'Projects', link: '/projects', icon: ICONS.projects },
  { text: 'Contact', link: '/contact', icon: ICONS.contact },
];

function NavbarLogo() {
  return (
    <Link className={styles.logoLink} to="/" aria-label="Go to home page">
      <img className={styles.logo} src={logo} alt="Portfolio logo" />
    </Link>
  );
}

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

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
        {isMenuOpen ? (
          <nav className={styles.mobileMenu} aria-label="Mobile navigation">
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
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <img src={ICONS.menu} alt="" aria-hidden="true" />
          </button>
        </div>
      </div>
    </>
  );
}

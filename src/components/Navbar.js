import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../assets/navbar-icons/home.svg';
import projectsIcon from '../assets/navbar-icons/projects.svg';
import contactIcon from '../assets/navbar-icons/contact.svg';
import menuIcon from '../assets/navbar-icons/menu.svg';
import settingsIcon from '../assets/navbar-icons/Setting.svg';
import { siteAssets } from '../data/siteAssets';
import NavbarButton from './NavbarButton';
import SettingsPanel from './SettingsPanel';
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

export default function NavigationBar({
  settings,
  onToggleDynamicBackground,
}) {
  const [menuState, setMenuState] = useState('closed');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const desktopSettingsRef = useRef(null);
  const mobileSettingsRef = useRef(null);

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

  useEffect(() => {
    if (!isSettingsOpen) {
      return undefined;
    }

    const handlePointerDown = (event) => {
      const clickedDesktopSettings = desktopSettingsRef.current?.contains(event.target);
      const clickedMobileSettings = mobileSettingsRef.current?.contains(event.target);

      if (!clickedDesktopSettings && !clickedMobileSettings) {
        setIsSettingsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsSettingsOpen(false);
      }
    };

    window.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isSettingsOpen]);

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

    closeSettings();
    openMenu();
  };

  const toggleSettings = () => {
    setIsSettingsOpen((currentState) => !currentState);
  };

  const closeSettings = () => {
    setIsSettingsOpen(false);
  };

  const handleMobileSettingsClick = () => {
    closeMenu();
    setIsSettingsOpen(true);
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

      <div ref={desktopSettingsRef} className={styles.floatingSettingsDock}>
        <NavbarButton
          icon={settingsIcon}
          text="Settings"
          iconOnly
          active={isSettingsOpen}
          buttonLabel="Open settings"
          onClick={toggleSettings}
          extraClassName={styles.floatingSettingsTrigger}
        />
        {isSettingsOpen ? (
          <div className={styles.floatingSettingsPanel}>
            <SettingsPanel
              settings={settings}
              onToggleBackground={onToggleDynamicBackground}
              onClose={closeSettings}
            />
          </div>
        ) : null}
      </div>

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
            <NavbarButton
              icon={settingsIcon}
              text="Settings"
              mobile
              active={isSettingsOpen}
              buttonLabel="Open settings"
              onClick={handleMobileSettingsClick}
            />
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

        {isSettingsOpen ? (
          <div ref={mobileSettingsRef} className={styles.mobileSettingsPanel}>
            <SettingsPanel
              settings={settings}
              onToggleBackground={onToggleDynamicBackground}
              onClose={closeSettings}
            />
          </div>
        ) : null}
      </div>
    </>
  );
}

import NavbarLogo from './NavbarLogo';
import NavigationLinks from './NavigationLinks';
import NavbarButton from '../NavbarButton';
import SettingsPanel from '../SettingsPanel';
import settingsIcon from '../../assets/navbar-icons/Setting.svg';
import styles from '../../styles/navbar.module.css';
import menuIcon from '../../assets/navbar-icons/menu.svg';

export default function MobileNavigation({ navigation, settingsPanelProps }) {
  const { menuState, isMenuMounted, isMenuOpen, isSettingsOpen, mobileSettingsRef, closeMenu, toggleMenu, handleMobileSettingsClick } = navigation;
  return (
    <>
      <div className={styles.mobileNavWrap}>
        {isMenuMounted ? (
          <nav
            className={`${styles.mobileMenu} ${
              menuState === 'closing' ? styles.mobileMenuExit : styles.mobileMenuEnter
            }`}
            aria-label="Mobile navigation"
          >
            <NavigationLinks mobile onNavigate={closeMenu} />
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
            <img src={menuIcon} alt="" aria-hidden="true" />
          </button>
        </div>

        {isSettingsOpen ? (
          <div ref={mobileSettingsRef} className={styles.mobileSettingsPanel}>
            <SettingsPanel {...settingsPanelProps} />
          </div>
        ) : null}
      </div>
    </>
  );
}

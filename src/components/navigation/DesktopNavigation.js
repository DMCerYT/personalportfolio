import NavbarLogo from './NavbarLogo';
import NavigationLinks from './NavigationLinks';
import NavbarButton from '../NavbarButton';
import SettingsPanel from '../SettingsPanel';
import settingsIcon from '../../assets/navbar-icons/Setting.svg';
import styles from '../../styles/navbar.module.css';

export default function DesktopNavigation({ navigation, settingsPanelProps }) {
  const { desktopSettingsRef, isSettingsOpen, toggleSettings, closeMenu } = navigation;
  return (
    <>
      <header className={styles.desktopHeader}>
        <div className={styles.desktopNavbar}>
          <NavbarLogo />
          <nav className={styles.desktopNavLinks} aria-label="Primary navigation">
            <NavigationLinks onNavigate={closeMenu} />
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
            <SettingsPanel {...settingsPanelProps} />
          </div>
        ) : null}
      </div>

    </>
  );
}

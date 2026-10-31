import useNavigationState from '../hooks/useNavigationState';
import DesktopNavigation from './navigation/DesktopNavigation';
import MobileNavigation from './navigation/MobileNavigation';

export default function Navbar({ settings, onToggleDynamicBackground, onChangeTheme }) {
  const navigation = useNavigationState();
  const settingsPanelProps = {
    settings,
    onChangeTheme,
    onToggleBackground: onToggleDynamicBackground,
    onClose: navigation.closeSettings,
  };

  return (
    <>
      <DesktopNavigation navigation={navigation} settingsPanelProps={settingsPanelProps} />
      <MobileNavigation navigation={navigation} settingsPanelProps={settingsPanelProps} />
    </>
  );
}

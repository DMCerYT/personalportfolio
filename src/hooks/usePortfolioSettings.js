import { useEffect, useState } from 'react';
import { readPortfolioSettings, SETTINGS_STORAGE_KEY } from '../utils/portfolioSettings';

/** Own preference state and persistence; storage failures leave controls usable. */
export default function usePortfolioSettings() {
  const [settings, setSettings] = useState(readPortfolioSettings);

  useEffect(() => {
    try {
      window.localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
    } catch {
      // Browsers can deny storage in private or restricted contexts.
    }
  }, [settings]);

  const changeTheme = theme => setSettings(current => ({ ...current, theme }));
  const toggleDynamicBackground = () => setSettings(current => ({
    ...current,
    dynamicBackgroundEnabled: !current.dynamicBackgroundEnabled,
  }));

  return { settings, changeTheme, toggleDynamicBackground };
}

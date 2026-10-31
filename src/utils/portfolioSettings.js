export const DEFAULT_SETTINGS = { dynamicBackgroundEnabled: true, theme: 'light' };
export const SETTINGS_STORAGE_KEY = 'portfolio-settings';

/** Storage may be unavailable, malformed, or left over from an older version. */
export function readPortfolioSettings() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(SETTINGS_STORAGE_KEY));
    return {
      theme: saved?.theme === 'dark' ? 'dark' : 'light',
      dynamicBackgroundEnabled: typeof saved?.dynamicBackgroundEnabled === 'boolean'
        ? saved.dynamicBackgroundEnabled
        : DEFAULT_SETTINGS.dynamicBackgroundEnabled,
    };
  } catch {
    return { ...DEFAULT_SETTINGS };
  }
}

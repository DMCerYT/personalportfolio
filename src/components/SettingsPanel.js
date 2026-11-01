import { useEffect, useId, useRef } from 'react';
import SquashToggle from './SquashToggle';
import lightPreview from '../assets/settings/light-preview.png';
import darkPreview from '../assets/settings/dark-preview.png';
import settingsIcon from '../assets/settings/settings.svg';
import closeIcon from '../assets/settings/close.svg';
import chevronIcon from '../assets/settings/chevron.svg';
import styles from '../styles/settingsPanel.module.css';

export default function SettingsPanel({ settings, onToggleBackground, onChangeTheme, onClose }) {
  const panelRef = useRef(null);
  const appearanceName = useId();
  useEffect(() => {
    // Only the visible desktop/mobile instance should take focus.
    const panel = panelRef.current;
    if (!panel?.getClientRects().length) return undefined;
    const previousFocus = document.activeElement;
    panel.querySelector('button')?.focus();
    return () => { if (previousFocus?.isConnected) previousFocus.focus(); };
  }, []);

  return (
    <div ref={panelRef} className={styles.panel} role="dialog" aria-modal="false" aria-label="Site settings">
      <div className={styles.header}>
        <img src={settingsIcon} alt="" />
        <h2>Settings</h2>
        <button type="button" className={styles.closeButton} aria-label="Close settings" onClick={onClose}>
          <img src={closeIcon} alt="" />
        </button>
      </div>
      <fieldset className={styles.appearance}>
        <legend>Visual Appearance:</legend>
        <div className={styles.themeOptions}>
          {[{ value: 'light', title: 'Light', image: lightPreview }, { value: 'dark', title: 'Dark', image: darkPreview }].map(theme => (
            <label className={styles.themeOption} key={theme.value}>
              <input type="radio" name={appearanceName} value={theme.value} checked={(settings.theme || 'light') === theme.value} onChange={() => onChangeTheme(theme.value)} />
              <span className={styles.themeCard}>
                <span className={styles.preview}><img src={theme.image} alt="" className={theme.value === 'light' ? styles.lightPreview : styles.darkPreview} /></span>
                <span>{theme.title}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className={styles.settingRow}>
        <span>Dynamic/Animated Elements:</span>
        <SquashToggle checked={settings.dynamicBackgroundEnabled} onChange={onToggleBackground} label="Dynamic/Animated Elements" />
      </div>
      <label className={styles.languageRow}>
        <span>Language:</span>
        <span className={styles.selectWrap}>
          <select aria-label="Language" value="en" onChange={() => {}} title="English is currently available">
            <option value="en">English</option>
          </select>
          <img src={chevronIcon} alt="" />
        </span>
      </label>
    </div>
  );
}

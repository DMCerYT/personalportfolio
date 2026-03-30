import styles from '../styles/settingsPanel.module.css';

function SettingRow({
  label,
  description,
  control,
}) {
  return (
    <div className={styles.settingRow}>
      <div className={styles.settingCopy}>
        <h2>{label}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.settingControl}>{control}</div>
    </div>
  );
}

export default function SettingsPanel({
  settings,
  onToggleBackground,
  onClose,
}) {
  return (
    <div className={styles.panel} role="dialog" aria-modal="false" aria-label="Site settings">
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Preferences</p>
          <h1>Settings</h1>
        </div>
        <button
          type="button"
          className={styles.closeButton}
          aria-label="Close settings"
          onClick={onClose}
        >
          Close
        </button>
      </div>

      <div className={styles.settingsList}>
        <SettingRow
          label="Dynamic background"
          description="Turn the animated background on or off without affecting the rest of the site."
          control={(
            <label className={styles.toggle}>
              <input
                type="checkbox"
                checked={settings.dynamicBackgroundEnabled}
                onChange={onToggleBackground}
              />
              <span className={styles.toggleTrack}>
                <span className={styles.toggleThumb} />
              </span>
            </label>
          )}
        />

        <SettingRow
          label="Dark mode"
          description="Reserved for a future dark theme. The switch is visible now so the settings layout is ready."
          control={(
            <label className={`${styles.toggle} ${styles.disabledControl}`}>
              <input type="checkbox" disabled />
              <span className={styles.toggleTrack}>
                <span className={styles.toggleThumb} />
              </span>
            </label>
          )}
        />

        <SettingRow
          label="Language"
          description="Language switching will be added later. The menu is disabled for now."
          control={(
            <select className={styles.select} value="en" disabled aria-label="Language">
              <option value="en">English</option>
            </select>
          )}
        />
      </div>
    </div>
  );
}

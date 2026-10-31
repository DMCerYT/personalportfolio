import { useState } from 'react';
import offImage from '../assets/settings/toggle-off.svg';
import onImage from '../assets/settings/toggle-on.svg';
import styles from '../styles/squashToggle.module.css';

// The supplied Figma poses use a 12px circle and a 16 × 12px stretched thumb.
// Timing is adjustable here: the canvas defines poses, but no exported timeline.
export const TOGGLE_DURATION_MS = 220;

export default function SquashToggle({ checked, onChange, label }) {
  const [transition, setTransition] = useState(0);
  return (
    <button
      type="button"
      role="switch"
      aria-label={label}
      aria-checked={checked}
      className={styles.switch}
      onClick={() => { setTransition(value => value + 1); onChange(); }}
      style={{ '--toggle-duration': `${TOGGLE_DURATION_MS}ms` }}
    >
      <span key={transition} className={`${styles.visual} ${checked ? styles.on : styles.off} ${transition ? styles.animate : ''}`} aria-hidden="true">
        <img className={styles.endpoint} src={checked ? onImage : offImage} alt="" />
        <span className={styles.movingTrack}><span className={styles.trackInset} /><span className={styles.thumb} /></span>
      </span>
    </button>
  );
}

import styles from '../styles/animatedBackground.module.css';

const FULL_DOTS = [
  { top: '10%', left: '8%', size: '10px', delay: '0s', duration: '12s' },
  { top: '18%', left: '28%', size: '16px', delay: '1.5s', duration: '15s' },
  { top: '12%', left: '66%', size: '12px', delay: '0.8s', duration: '13s' },
  { top: '25%', left: '84%', size: '18px', delay: '2.2s', duration: '17s' },
  { top: '36%', left: '14%', size: '14px', delay: '1.1s', duration: '14s' },
  { top: '42%', left: '52%', size: '20px', delay: '2.8s', duration: '18s' },
  { top: '48%', left: '76%', size: '10px', delay: '0.4s', duration: '11s' },
  { top: '58%', left: '32%', size: '16px', delay: '3.1s', duration: '16s' },
  { top: '64%', left: '61%', size: '12px', delay: '1.9s', duration: '12s' },
  { top: '72%', left: '88%', size: '22px', delay: '0.6s', duration: '19s' },
  { top: '80%', left: '16%', size: '18px', delay: '2.5s', duration: '15s' },
  { top: '86%', left: '46%', size: '12px', delay: '1.3s', duration: '12s' },
];

const LITE_DOTS = FULL_DOTS.slice(0, 6);

export default function AnimatedBackground({ performanceMode = false }) {
  const dots = performanceMode ? LITE_DOTS : FULL_DOTS;
  const orbClassName = performanceMode
    ? `${styles.gradientOrb} ${styles.performanceOrb}`
    : styles.gradientOrb;
  const gridGlowClassName = performanceMode
    ? `${styles.gridGlow} ${styles.performanceGridGlow}`
    : styles.gridGlow;
  const dotClassName = performanceMode
    ? `${styles.dot} ${styles.performanceDot}`
    : styles.dot;

  return (
    <div
      className={`${styles.background} ${performanceMode ? styles.performanceBackground : ''}`.trim()}
      aria-hidden="true"
    >
      <div className={`${orbClassName} ${styles.gradientOrbOne}`.trim()} />
      <div className={`${orbClassName} ${styles.gradientOrbTwo}`.trim()} />
      <div className={gridGlowClassName} />
      {dots.map((dot, index) => (
        <span
          key={`${dot.top}-${dot.left}-${index}`}
          className={dotClassName}
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
            animationDelay: dot.delay,
            animationDuration: dot.duration,
          }}
        />
      ))}
    </div>
  );
}

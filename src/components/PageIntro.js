import styles from '../styles/pageLayout.module.css';

export default function PageIntro({
  title,
  description,
  actions,
  aside,
}) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <h1>{title}</h1>
        <p>{description}</p>
        {actions ? <div className={styles.heroActions}>{actions}</div> : null}
      </div>
      {aside ? <div className={styles.heroAside}>{aside}</div> : null}
    </section>
  );
}

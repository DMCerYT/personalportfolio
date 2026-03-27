import styles from '../styles/pageLayout.module.css';

export default function ContentSection({
  title,
  description,
  children,
  className = '',
}) {
  return (
    <section className={`${styles.section} ${className}`.trim()}>
      {title || description ? (
        <div className={styles.sectionHeader}>
          {title ? <h1>{title}</h1> : null}
          {description ? <p>{description}</p> : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}

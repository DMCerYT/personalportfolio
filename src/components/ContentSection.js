import styles from '../styles/pageLayout.module.css';
import UnderConstruction from './UnderConstruction';

export default function ContentSection({
  title,
  description,
  children,
  className = '',
  isPageUnderConstruction = false, // This prop can be used to conditionally render an "Under Construction" message or placeholder content if needed in the future
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
      {isPageUnderConstruction ? (
        <UnderConstruction />
      ) : null}
    </section>
  );
}

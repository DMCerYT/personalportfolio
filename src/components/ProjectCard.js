import styles from '../styles/projectCard.module.css';

export default function ProjectCard({
  title,
  description,
  image,
  href,
  cta = 'Read More',
}) {
  const content = (
    <>
      <div className={styles.glass}>
        <div className={styles.panel}>
          <img className={styles.image} src={image} alt="" />
          <div className={styles.titleCard}>
            <h2>{title}</h2>
          </div>
          <div className={styles.descriptionCard}>
            <p className={styles.desktopDescription}>{description}</p>
            <span className={styles.mobileCta}>{cta}</span>
          </div>
        </div>
      </div>
    </>
  );

  if (!href) {
    return <article className={styles.card}>{content}</article>;
  }

  return (
    <article className={styles.card}>
      <a
        className={styles.link}
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={`${cta}: ${title}`}
      >
        {content}
      </a>
    </article>
  );
}

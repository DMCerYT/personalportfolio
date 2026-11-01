import ResourceLink from './ResourceLink';
import styles from '../styles/projectCard.module.css';

export default function ProjectCard({
  title,
  discipline,
  description,
  image,
  imageAlt = '',
  to,
  href,
  cta = 'View case study',
}) {
  const content = (
    <>
      <div className={styles.glass}>
        <div className={styles.panel}>
          <img className={styles.image} src={image} alt={imageAlt} />
          <div className={styles.titleCard}>
            <div>{discipline ? <p className={styles.discipline}>{discipline}</p> : null}<h2>{title}</h2></div>
          </div>
          <div className={styles.descriptionCard}>
            <p className={styles.desktopDescription}>{description}</p>
            <span className={styles.mobileCta}>{cta}</span>
          </div>
        </div>
      </div>
    </>
  );

  if (!href && !to) {
    return <article className={styles.card}>{content}</article>;
  }

  return (
    <article className={styles.card}>
      <ResourceLink className={styles.link} href={to || href} aria-label={`${cta}: ${title}`}>
        {content}
      </ResourceLink>
    </article>
  );
}

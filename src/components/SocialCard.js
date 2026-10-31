import ResourceLink from './ResourceLink';
import styles from '../styles/socialCard.module.css';

export default function SocialCard({
  name,
  handle,
  image,
  href,
}) {
  const inner = (
    <>
      <img className={styles.icon} src={image} alt="" />
      <div className={styles.copy}>
        <h2>{name}</h2>
        <p>{handle}</p>
      </div>
    </>
  );

  return href ? (
    <ResourceLink className={styles.card} href={href}>
      {inner}
    </ResourceLink>
  ) : (
    <article className={styles.card}>{inner}</article>
  );
}

import detailStyles from '../../styles/projectDetail.module.css';

/** Share image, caption, and placeholder behavior across case-study layouts. */
export default function ProjectArtifact({ title, src, alt, caption }) {
  return (
    <figure className={detailStyles.artifact}>
      <img
        src={src || '/images/case-study-placeholder.svg'}
        alt={src ? alt : `Placeholder for ${title}`}
        loading="lazy"
      />
      {title || caption ? (
        <figcaption>
          {title ? <strong>{title}</strong> : null}
          {caption ? <p>{caption}</p> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}

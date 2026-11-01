import detailStyles from '../../styles/projectDetail.module.css';

/** Share image, caption, and placeholder behavior across case-study layouts. */
export default function ProjectArtifact({ title, src, alt, caption, width, height, fullSize = false }) {
  return (
    <figure className={detailStyles.artifact}>
      <img
        src={src || '/images/case-study-placeholder.svg'}
        alt={src ? alt : `Placeholder for ${title}`}
        width={width}
        height={height}
        loading="lazy"
      />
      {title || caption || (src && fullSize) ? (
        <figcaption>
          {title ? <strong>{title}</strong> : null}
          {caption ? <p>{caption}</p> : null}
          {src && fullSize ? <a className={detailStyles.fullSizeLink} href={src} target="_blank" rel="noreferrer" aria-label={`View ${title || alt} at full size`}>View full-size image ↗</a> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}

import detailStyles from '../styles/projectDetail.module.css';

function ProjectDetailSection({ title, summary, paragraphs = [], images = [] }) {
  const visibleImages = images.slice(0, 3);

  return (
    <details className={detailStyles.detailSection}>
      <summary className={detailStyles.detailSectionSummary}>
        <div>
          <h3>{title}</h3>
          {summary ? <p>{summary}</p> : null}
        </div>
        <span className={detailStyles.detailSectionToggle} aria-hidden="true">
          View details
        </span>
      </summary>

      <div className={detailStyles.detailSectionBody}>
        <div className={detailStyles.detailParagraphs}>
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {visibleImages.length > 0 ? (
          <div className={detailStyles.detailImageGrid}>
            {visibleImages.map((image, index) => (
              <figure key={`${image.alt}-${index}`} className={detailStyles.detailFigure}>
                <img src={image.src} alt={image.alt} className={detailStyles.detailImage} />
                {image.caption ? <figcaption>{image.caption}</figcaption> : null}
              </figure>
            ))}
          </div>
        ) : null}
      </div>
    </details>
  );
}

export default function ProjectDetailSections({ sections = [] }) {
  if (sections.length === 0) {
    return null;
  }

  return (
    <div className={detailStyles.detailSectionList}>
      {sections.map((section) => (
        <ProjectDetailSection
          key={section.title}
          title={section.title}
          summary={section.summary}
          paragraphs={section.paragraphs}
          images={section.images}
        />
      ))}
    </div>
  );
}

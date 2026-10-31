import ProjectArtifact from './ProjectArtifact';
import detailStyles from '../../styles/projectDetail.module.css';

/** Decision strings and image blocks render in order; artifacts form an optional end gallery. */
export default function ProjectDecisions({ decision, artifacts = [] }) {
  // Keep existing single strings and paragraph arrays compatible.
  const blocks = Array.isArray(decision) ? decision : decision ? [decision] : [];

  return (
    <section id="decisions" className={detailStyles.storySection}>
      <p className={detailStyles.eyebrow}>03 / Make</p>
      <h2>Design decisions and rationale</h2>
      {blocks.map((block, index) => {
        if (typeof block === 'string') return <p key={index}>{block}</p>;
        if (block?.type === 'image') {
          return (
            <div className={detailStyles.artifactGrid} key={index}>
              <ProjectArtifact {...block} />
            </div>
          );
        }
        return null;
      })}
      {artifacts.length > 0 ? (
        <div className={detailStyles.artifactGrid}>
          {artifacts.map((artifact, index) => (
            <ProjectArtifact key={`${artifact.title}-${index}`} {...artifact} />
          ))}
        </div>
      ) : null}
    </section>
  );
}

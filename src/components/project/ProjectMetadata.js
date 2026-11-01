import DetailPanel from '../DetailPanel';
import ProjectResourceLinks from './ProjectResourceLinks';
import detailStyles from '../../styles/projectDetail.module.css';

export default function ProjectMetadata({ project }) {
  return (
      <section className={detailStyles.grid}>
        {!project.problem ? <DetailPanel title="Process">
          <ul>
            {project.process.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </DetailPanel> : null}

        <DetailPanel title="Skills">
          <div className={detailStyles.skillWrap}>
            {project.skills.map((skill) => (
              <span key={skill} className={detailStyles.skillChip}>
                {skill}
              </span>
            ))}
          </div>
        </DetailPanel>

        <DetailPanel title="Deliverables" fullWidth>
          <ul>
            {project.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </DetailPanel>

        {project.links.length > 0 ? (
          <DetailPanel title="Links" fullWidth>
            <div className={detailStyles.linkList}>
              <ProjectResourceLinks links={project.links} className={detailStyles.resourceLink} />
            </div>
          </DetailPanel>
        ) : null}
      </section>
  );
}

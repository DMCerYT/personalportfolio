import { Link } from 'react-router-dom';
import ProjectResourceLinks from './ProjectResourceLinks';
import pageStyles from '../../styles/pageLayout.module.css';
import detailStyles from '../../styles/projectDetail.module.css';

export default function ProjectHero({ project }) {
  return (
      <section className={detailStyles.hero}>
        <img className={detailStyles.image} src={project.image} alt={project.imageAlt} />
        <div className={detailStyles.copy}>
          <p className={detailStyles.eyebrow}>Design case study</p>
          <h1>{project.title}</h1>
          <p className={detailStyles.summary}>{project.summary}</p>
          <div className={detailStyles.actions}>
            <Link className={pageStyles.cta} to="/projects">
              Back to Projects
            </Link>
            <ProjectResourceLinks links={project.links} className={pageStyles.secondaryCta} />
          </div>
        </div>
      </section>
  );
}

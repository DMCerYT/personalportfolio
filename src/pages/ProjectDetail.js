import { Link, Navigate, useParams } from 'react-router-dom';
import { getProjectBySlug } from '../data/projects';
import pageStyles from '../styles/pageLayout.module.css';
import detailStyles from '../styles/projectDetail.module.css';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <main className={pageStyles.page}>
      <section className={detailStyles.hero}>
        <img className={detailStyles.image} src={project.image} alt="" />
        <div className={detailStyles.copy}>
          <p className={detailStyles.eyebrow}>Project Breakdown</p>
          <h1>{project.title}</h1>
          <p className={detailStyles.summary}>{project.summary}</p>
          <div className={detailStyles.actions}>
            <Link className={pageStyles.cta} to="/projects">
              Back to Projects
            </Link>
          </div>
        </div>
      </section>

      <section className={detailStyles.grid}>
        <article className={detailStyles.panel}>
          <h2>Process</h2>
          <ul>
            {project.process.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </article>

        <article className={detailStyles.panel}>
          <h2>Skills</h2>
          <div className={detailStyles.skillWrap}>
            {project.skills.map((skill) => (
              <span key={skill} className={detailStyles.skillChip}>
                {skill}
              </span>
            ))}
          </div>
        </article>

        <article className={`${detailStyles.panel} ${detailStyles.fullWidth}`}>
          <h2>Outcomes</h2>
          <ul>
            {project.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}

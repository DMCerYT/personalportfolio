import { Link, Navigate, useParams } from 'react-router-dom';
import DetailPanel from '../components/DetailPanel';
import ProjectDetailSections from '../components/ProjectDetailSections';
import UnderConstruction from '../components/UnderConstruction';
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
        <img className={detailStyles.image} src={project.image} alt={project.imageAlt} />
        <div className={detailStyles.copy}>
          <p className={detailStyles.eyebrow}>Project Breakdown</p>
          <h1>{project.title}</h1>
          <p className={detailStyles.summary}>{project.summary}</p>
          <div className={detailStyles.actions}>
            <Link className={pageStyles.cta} to="/projects">
              Back to Projects
            </Link>
            {project.links.map((link) => {
              const isInternalLink = link.href.startsWith('/');

              return isInternalLink ? (
                <Link key={link.href} className={pageStyles.secondaryCta} to={link.href}>
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  className={pageStyles.secondaryCta}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {project.details.length > 0 ? (
        <DetailPanel title="Project Details" fullWidth>
          <ProjectDetailSections sections={project.details} />
        </DetailPanel>
      ) : null}

      {project.isPageUnderConstruction ? (
        <DetailPanel title="Status" fullWidth>
          <UnderConstruction pageName={project.title} />
        </DetailPanel>
      ) : null}

      <section className={detailStyles.grid}>
        <DetailPanel title="Process">
          <ul>
            {project.process.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </DetailPanel>

        <DetailPanel title="Skills">
          <div className={detailStyles.skillWrap}>
            {project.skills.map((skill) => (
              <span key={skill} className={detailStyles.skillChip}>
                {skill}
              </span>
            ))}
          </div>
        </DetailPanel>

        <DetailPanel title="Outcomes" fullWidth>
          <ul>
            {project.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </DetailPanel>

        {project.links.length > 0 ? (
          <DetailPanel title="Links" fullWidth>
            <div className={detailStyles.linkList}>
              {project.links.map((link) => {
                const isInternalLink = link.href.startsWith('/');

                return isInternalLink ? (
                  <Link
                    key={`${project.slug}-${link.href}`}
                    className={detailStyles.resourceLink}
                    to={link.href}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={`${project.slug}-${link.href}`}
                    className={detailStyles.resourceLink}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </DetailPanel>
        ) : null}
      </section>
    </main>
  );
}

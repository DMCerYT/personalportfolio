import { Link, Navigate, useParams } from 'react-router-dom';
import DetailPanel from '../components/DetailPanel';
import ProjectDetailSections from '../components/ProjectDetailSections';
import UnderConstruction from '../components/UnderConstruction';
import ProjectHero from '../components/project/ProjectHero';
import ProjectCaseStudy from '../components/project/ProjectCaseStudy';
import ProjectMetadata from '../components/project/ProjectMetadata';
import { getProjectBySlug } from '../data/projects';
import pageStyles from '../styles/pageLayout.module.css';
import detailStyles from '../styles/projectDetail.module.css';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const visibleDetails = project?.details?.filter((section) => section.isVisible !== false) ?? [];

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <main className={pageStyles.page}>
      <ProjectHero project={project} />
      {project.problem ? <ProjectCaseStudy project={project} /> : null}

      {visibleDetails.length > 0 ? (
        <DetailPanel title="Project Details" fullWidth>
          <ProjectDetailSections sections={project.details} />
        </DetailPanel>
      ) : null}

      {project.isPageUnderConstruction ? (
        <DetailPanel title="Status" fullWidth>
          <UnderConstruction pageName={project.title} />
        </DetailPanel>
      ) : null}

      <ProjectMetadata project={project} />
      <div className={detailStyles.closing}>
        <h2>Let’s build thoughtful experiences.</h2>
        <Link className={pageStyles.cta} to="/contact">Get in touch</Link>
        <Link className={pageStyles.secondaryCta} to="/projects">Explore more work</Link>
      </div>
    </main>
  );
}

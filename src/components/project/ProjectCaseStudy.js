import ProjectDecisions from './ProjectDecisions';
import detailStyles from '../../styles/projectDetail.module.css';

export default function ProjectCaseStudy({ project }) {
  return (
    <>
          <div className={detailStyles.overview}>
            <p className={detailStyles.eyebrow}>{project.discipline}</p>
            <h2>My contribution</h2>
            <p>{project.contribution}</p>
            {project.context?.length > 0 ? (
              <dl className={detailStyles.contextGrid}>
                {project.context.map(({ label, value }) => (
                  <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
                ))}
              </dl>
            ) : null}
            {project.collaboration ? (
              <div className={detailStyles.collaboration}>
                <h3>How we worked together</h3>
                <p>{project.collaboration}</p>
              </div>
            ) : null}
          </div>
          <nav className={detailStyles.caseNav} aria-label="Case study sections">
            <a href="#problem">01 Problem</a>
            <a href="#process">02 Process</a>
            <a href="#decisions">03 Design decisions</a>
            <a href="#evaluation">04 Evaluation</a>
          </nav>
          <section id="problem" className={detailStyles.storySection}>
            <p className={detailStyles.eyebrow}>01 / Understand</p>
            <h2>The problem</h2><p>{project.problem}</p>
          </section>
          <section id="process" className={detailStyles.storySection}>
            <p className={detailStyles.eyebrow}>02 / Explore</p>
            <h2>Research and process</h2>
            <ol>{project.process.map(step => <li key={step}>{step}</li>)}</ol>
          </section>
          <ProjectDecisions decision={project.decision} artifacts={project.artifacts} />
          <section id="evaluation" className={detailStyles.storySection}>
            <p className={detailStyles.eyebrow}>04 / Reflect</p>
            <h2>Evaluation and limitations</h2><p>{project.evidence}</p>
            {project.reflection ? <><h3>What I learned</h3><p>{project.reflection}</p></> : null}
            <h3>What I would test next</h3><p>{project.nextStep}</p>
          </section>
    </>
  );
}

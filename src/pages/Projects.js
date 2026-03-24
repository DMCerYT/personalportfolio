import ProjectCard from '../components/ProjectCard';
import styles from '../styles/pageLayout.module.css';
import capybara from '../images/cute-cartoon-capybara-cap-sunglasses-600nw-2575177821.jpg.webp';
import logo from '../assets/avatarlogo.jpeg';

export default function Projects() {
  return (
    <main className={styles.page}>
      <section className={styles.sectionHeader}>
        <h1>Projects</h1>
        <p>
          The project cards follow the Figma desktop and mobile component specs: glass
          shell, inner panel, image-first layout, and a mobile CTA treatment.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.cardGrid}>
          <ProjectCard
            title="Current Projects"
            description="The work I am actively building right now, including experiments and portfolio upgrades."
            image={capybara}
            href="https://github.com/"
          />
          <ProjectCard
            title="Previous Projects"
            description="A snapshot of the products, prototypes, and contributions I have already shipped."
            image={logo}
            href="https://github.com/"
          />
        </div>
      </section>
    </main>
  );
}

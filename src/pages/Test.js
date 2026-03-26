import ProjectCard from '../components/ProjectCard';
import styles from '../styles/pageLayout.module.css';
import capybara from '../images/cute-cartoon-capybara-cap-sunglasses-600nw-2575177821.jpg.webp';

// This will serve as like a test page to test out various functions
export default function Test() {
  return (
    <main className={styles.page}>
      <ProjectCard title="Test" description="test" image={capybara} />
    </main>
  );
}

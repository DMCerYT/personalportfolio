
import styles from '../styles/pageLayout.module.css';
import UnderConstruction from '../components/UnderConstruction';

// This will serve as like a test page to test out various functions
export default function Test() {
  return (
    <main className={styles.page}>
      <UnderConstruction />
    </main>
  );
}

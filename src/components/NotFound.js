import { Link } from 'react-router-dom';
import styles from '../styles/notFound.module.css';

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className={styles.homeLink}>Go back to Home</Link>
    </div>
  );
}
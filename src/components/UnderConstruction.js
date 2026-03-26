import catWork from '../assets/temp/underconstruction.mp4';
import styles from '../styles/underConstruction.module.css';

export default function UnderConstruction({
    pageName = 'This Page',
}) {
  return (
    <div className={styles.wrapper}>
      <video className={styles.video} autoPlay loop playsInline muted>
        <source src={catWork} type="video/mp4" />
      </video>
      <p>{pageName} is under construction, but the rest of the portfolio components are live.</p>
    </div>
  );
}


import { siteAssets } from '../data/siteAssets';
import styles from '../styles/underConstruction.module.css';

export default function UnderConstruction({
    pageName = 'This Page',
}) {
  return (
    <div className={styles.wrapper}>
      <video className={styles.video} autoPlay loop playsInline muted>
        <source src={siteAssets.catWorkVideo} type="video/mp4" />
      </video>
      <p>{pageName} is under construction. Please pardon the dust while I am working on this page.</p>
    </div>
  );
}

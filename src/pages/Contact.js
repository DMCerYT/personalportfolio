import SocialCard from '../components/SocialCard';
import styles from '../styles/pageLayout.module.css';
import { socialLinks } from '../data/socialLinks';

export default function Contact() {
  return (
    <main className={styles.page}>
      <section className={styles.sectionHeader}>
        <h1>Contact</h1>
        <p>
          These social link components are styled from the Figma desktop and mobile
          variants and remain simple external links inside the existing page flow.
        </p>
      </section>

      <section className={styles.socialGrid}>
        {socialLinks.map((link) => (
          <SocialCard
            key={`${link.name}-${link.handle}`}
            name={link.name}
            handle={link.handle}
            image={link.image}
            href={link.href}
          />
        ))}
      </section>
    </main>
  );
}

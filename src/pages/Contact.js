import ContentSection from '../components/ContentSection';
import SocialCard from '../components/SocialCard';
import styles from '../styles/pageLayout.module.css';
import { socialLinks } from '../data/socialLinks';

export default function Contact() {
  return (
    <main className={styles.page}>
      <ContentSection
        title="Contact"
        description="These links now share the same bundled asset source as the rest of the app, which keeps deployment-safe image handling consistent."
      >
        <div className={styles.socialGrid}>
          {socialLinks.map((link) => (
            <SocialCard
              key={`${link.name}-${link.handle}`}
              name={link.name}
              handle={link.handle}
              image={link.image}
              href={link.href}
            />
          ))}
        </div>
      </ContentSection>
    </main>
  );
}

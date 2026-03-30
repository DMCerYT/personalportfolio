import ContentSection from '../components/ContentSection';
import SocialCard from '../components/SocialCard';
import styles from '../styles/pageLayout.module.css';
import { socialLinks } from '../data/socialLinks';

export default function Contact() {
  return (
    <main className={styles.page}>
      <ContentSection
        title="Contact"
        description="These are some of the platforms where you can find me. Whether you want to see more of my work, connect professionally, or just say hi, feel free to reach out through any of these mediums. I'm always open to chat!"
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

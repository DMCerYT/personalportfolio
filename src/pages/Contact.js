import SocialCard from '../components/SocialCard';
import styles from '../styles/pageLayout.module.css';
import logo from '../assets/avatarlogo.jpeg';
import capybara from '../images/cute-cartoon-capybara-cap-sunglasses-600nw-2575177821.jpg.webp';

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
        <SocialCard
          name="GitHub"
          handle="@DMCer"
          image={logo}
          href="https://github.com/"
        />
        <SocialCard
          name="LinkedIn"
          handle="@Emmanuel Munoz"
          image={capybara}
          href="https://www.linkedin.com/"
        />
        <SocialCard
          name="Email"
          handle="emunoz31@gatech.edu"
          image={logo}
          href="mailto:emunoz31@gatech.edu"
        />
      </section>
    </main>
  );
}

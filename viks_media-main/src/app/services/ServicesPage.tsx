'use client';

import styles from './ServicePage.module.css';

export default function ServicesPage() {
  return (
    <main className={styles.pageContainer}>
      <section className={styles.headerSection}>
        <div className={styles.headerContentContainer}>
          <span className={styles.tagline}>For Startups & Tech Companies</span>
          <div className={styles.headerTextContent}>
            <h1 className={styles.heading1}>Accelerate Your Growth with VIKS Video + SMM</h1>
            <p className={styles.description1}>
              Strategic, creative, and data-driven video production and social content, tailored for early-stage and tech businesses. We deliver assets proven to convert — fast.
            </p>
          </div>
        </div>
        <div className={styles.headerImageContainer}>
          <img src="/media/services_hero.jpg" alt="Hero" className={styles.headerImage} />
        </div>
      </section>

      {/* Можно вставить другие секции аналогичным образом */}
    </main>
  );
}

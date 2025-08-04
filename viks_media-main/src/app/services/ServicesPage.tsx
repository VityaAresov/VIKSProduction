// src/app/services/ServicesPage.tsx
'use client';

import styles from './ServicePage.module.css';

export default function ServicesPage() {
  return (
    <main className={styles.pageContainer}>
      {/* Hero Section */}
      <section className={styles.headerSection}>
        <div className={styles.headerContentContainer}>
          <span className={styles.tagline}>For Startups & Tech Companies</span>
          <div className={styles.headerTextContent}>
            <h1 className={styles.heading1}>Accelerate Your Growth with VIKS Video + SMM</h1>
            <p className={styles.description1}>
              Strategic, creative, and data-driven video production and social content, tailored for early-stage and innovative tech businesses. We deliver assets proven to convert — fast.
            </p>
          </div>
        </div>
        <div className={styles.headerImageContainer}>
          <img
            src="/media/services_hero.jpg"
            alt="Creative team at work"
            className={styles.headerImage}
          />
        </div>
      </section>

      {/* Packages Section */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesImageContainer}>
          <img
            src="/media/services_video.jpg"
            className={styles.servicesImage}
            alt="SaaS video production montage"
          />
        </div>
        <div className={styles.servicesContentContainer}>
          <h2 className={styles.heading2}>Conversion-Focused Content Packages</h2>
          <p className={styles.description2}>
            We craft content that drives signups, closes deals and scales traction — fast.
          </p>
          <ul className={styles.featuresList}>
            <li className={styles.featureItem}>
              <span className={styles.featureTitle}>Explainer Video (60s)</span><br />
              <span className={styles.featureDescription}>Sharp and story-driven, perfect for VC decks and sales pages.</span>
            </li>
            <li className={styles.featureItem}>
              <span className={styles.featureTitle}>Reels / Vertical Series (up to 5)</span><br />
              <span className={styles.featureDescription}>Bite-sized videos for social, paid ads and awareness.</span>
            </li>
            <li className={styles.featureItem}>
              <span className={styles.featureTitle}>SMM Content Bundle</span><br />
              <span className={styles.featureDescription}>Graphics + copy + clips. Automation-ready social content.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.processSection}>
        <div className={styles.processContentContainer}>
          <h3 className={styles.heading3}>Built for Startup Speed</h3>
          <p className={styles.description3}>
            From kickoff call to delivery in as little as 5–7 days.
          </p>
          <ul className={styles.featuresList}>
            <li className={styles.featureItem}><strong>1. Discovery Call:</strong> align goals, objectives, timeline.</li>
            <li className={styles.featureItem}><strong>2. Script & Shoot:</strong> we produce video + assets.</li>
            <li className={styles.featureItem}><strong>3. Delivery + Results:</strong> ready for upload. Improve demos, reach & growth.</li>
          </ul>
        </div>
        <div className={styles.servicesImageContainer}>
          <img
            src="/media/services_process.jpg"
            className={styles.servicesImage}
            alt="Creative direction and workflow"
          />
        </div>
      </section>

      {/* Why Us Section */}
      <section className={styles.whySection}>
        <div className={styles.whyImageContainer}>
          <img
            src="/media/services_post.jpg"
            className={styles.servicesImage}
            alt="Results and reporting"
          />
        </div>
        <div className={styles.whyContentContainer}>
          <h4 className={styles.heading4}>Why Teams Choose VIKS</h4>
          <p className={styles.description4}>We specialize in actual growth — not just making things pretty.</p>
          <ul className={styles.featuresList}>
            <li className={styles.featureItem}><strong>🚀 7-Day Delivery:</strong> Full edits done fast.</li>
            <li className={styles.featureItem}><strong>🎯 Strategic Scripting:</strong> Built for viewers and outcomes, not fluff.</li>
            <li className={styles.featureItem}><strong>📊 Measurable ROI:</strong> Clients report up to +50% conversion lift.</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaText}>Let’s build your next breakout story. Book a free call now →</h2>
        <a href="https://calendly.com/viksproduction/20min" className={styles.ctaButton}>Book Now</a>
      </section>
    </main>
  );
}

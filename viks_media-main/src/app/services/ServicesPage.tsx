'use client';
import styles from './ServicePage.module.css';
import { useEffect } from 'react';

// Для fade-in анимаций при скролле
function useScrollAnimation() {
  useEffect(() => {
    const revealBlocks = document.querySelectorAll('[data-animate="fadein"]');
    
    const revealOnScroll = () => {
      revealBlocks.forEach((block) => {
        const top = block.getBoundingClientRect().top;
        if (top < window.innerHeight - 80) {
          block.classList.add(styles.fadeIn);
        }
      });
    };
    
    // Вызываем сразу при загрузке
    revealOnScroll();
    
    window.addEventListener('scroll', revealOnScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);
}

// Простая галерея (слайдер-контента)
const sliderContent = [
  {
    img: '/media/slider1.jpg',
    caption: 'AI SaaS Campaign – +42% demo bookings',
  },
  {
    img: '/media/slider2.jpg',
    caption: 'Product Hunt Launch – $1.7m ARR Startup',
  },
  {
    img: '/media/slider3.jpg',
    caption: 'Vertical Series – LinkedIn Virality',
  },
];

function Slider() {
  return (
    <div className={styles.sliderWrap}>
      {sliderContent.map((s, i) => (
        <div className={styles.sliderCard} key={i}>
          <img 
            src={s.img} 
            alt={s.caption} 
            className={styles.sliderImg}
            loading="lazy"
          />
          <span className={styles.sliderCaption}>{s.caption}</span>
        </div>
      ))}
    </div>
  );
}

export default function ServicesPage() {
  useScrollAnimation();

  return (
    <main className={styles.pageContainer}>
      {/* Hero */}
      <section className={styles.heroBlock} data-animate="fadein">
        <div className={styles.heroContent}>
          <div>
            <span className={styles.tagline}>For Startups & Tech Companies</span>
            <h1 className={styles.heading1}>
              Breakout Growth for SaaS & Digital <span className={styles.animatedHighlight}>via Content</span>
            </h1>
            <p className={styles.description1}>
              We build strategic, conversion-focused video, reels and SMM for tech businesses who value traction.
            </p>
            <a 
              href="https://calendly.com/viksproduction/20min" 
              className={styles.ctaButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Free Audit
            </a>
          </div>
        </div>
        <div className={styles.heroVisual}>
          {/* Фоновое циклическое видео - добавил fallback изображение */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className={styles.heroVideo}
            poster="/media/hero-poster.jpg"
          >
            <source src="/media/hero-bg.webm" type="video/webm" />
            <source src="/media/hero-bg.mp4" type="video/mp4" />
            {/* Fallback для старых браузеров */}
          </video>
        </div>
      </section>

      {/* Packages */}
      <section className={styles.servicesSection} data-animate="fadein">
        <h2 className={styles.heading2}>Our Core Packages</h2>
        <div className={styles.packagesWrap}>
          <div className={`${styles.packageCard} ${styles.pop}`}>
            <h3>Launch Kit</h3>
            <ul>
              <li>Explainer Video (60s)</li>
              <li>3 x Short Vertical Reels</li>
              <li>Delivery: 7 days</li>
            </ul>
            <span className={styles.priceTag}>$2,200</span>
          </div>
          <div className={styles.packageCard}>
            <h3>Growth Engine</h3>
            <ul>
              <li>Explainer + 5 Reels</li>
              <li>SMM + Automation Strategy</li>
              <li>Delivery: 2 weeks</li>
            </ul>
            <span className={styles.priceTag}>$4,000</span>
          </div>
          <div className={styles.packageCard}>
            <h3>All-in Scale</h3>
            <ul>
              <li>Video Series (8+)</li>
              <li>Full SMM + Monthly Analytics</li>
              <li>Dedicated Creative Team</li>
            </ul>
            <span className={styles.priceTag}>from $7,500</span>
          </div>
        </div>
      </section>

      {/* Portfolio Slider */}
      <section className={styles.sliderSection} data-animate="fadein">
        <h2 className={styles.heading2}>Case Studies</h2>
        <Slider />
      </section>

      {/* Animated Process */}
      <section className={styles.processSection} data-animate="fadein">
        <h3 className={styles.heading3}>Our Process = Speed + Measurable Results</h3>
        <div className={styles.processSteps}>
          <div className={styles.stepCard}>
            <div className={styles.iconCircle}>1</div>
            <h4>Discovery</h4>
            <p>Audit, goals, calls. You get a fixed quote & timeline.</p>
          </div>
          <div className={styles.stepCard}>
            <div className={styles.iconCircle}>2</div>
            <h4>Shoot & Build</h4>
            <p>Scripts, production, SMM distribution — all in-house. Weekly milestones, WIP feedback.</p>
          </div>
          <div className={styles.stepCard}>
            <div className={styles.iconCircle}>3</div>
            <h4>Launch & Growth</h4>
            <p>Hand-off or managed SMM. Reporting every 2 weeks for you and your investors.</p>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className={styles.whySection} data-animate="fadein">
        <h2 className={styles.heading2}>Why VIKS?</h2>
        <div className={styles.whyGrid}>
          <div>
            <span className={styles.whyEmoji} role="img" aria-label="Fast">⚡️</span>
            <h4>Fast Launch</h4>
            <p>Delivery in 5–10 days, always on your go-to-market schedule.</p>
          </div>
          <div>
            <span className={styles.whyEmoji} role="img" aria-label="Growth">📈</span>
            <h4>ROI Obsessed</h4>
            <p>Everything we do is measured: +20–50% conversions, real demo bookings, MQL pipeline.</p>
          </div>
          <div>
            <span className={styles.whyEmoji} role="img" aria-label="Rocket">🚀</span>
            <h4>AI + Human Creativity</h4>
            <p>AI powered production, human storytelling — speed + premium.</p>
          </div>
        </div>
      </section>

      {/* CTA with Animation */}
      <section className={styles.finalCtaBlock} data-animate="fadein">
        <h2 className={styles.finalCtaText}>
          Ready to scale your traction? <br />
          <span className={styles.animatedHighlight}>Book a free strategy call — let&apos;s win together.</span>
        </h2>
        <a 
          href="https://calendly.com/viksproduction/20min" 
          className={styles.ctaButtonBig}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Now
        </a>
      </section>
    </main>
  );
}

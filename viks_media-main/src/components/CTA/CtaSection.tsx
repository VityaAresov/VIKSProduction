import React from 'react';
import styles from './CtaSection.module.css';

const CtaSection: React.FC = () => {
    const ArrowRightIcon = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M12 5L19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
            />
        </svg>
    );

    return (
        <section className={styles.ctaSection}>
            <div className={styles.container}>
                <div className={styles.ctaBox}>
                    <h2 className={styles.ctaText}>
                        Ready to work with us ?
                    </h2>

                    <a href="/get-started" className={styles.ctaButton}>
                        <span>Get Started</span>
                        <ArrowRightIcon />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;
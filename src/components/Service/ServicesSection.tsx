import React from 'react';
import styles from './ServicesSection.module.css'; // Import CSS Module

// Placeholder for an icon component (replace with actual SVG or library)
const PlayIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
    </svg>
);

// --- Данные для логотипов ---
// !!! ВАЖНО: Замените пути и alt текст на ваши реальные значения !!!
const logoData = [
    { id: 'logo1', src: '/images/service-logo1.png', alt: 'Service 1' },
    { id: 'logo2', src: '/images/service-logo2.png', alt: 'Service 2' },
    { id: 'logo3', src: '/images/service-logo3.png', alt: 'Service 3' },
    { id: 'logo4', src: '/images/service-logo4.png', alt: 'Service 4' },
];
// --------------------------

const ServicesSection: React.FC = () => {
    return (
        <section className={styles.servicesSection}>
            {/* Optional: Background Noise Element */}
            {/* <div className={styles.backgroundNoise}></div> */}

            {/* Top Text Content */}
            <div className={styles.topTextContainer}>
                <div className={styles.headline}>
                    <h2>Provide the best service with out of the box ideas</h2>
                </div>
                <div className={styles.description}>
                    <p>
                        We are a passionate team of digital marketing enthusiasts dedicated to
                        helping businesses succeed in the digital world. With years of experience
                        and a deep understanding of the ever-evolving online landscape, we stay
                        at the forefront of industry trends and technologies.
                    </p>
                </div>
            </div>

            {/* Main Content Blocks */}
            <div className={styles.contentBlocksContainer}>
                {/* Left Block */}
                <div className={styles.leftBlock}>
                    {/* Статистика */}
                    <div className={styles.statsContainer}>
                        <div className={styles.statNumber}>920+</div>
                        <div className={styles.statDescription}>Project finish with superbly</div>
                    </div>
                    {/* Контейнер с логотипами (рендеринг из массива) */}
                    <div className={styles.logoContainer}>
                        {logoData.map((logo) => (
                            // Используем класс .logoWrapper
                            <div key={logo.id} className={styles.logoWrapper}>
                                <img src={logo.src} alt={logo.alt} />
                            </div>
                        ))}
                        {/* Знак плюса */}
                        <div className={styles.logoPlus}>+</div>
                    </div>
                </div>

                {/* Right Block */}
                <div className={styles.rightBlock}>
                    <div className={styles.howWeWorkText}>
                        HOW WE WORK
                    </div>
                </div>
            </div>

            {/* Play Button */}
            <button className={styles.playButton} aria-label="Play video about how we work">
                <div className={styles.playIconWrapper}>
                    <PlayIcon />
                </div>
            </button>

        </section>
    );
};

export default ServicesSection;
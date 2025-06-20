import React from 'react';
import Image from 'next/image';
import styles from './ServicePage.module.css'; // Import CSS Module
import Link from 'next/link'

// Placeholder image paths - replace with your actual image paths
const placeholderHeaderImg = '/images/services/placeholder-header.png';
const placeholderLayoutImg = '/images/services/placeholder-layout.png';
const placeholderCreativeImg = '/images/services/placeholder-creative.png';
const placeholderPostProdImg = '/images/services/placeholder-postprod.png';
// Use the uploaded image for the background if needed, or stick to gradient/color
// const placeholderPricingBg = '/images/services/image_1ab2e3.jpg'; // Example using uploaded

const ServicePage: React.FC = () => {
    return (
        <div className={styles.pageContainer}>
            {/* --- Section 1: Header --- */}
            <section className={styles.headerSection}>
                <div className={styles.headerContentContainer}>
                    <div className={styles.taglineWrapper}>
                        <p className={styles.tagline}>Tagline</p>
                    </div>
                    <div className={styles.headerTextContent}>
                        <h1 className={styles.heading1}>
                            Engage and Inspire your Audience
                        </h1>
                        <p className={styles.description1}>
                            Lorem ipsum dolor sit amet consectetur. Id ullamcorper ullamcorper
                            tortor in magna. Aliquet suscipit tincidunt tortor arcu sed
                            senectus. Proin turpis condimentum pretium sapien nisi. ipsum
                            dolor sit amet consectetur. Id ullamcorper ullamcorper tortor in
                            magna.
                        </p>
                    </div>
                </div>
                <div className={styles.headerImageContainer}>
                    <Image
                        src={placeholderHeaderImg}
                        alt="Engaging audience header visual"
                        width={591}
                        height={388}
                        className={styles.headerImage}
                        priority
                    />
                </div>
            </section>

            {/* --- Section 2: Layout (Video Production) --- */}
            <section className={styles.layoutSection}>
                <div className={styles.layoutImageContainer}>
                    <Image
                        src={placeholderLayoutImg}
                        alt="Video production setup"
                        width={600}
                        height={606}
                        className={styles.layoutImage}
                    />
                </div>
                <div className={styles.layoutContentContainer}>
                    <div className={styles.layoutIntroBlock}>
                        <h2 className={styles.heading2}>Video Production</h2>
                        <p className={styles.description2}>
                            Video content is a powerful tool for capturing attention and
                            conveying messages effectively. Our nationwide video production
                            services range from concept development to final edits and
                            post-production.
                        </p>
                    </div>
                    <p className={styles.keyFeaturesTitle}>Key Features:</p>
                    <div className={styles.featuresList}>
                        <div className={styles.featureItem}>
                            <p className={styles.featureTitle}>• Promotional Videos</p>
                            <p className={styles.featureDescription}>
                                Lorem ipsum dolor sit amet consectetur. Mi sed vestibulum id quis donec sapien.
                            </p>
                        </div>
                        <div className={styles.featureItem}>
                            <p className={styles.featureTitle}>• Explainer Videos</p>
                            <p className={styles.featureDescription}>
                                Lorem ipsum dolor sit amet consectetur. Mi sed vestibulum id quis donec sapien.
                            </p>
                        </div>
                        <div className={styles.featureItem}>
                            <p className={styles.featureTitle}>• Client Testimonials</p>
                            <p className={styles.featureDescription}>
                                Lorem ipsum dolor sit amet consectetur. Mi sed vestibulum id quis donec sapien.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Section 3: Creative Direction --- */}
            <section className={styles.creativeDirectionSection}>
                <div className={styles.creativeContentContainer}>
                    <div className={styles.creativeIntroBlock}>
                        <h2 className={styles.heading3}>Creative Direction</h2>
                        <p className={styles.description3}>
                            We understand that great visuals require more than just technical skill; they need strategic vision. Our creative direction services ensure your photos and videos not only look amazing but also serve your broader marketing objectives.
                        </p>
                    </div>
                    <p className={styles.keyFeaturesTitle}>Key Features:</p>
                    <div className={`${styles.featuresList} ${styles.creativeFeaturesList}`}>
                        <div className={styles.featureItem}>
                            <p className={styles.featureTitle}>• Concept of Development</p>
                            <p className={styles.featureDescription}>
                                Lorem ipsum dolor sit amet consectetur. Mi sed vestibulum id quis donec sapien.
                            </p>
                        </div>
                        <div className={styles.featureItem}>
                            <p className={styles.featureTitle}>• Storyboarding</p>
                            <p className={styles.featureDescription}>
                                Lorem ipsum dolor sit amet consectetur. Mi sed vestibulum id quis donec sapien.
                            </p>
                        </div>
                        <div className={styles.featureItem}>
                            <p className={styles.featureTitle}>• Art Direction</p>
                            <p className={styles.featureDescription}>
                                Lorem ipsum dolor sit amet consectetur. Mi sed vestibulum id quis donec sapien.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.creativeImageContainer}>
                    <Image
                        src={placeholderCreativeImg}
                        alt="Creative direction team working"
                        width={600}
                        height={606}
                        className={styles.creativeImage}
                    />
                </div>
            </section>

            {/* --- Section 4: Post Production --- */}
            <section className={styles.postProductionSection}>
                <div className={styles.postProdImageContainer}>
                    <Image
                        src={placeholderPostProdImg}
                        alt="Post production editing suite"
                        width={600}
                        height={606}
                        className={styles.postProdImage}
                    />
                </div>
                <div className={styles.postProdContentContainer}>
                    <div className={styles.postProdIntroBlock}>
                        <h2 className={styles.heading4}>Post Production</h2>
                        <p className={styles.description4}>
                            Photography and video post-production are essential for businesses to create effective and professional visual content that enhances brand perception and engagement. Polishing the content ensures that your message is clearly delivered.
                        </p>
                    </div>
                    <p className={styles.keyFeaturesTitle}>Key Features:</p>
                    <div className={styles.featuresList}>
                        <div className={styles.featureItem}>
                            <p className={styles.featureTitle}>• Editing</p>
                            <p className={styles.featureDescription}>
                                Lorem ipsum dolor sit amet consectetur. Mi sed vestibulum id quis donec sapien.
                            </p>
                        </div>
                        <div className={styles.featureItem}>
                            <p className={styles.featureTitle}>• Color Grading</p>
                            <p className={styles.featureDescription}>
                                Lorem ipsum dolor sit amet consectetur. Mi sed vestibulum id quis donec sapien.
                            </p>
                        </div>
                        <div className={styles.featureItem}>
                            <p className={styles.featureTitle}>• Sound Design</p>
                            <p className={styles.featureDescription}>
                                Lorem ipsum dolor sit amet consectetur. Mi sed vestibulum id quis donec sapien.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Section 5: Pricing --- */}
            <section
                className={styles.pricingSection}
                // style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${placeholderPricingBg})` }}
            >
                <h2 className={styles.pricingTitle}>
                    Prices for our videography services
                </h2>
                <div className={styles.pricingCardsContainer}>
                    {/* Card 1: Starter */}
                    <div className={styles.priceCard}>
                        <h3 className={styles.planName}>Starter</h3>
                        <p className={styles.planPrice}>$1500</p>
                        <ul className={styles.planFeatures}>
                            <li className={styles.planFeatureItem}>
                                Up to 5 hours of filming
                            </li>
                            <li className={styles.planFeatureItem}>
                                3 edited social media videos (Reels, Shorts, Stories)
                            </li>
                            <li className={styles.planFeatureItem}>
                                Basic Editing (color, cut, captions)
                            </li>
                            <li className={styles.planFeatureItem}>
                                Platform-optimized delivery (9:16 / 1:1)
                            </li>
                        </ul>
                    </div>

                    {/* Card 2: Basic (Highlighted) */}
                    <div className={`${styles.priceCard} ${styles.highlightedCard}`}>
                        <h3 className={styles.planName}>Basic</h3>
                        <p className={styles.planPrice}>$2750</p>
                        <ul className={styles.planFeatures}>
                            <li className={styles.planFeatureItem}>
                                Up to 15 hours of filming
                            </li>
                            <li className={styles.planFeatureItem}>
                                6 fully edited videos in various formats
                            </li>
                            <li className={styles.planFeatureItem}>
                                Concept support & storytelling guidance
                            </li>
                            <li className={styles.planFeatureItem}>
                                Branded visuals, social + ad-ready exports
                            </li>
                        </ul>
                    </div>

                    {/* Card 3: Pro */}
                    <div className={styles.priceCard}>
                        <h3 className={styles.planName}>Pro</h3>
                        <p className={styles.planPrice}>$4500</p>
                        <ul className={styles.planFeatures}>
                            <li className={styles.planFeatureItem}>
                                Up to 30 hours of production
                            </li>
                            <li className={styles.planFeatureItem}>
                                10+ high-production videos
                            </li>
                            <li className={styles.planFeatureItem}>
                                Motion graphics subtitles, advanced editing
                            </li>
                            <li className={styles.planFeatureItem}>
                                Visual direction, brand pack integration, full usage right
                            </li>
                        </ul>
                    </div>

                    {/* Card 4: A-la Carte */}
                    <div className={styles.priceCard}>
                        <h3 className={styles.planName}>A-la Carte</h3>
                        <p className={styles.planPrice}></p> {/* Kept empty as per image */}
                        <ul className={styles.planFeatures}>
                            <li className={styles.planFeatureItem}>
                                Any number of hours (but minimum 2 hours)
                            </li>
                            <li className={styles.planFeatureItem}>
                                Any number of edited videos
                            </li>
                            <li className={styles.planFeatureItem}>
                                Any level of post-production
                            </li>
                            <li className={styles.planFeatureItem}>
                                Optimization for any platform
                            </li>
                        </ul>
                    </div>
                </div>

                {/* --- NEW: Ready to Work Section (Structure remains same) --- */}
                <div className={styles.ctaContainer}>
                    <p className={styles.ctaText}>
                        Ready to work with us?
                    </p>
                    {/* Removed inner Frame 8 div from Figma spec for simplicity */}
                    <Link href="/contact-us" className={styles.ctaButton}>
                        Get Started
                    </Link>
                </div>
                {/* --- End NEW Section --- */}

            </section>

        </div>
    );
};

export default ServicePage;

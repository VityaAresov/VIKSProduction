"use client"; // <--- ADD THIS DIRECTIVE AT THE VERY TOP

import React, { useState } from 'react';
import styles from './AgencyPage.module.css'; // Your CSS Module

// --- Icon Imports ---
import {
    FaCheckCircle,
    FaHeadset,
    FaClock,
    FaLinkedinIn,
    FaTwitter,
    FaDribbble,
    FaArrowLeft,
    FaArrowRight // Ensure FaArrowRight is imported
} from 'react-icons/fa';

// --- SWIPER Imports ---
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type SwiperCore from 'swiper';

// --- SWIPER Base CSS ---
import 'swiper/css';

// --- Placeholder Images ---
const placeholderImage1 = '/images/about-us/placeholder-image-1.png';
const placeholderImage2 = '/images/about-us/placeholder-image-2.png';
const teamMember1 = '/images//about-us/member-1.png';
const teamMember2 = '/images/about-us/member-2.png';
const teamMember3 = '/images/about-us/member-3.png';
const teamMember4 = '/images/about-us/member-4.png';

// --- Team Member Data Interface ---
interface TeamMember {
    id: number;
    name: string;
    title: string;
    description: string;
    image: string;
    socials: {
        linkedin?: string;
        twitter?: string;
        dribbble?: string;
        instagram?: string;
    };
}

// --- Team Member Data ---
const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Viktor",
        title: "CEO & Founder",
        description: "Founder of VIKS  — a videographer and creative entrepreneur crafting modern marketing solutions for startups and businesses.",
        image: teamMember1,
        socials: { linkedin: "https://www.linkedin.com/in/viktor-soloviov/", instagram: "https://www.instagram.com/soloviov_vitya/", dribbble: "#" }
    },
    {
        id: 2,
        name: "Valeriy",
        title: "Marketing Team Leader",
        description: "A results-driven strategist who leads teams and crafts impactful marketing campaigns.",
        image: teamMember2,
        socials: { linkedin: "https://www.linkedin.com/in/valerii-dromov-a06945286/", twitter: "#", dribbble: "#" }
    },
    {
        id: 3,
        name: "Valeriy",
        title: "CMO",
        description: "Crafts narratives that inspire, motivate, and connect with audiences.",
        image: teamMember3,
        socials: { linkedin: "#", twitter: "#", dribbble: "#" }
    },
    {
        id: 4,
        name: "Another Member",
        title: "Lead Designer",
        description: "Focuses on creating compelling visual narratives and brand aesthetics.",
        image: teamMember4,
        socials: { linkedin: "#", twitter: "#", dribbble: "#" }
    },
    {
        id: 5,
        name: "Team Member 5",
        title: "Strategist",
        description: "Develops strategic approaches to content and audience engagement.",
        image: placeholderImage1, // Using placeholder for missing image
        socials: { linkedin: "#", twitter: "#", dribbble: "#" }
    },
];


const Page: React.FC = () => {
    // --- Swiper State ---
    const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);

    // --- Swiper Handlers ---
    const handlePrev = () => {
        swiperInstance?.slidePrev();
    };

    const handleNext = () => {
        swiperInstance?.slideNext();
    };

    return (
        <div className={styles.pageContainer}>

            {/* --- Header Section --- */}
            <section className={styles.headerSection}>
                <div className={styles.headerImageContainer}>
                    {/* WARNING: Consider replacing <img> with Next.js <Image> for optimization */}
                    <img src={placeholderImage1} alt="Agency team working" className={styles.placeholderImage1} />
                </div>
                <div className={styles.headerContentContainer}>
                    <div className={styles.sectionTitle}>
                        <div className={styles.taglineWrapper}>
                            <span className={styles.tagline1}>Tagline</span>
                        </div>
                        <div className={styles.headerTextContent}>
                            <h1 className={styles.heading1}>Our Media Mission</h1>
                            <p className={styles.description1}>
                                Empowering communities through insightful media that informs, engages,
                                and inspires positive change.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Layout Section ('Who we are') --- */}
            <section className={styles.layoutSection}>
                <div className={styles.layoutContainer}>
                    <div className={styles.layoutContent}>
                        <div className={styles.sectionTitle}>
                            <div className={styles.taglineWrapper}>
                                <span className={styles.tagline2}>Our history</span>
                            </div>
                            <div className={styles.layoutTextContent}>
                                <h2 className={styles.heading2}>Who we are?</h2>
                                {/* ***** FIXED ESLINT ERRORS BELOW ***** */}
                                <p className={styles.text2}>
                                    VIKS Production is more than just production. It&apos;s a studio where your brand&apos;s
                                    visual language is created. We begin with social media management and
                                    understanding how people interact with content. Over five years of working with
                                    diverse companies, our founder noticed one common detail—businesses lack
                                    freshness.
                                    <br/><br/>
                                    Social media has become the mirror of the brand. It&apos;s the first point of contact,
                                    shaping how you&apos;re perceived. That&apos;s why we built a team that doesn&apos;t just &quot;make
                                    videos,&quot; but helps businesses look modern, confident, and vibrant.
                                    <br/><br/>
                                    VIKS Production is all about style, influence, and growth. We merge creativity with
                                    strategy to ensure your digital presence is powerful and recognizable.
                                </p>
                                {/* ***** END OF FIXES ***** */}
                            </div>
                        </div>
                    </div>
                    <div className={styles.layoutImageContainer}>
                        {/* WARNING: Consider replacing <img> with Next.js <Image> for optimization */}
                        <img src={placeholderImage2} alt="Filming setup" className={styles.placeholderImage2} />
                    </div>
                </div>
            </section>

            {/* --- Info Section (Quality, Care, Speed) --- */}
            <section className={styles.infoSection}>
                <div className={styles.infoContentContainer}>
                    <div className={styles.infoRow}>
                        {/* Column 1: Quality */}
                        <div className={styles.infoColumn}>
                            <div className={styles.infoItem}>
                                <div className={styles.infoIconWrapper}>
                                    <FaCheckCircle className={styles.infoIcon} />
                                </div>
                                <div className={styles.infoTextWrapper}>
                                    <h3 className={styles.infoHeading}>The Quality Of Our Work</h3>
                                    <p className={styles.infoText}>
                                        We offer some of the highest quality services, because our team employs only highly qualified workers.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Column 2: Customer Care */}
                        <div className={styles.infoColumn}>
                            <div className={styles.infoItem}>
                                <div className={styles.infoIconWrapper}>
                                    <FaHeadset className={styles.infoIcon} />
                                </div>
                                <div className={styles.infoTextWrapper}>
                                    <h3 className={styles.infoHeading}>Customer Care</h3>
                                    <p className={styles.infoText}>
                                        We always strive tirelessly to improve our services to maximize the satisfaction of our clientele.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Column 3: Speed */}
                        <div className={styles.infoColumn}>
                            <div className={styles.infoItem}>
                                <div className={styles.infoIconWrapper}>
                                    <FaClock className={styles.infoIcon} />
                                </div>
                                <div className={styles.infoTextWrapper}>
                                    <h3 className={styles.infoHeading}>Speed Of Service Provision</h3>
                                    <p className={styles.infoText}>
                                        We consistently strive to provide our customers with swift and efficient service, ensuring their needs are promptly addressed and met.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Team Slider Section (Now using Swiper) --- */}
            <section className={styles.teamSection}>
                {/* Section Title Area */}
                <div className={styles.teamHeader}>
                    <div className={styles.teamHeaderText}>
                        <div className={styles.teamTaglineWrapper}>
                            <span className={styles.teamTagline}>Meet</span>
                        </div>
                        <h3 className={styles.teamHeading}>Our Team</h3>
                    </div>
                    <p className={styles.teamDescription}>
                        We are a team of dedicated professionals united by a common goal to create stories that change lives. Our mission is to inspire and motivate people through carefully crafted narratives, each filled with passion, experience and creative energy.
                    </p>
                </div>

                {/* Swiper Slider Area */}
                <div className={styles.teamSliderContainer}>
                    <Swiper
                        modules={[Navigation]}
                        onSwiper={setSwiperInstance}
                        slidesPerView={'auto'}
                        spaceBetween={16} // Adjust space if needed
                        loop={true}
                        grabCursor={true}
                        centeredSlides={true} // Center the active slide
                        breakpoints={{
                            600: { spaceBetween: 16 },
                            960: { spaceBetween: 24 },
                            1280: { spaceBetween: 32 }
                        }}
                        className={styles.teamSwiperInstance}
                    >
                        {teamMembers.map((member) => (
                            <SwiperSlide key={member.id} className={styles.teamSwiperSlide}>
                                <div className={styles.teamCard}> {/* Apply scaling/opacity here */}
                                    {/* WARNING: Consider replacing <img> with Next.js <Image> for optimization */}
                                    <img src={member.image} alt={member.name} className={styles.teamCardImage} loading="lazy"/>
                                    <div className={styles.teamCardContent}>
                                        <div className={styles.teamCardInfo}>
                                            <div className={styles.teamCardTitleWrapper}>
                                                <h4 className={styles.teamCardName}>{member.name}</h4>
                                                <p className={styles.teamCardJobTitle}>{member.title}</p>
                                            </div>
                                            <div className={styles.teamCardSocialIcons}>
                                                {member.socials.linkedin && <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>}
                                                {member.socials.twitter && <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>}
                                                {member.socials.dribbble && <a href={member.socials.dribbble} target="_blank" rel="noopener noreferrer"><FaDribbble /></a>}
                                            </div>
                                        </div>
                                        <p className={styles.teamCardDescriptionText}>
                                            {member.description}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Custom Navigation Buttons */}
                {teamMembers.length > 1 && (
                    <div className={styles.teamNavButtons}>
                        <button
                            className={`${styles.teamNavButton} ${styles.teamNavButtonPrev}`}
                            aria-label="Previous member"
                            onClick={handlePrev}
                        >
                            <FaArrowLeft />
                        </button>
                        <button
                            className={`${styles.teamNavButton} ${styles.teamNavButtonNext}`}
                            aria-label="Next member"
                            onClick={handleNext}
                        >
                            <FaArrowRight />
                        </button>
                    </div>
                )}
            </section>
            {/* --- End Team Section --- */}


            {/* --- NEW CTA Section --- */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaContainer}> {/* Corresponds to Frame 427320835 */}
                    {/* Inner wrapper for flex layout - corresponds to Frame 427321513 */}
                    <div className={styles.ctaContentWrapper}>
                        <h2 className={styles.ctaHeading}>
                            Ready to work with us ?
                        </h2>
                        {/* Corresponds to Frame 427320691 */}
                        <a href="#" className={styles.ctaButton}>
                            {/* Corresponds to Frame 8 */}
                            <span className={styles.ctaButtonText}>Get Started</span>
                            <FaArrowRight className={styles.ctaButtonIcon} /> {/* Icon */}
                        </a>
                    </div>
                </div>
            </section>
            {/* --- End NEW CTA Section --- */}


        </div>
    );
};

export default Page;

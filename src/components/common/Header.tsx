// Header.tsx
'use client';

import React, { useState, useEffect } from 'react'; // Import useEffect
import Link from 'next/link';
import Image from 'next/image';

import AnimatedMenuIcon from './AnimatedMenuIcon'; // Your animated icon component
import MobileMenu from './MobileMenu'; // The mobile menu component
import styles from './Header.module.css'; // Your CSS module

const Header: React.FC = () => {
    // State to track if the mobile menu is open or closed
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Function to toggle the mobile menu state
    const toggleMobileMenu = () => {
        // Use functional update for safe state transitions based on previous state
        setIsMobileMenuOpen(prev => !prev);
    };

    // Effect to handle body scroll lock when the mobile menu state changes
    useEffect(() => {
        if (isMobileMenuOpen) {
            // Prevent scrolling on the body when menu is open
            document.body.style.overflow = 'hidden';
        } else {
            // Allow scrolling on the body when menu is closed
            document.body.style.overflow = '';
        }

        // Cleanup function: This runs when the component unmounts
        // or before the effect runs again. Ensures scroll is re-enabled.
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]); // Dependency array: Effect runs only when isMobileMenuOpen changes

    return (
        <header className={styles.header}>
            {/* Left Section: Logo and Desktop Navigation */}
            <div className={styles.leftSection}>
                {/* Logo */}
                <div className={styles.logoWrapper}>
                    <Link href="/">
                        <Image
                            className={styles.logoImage}
                            src="/images/logo.png" // Ensure this path is correct
                            alt="VIKS Logo"
                            width={72}
                            height={50}
                            priority // Prioritize loading the logo
                        />
                    </Link>
                </div>

                {/* Desktop Navigation (Hidden on mobile via CSS) */}
                <nav className={styles.nav}>
                    <Link href="/" className={styles.navItem}>
                        <span className={styles.navItemText}>Home</span>
                    </Link>
                    <Link href="/agency" className={styles.navItem}>
                        <span className={styles.navItemText}>Agency</span>
                    </Link>
                    <Link href="/services" className={styles.navItem}>
                        <span className={styles.navItemText}>Services</span>
                    </Link>
                    <Link href="/" className={styles.navItem}>
                        <span className={styles.navItemText}>News</span>
                    </Link>
                    <Link href="/cases" className={styles.navItem}>
                        <span className={styles.navItemText}>Cases</span>
                    </Link>
                </nav>
            </div>

            {/* Right Section: Desktop "Contact Us" Button (Hidden on mobile via CSS) */}
            <div className={styles.getStartedWrapper}>
                <Link href="/contact-us" className={styles.getStartedLink}>
                    <span className={styles.getStartedText}>Contact Us</span>
                </Link>
            </div>

            {/* Mobile Menu Toggle Button (Visible only on mobile via CSS) */}
            <div className={styles.mobileNavToggle}>
                <button
                    type="button"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu" // Accessibility label
                    aria-expanded={isMobileMenuOpen} // Accessibility state
                    // Optional: Link button to menu for screen readers
                    // aria-controls="mobile-menu-container"
                >
                    {/* Animated Icon: Pass the open state for animation */}
                    <AnimatedMenuIcon isOpen={isMobileMenuOpen} />
                </button>
            </div>

            {/* ---- Mobile Menu Component ---- */}
            {/* Render MobileMenu UNCONDITIONALLY so CSS transitions work */}
            {/* Pass the state and toggle function as props */}
            <MobileMenu
                // Optional: Add an ID for aria-controls
                // id="mobile-menu-container"
                toggleMenu={toggleMobileMenu}
                isOpen={isMobileMenuOpen}
            />
        </header>
    );
};

export default Header;
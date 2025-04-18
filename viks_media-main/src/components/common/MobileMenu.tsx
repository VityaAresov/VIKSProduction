// MobileMenu.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css'; // Reuse styles or create MobileMenu.module.css

// 1. UPDATE THIS INTERFACE
interface MobileMenuProps {
    toggleMenu: () => void; // Function to close the menu
    isOpen: boolean;       // <-- ADD THIS LINE (Make sure it expects a boolean)
    // id?: string; // Optional: if you added an ID for aria-controls
}

// 2. Ensure you are destructuring 'isOpen' here
const MobileMenu: React.FC<MobileMenuProps> = ({ toggleMenu, isOpen /*, id */ }) => {
    // Function to handle link clicks - close the menu
    const handleLinkClick = () => {
        toggleMenu();
    };

    // Combine base class with the open class conditionally
    // This now correctly uses the 'isOpen' prop passed from Header.tsx
    const containerClasses = `${styles.mobileMenuContainer} ${
        isOpen ? styles.mobileMenuContainerOpen : ''
    }`;

    return (
        // Apply the dynamic classes to the main container
        <div className={containerClasses} /* id={id} */>
            <nav className={styles.mobileNav}>
                <Link href="/" className={styles.mobileNavItem} onClick={handleLinkClick}>
                    Home
                </Link>
                <Link href="/agency" className={styles.mobileNavItem} onClick={handleLinkClick}>
                    Agency
                </Link>
                <Link href="/services" className={styles.mobileNavItem} onClick={handleLinkClick}>
                    Services
                </Link>
                <Link href="/" className={styles.mobileNavItem} onClick={handleLinkClick}>
                    News
                </Link>
                <Link href="/cases" className={styles.mobileNavItem} onClick={handleLinkClick}>
                    Cases
                </Link>
            </nav>
            {/* Add the "Contact Us" button separately */}
            <div className={styles.mobileGetStartedWrapper}>
                <Link href="/contact-us" className={styles.mobileGetStartedLink} onClick={handleLinkClick}>
                    <span className={styles.getStartedText}>Contact Us</span>
                </Link>
            </div>
        </div>
    );
};

export default MobileMenu;
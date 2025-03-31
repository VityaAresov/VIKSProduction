'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { ChevronDownIcon, Bars3Icon } from '@heroicons/react/24/solid';
import styles from './Header.module.css'; 

const Header: React.FC = () => {
    
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const servicesDropdownRef = useRef<HTMLDivElement>(null);

    
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
                setIsServicesOpen(false);
            }
            
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [servicesDropdownRef]);

    
    const servicesMenuItems = [
        { name: 'SMM', href: '/services/smm' },
        { name: 'Marketing', href: '/services/marketing' },
        { name: 'Video Production', href: '/services/video-production' },
        { name: 'Content Creation', href: '/services/content-creation' },
        { name: 'Email Marketing', href: '/services/email-marketing' },
    ];

    
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        
    };

    return (
        <header className={styles.header}>
            {}
            <div className={styles.leftSection}>
                <div className={styles.logoWrapper}>
                    <Link href="/">
                        <Image
                            className={styles.logoImage}
                            src="/images/logo.png"
                            alt="VIKS Logo"
                            width={72}
                            height={50}
                            priority
                        />
                    </Link>
                </div>

                {}
                <nav className={styles.nav}>
                    {}
                    <div className={styles.servicesWrapper} ref={servicesDropdownRef}>
                        <button
                            type="button"
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                            className={styles.navItem} 
                            aria-haspopup="true"
                            aria-expanded={isServicesOpen}
                        >
                            <span className={styles.navItemText}>Services</span>
                            {}
                            <ChevronDownIcon
                                className={`${styles.chevronDown} ${isServicesOpen ? styles.chevronDownRotated : ''}`}
                                aria-hidden="true"
                            />
                        </button>
                        {isServicesOpen && (
                            <div className={styles.dropdownMenu}>
                                {servicesMenuItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={styles.dropdownItem}
                                        onClick={() => setIsServicesOpen(false)} 
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {}
                    <Link href="/agency" className={styles.navItem}>
                        <span className={styles.navItemText}>Agency</span>
                        {}
                    </Link>

                    {}
                    <Link href="/case-study" className={styles.navItem}>
                        <span className={styles.navItemText}>Case study</span>
                        {}
                    </Link>

                    {}
                    <Link href="/blog" className={styles.navItem}>
                        <span className={styles.navItemText}>Blog</span>
                    </Link>

                    {}
                    <Link href="/contact" className={styles.navItem}>
                        <span className={styles.navItemText}>Contact</span>
                    </Link>
                </nav>
            </div>

            {}
            <div className={styles.getStartedWrapper}>
                <Link href="/get-started" className={styles.getStartedLink}>
                    <span className={styles.getStartedText}>Get started</span>
                </Link>
            </div>

            {}
            <div className={styles.mobileNavToggle}>
                <button
                    type="button"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isMobileMenuOpen}
                >
                    {}
                    <Bars3Icon className={styles.mobileMenuIcon} />
                </button>
            </div>

            {}
            {}

        </header>
    );
};

export default Header;
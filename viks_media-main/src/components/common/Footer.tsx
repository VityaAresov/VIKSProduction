import React from 'react';

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

import styles from './Footer.module.css'; 


interface FooterLinkItem {
    id: string;
    href: string;
    text: string;
}

interface SocialLinkItem {
    id: string;
    href: string;
    label: string; 
    icon: React.ElementType; 
}

interface ContactDetailItem {
    id: string;
    href?: string; 
    text: string;
    icon: React.ElementType;
}


const logoUrl = '/images/logo.png'; 
const description = 'We offers a comprehensive suite of digital marketing services that cover all aspects of our online presence. From SEO and social media marketing to content creation and PPC advertising, they have the expertise and resources to handle our diverse marketing needs.';

const socialLinksData: SocialLinkItem[] = [
    { id: 'fb', href: 'https://www.facebook.com/profile.php?id=61571812801984&mibextid=wwXIfr&mibextid=wwXIfr', label: 'Facebook', icon: FaFacebookF },
    { id: 'tw', href: '#', label: 'Twitter', icon: FaTwitter },
    { id: 'li', href: 'https://www.linkedin.com/company/viks-production-ai/', label: 'LinkedIn', icon: FaLinkedinIn },
    { id: 'in', href: 'https://www.instagram.com/viks_production/', label: 'Instagram', icon: FaInstagram },
];

const navigationLinks: FooterLinkItem[] = [
    { id: 'nav1', href: '/services', text: 'Service' },
    { id: 'nav2', href: '/agency', text: 'Agency' },
    { id: 'nav3', href: '/case-study', text: 'Case Study' },
    { id: 'nav4', href: '/resources', text: 'Resource' },
    { id: 'nav5', href: '/contact', text: 'Contact' },
];

const licenceLinks: FooterLinkItem[] = [
    { id: 'lic1', href: '/privacy-policy', text: 'Privacy Policy' },
    { id: 'lic2', href: '/copyright', text: 'Copyright' },
    
];

const contactDetails: ContactDetailItem[] = [
    { id: 'con1', href: 'tel:+19547745305', text: '(954) 774-5305', icon: FiPhone },
    { id: 'con2', href: 'mailto:info@viksproduction.com', text: 'info@viksproduction.com', icon: FiMail },
    { id: 'con3', text: 'San Jose, California', icon: FiMapPin },
];



const Footer: React.FC = () => {
    return (
        <footer className={styles.footerSection}>
            <div className={styles.container}>
                <div className={styles.footerContent}>

                    
                    <div className={styles.leftColumn}>
                        <img src={logoUrl} alt="Company Logo" className={styles.logo} />
                        <p className={styles.description}>{description}</p>
                        <div className={styles.socialLinks}>
                            {socialLinksData.map((link) => (
                                <a
                                    key={link.id}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.label}
                                    className={styles.socialLink}
                                >
                                    <link.icon /> 
                                </a>
                            ))}
                        </div>
                    </div>

                    
                    <div className={styles.rightColumns}>

                        
                        <div className={styles.linkList}>
                            <h4 className={styles.listTitle}>Navigation</h4>
                            <ul>
                                {navigationLinks.map((link) => (
                                    <li key={link.id}>
                                        <a href={link.href} className={styles.footerLink}>{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        
                        <div className={styles.linkList}>
                            <h4 className={styles.listTitle}>Licence</h4>
                            <ul>
                                {licenceLinks.map((link) => (
                                    <li key={link.id}>
                                        <a href={link.href} className={styles.footerLink}>{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        
                        <div className={styles.contactList}>
                            <h4 className={styles.listTitle}>Contact</h4>
                            <ul>
                                {contactDetails.map((detail) => (
                                    <li key={detail.id} className={styles.contactItem}>
                                        <detail.icon className={styles.contactIcon} />
                                        {detail.href ? (
                                            <a href={detail.href} className={styles.contactLink}>{detail.text}</a>
                                        ) : (
                                            <span>{detail.text}</span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>&copy; {new Date().getFullYear()} VIKS Production LLC. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

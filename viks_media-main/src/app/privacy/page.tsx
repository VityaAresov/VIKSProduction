// app/privacy/page.tsx
import React from 'react';
import styles from './privacy.module.css'; // Import the CSS Module for privacy styles

const PrivacyPage: React.FC = () => {
    const effectiveDate = "04.04.2025"; // From the provided text

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Privacy Policy for VIKS Production</h1>
            <p className={styles.text}>Effective Date: {effectiveDate}</p>

            <h2 className={styles.sectionTitle}>1. Introduction</h2>
            <p className={styles.text}>
                Welcome to VIKS Production (“we”, “us”, “our”). We are committed to protecting your privacy and ensuring that your personal information is handled safely and responsibly. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website. By using our site, you agree to the collection and use of your information in accordance with this policy.
            </p>

            <h2 className={styles.sectionTitle}>2. Information We Collect</h2>
            <p className={styles.text}><strong>a. Personal Information Provided by You:</strong></p>
            <ul className={`${styles.list} ${styles.text}`}>
                <li className={styles.listItem}>
                    When you complete our contact form, we collect your name, surname, business email address, phone number, and any message you provide.
                </li>
                <li className={styles.listItem}>
                    If you subscribe for discount offers, we collect your email address.
                </li>
            </ul>

            <p className={styles.text}><strong>b. Automatically Collected Information:</strong></p>
            <ul className={`${styles.list} ${styles.text}`}>
                <li className={styles.listItem}>
                    We use tools such as Google Analytics, Facebook Pixel, and LinkedIn Insight Tag tracking to automatically collect technical data (e.g., your IP address, browser type, and usage data).
                </li>
                <li className={styles.listItem}>
                    This information is used solely for analytics and marketing purposes.
                </li>
            </ul>

            <h2 className={styles.sectionTitle}>3. Use of Your Information</h2>
            <p className={styles.text}>We use the collected information to:</p>
            <ul className={`${styles.list} ${styles.text}`}>
                <li className={styles.listItem}>
                    Respond to your inquiries and provide customer support.
                </li>
                <li className={styles.listItem}>
                    Analyze and improve our website and services.
                </li>
                <li className={styles.listItem}>
                    Conduct marketing and promotional activities, including sending you marketing emails (if you have consented).
                </li>
            </ul>

            <h2 className={styles.sectionTitle}>4. Data Retention</h2>
            <p className={styles.text}>
                Your personal data is retained for a period of one (1) year from the date of collection, unless a longer period is required or permitted by law.
            </p>

            <h2 className={styles.sectionTitle}>5. Data Security</h2>
            <p className={styles.text}>
                We implement access restrictions and other security measures to protect your personal information from unauthorized access, alteration, or disclosure. While we strive to ensure the security of your data, please note that no electronic storage or transmission method is completely secure.
            </p>

            <h2 className={styles.sectionTitle}>6. Your Rights</h2>
            <p className={styles.text}>You have the right to:</p>
            <ul className={`${styles.list} ${styles.text}`}>
                <li className={styles.listItem}>
                    <strong>Unsubscribe:</strong> Opt out of receiving marketing emails at any time.
                </li>
                <li className={styles.listItem}>
                    <strong>Access, Modify, or Delete:</strong> Request access to, correction of, or deletion of your personal information.
                </li>
            </ul>
            <p className={styles.text}>
                To exercise these rights, please contact us using the details provided on our website.
            </p>

            <h2 className={styles.sectionTitle}>7. Cookies and Tracking Technologies</h2>
            <p className={styles.text}>
                Our website uses cookies and similar tracking technologies to facilitate analytics and marketing efforts. These cookies are managed via your browser settings. For further information, please review our Cookies Policy.
            </p>

            <h2 className={styles.sectionTitle}>8. Changes to This Privacy Policy</h2>
            <p className={styles.text}>
                We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page, and the updated effective date will be indicated.
            </p>

            <h2 className={styles.sectionTitle}>9. Contact Us</h2>
            <p className={styles.text}>
                If you have any questions or concerns regarding this Privacy Policy or our data practices, please contact us using the contact details provided on our website.
            </p>

            <h2 className={styles.sectionTitle}>10. Jurisdiction</h2>
            <p className={styles.text}>
                Our company is registered in Florida. By using our website, you agree that any disputes arising from this Privacy Policy shall be governed by the laws of the State of Florida.
            </p>
        </div>
    );
};

export default PrivacyPage;
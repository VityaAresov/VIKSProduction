// app/terms/page.tsx
import React from 'react';
import styles from './terms.module.css'; // Import the CSS Module

const Page: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Terms and Conditions for <br /> VIKS Production</h1>
            <p className={styles.text}>Effective Date: 04.04.2025</p>

            <h2 className={styles.sectionTitle}>1. Introduction</h2>
            <p className={styles.text}>
                These Terms and Conditions (“Terms”) govern your access to and use of the website and services provided by VIKS Production (“Company,” “we,” “us,” “our”). By accessing or using our website, you agree to be bound by these Terms. If you do not agree, please do not use our website.
            </p>

            <h2 className={styles.sectionTitle}>2. Services Provided</h2>
            <p className={styles.text}>
                VIKS Production offers a range of digital services, including social media marketing (SMM), search engine optimization (SEO), marketing, design, website creation, creation of AI avatars, and video shooting. The website is used to showcase our portfolio and provide detailed information about our services.
            </p>

            <h2 className={styles.sectionTitle}>3. User Obligations and Conduct</h2>
            <p className={styles.text}>By using our website, you agree to:</p>
            <ul className={`${styles.list} ${styles.text}`}>
                <li className={styles.listItem}>Use the website only for lawful purposes and in accordance with these Terms.</li>
                <li className={styles.listItem}>Refrain from any activity that could damage, disable, or impair the functioning of the website.</li>
                <li className={styles.listItem}>Not download, copy, reproduce, modify, distribute, or otherwise use any materials (including text, images, videos, designs, etc.) from our website in any form, for any commercial or non-commercial purpose, without our explicit prior written consent.</li>
            </ul>

            <h2 className={styles.sectionTitle}>4. Intellectual Property Rights</h2>
            <p className={styles.text}>
                All content, materials, and intellectual property displayed on this website are owned by VIKS Production or its licensors. No rights or licenses are granted to you, other than the limited right to view the content for personal, non-commercial use. Any unauthorized use, reproduction, or distribution of our materials is strictly prohibited.
            </p>

            <h2 className={styles.sectionTitle}>5. Disclaimer of Warranties and Limitation of Liability</h2>
            <ul className={`${styles.list} ${styles.text}`}>
                <li className={styles.listItem}>
                    <strong>Disclaimer:</strong> Our website and the services provided are offered on an “as is” and “as available” basis. We do not guarantee, represent, or warrant the accuracy, reliability, or completeness of any information on the site.
                </li>
                <li className={styles.listItem}>
                    <strong>Quality:</strong> VIKS Production does not provide a 100% guarantee regarding the quality or performance of our services.
                </li>
                <li className={styles.listItem}>
                    <strong>Limitation of Liability:</strong> To the fullest extent permitted by law, VIKS Production shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the website or services.
                </li>
            </ul>


            <h2 className={styles.sectionTitle}>6. Modification of the Website and Services</h2>
            <p className={styles.text}>
                VIKS Production reserves the right to modify, suspend, or discontinue any aspect of our website or services at any time without prior notice. This includes the ability to make changes to user accounts or website functionality if such features are implemented in the future.
            </p>

            <h2 className={styles.sectionTitle}>7. Waiver of Claims and Dispute Resolution</h2>
            <p className={styles.text}>
                By using our website, you automatically waive any claims against VIKS Production, except where prohibited by applicable law. In the event of any dispute, the matter shall be resolved through a straightforward court process or arbitration, as determined by VIKS Production. This provision is intended to minimize complexity and ensure a simple resolution process.
            </p>

            <h2 className={styles.sectionTitle}>8. Governing Law and Jurisdiction</h2>
            <p className={styles.text}>
                These Terms shall be governed by and construed in accordance with the laws of the State of Florida. By using our website, you consent to the exclusive jurisdiction of the courts located in Florida for the resolution of any disputes.
            </p>

            <h2 className={styles.sectionTitle}>9. Changes to These Terms</h2>
            <p className={styles.text}>
                We reserve the right to update or modify these Terms at any time. Any changes will be posted on this page with an updated effective date. Your continued use of the website after any changes constitutes your acceptance of the revised Terms.
            </p>

            <h2 className={styles.sectionTitle}>10. Contact Information</h2>
            <p className={styles.text}>
                If you have any questions or concerns about these Terms, please contact us using the contact details provided on our website.
            </p>
            <p className={styles.text}>
                For any inquiries, you may use the phone number or email address that you have provided when contacting us.
            </p>
        </div>
    );
};

export default Page;
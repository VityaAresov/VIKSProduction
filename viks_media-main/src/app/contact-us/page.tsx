import React from 'react';
import styles from './ContactPage.module.css';
import ContactForm from "@/app/contact-us/ContactForm"; // Import the page styles

const ContactPage: React.FC = () => {
    return (
        // Apply the class here
        <div className={styles.pageContentWrapper}>

            {/* Optional: Example usage of pageTitle class */}
            {/* <h1 className={styles.pageTitle}>Contact Us</h1> */}

            <ContactForm/>

        </div>
    );
};

export default ContactPage;
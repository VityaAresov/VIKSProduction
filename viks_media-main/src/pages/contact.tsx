// pages/contact.tsx (or src/pages/contact.tsx)
import React from 'react';
// Optional: Import layout components or styling
// import Layout from '../components/Layout'; // Example
// import styles from '../styles/Contact.module.css'; // Example

const ContactPage: React.FC = () => {
    return (
        // Optional: Wrap with a Layout component if you have one
        // <Layout>
        <div>
            <h1>Contact Us</h1>
            <p>This is the contact page. Add your contact form or information here.</p>

            {/* Example: Basic Form Structure (you'll need to add state and submission logic) */}
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>

            {/* Add other contact info like email, phone, address */}
            <div>
                <h2>Our Information</h2>
                <p>Email: info@example.com</p>
                <p>Phone: +1 234 567 890</p>
            </div>
        </div>
        // </Layout>
    );
};

export default ContactPage; // Important: Must be a default export
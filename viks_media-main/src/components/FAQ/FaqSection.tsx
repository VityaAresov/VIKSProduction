import React, {useState} from 'react';
import FaqItem from './FaqItem';
import styles from './FaqSection.module.css';
import Link from "next/link";


interface FaqData {
    id: string;
    question: string;
    answer: string;
}

const faqData: FaqData[] = [
    {
        id: 'q1',
        question: 'Why is digital marketing important for my business?',
        answer: 'Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.',
    },
    {
        id: 'q2',
        question: 'How can digital marketing help improve my website\'s visibility?',
        answer: 'Through strategies like Search Engine Optimization (SEO), content marketing, and paid advertising (PPC), digital marketing increases your website\'s ranking in search results, making it easier for potential customers to find you online.',
    },
    {
        id: 'q3',
        question: 'How long does it take to see results from digital marketing efforts?',
        answer: 'The timeframe for seeing results varies depending on the strategies used, industry competition, budget, and specific goals. Some tactics like PPC can yield quick results, while SEO and content marketing typically require several months to show significant impact.',
    },
    {
        id: 'q4',
        question: 'How do you measure the success of digital marketing campaigns?',
        answer: 'Success is measured using various Key Performance Indicators (KPIs) relevant to the campaign goals, such as website traffic, conversion rates, lead generation, cost per acquisition (CPA), return on investment (ROI), engagement metrics (likes, shares, comments), and brand awareness.',
    },

];


const FaqSection: React.FC = () => {


    const [openItemId, setOpenItemId] = useState<string | null>(faqData.length > 0 ? faqData[0].id : null);


    const handleToggle = (id: string) => {
        setOpenItemId(prevId => (prevId === id ? null : id));
    };

    return (
        <section className={styles.faqSection}>
            {}
            <div className={styles.contentWrapper}>

                {}
                <div className={styles.leftColumn}>
                    <div className={styles.headerBlock}>
                        <h2 className={styles.title}>Digital Marketing FAQs</h2>
                        <p className={styles.description}>
                            As a leading digital marketing agency, we are dedicated to providing comprehensive
                            educational resources and answering frequently asked questions to help our clients.
                        </p>
                    </div>
                    <div className={styles.moreQuestionsBlock}>
                        <p className={styles.moreQuestionsText}>Have more questions?</p>
                        {/* This is the line causing the error (around line 64) */}
                        <Link href="/contact" className={styles.contactButton}>
                            <span>Contact Us</span>
                        </Link>
                    </div>
                </div>

                {}
                <div className={styles.rightColumn}>
                    {}
                    <div className={styles.accordionList}>
                        {faqData.map((faq) => (
                            <FaqItem
                                key={faq.id}
                                id={faq.id}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openItemId === faq.id}
                                onToggle={handleToggle}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FaqSection;

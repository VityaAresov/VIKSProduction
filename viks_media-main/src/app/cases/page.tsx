// src/app/cases/page.tsx
'use client';

import PortfolioGrid from '@/components/Portfolio/PortfolioGrid';
import styles from './OurWorksPage.module.css'; // Import page-specific styles

export default function OurWorksPage() {
    return (
        // Add a wrapper div with padding
        <div className={styles.pageContentWrapper}>
            <PortfolioGrid />
        </div>
    );
}
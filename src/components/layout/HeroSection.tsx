import React from 'react';

import {Frame} from '../hero/Frame';
import {Box} from '../hero/Box';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.leftColumn}>
                <Frame/></div>

            <div className={styles.rightColumn}>
                <Box/>
            </div>
        </section>
    );
};

export default HeroSection;
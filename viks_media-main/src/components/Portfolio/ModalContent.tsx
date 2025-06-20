// ModalContent.tsx
import React from 'react';
import styles from './PortfolioGrid.module.css'; // Assuming styles are in the main grid CSS file
import { PortfolioItem } from './PortfolioGrid'; // Import the interface

interface ModalContentProps {
    item: PortfolioItem;
}

const ModalContent: React.FC<ModalContentProps> = ({ item }) => {
    if (!item) return null; // Handle case where item might be null briefly

    return (
        // Main layout container using Flexbox
        <div className={styles.modalLayout}>

            {/* Left side: Image Wrapper */}
            <div className={styles.modalImageWrapper}>
                <img
                    src={item.imageUrl}
                    alt={`Portfolio item: ${item.title}`} // Add descriptive alt text
                    className={styles.modalImage}
                    loading="lazy" // Lazy load modal images too
                />
            </div>

            {/* Right side: Text Content Wrapper */}
            <div className={styles.modalTextWrapper}>
                {/* You can add header info here if needed, like client logo/name */}
                {/* <div className={styles.modalTextHeader}> ... </div> */}

                <div className={styles.modalTextScrollable}>
                    <h2 className={styles.modalTitle}>{item.title}</h2>
                    <p className={styles.modalDescription}>{item.description}</p>
                    {item.clientInfo && (
                        <p className={styles.modalClientInfo}>
                            Client: {item.clientInfo}
                        </p>
                    )}
                    {/* Add more details if needed */}
                    {/* <a href={item.detailsLink} target="_blank" rel="noopener noreferrer">View Project</a> */}
                </div>

                {/* You can add footer info here if needed, like action buttons */}
                {/* <div className={styles.modalTextFooter}> ... </div> */}
            </div>
        </div>
    );
};

export default ModalContent;

import React from 'react';
import styles from './PortfolioCard.module.css'; 


interface PortfolioItem {
    id: string;
    category: string;
    imageUrl: string;
    title: string;
    description: string;
    clientInfo?: string | null;
    detailsLink: string;
}

interface PortfolioCardProps {
    item: PortfolioItem;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => {
    return (
        <article className={styles.portfolioCard}>
            
            <div className={styles.cardImageWrapper}>
                {item.clientInfo && (
                    <div className={styles.cardClientInfo}>
                        {item.clientInfo}
                    </div>
                )}
                <img
                    src={item.imageUrl}
                    alt={item.title || 'Portfolio item image'}
                    className={styles.cardImage}
                    loading="lazy"
                />
            </div>

            
            <div className={styles.cardContent}>
                
                <div className={styles.contentLeft}>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                </div>
                
                <div className={styles.contentRight}>
                    <p className={styles.cardDescription}>{item.description}</p>
                </div>
            </div>
            

            
            <a
                href={item.detailsLink}
                className={styles.cardDetailsLink}
                aria-label={`See details for ${item.title}`}
                target="_blank"
                rel="noopener noreferrer"
            ></a>
        </article>
    );
};

export default PortfolioCard;
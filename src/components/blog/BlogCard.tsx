import React from 'react';
import styles from './BlogCard.module.css'; 

interface BlogCardProps {
    post: {
        id: string;
        imageUrl: string;
        category: string;
        title: string;
        date: string; 
        link: string; 
    };
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
    return (
        
        <a href={post.link} className={styles.blogCardLink}>
            <article className={styles.blogCard}>
                <div
                    className={styles.cardImage}
                    style={{ backgroundImage: `url(${post.imageUrl})` }}
                    aria-label={post.title} 
                ></div>
                <div className={styles.cardContent}>
                    {}
                    <span className={styles.cardCategory}>{post.category}</span>
                    {}
                    <h3 className={styles.cardTitle}>{post.title}</h3>
                    {}
                    <p className={styles.cardDate}>{post.date}</p>
                </div>
            </article>
        </a>
    );
};

export default BlogCard;
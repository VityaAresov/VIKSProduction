// components/AnimatedMenuIcon.tsx
'use client';

import React from 'react';
import styles from './AnimatedMenuIcon.module.css';

interface AnimatedMenuIconProps {
    isOpen: boolean;
}

const AnimatedMenuIcon: React.FC<AnimatedMenuIconProps> = ({ isOpen }) => {

    if (isOpen) {
        // --- Render Single Line (Minus) when menu is open ---
        return (
            <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <line x1="8" y1="15" x2="22" y2="15"></line>
            </svg>
        );
    }

    // --- Render Complex Icon (Static Cross + Rotating Text -> Burger on Hover) when menu is closed ---
    return (
        <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink" // Keep xmlns:xlink for textPath href
            className={styles.iconSvg}
        >
            {/* 1. Define the circular path */}
            <defs>
                <path
                    id="textcircle"
                    d="M 15, 15 m -11, 0 a 11,11 0 1,1 22,0 a 11,11 0 1,1 -22,0"
                    fill="none"
                />
            </defs>

            {/* 2. Static Plus Lines */}
            <g
                className={styles.staticCross}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <line x1="8" y1="15" x2="22" y2="15"></line> {/* Horizontal */}
                <line x1="15" y1="8" x2="15" y2="22"></line> {/* Vertical */}
            </g>

            {/* 3. Burger Icon Lines (Initially Hidden) */}
            <g
                className={styles.burgerLines}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <line x1="8" y1="11" x2="22" y2="11" className={styles.burgerLine1}></line>
                <line x1="8" y1="15" x2="22" y2="15" className={styles.burgerLine2}></line>
                <line x1="8" y1="19" x2="22" y2="19" className={styles.burgerLine3}></line>
            </g>

            {/* 4. Circling Text using SVG Animation */}
            <text className={styles.circlingText}>
                {/* SVG animation to rotate the text element around the center (15,15) */}
                <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="rotate"
                    from="0 15 15" // Start angle, center x, center y
                    to="360 15 15" // End angle, center x, center y
                    dur="10s"       // Duration (match your original CSS)
                    repeatCount="indefinite" // Loop forever
                />
                {/* Text path places the text content along the circle */}
                {/* Ensure correct namespace for xlink:href */}
                <textPath href="#textcircle" startOffset="50%" textAnchor="middle">
                    MENU&nbsp;&nbsp;&nbsp;MENU&nbsp;&nbsp;&nbsp;
                </textPath>
            </text>
        </svg>
    );
};

export default AnimatedMenuIcon;
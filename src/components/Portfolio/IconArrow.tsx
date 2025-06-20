import React from 'react';

interface IconArrowProps {
    direction: 'left' | 'right';
    size?: number;
    color?: string;
}

// Simple SVG Arrow pointing downwards, rotation handles direction
export const IconArrow: React.FC<IconArrowProps> = ({
                                                        direction = 'right',
                                                        size = 18,
                                                        color = '#AD60F6' // Default color from original request
                                                    }) => {
    // Rotate -135deg for left arrow, 45deg for right arrow (relative to pointing down)
    const rotation = direction === 'left' ? -135 : 45;

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24" // Standard viewBox
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
                transform: `rotate(${rotation}deg)`,
                display: 'block' // Prevents extra space below SVG
            }}
        >
            <path
                d="M7 10L12 15L17 10" // Path defines a downward chevron
                stroke={color}
                strokeWidth="2.5" // Slightly thicker stroke
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

// You don't necessarily need a default export if you only import { IconArrow }
// export default IconArrow;
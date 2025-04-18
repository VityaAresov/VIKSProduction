// src/components/ui/Button.tsx
import React from 'react';

// Определяем типы для пропсов компонента
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger';
    size?: 'small' | 'medium' | 'large';
    children: React.ReactNode; // Обязательный пропс для содержимого кнопки
}

const Button: React.FC<ButtonProps> = ({
                                           variant = 'primary', // Значение по умолчанию
                                           size = 'medium',    // Значение по умолчанию
                                           children,
                                           className, // Позволяет передавать дополнительные классы извне
                                           ...props // Остальные стандартные атрибуты кнопки (onClick, type и т.д.)
                                       }) => {
    // Базовые стили
    const baseStyles = 'font-semibold rounded focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-150 ease-in-out';

    // Стили в зависимости от варианта (variant)
    const variantStyles = {
        primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
        secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-400',
        danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
    };

    // Стили в зависимости от размера (size)
    const sizeStyles = {
        small: 'px-3 py-1.5 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg',
    };

    // Собираем все классы вместе
    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className || ''}`;

    return (
        <button className={combinedClassName.trim()} {...props}>
            {children}
        </button>
    );
};

export default Button;
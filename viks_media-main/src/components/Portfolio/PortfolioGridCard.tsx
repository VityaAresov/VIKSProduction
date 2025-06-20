// PortfolioGridCard.tsx

import React from 'react';
import styles from './PortfolioGridCard.module.css'; // <<< Убедитесь, что путь правильный

// Интерфейс элемента портфолио
// (Предполагается, что он определен здесь или импортирован)
interface PortfolioItem {
    id: string;
    category: string;
    imageUrl: string;
    title: string;
    description: string;
    clientInfo: string | null;
    detailsLink: string; // Ссылка может использоваться как fallback или для SEO
}

// Интерфейс пропсов компонента
interface PortfolioGridCardProps {
    item: PortfolioItem;
    onClick: () => void; // Функция для открытия модального окна
}

const PortfolioGridCard: React.FC<PortfolioGridCardProps> = ({ item, onClick }) => {

    // Обработчик клика для ссылки
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        // Предотвращаем стандартный переход по ссылке,
        // так как мы будем открывать модальное окно
        event.preventDefault();
        // Вызываем функцию, переданную из родительского компонента (PortfolioGrid)
        onClick();
    };

    return (
        // Используем тег 'a' для семантики и возможного fallback/SEO,
        // но основное действие обрабатываем через onClick
        <a
            href={item.detailsLink} // Ссылка остается для SEO или как fallback, если JS отключен
            // target="_blank" // Убрали, так как открываем в модалке
            // rel="noopener noreferrer" // Убрали, так как убрали target="_blank"
            className={styles.cardLink}
            aria-label={`View details for ${item.title}`} // Для доступности
            onClick={handleClick} // <<< Обработчик клика для открытия модалки
            // Можно добавить атрибуты для лучшей доступности, если href="#"
            // role="button"
            // tabIndex={0}
            // onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
        >
            {/* 1. Контейнер для изображения */}
            <div className={styles.imageContainer}>
                <img
                    src={item.imageUrl}
                    alt="" // Alt оставляем пустым, т.к. aria-label есть на ссылке
                    className={styles.cardImage}
                    loading="lazy" // Ленивая загрузка изображения
                />
            </div>

            {/* 2. Оверлей с текстом (появляется при наведении) */}
            <div className={styles.overlay}>
                <div className={styles.textContainer}>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardDescription}>{item.description}</p>
                    {/* Отображаем информацию о клиенте, если она есть */}
                    {item.clientInfo && (
                        <p className={styles.cardClient}>{item.clientInfo}</p>
                    )}
                </div>
            </div>
        </a>
    );
};

export default PortfolioGridCard;
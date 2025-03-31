// PortfolioSlider.tsx
import React, { useState, useRef, useEffect } from 'react';
import PortfolioCard from './PortfolioCard'; // Убедись, что путь к PortfolioCard верный
import styles from './PortfolioSlider.module.css'; // Убедись, что путь к стилям верный

// Assume PortfolioItem interface is defined/imported
// Убедись, что этот интерфейс определен или импортирован правильно
interface PortfolioItem {
    id: string;
    category: string;
    imageUrl: string;
    title: string;
    description: string;
    clientInfo?: string | null;
    detailsLink: string;
}

interface PortfolioSliderProps {
    items: PortfolioItem[];
    slidesToShow?: number; // How many cards visible at once
}

// Simple SVG Arrow Icon Component
const ArrowIcon = ({ direction = 'right' }: { direction?: 'left' | 'right' }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {direction === 'left' ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
    </svg>
);


const PortfolioSlider: React.FC<PortfolioSliderProps> = ({ items, slidesToShow = 2 }) => { // Default to showing 2 slides
    const [currentIndex, setCurrentIndex] = useState(0);
    const trackRef = useRef<HTMLDivElement>(null);
    const sliderContainerRef = useRef<HTMLDivElement>(null);
    const [slideWidth, setSlideWidth] = useState(0);

    const totalItems = items.length;
    // Calculate the maximum index based on slidesToShow
    // e.g., 4 items, show 2 -> max index is 4 - 2 = 2 (indices 0, 1, 2)
    // Обновлено: Убедимся, что maxScrollIndex не уходит в минус, если totalItems < slidesToShow
    const maxScrollIndex = Math.max(0, totalItems - slidesToShow);

    // Update slide width on resize or initial load
    useEffect(() => {
        const updateWidth = () => {
            if (sliderContainerRef.current) {
                const containerWidth = sliderContainerRef.current.offsetWidth;
                // --- ВОТ ДОБАВЛЕННЫЙ CONSOLE.LOG ---
                console.log('Container Width (offsetWidth):', containerWidth);
                // ---------------------------------

                // Calculate width for one slide based on container width and number to show
                // Includes basic gap calculation (adjust gap value as needed, should match CSS)
                // Убедись, что значение gap соответствует твоему CSS (в .slide или .sliderTrack)
                const gap = 30; // Примерное значение, должно совпадать с CSS
                // Рассчитываем ширину одного слайда
                let calculatedSlideWidth = (containerWidth - (slidesToShow - 1) * gap) / slidesToShow;

                // Проверка на случай, если рассчитанная ширина <= 0 (может произойти при странных условиях)
                if (calculatedSlideWidth <= 0) {
                    calculatedSlideWidth = containerWidth / slidesToShow; // Fallback без учета gap
                }

                setSlideWidth(calculatedSlideWidth);
            }
        };

        updateWidth(); // Initial width calculation
        window.addEventListener('resize', updateWidth); // Recalculate on resize/zoom

        // Cleanup function to remove the event listener
        return () => window.removeEventListener('resize', updateWidth);
    }, [slidesToShow, items, totalItems]); // Добавим totalItems в зависимости на всякий случай


    // Update transform based on currentIndex and slideWidth
    useEffect(() => {
        if (trackRef.current && slideWidth > 0) { // Добавлена проверка slideWidth > 0
            // Calculate the actual step distance including the gap
            // Убедись, что значение gap соответствует твоему CSS
            const gap = 30; // Примерное значение, должно совпадать с CSS
            const step = slideWidth + gap;
            const transformValue = -(currentIndex * step);
            trackRef.current.style.transform = `translateX(${transformValue}px)`;
        } else if (trackRef.current) {
            // Если slideWidth 0 или меньше, сбрасываем transform
            trackRef.current.style.transform = `translateX(0px)`;
        }
    }, [currentIndex, slideWidth]); // Зависимости: currentIndex и slideWidth

    // Reset index when items change (e.g., due to filtering)
    useEffect(() => {
        setCurrentIndex(0);
    }, [items]); // Зависимость: items

    // Adjust index if it becomes invalid after items/slidesToShow change
    useEffect(() => {
        // Пересчитываем maxScrollIndex здесь, т.к. items или slidesToShow могли измениться
        const currentMaxIndex = Math.max(0, items.length - slidesToShow);
        if (currentIndex > currentMaxIndex) {
            setCurrentIndex(currentMaxIndex);
        } else if (currentIndex < 0) { // На всякий случай
            setCurrentIndex(0);
        }
        // Убрали зависимость от currentIndex, чтобы избежать потенциального зацикливания,
        // т.к. мы сами меняем currentIndex внутри этого хука.
    }, [items, slidesToShow]);


    const goToPrev = () => {
        // Обновлено: Переход к последнему возможному индексу при нажатии "назад" с первого слайда
        setCurrentIndex(prevIndex => (prevIndex === 0 ? maxScrollIndex : prevIndex - 1));
    };

    const goToNext = () => {
        // Обновлено: Переход к первому индексу (0) при нажатии "вперед" с последнего слайда
        setCurrentIndex(prevIndex => (prevIndex >= maxScrollIndex ? 0 : prevIndex + 1));
    };

    if (!items || totalItems === 0) {
        // Используем класс из CSS модуля для сообщения об отсутствии элементов
        return <div className={styles.noItemsMessage}>Нет работ для отображения.</div>;
    }

    // Calculate track width dynamically
    // Убедись, что значение gap соответствует твоему CSS
    const gap = 30; // Примерное значение, должно совпадать с CSS
    // Обновлено: Расчет ширины трека, учитывая gap
    const trackWidth = totalItems * slideWidth + (totalItems > 0 ? (totalItems - 1) * gap : 0);


    return (
        <div className={styles.sliderWrapper}>
            <div className={styles.sliderContainer} ref={sliderContainerRef}>
                <div
                    className={styles.sliderTrack}
                    ref={trackRef}
                    // Применяем рассчитанную ширину трека, если она больше 0
                    style={{ width: trackWidth > 0 ? `${trackWidth}px` : '100%' }}
                >
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className={styles.slide}
                            // Set explicit width for each slide, если slideWidth > 0
                            style={{ width: slideWidth > 0 ? `${slideWidth}px` : 'auto' }}
                        >
                            {/* Render the existing PortfolioCard */}
                            <PortfolioCard item={item} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation: Only show if more items than slides visible */}
            {totalItems > slidesToShow && (
                <div className={styles.sliderNavigation}>
                    <button
                        className={styles.navButton}
                        onClick={goToPrev}
                        aria-label="Previous slide"
                        // Обновлено: Условие disabled для кнопки "назад" (неактивна только на первом слайде, если не зациклено)
                        // Если мы не используем зацикливание (loop), то раскомментируйте строку ниже:
                        // disabled={currentIndex === 0}
                    >
                        <ArrowIcon direction="left" />
                    </button>
                    <button
                        className={styles.navButton}
                        onClick={goToNext}
                        aria-label="Next slide"
                        // Обновлено: Условие disabled для кнопки "вперед" (неактивна только на последнем слайде, если не зациклено)
                        // Если мы не используем зацикливание (loop), то раскомментируйте строку ниже:
                        // disabled={currentIndex >= maxScrollIndex}
                    >
                        <ArrowIcon direction="right" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default PortfolioSlider;
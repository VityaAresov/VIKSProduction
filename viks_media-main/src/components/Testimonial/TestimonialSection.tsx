import React, { useState, useMemo } from 'react';
import styles from './TestimonialSection.module.css';

// --- IMPORT SWIPER ---
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type SwiperCore from 'swiper'; // Используем type import для SwiperCore

// --- Стили Swiper (нужен только базовый) ---
import 'swiper/css';

// --- Интерфейс для объекта отзыва ---
interface Testimonial {
    id: string;
    text: string;
    authorName: string;
    authorTitle: string;
    authorImage: string;
}

// --- Пример данных для отзывов (типизируем как массив Testimonial[]) ---
const testimonialsData: Testimonial[] = [
    {
        id: 't1',
        text: '“They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.”',
        authorName: 'Donald Trump',
        authorTitle: 'President of United States',
        authorImage: '/images/authors/trump.jpg', // Замените на реальный путь
    },
    {
        id: 't2',
        text: '“Working with them has been a game-changer for our marketing efforts. The results speak for themselves, with significant increases in leads and conversions since partnering.”',
        authorName: 'Jane Doe',
        authorTitle: 'Marketing Manager, ExampleCorp',
        authorImage: '/images/authors/jane.jpg', // Замените на реальный путь
    },
    {
        id: 't3',
        text: '“Exceptional service and deep expertise in digital strategy. Highly recommended for any business looking to elevate their online presence and achieve measurable growth.”',
        authorName: 'John Smith',
        authorTitle: 'CEO, Startup Inc.',
        authorImage: '/images/authors/john.jpg', // Замените на реальный путь
    },
    // Добавьте больше отзывов
];
// --- КОНЕЦ ДАННЫХ ---

// --- Компонент TestimonialSection ---
const TestimonialSection: React.FC = () => {
    // Состояние для экземпляра Swiper
    const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);
    // Состояние для активного индекса слайда
    const [activeIndex, setActiveIndex] = useState<number>(0);

    // Обновление активного индекса при смене слайда
    const handleSlideChange = (swiper: SwiperCore) => {
        setActiveIndex(swiper.realIndex); // Используем realIndex для учета loop: true
    };

    // Обработчики для кастомных кнопок
    const handlePrev = () => {
        swiperInstance?.slidePrev();
    };

    const handleNext = () => {
        swiperInstance?.slideNext();
    };

    // Функция для форматирования номера слайда (e.g., 01, 05)
    const formatSlideNumber = (num: number): string => {
        return num.toString().padStart(2, '0');
    }

    const totalSlides: number = testimonialsData.length;

    // Получаем данные текущего активного отзыва
    const currentTestimonial = useMemo(() => {
        if (!testimonialsData || testimonialsData.length === 0) return null;
        // Вычисляем действительный индекс для массива
        const validIndex = activeIndex % testimonialsData.length;
        return testimonialsData[validIndex];
    }, [activeIndex, testimonialsData]); // Зависим от activeIndex и массива данных

    return (
        <section className={styles.testimonialSection}>
            <div className={styles.container}>
                {/* --- Swiper содержит ТОЛЬКО текст отзыва --- */}
                <Swiper
                    modules={[Navigation]}
                    onSwiper={setSwiperInstance}
                    onSlideChange={handleSlideChange}
                    slidesPerView={1}
                    loop={true}
                    className={styles.swiperInstance}
                >
                    {testimonialsData.map((testimonial: Testimonial) => (
                        <SwiperSlide key={testimonial.id} className={styles.swiperSlide}>
                            {/* В слайде теперь ТОЛЬКО текст */}
                            <p className={styles.quoteText}>{testimonial.text}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* --- Статичный Футер (Автор + Навигация) --- */}
                {currentTestimonial && totalSlides > 0 && (
                    <div className={styles.staticFooter}>
                        {/* --- Информация о ТЕКУЩЕМ авторе --- */}
                        <div className={styles.authorInfo}>
                            <img
                                src={currentTestimonial.authorImage}
                                alt={currentTestimonial.authorName}
                                className={styles.authorImage}
                                loading="lazy"
                                key={currentTestimonial.id} // Добавляем key для обновления img
                            />
                            <div className={styles.authorDetails}>
                                <p className={styles.authorName}>{currentTestimonial.authorName}</p>
                                <p className={styles.authorTitle}>{currentTestimonial.authorTitle}</p>
                            </div>
                        </div>

                        {/* --- Статичная Навигация --- */}
                        {totalSlides > 1 && (
                            <div className={styles.navigationControls}>
                                {/* Кнопка Назад */}
                                <button
                                    className={`${styles.testimonialNavButton} ${styles.prevButton}`}
                                    onClick={handlePrev}
                                    aria-label="Previous testimonial"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 12H5M12 5L5 12L12 19" /* Стрелка с хвостом */
                                              stroke="currentColor"
                                              strokeWidth="2.5"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              fill="none"
                                        />
                                    </svg>
                                </button>

                                {/* Счетчик слайдов - ОБНОВЛЕННАЯ СТРУКТУРА */}
                                <span className={styles.slideCounter}>
                                    <span className={styles.currentSlideNum}>
                                        {formatSlideNumber(activeIndex + 1)}
                                    </span>
                                    <span className={styles.counterSeparator}>/</span>
                                    <span className={styles.totalSlidesNum}>
                                        {formatSlideNumber(totalSlides)}
                                    </span>
                                </span>

                                {/* Кнопка Вперед */}
                                <button
                                    className={`${styles.testimonialNavButton} ${styles.nextButton}`}
                                    onClick={handleNext}
                                    aria-label="Next testimonial"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19M12 5L19 12L12 19" /* Стрелка с хвостом */
                                              stroke="currentColor"
                                              strokeWidth="2.5"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              fill="none"
                                        />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>
                )}
                {/* --- Конец Статичного Футера --- */}
            </div>
        </section>
    );
};

export default TestimonialSection;
// PortfolioGrid.tsx
'use client';

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Masonry } from 'masonic';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import styles from './PortfolioGrid.module.css';
import PortfolioGridCard from './PortfolioGridCard';
import ModalContent from './ModalContent';

// --- Интерфейс элемента портфолио ---
export interface PortfolioItem {
    id: string;
    category: string;
    imageUrl: string;
    title: string;
    description: string;
    clientInfo: string | null;
    detailsLink: string;
}

// --- Фильтры ---
const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'videography', label: 'Videography' },
    { id: 'marketing', label: 'Digital Marketing' },
    { id: 'branding', label: 'Branding' },
    { id: 'webdev', label: 'Web Development' },
];

// --- Демонстрационные данные (остаются без изменений) ---
const portfolioItems: PortfolioItem[] = [
    // ... (your existing portfolioItems array) ...
    {
        id: 'item1',
        category: 'uiux',
        imageUrl: '/images/cases/brandbook1.png',
        title: "Dashboard UI Enhancement",
        description: "Improving user experience for a complex data analytics platform.",
        clientInfo: "DataViz Ltd. 2024",
        detailsLink: '#'
    },
    {
        id: 'item2',
        category: 'webdev',
        imageUrl: '/images/cases/website1.png',
        title: "Targeted Ad Campaign",
        description: "Running a successful digital marketing campaign across multiple platforms.",
        clientInfo: "AdSolutions. 2023",
        detailsLink: '#'
    },
    {
        id: 'item3',
        category: 'branding',
        imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnJhbmRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        title: "Startup Rebranding",
        description: "Developing a fresh and modern brand identity for a growing startup.",
        clientInfo: "Innovate Co. 2024",
        detailsLink: '#'
    },
    {
        id: 'item4',
        category: 'uiux',
        imageUrl: 'https://picsum.photos/seed/item4_seed/400/400',
        title: "Mobile App Wireframes",
        description: "Designing intuitive wireframes and prototypes for a new mobile application.",
        clientInfo: "AppForce. 2023",
        detailsLink: '#'
    },
    {
        id: 'item5',
        category: 'uiux',
        imageUrl: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya3NwYWNlJTIwdGVjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        title: "Workspace Tool UI",
        description: "Creating a user-friendly interface for a collaborative workspace tool.",
        clientInfo: "Connective Inc. 2024",
        detailsLink: '#'
    },
    {
        id: 'item6',
        category: 'marketing',
        imageUrl: 'https://picsum.photos/seed/item6_seed/800/500',
        title: "SEO Strategy & Growth",
        description: "Implementing an effective SEO strategy leading to significant organic traffic increase.",
        clientInfo: "RankHigh. 2023",
        detailsLink: '#'
    },
    {
        id: 'item7',
        category: 'branding',
        imageUrl: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJyYW5kaW5nJTIwbW9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        title: "Brand Guideline Creation",
        description: "Establishing comprehensive brand guidelines for consistent communication.",
        clientInfo: "StyleSource. 2024",
        detailsLink: '#'
    },
    {
        id: 'item8',
        category: 'uiux',
        imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYnNpdGUlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        title: "Landing Page Optimization",
        description: "Redesigning landing pages to maximize conversion rates.",
        clientInfo: "Convertly. 2023",
        detailsLink: '#'
    },
    {
        id: 'item9',
        category: 'marketing',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGF0YSUyMGFuYWx5c2lzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        title: "Marketing Data Analysis",
        description: "Analyzing marketing campaign data to provide actionable insights.",
        clientInfo: "Insightful Data. 2024",
        detailsLink: '#'
    },
    {
        id: 'item10',
        category: 'uiux',
        imageUrl: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwYXBwJTIwdXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        title: "User Flow Mapping",
        description: "Mapping out optimal user flows for enhanced mobile app navigation.",
        clientInfo: "FlowEasy. 2023",
        detailsLink: '#'
    },
    {
        id: 'item11',
        category: 'branding',
        imageUrl: 'https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFic3RyYWN0JTIwYnJhbmRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        title: "Abstract Logo Design",
        description: "Creating a unique abstract logo mark as part of a larger branding project.",
        clientInfo: "VisioBrand. 2023",
        detailsLink: '#'
    },
    {
        id: 'item12',
        category: 'marketing',
        imageUrl: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFuYWx5dGljc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        title: "ROI Tracking Setup",
        description: "Setting up robust ROI tracking mechanisms for marketing investments.",
        clientInfo: "MeasureUp. 2024",
        detailsLink: '#'
    },
];

// --- Настройки пагинации ---
const INITIAL_ITEMS_TO_SHOW = 6;
const ITEMS_PER_LOAD = 3;

// --- Функция перемешивания массива (остается без изменений) ---
function shuffleArray<T>(array: T[]): T[] {
    // ... (shuffle implementation) ...
    let currentIndex = array.length, randomIndex;
    const newArray = [...array];
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [newArray[currentIndex], newArray[randomIndex]] = [
            newArray[randomIndex], newArray[currentIndex]];
    }
    return newArray;
}

// --- Компонент-обертка для карточки в Masonry (остается без изменений) ---
const MasonryCardWrapper = ({ data }: {
    data: {
        item: PortfolioItem;
        onClick: () => void;
    };
    index: number;
    width: number;
}) => {
    return <PortfolioGridCard item={data.item} onClick={data.onClick} />;
};

// --- Брейкпоинт для мобильных устройств ---
const MOBILE_BREAKPOINT = 768; // Adjust this value if needed (e.g., 768px)

// --- Основной компонент PortfolioGrid ---
const PortfolioGrid: React.FC = () => {
    const [isClient, setIsClient] = useState(false);
    const [activeFilter, setActiveFilter] = useState<string>('all');
    const [visibleCount, setVisibleCount] = useState<number>(INITIAL_ITEMS_TO_SHOW);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

    // <<< ДОБАВЛЕНО: Состояние для количества колонок
    // Начинаем с десктопного значения по умолчанию (3), но оно будет немедленно скорректировано на клиенте
    const [numColumns, setNumColumns] = useState(3);

    // Хук для установки isClient=true после монтирования (остается без изменений)
    useEffect(() => {
        setIsClient(true);
    }, []);

    // <<< ДОБАВЛЕНО: Хук для определения количества колонок при монтировании и ресайзе
    useEffect(() => {
        // Функция для вычисления количества колонок на основе ширины окна
        const getColumnCount = () => {
            // Проверяем, что 'window' определено (код выполняется в браузере)
            return typeof window !== 'undefined' && window.innerWidth < MOBILE_BREAKPOINT
                ? 2 // Мобильная версия: 2 колонки
                : 3; // Десктопная версия: 3 колонки
        };

        // Обработчик изменения размера окна
        const handleResize = () => {
            setNumColumns(getColumnCount());
        };

        // Устанавливаем начальное количество колонок, как только компонент монтируется на клиенте
        handleResize();

        // Добавляем слушатель события 'resize'
        window.addEventListener('resize', handleResize);

        // Функция очистки: удаляем слушатель при размонтировании компонента
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Пустой массив зависимостей: эффект выполняется один раз после монтирования и очищается при размонтировании

    // Функции для управления модальным окном (остаются без изменений)
    const openModal = useCallback((item: PortfolioItem) => {
        setSelectedItem(item);
        setModalIsOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setModalIsOpen(false);
        setTimeout(() => {
            setSelectedItem(null);
        }, 300);
    }, []);

    // Логика фильтрации, перемешивания, подсчета (остается без изменений)
    const filteredItems = useMemo(() => {
        if (activeFilter === 'all') {
            return portfolioItems;
        }
        return portfolioItems.filter(item => item.category === activeFilter);
    }, [activeFilter]);

    const shuffledItems = useMemo(() => {
        console.log("Shuffling items for filter:", activeFilter);
        return shuffleArray(filteredItems);
    }, [filteredItems]);

    const filterCounts = useMemo(() => {
        const counts: { [key: string]: number } = { all: portfolioItems.length };
        filters.forEach(filter => {
            if (filter.id !== 'all') {
                counts[filter.id] = portfolioItems.filter(item => item.category === filter.id).length;
            }
        });
        return counts;
    }, []);

    const itemsToDisplay = useMemo(() => {
        return shuffledItems
            .slice(0, visibleCount)
            .map(item => ({
                item: item,
                onClick: () => openModal(item)
            }));
    }, [shuffledItems, visibleCount, openModal]);

    const hasMoreItems = visibleCount < shuffledItems.length;

    const handleShowMore = () => {
        setVisibleCount(prevCount =>
            Math.min(prevCount + ITEMS_PER_LOAD, shuffledItems.length)
        );
    };

    const handleFilterChange = (filterId: string) => {
        setActiveFilter(filterId);
        setVisibleCount(INITIAL_ITEMS_TO_SHOW);
    };

    return (
        <section className={styles.portfolioSection}>
            <div className={styles.container}>
                {/* --- Заголовок и Фильтры (без изменений) --- */}
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Real-world examples of how we have helped companies achieve their marketing objectives.
                    </h2>
                    <div className={styles.filters}>
                        {filters.map(filter => (
                            <button
                                key={filter.id}
                                className={`${styles.filterButton} ${activeFilter === filter.id ? styles.active : ''}`}
                                onClick={() => handleFilterChange(filter.id)}
                                disabled={filterCounts[filter.id] === 0 && filter.id !== 'all'}
                            >
                                {filter.label} [{filterCounts[filter.id] ?? 0}]
                            </button>
                        ))}
                    </div>
                </div>

                {/* --- Сетка Masonry --- */}
                <div style={{ minHeight: '300px' }}>
                    {isClient ? ( // Проверяем, отрендерено ли на клиенте
                        itemsToDisplay.length > 0 ? (
                            <Masonry
                                items={itemsToDisplay}
                                key={`${activeFilter}-${numColumns}`} // <<< Меняем ключ при смене колонок для перерисовки
                                columnCount={numColumns} // <<< ИСПОЛЬЗУЕМ ДИНАМИЧЕСКОЕ КОЛИЧЕСТВО КОЛОНОК
                                rowGutter={25}
                                columnGutter={25} // Можно сделать адаптивным, если нужно
                                render={MasonryCardWrapper}
                                overscanBy={5} // Оставляем или настраиваем по необходимости
                            />
                        ) : (
                            <p className={styles.noItemsMessageFullWidth}>
                                Нет работ для отображения в этой категории.
                            </p>
                        )
                    ) : (
                        <div>Loading Portfolio...</div> // Заглушка для SSR/пре-рендера
                    )}
                </div>

                {/* --- Кнопка "Show More" (без изменений) --- */}
                {isClient && hasMoreItems && (
                    <div className={styles.showMoreContainer}>
                        <button
                            className={styles.showMoreButton}
                            onClick={handleShowMore}
                        >
                            Show More ({shuffledItems.length - visibleCount} remaining)
                        </button>
                    </div>
                )}
            </div>

            {/* --- Модальное окно (без изменений) --- */}
            <Modal
                open={modalIsOpen}
                onClose={closeModal}
                center
                classNames={{
                    overlay: styles.customOverlay,
                    modal: styles.customModal,
                }}
                animationDuration={600}
            >
                {selectedItem && <ModalContent item={selectedItem} />}
            </Modal>
        </section>
    );
};

export default PortfolioGrid;

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Masonry from 'react-masonry-component';
import { Modal } from 'react-responsive-modal';
import PortfolioGridCard from './PortfolioGridCard';
import ModalContent from './ModalContent';
import styles from './PortfolioGrid.module.css';

// --- Тип данных для одного элемента портфолио ---
type PortfolioItem = {
  id: string;
  category: string;
  imageUrl: string;
  title: string;
  description: string;
  clientInfo: string | null;
  detailsLink: string;
};

// --- Фильтры ---
const filters = [
  { id: 'all', label: 'All Work' },
  { id: 'videography', label: 'Videography' },
  { id: 'marketing', label: 'Digital Marketing' },
  { id: 'branding', label: 'Branding' },
  { id: 'webdev', label: 'Web Development' },
];

// --- Демонстрационные данные ---
const portfolioItems: PortfolioItem[] = [
  {
    id: 'item1',
    category: 'webdev',
    imageUrl: '/images/cases/brandbook1.png',
    title: "Dashboard UI Enhancement",
    description: "Improving user experience for a complex data analytics platform.",
    clientInfo: "DataViz Ltd. 2024",
    detailsLink: '#'
  },
  // ... остальные элементы без изменений ...
];

// --- Настройки пагинации ---
const INITIAL_ITEMS_TO_SHOW = 6;
const ITEMS_PER_LOAD = 3;

// --- Функция перемешивания массива ---
function shuffleArray<T>(array: T[]): T[] {
  let currentIndex = array.length, randomIndex;
  const newArray = [...array];
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex], newArray[currentIndex]
    ];
  }
  return newArray;
}

// --- Обёртка для карточки в Masonry ---
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

// --- Точка перелома для мобильных ---
const MOBILE_BREAKPOINT = 768;

const PortfolioGrid: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_ITEMS_TO_SHOW);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [numColumns, setNumColumns] = useState(3);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const getColumnCount = () =>
      typeof window !== 'undefined' && window.innerWidth < MOBILE_BREAKPOINT
        ? 2
        : 3;

    const handleResize = () => {
      setNumColumns(getColumnCount());
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openModal = useCallback((item: PortfolioItem) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalIsOpen(false);
    setTimeout(() => setSelectedItem(null), 300);
  }, []);

  const filteredItems = useMemo(() => {
    return activeFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter(item => item.category === activeFilter);
  }, [activeFilter]);

  const shuffledItems = useMemo(() => shuffleArray(filteredItems), [filteredItems]);

  const filterCounts = useMemo(() => {
    const counts: Record<string, number> = { all: portfolioItems.length };
    filters.forEach(f => {
      if (f.id !== 'all') {
        counts[f.id] = portfolioItems.filter(item => item.category === f.id).length;
      }
    });
    return counts;
  }, []);

  const itemsToDisplay = useMemo(() => {
    return shuffledItems
      .slice(0, visibleCount)
      .map(item => ({ item, onClick: () => openModal(item) }));
  }, [shuffledItems, visibleCount, openModal]);

  const hasMoreItems = visibleCount < shuffledItems.length;

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + ITEMS_PER_LOAD, shuffledItems.length));
  };

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    setVisibleCount(INITIAL_ITEMS_TO_SHOW);
  };

  return (
    <section className={styles.portfolioSection}>
      <div className={styles.container}>
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

        <div style={{ minHeight: '300px' }}>
          {isClient ? (
            itemsToDisplay.length > 0 ? (
              <Masonry
                items={itemsToDisplay}
                key={`${activeFilter}-${numColumns}`}
                columnCount={numColumns}
                rowGutter={25}
                columnGutter={25}
                render={MasonryCardWrapper}
                overscanBy={5}
              />
            ) : (
              <p className={styles.noItemsMessageFullWidth}>
                Нет работ для отображения в этой категории.
              </p>
            )
          ) : (
            <div>Loading Portfolio...</div>
          )}
        </div>

        {isClient && hasMoreItems && (
          <div className={styles.showMoreContainer}>
            <button className={styles.showMoreButton} onClick={handleShowMore}>
              Show More ({shuffledItems.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </div>

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

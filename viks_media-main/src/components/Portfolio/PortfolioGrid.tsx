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
    detailsLink: '#',
  },
  {
    id: 'item2',
    category: 'webdev',        // ← тут закрывающая кавычка и запятая
    imageUrl: '/images/cases/website1.png',
    title: "Targeted Ad Campaign",
    description: "Running a successful digital marketing campaign across multiple platforms.",
    clientInfo: "AdSolutions. 2023",
    detailsLink: '#',
  },
  {
    id: 'item3',
    category: 'branding',
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?...',
    title: "Startup Rebranding",
    description: "Developing a fresh and modern brand identity for a growing startup.",
    clientInfo: "Innovate Co. 2024",
    detailsLink: '#',
  },
  // …и так далее для всех остальных элементов
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

// --- Обёртка для карточки ---
const MasonryCardWrapper = ({ data }: {
  data: { item: PortfolioItem; onClick: () => void; };
  index: number;
  width: number;
}) => <PortfolioGridCard item={data.item} onClick={data.onClick} />;

const MOBILE_BREAKPOINT = 768;

const PortfolioGrid: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState(INITIAL_ITEMS_TO_SHOW);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [numColumns, setNumColumns] = useState(3);

  useEffect(() => { setIsClient(true); }, []);
  useEffect(() => {
    const getColumns = () =>
      typeof window !== 'undefined' && window.innerWidth < MOBILE_BREAKPOINT ? 2 : 3;
    const onResize = () => setNumColumns(getColumns());
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const openModal = useCallback((item: PortfolioItem) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  }, []);
  const closeModal = useCallback(() => {
    setModalIsOpen(false);
    setTimeout(() => setSelectedItem(null), 300);
  }, []);

  const filtered = useMemo(
    () => activeFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter(i => i.category === activeFilter),
    [activeFilter]
  );
  const shuffled = useMemo(() => shuffleArray(filtered), [filtered]);

  const filterCounts = useMemo(() => {
    const counts: Record<string, number> = { all: portfolioItems.length };
    filters.forEach(f => {
      if (f.id !== 'all') counts[f.id] = portfolioItems.filter(i => i.category === f.id).length;
    });
    return counts;
  }, []);

  const itemsToDisplay = useMemo(() =>
    shuffled.slice(0, visibleCount).map(item => ({ item, onClick: () => openModal(item) })),
    [shuffled, visibleCount, openModal]
  );
  const hasMore = visibleCount < shuffled.length;

  return (
    <section className={styles.portfolioSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Real-world examples of how we have helped companies achieve their marketing objectives.
          </h2>
          <div className={styles.filters}>
            {filters.map(f => (
              <button
                key={f.id}
                className={`${styles.filterButton} ${activeFilter === f.id ? styles.active : ''}`}
                onClick={() => { setActiveFilter(f.id); setVisibleCount(INITIAL_ITEMS_TO_SHOW); }}
                disabled={filterCounts[f.id] === 0 && f.id !== 'all'}
              >
                {f.label} [{filterCounts[f.id] ?? 0}]
              </button>
            ))}
          </div>
        </div>

        <div style={{ minHeight: 300 }}>
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

        {isClient && hasMore && (
          <div className={styles.showMoreContainer}>
            <button
              className={styles.showMoreButton}
              onClick={() => setVisibleCount(prev => Math.min(prev + ITEMS_PER_LOAD, shuffled.length))}
            >
              Show More ({shuffled.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </div>

      <Modal
        open={modalIsOpen}
        onClose={closeModal}
        center
        classNames={{ overlay: styles.customOverlay, modal: styles.customModal }}
        animationDuration={600}
      >
        {selectedItem && <ModalContent item={selectedItem} />}
      </Modal>
    </section>
  );
};

export default PortfolioGrid;

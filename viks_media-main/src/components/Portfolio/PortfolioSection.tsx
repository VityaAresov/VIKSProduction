import React, {useState, useEffect} from 'react';
import styles from './PortfolioSection.module.css';
import PortfolioCard from './PortfolioCard';


import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';
import type SwiperCore from 'swiper';


import 'swiper/css';


interface PortfolioItem {
    id: string;
    category: string;
    imageUrl: string;
    title: string;
    description: string;
    clientInfo: string | null;
    detailsLink: string;
}

const uniqueCats = Array.from(new Set(portfolioItems.map(i => i.category)));

const filters = [
  { id: 'all', label: 'All Work', count: portfolioItems.length },
  ...uniqueCats.map(cat => ({
    id: cat,
    // для читабельности можно маппить id → человекочитаемый label:
    label: {
      uiux: 'UI/UX Design',
      marketing: 'Digital Marketing',
      branding: 'Branding',
      // …другие
    }[cat] ?? cat,
    count: portfolioItems.filter(i => i.category === cat).length
  }))
];

const portfolioItems: PortfolioItem[] = [
    {
        id: 'item1',
        category: 'webdev',
        imageUrl: '/images/blog_image.png',
        title: "3WH Boosts OzParty's Bucks Bookings by 36%",
        description: "A series of landing page redesigns...",
        clientInfo: null,
        detailsLink: '#'
    },
    {
        id: 'item2',
        category: 'marketing',
        imageUrl: '/images/blog_image.png',
        title: "3WH's Successful Google Analytics 4 Implementation for Convertr",
        description: "3WH's Google Analytics 4 rollout...",
        clientInfo: "Convertr. 2023",
        detailsLink: '#'
    },
    {
        id: 'item3',
        category: 'branding',
        imageUrl: '/images/blog_image.png',
        title: "The Lead Management Operating System",
        description: "A comprehensive system designed...",
        clientInfo: "Lead OS Inc. 2024",
        detailsLink: '#'
    },
    {
        id: 'item4',
        category: 'webdev',
        imageUrl: '/images/blog_image.png',
        title: "Another UI/UX Project Showcase",
        description: "Leveraging modern design principles...",
        clientInfo: "AppDev Co. 2023",
        detailsLink: '#'
    },
    {
        id: 'item5',
        category: 'webdev',
        imageUrl: '/images/blog_image.png',
        title: "Third UI/UX Example Card",
        description: "Focusing on user experience flow...",
        clientInfo: "UX Masters. 2024",
        detailsLink: '#'
    },

];


const PortfolioSection: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<string>('uiux');
    const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);

    const [slidesPerViewValue, setSlidesPerViewValue] = useState<number>(1);

    const filteredItems = activeFilter === 'all'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeFilter);


    useEffect(() => {

        if (swiperInstance?.params?.slidesPerView) {
            const currentSlidesPerView = swiperInstance.params.slidesPerView;

            const numValue = typeof currentSlidesPerView === 'number'
                ? currentSlidesPerView
                : 1;
            setSlidesPerViewValue(numValue);
        } else if (!swiperInstance) {

            setSlidesPerViewValue(1);
        }


    }, [swiperInstance]);


    const handlePrev = () => {
        swiperInstance?.slidePrev();
    };

    const handleNext = () => {
        swiperInstance?.slideNext();
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
                                onClick={() => setActiveFilter(filter.id)}
                            >
                                {filter.label} [{filter.count}]
                            </button>
                        ))}
                    </div>
                </div>


                <div className={styles.sliderArea}>
                    {filteredItems.length > 0 ? (
                        <Swiper
                            onSwiper={setSwiperInstance}
                            modules={[Navigation, Pagination]}
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={filteredItems.length > 1}
                            className={styles.swiperInstance}
                            breakpoints={{

                                769: {
                                    slidesPerView: 2,
                                    spaceBetween: 30
                                },
                            }}
                        >
                            {filteredItems.map(item => (
                                <SwiperSlide key={item.id} className={styles.swiperSlide}>
                                    <PortfolioCard item={item}/>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <p className={styles.noItemsMessage}>
                            Нет работ для отображения в этой категории.
                        </p>
                    )}


                    {filteredItems.length > slidesPerViewValue && (
                        <div className={styles.customNavigation}>
                            <button
                                className={`${styles.navButton} ${styles.navButtonPrev}`}
                                onClick={handlePrev}
                                aria-label="Previous work"
                            >
                                &larr;
                            </button>
                            <button
                                className={`${styles.navButton} ${styles.navButtonNext}`}
                                onClick={handleNext}
                                aria-label="Next work"
                            >
                                &rarr;
                            </button>
                        </div>
                    )}

                </div>

            </div>
        </section>
    );
};

export default PortfolioSection;

import React, {JSX} from "react";
import Image from "next/image";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Autoplay} from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';

import styles from "./Box.module.css";


import rectangle23805 from "../../../public/images/rectangle-23805.png";
import trendingUp from "../../../public/images/trending-up.png";

import groupImageRight from "../../../public/images/Frame 427321480.png";


const statsData = [
    {id: 1, number: "230+", description: "some big companies that we work with, and trust us very much"},
    {id: 2, number: "98%", description: "customer satisfaction rate across all our projects"},
    {id: 3, number: "10+", description: "years of experience helping businesses grow and succeed"}
];


export const Box = (): JSX.Element => {
    return (
        <div className={styles.box}>
            <div className={styles.overlapGroup}>
                
                <Image
                    className={styles.rectangle}
                    alt="Abstract background shape"
                    src={rectangle23805}
                    width={471}
                    height={443}
                    priority
                />
                


                
                <div className={styles.statsSliderContainer}>
                    
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={1}
                        slidesPerView={1}
                        pagination={{
                            type: 'progressbar',
                            clickable: false,
                            el: `.${styles.swiperPaginationProgressbarCustom}`,
                        }}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        className={styles.swiperWrapper}
                    >
                        {statsData.map((stat) => (
                            <SwiperSlide key={stat.id} className={styles.swiperSlide}>
                                <div className={styles.slideContent}>
                                    <div className={styles.statsNumber}>{stat.number}</div>
                                    <p className={styles.statsDescription}>
                                        {stat.description}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                        
                        <div className={styles.swiperPaginationProgressbarCustom}></div>
                    </Swiper>
                </div>
                

                
                <div className={styles.group2}>
                    
                    <div className={styles.group2TextContent}>
                        
                        <div className={styles.group2HeaderRow}>
                            <div className={styles.group2Divider}></div>
                            
                            <p className={styles.group2Subtitle}>       
                                Drive More Traffic and Sales
                            </p>
                        </div>
                        
                        <h3 className={styles.group2Title}>
                            Drive more traffic<br/>
                            and product sales
                        </h3>
                    </div>

                    
                    <div className={styles.group2ImageWrapper}>
                        <Image
                            className={styles.group2Image}
                            alt="Visual representation for traffic and sales"
                            src={groupImageRight}
                            width={100}
                            height={80}
                        />
                    </div>
                </div>
                


                
                <div className={styles.trendingUpWrapper}>
                    <Image
                        className={styles.trendingUp}
                        alt="Trending up icon"
                        src={trendingUp}
                        width={48}
                        height={48}
                    />
                </div>
                

            </div>
            
        </div>
    );
};
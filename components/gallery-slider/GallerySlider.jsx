import React, { useEffect, useRef } from 'react';
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './style/gallery-slider.module.scss'
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Controller } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/controller'
import 'swiper/css/effect-fade'
import { EffectFade } from 'swiper';

export default function GallerySlider(props) {
    const gallerySwiperRef = useRef(null);
    const thumbnailSwiperRef = useRef(null);
  
    const thumbnailSwiperParams = {
       
        containerclass: 'swiper_container thumbnail_slider',
        breakpoints: {
            993: {
                slidesPerView: 7,
            }
        }
    };
    useEffect(() => {
        const gallerySwiper = gallerySwiperRef.current.swiper;
        const thumbnailSwiper = thumbnailSwiperRef.current.swiper;
        if (gallerySwiper.controller) {
            gallerySwiper.controller.control = thumbnailSwiper;
            thumbnailSwiper.controller.control = gallerySwiper;
        }
    }, []);

   

    return (
        <div className={[styles.gallery_slider_container,].join(' ')}>
           

           
            <Swiper  ref={gallerySwiperRef}
             className={[styles.swiper_container,styles.gallery_slider].join(' ')}
             spaceBetween={50}
             slidesPerView={1}
             navigation
             pagination={{ clickable: true }}
             scrollbar={{ draggable: true }}
             effect="fade"
             modules={[Navigation, Pagination, Scrollbar,Controller,EffectFade]}
             
             >
                {
                    (props?.slideData || []).map((data, i) => (
                       
                             <SwiperSlide>
                             <Image src={data?.img} alt={data?.alt} className={styles.img}/>
                             </SwiperSlide>
                           
                    
                    ))
                }
            </Swiper>
           
            <Swiper 
             modules={[Controller]}
             ref={thumbnailSwiperRef} 
             className={[styles.swiper_container,styles.thumbnail_slider].join(' ')}
             spaceBetween= {18}
             centeredSlides= {true}
             slidesPerView={5} 
             touchRatio={0.2}
             slideToClickedSlide= {true}
             >
                {
                    (props?.slideData || []).map((data, i) => (
                     
                             <SwiperSlide>
                             <Image src={data?.img} alt={data?.alt} className={styles.secImg}/>
                             </SwiperSlide>
                          
                    
                    ))
                }
            </Swiper>
           
        </div>
    );
}

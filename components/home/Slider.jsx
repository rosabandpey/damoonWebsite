import SwiperCore, { Navigation, Pagination, Controller, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
// import 'swiper/components/navigation/navigation.min.css';
// import 'swiper/components/pagination/pagination.min.css';
import 'swiper/css';
import styles from './style/slider.module.scss'
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';


export default function Slider(props) {

    // let pagination = false;
    // if (props?.pagination) {
    //     if (props?.pagination === true) {
    //         pagination = { clickable: true };
    //     } else {
    //         pagination = props?.pagination;
    //     }
    // }

    return (
        <Swiper
            dir="rtl"
            grabCursor
            {...props}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={0}
            breakpoints={{
                576.1: {
                    spaceBetween: 50
                }
            }}
            className={styles.slider_component_container}
        >
            {
                (props.children || []).map((child, i) => (
                    <SwiperSlide key={i}>
                        {child}
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}

import Slider from '../../components/home/Slider';
import SlideCard from '../../components/home/SlideCard';
import styles from './style/blog-slider.module.scss'

export default function BlogSlider(props) {

    return (
        <section className={styles.blog_slider_section}>
            <div className={styles.container}>
                <h3 className={styles.section_title}>
                    {props?.title}
                </h3>
                <Slider
                    autoplay
                    navigation
                    pagination
                    spaceBetween={0}
                    breakpoints={{
                        576.1: {
                            spaceBetween: 50
                        }
                    }}
                >
                    {
                        (props?.slideData || []).map((data, i) => (
                            <SlideCard key={i} cardData={data}/>
                        ))
                    }
                </Slider>
            </div>
        </section>
    );
}

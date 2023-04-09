
import banner1 from '../../assets/img/banner/banner-1.jpg';
import banner2 from '../../assets/img/banner/banner-2.jpg';
import banner3 from '../../assets/img/banner/banner-3.jpg';
import banner4 from '../../assets/img/banner/banner-4.jpg';
import Image from 'next/image'
import styles from './style/main-section.module.scss'

export default function MainSection() {
    let banner = [banner1, banner2, banner3, banner4];


    return (
        <section className={styles.main_section}>
            <div  className={styles.container}>
                <div className={styles.section_content}>
                    <h2 className={[styles.main_title,styles.text_info].join(' ')}>
                        آتیه خود را
                        <br/>
                        با ما بسازید
                    </h2>
                    <a className={[styles.btn , styles.btn_pill , styles.btn_lg , styles.btn_info].join(' ')} href="https://sejam.atieh-broker.ir">
                        ثبت ‌نام غیر حضوری
                    </a>
                    <a className={[styles.btn , styles.btn_pill , styles.btn_lg , styles.btn_success].join(' ')} href="https://atieh.ebgo.ir/Login">
                        سامانه بورس کالا
                    </a>
                </div>
                <div className={styles.section_banner}>
                    <figure>
                        <Image src={banner[Math.floor(Math.random()*4)]} alt="آتیه خود را با ما بسازید"/>
                    </figure>
                </div>
            </div>
        </section>
    );
}

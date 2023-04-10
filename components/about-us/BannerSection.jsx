import logo from '../../assets/img/logo.jpg';
import Image from 'next/image'
import styles from './style/BannerSection.module.scss'

export default function BannerSection(props) {

    const data = props?.data;

    return (
        <section className={styles.educationBannerSection}>
            <div className={styles.container}>
                <div className={styles.titleContent}>
                    <Image src={logo} alt="دامون" />
                    <div className={styles.titles}>
                        <h2 className={styles.bannerTitle}>{data?.title}</h2>
                        <h3 className={styles.sectionDesc}>{data?.subtitle}</h3>
                    </div>
                </div>
                <ul className={styles.socialMediaList}>
                    {
                        (data?.socialLink || []).map((item, i) => (
                            <li key={i}>
                                <a className={styles.socialLink} href={item?.link}>
                                    {item?.icon}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
}

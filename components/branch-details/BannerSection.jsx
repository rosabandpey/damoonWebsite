
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import styles from './style/banner-section.module.scss'

export default function BannerSection(props) {

    const data = props?.data;

    return (
        <section className={styles.branch_details_banner_section}
            style={{backgroundImage: `url(${data?.bannerImg})`}}
        >
            <div className={styles.container_wrapper}>
                <div className={styles.banner_content}>
                    <div className={styles.container}>
                        <h2 className={styles.banner_title}>
                            {data?.title}
                        </h2>
                        <h4 className={styles.banner_subtitle}>
                            {data?.subtitle}
                        </h4>
                        <ExpandCircleDownIcon className={styles.down_icon} viewBox="6 8 12 8"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

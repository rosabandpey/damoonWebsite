import styles from './style/banner-section.less';

export default function BannerSection(props) {

    const data = props?.data;

    return (
        <section className={styles.branches_banner_section}
            style={{backgroundImage: `url(${data?.bannerImg})`}}>
            <div className={styles.container}>
                <h2 className={styles.banner_title}>{data?.title1}</h2>
                <h2 className={styles.banner_title}>{data?.title2}</h2>
            </div>
        </section>
    );
}

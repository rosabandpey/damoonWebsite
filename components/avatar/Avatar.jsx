import Image from 'next/image'
import styles from './style/Avatar.module.scss'

export default function Avatar(props) {

    const data = props?.data;
    return (
        <div className={styles.avatar_container}>
            <figure className={styles.avatar_banner}>
                <Image src={data?.img} alt={data?.alt}/>
            </figure>
            <h3 className={[styles.avatar_title, styles.text_info].join(' ') }>
                {data?.title}
            </h3>
            <h3 className={styles.avatar_subtitle}>
                {data?.subtitle}
            </h3>
            <p className={styles.avatar_text}>
                {data?.text}
            </p>
            <ul className={styles.avatar_social_list}>
                {
                    (data?.socialList || []).map((item, i) => (
                        <li key={i}>
                            <a href={item?.link}>
                                {item?.icon}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

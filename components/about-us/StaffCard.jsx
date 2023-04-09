import { QuoteIcon } from '../../components/icon/SvgIcon.jsx';
import Image from 'next/image'
import styles from './style/StaffCard.module.scss'

export default function StaffCard(props) {

    const data = props?.data;

    return (
        <div className={styles.staffCardContainer}>
            <div className={styles.staffCardContent}>
                <h3 className={styles.staff_card_title}>
                    {data?.title}
                </h3>
                <h3 className={[styles.staff_card_subtitle, styles.section_desc].join(' ') }>
                    {data?.subtitle}
                </h3>
                {
                    (data?.posts || []).map((item, i) => (
                        <p key={i}
                            className={[styles.staff_post, styles.section_desc].join(' ') }
                        >
                            {item}
                        </p>
                    ))
                }
                {
                    data?.quote ?
                    <blockquote className={[styles.staff_qoute , styles.section_desc].join(' ') }>
                        <QuoteIcon />
                        {data?.quote}
                    </blockquote>
                    : null
                }
            </div>
            <div className={styles.staff_card_social}>
                <ul className={styles.staff_social_list}>
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
            <figure className={styles.staff_card_banner}>
                <Image src={data?.banner} alt={data?.bannerAlt}/>
            </figure>
        </div>
    );
}

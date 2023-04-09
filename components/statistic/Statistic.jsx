
import styles from './style/Statistic.module.scss'

export default function Statistic(props) {

    const data = props?.data;

    return (
        <div className={styles.statistic_container}>
            <div className={styles.statistic_icon}>
                {data?.icon}
            </div>
            <h4 className={[styles.statistic_title , styles.section_desc].join(' ')}>
                {data?.title}
            </h4>
            <h5 className={[styles.statistic_value , styles.section_desc].join(' ')}>
                {data?.value}
            </h5>
        </div>
    );
}

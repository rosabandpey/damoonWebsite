
import Image from 'next/image'
import styles from './style/slide-card.module.scss'

export default function SlideCard(props) {

    const cardData = props.cardData;

    return (
        <div className={styles.slider_card_container}>
            <figure className={styles.card_banner}>
                <Image
                    src={cardData?.banner?.src}
                    alt={cardData?.banner?.alt}
                />
            </figure>
            <div className={styles.card_content}>
                <h3 className={styles.card_title}>
                    {cardData?.title}
                </h3>
                <p className={styles.card_text}>
                    {cardData?.text}
                </p>
                <div className={styles.card_actions}>
                    <a className={[styles.btn , styles.btn_sm , styles.btn_pill , styles.btn_danger].join(' ')}
                        href={cardData?.link}>
                        مقاله
                    </a>
                    <a className={[styles.btn , styles.btn_sm , styles.btn_pill , styles.btn_danger].join(' ')}
                        href={cardData?.link}>
                        تحلیل
                    </a>
                </div>
            </div>
        </div>
    );
}

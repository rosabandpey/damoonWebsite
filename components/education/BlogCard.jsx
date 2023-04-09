import Link from "next/link";
import Image from 'next/image'
import styles from './style/blog-card.module.scss'

export default function BlogCard(props) {

    const cardData = props?.cardData;

    return(
        <div className={styles.blog_card_container}>
            <div className={styles.card_content}>
                <h3 className={styles.card_title}>
                    {cardData?.title}
                </h3>
                <p className={styles.card_text}>
                    {cardData?.text}
                </p>
                {
                    cardData?.price ?
                    <h4 className={styles.card_price}>
                        {cardData?.priceTitle}
                        &nbsp;
                        &nbsp;
                        {cardData?.price}
                        &nbsp;
                        {cardData?.priceUnit}
                    </h4>
                    : null
                }
                <Link
                    href={cardData?.link}
                    className={[styles.btn , styles.btn_pill  , cardData?.btnColorType,].join(' ') }
                >
                    {cardData?.btnTitle}
                </Link>
            </div>
            <figure className={styles.card_banner}>
                <Image
                    src={cardData?.bannerImg}
                    alt={cardData?.bannerAlt}
                />
            </figure>
        </div>
    );
}

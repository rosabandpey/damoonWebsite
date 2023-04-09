import Image from 'next/image'
import styles from './style/LicenseCard.module.scss'

export default function LicenseCard({img, alt, title}) {

    return (
        <div className={styles.licenseCardContainer}>
            <figure className={styles.licenseBanner}>
                <Image src={img} alt={alt}/>
            </figure>
            <h4 className={styles.licenseTitle}>
                {title}
            </h4>
        </div>
    );
}

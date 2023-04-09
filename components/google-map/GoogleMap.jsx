
import styles from './style/google-map.module.scss'

export default function GoogleMap(props) {
    return (
        <div className={styles.google_map_container}>
            <iframe
                loading="lazy"
                allowFullScreen=""
                title="google_map"
                src={props.mapSrc}
            ></iframe>
        </div>
    );
}

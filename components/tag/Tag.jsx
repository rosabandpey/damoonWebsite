import { useState } from 'react';
import styles from './style/tag.module.scss'

export default function Tag(props) {

    const [closed, setClose] = useState(false)

    const removeTag = () => {
        if (props?.onClose) {
            props.ocClose();
        } else {
            setClose(true);
        }
    }

    return (
        (
            closed ? null :
            <div className={styles.tag_container}>
                {
                    props?.closable ?
                    <span className={styles.tag_btn}
                        onClick={removeTag}>
                        x
                    </span>
                    : null
                }
                <span className={styles.tag_title}>{props?.title}</span>
            </div>
        )
    );
}

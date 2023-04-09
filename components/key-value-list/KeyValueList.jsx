import React from 'react';
import styles from './style/key-value-list.module.scss'

export default function KeyValueList(props) {

    const keyIdx = props?.keyIdx || 'key';
    const valueIdx = props?.valueIdx || 'value';
    const itemList = props?.itemList || [];

    return (
        <div className={styles.key_value_list_container}>
            {
                itemList.map((item, i) => (
                    <React.Fragment key={i}>
                        <span className={styles.key_item  + (item?.keyClass || '')}>
                            {item[keyIdx]}
                            {props?.colon ? ':' : ''}
                        </span>
                        <span className={styles.value_item  + (item?.valueClass || '')}>
                            {item[valueIdx]}
                            {item?.valueIcon}
                        </span>
                    </React.Fragment>
                ))
            }
        </div>
    );
}

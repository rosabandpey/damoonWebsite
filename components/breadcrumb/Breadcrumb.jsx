import Link from 'next/link';
import { Fragment } from 'react';
import styles from './style/breadcrumb.module.scss'


export default function Breadcrumb(props) {

    let itemList = props?.itemList || [];
    const l = itemList.length;
    const lastItem = itemList[l - 1];
    itemList = itemList.slice(0, l - 1);

    const performItem = (item, isLast=false) => {
        let className = 'breadcrumb_item';
        if (!isLast) {
            className += 'text_info';
        }
        return (
            item?.link ? 
            <Link href={item.link}
                className={styles.text_info}>
                {item?.title}
            </Link>
            :
            <span className={styles.className}>
                {item?.title}
            </span>
        );
    }

    return (
        <div className={styles.breadcrumb_container}>
            {
                itemList.map((item, i) => (
                    <Fragment key={i}>
                        {
                            performItem(item)
                        }
                        <span className={[styles.breadcrumb_sep, styles.text_info].join(' ') }>
                            {props?.separator || '/'}
                        </span>
                    </Fragment>
                ))
            }
            {
                lastItem ? performItem(lastItem, true) : null
            }
        </div>
    );
}

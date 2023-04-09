import { useState } from 'react';
import SortIcon from '@mui/icons-material/Sort';
import styles from './style/sort-filter.module.scss'

export default function SortFilter(props) {

    const [activeIdx, setActiveIdx] = useState(props?.activeIdx || 0);

    const onBranchClick = (i, item) => {
        if (props?.onBranchClick) {
            props.onBranchClick(i, item);
        } else {
            setActiveIdx(i);
        }
    }

    return (
        <div className={styles.sort_filter_container}>
            <SortIcon />
            <span className="title">
            مرتب‌سازی براساس:
            </span>
            {
                (props?.itemList || []).map((item, i) => (
                    <button key={i}
                        className={[styles.btn , styles.btn_sm , styles.btn_pill + (activeIdx === i ? ' btn_info' : '')].join(' ') }
                        onClick={() => onBranchClick(i, item)}
                    >
                        {item?.title}
                    </button>
                ))
            }
        </div>
    );
}

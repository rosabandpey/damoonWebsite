
import styles from './style/filter-card.module.scss'

export default function FilterCard(props) {

    let itemList = props?.children || [];
    if (itemList?.length === undefined) {
        itemList = [itemList]
    }

    return(
        <div className={styles.filter_card_container}>
            <div className={[styles.filter_card_header , styles.section_desc].join(' ') }>
                <h4 className={styles.filter_card_title}>
                    {props?.title}
                </h4>
            </div>
            <div className={styles.filter_card_body + (props?.column ? ' col_child' : '')}>
                {
                    itemList.map(ch => ch)
                }
            </div>
        </div>
    );
}

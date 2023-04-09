import { useState } from 'react';
import Table from '@components/table/Table';
import styles from './style/table-section.less';





export default function TableSection(props) {
    
    const data = props?.data;

    const getDataByIdx = i => {
        const dataSrc = (data?.branchList || [])[i];
        return dataSrc?.data || [];
    }

    const [activeIdx, setActiveIdx] = useState(props?.activeIdx || 0);

    const onBranchClick = i => {
        console.log(i);
        // if (props?.onBranchClick) {
        //     props.onBranchClick(i);
        // } else {
            setActiveIdx(i);
        // }
    }

    return (
        <section className={styles.branch_table_section}>
            <div className={styles.container}>
                <h2 className={styles.main_title}>
                    {data?.title}
                </h2>
                <div>
                    {
                        (data?.textList || []).map((txt, i) => (
                            <p key={i} className={styles.section_desc}>
                                {txt}
                            </p>
                        ))
                    }
                </div>
                <div className={styles.table_data}>
                    {
                        (data?.branchList || []).map((branch, i) => (
                            <button key={i}
                                className={[styles.btn ,styles.btn_xl + (activeIdx === i ? ' btn_info' : ' btn_gray')].join(' ') }
                                onClick={() => onBranchClick(i)}>
                                {branch?.title}
                            </button>
                        ))
                    }
                    <div className={styles.table_container_wrapper}>
                        <div className={styles.table_container}>
                        <Table
                            columnList={data?.tableColumns || []}
                            dataSource={getDataByIdx(activeIdx)}
                        />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

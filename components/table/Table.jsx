import  styles from './style/table.module.scss';

const toPersianPhoneNumber = (phone) => {
    
    console.log(phone)
    phone = phone.toString();
    if(phone.match(/\d/)) {
    const persian = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return phone.split("").map(p => {
        return persian[p]
    }).join("")
} else {
    return phone
}
}

// console.log(toPersianPhoneNumber("021668622545"));


export default function Table(props) {

    const columnList = props?.columnList || [];
    const dataSource = props?.dataSource || [];
    console.log(columnList);
    console.log(dataSource);

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    {
                        columnList.map((col, i) => (
                            <th
                                key={i}
                                className={col?.className}
                                style={{textAlign: col?.align}}
                            >
                                {col?.title}
                            </th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    dataSource.map((row, i) => (
                        <tr key={i} className={columnList[i]?.className}>
                            {/* <td>
                                {toPersianPhoneNumber(String(i+1))}
                            </td> */}
                            {
                                columnList.map((col, j) => (
                                    <td
                                        key={j}
                                        className={col?.className}
                                        style={{textAlign: col?.align}}
                                    >
                                        {
                                            (j === 4) 
                                                ? 
                                                <a href={`tel:${row[col?.dataIndex]}`} >{toPersianPhoneNumber(row[col?.dataIndex])}</a> 
                                                :
                                                (j === 0) ? toPersianPhoneNumber(row[col?.dataIndex], row, j)
                                                : 
                                                row[col?.dataIndex]
                                        }
                                    </td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

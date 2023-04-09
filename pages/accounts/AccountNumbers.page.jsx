
import styles from './AccountNumbers.page.module.scss'





import { useEffect, useState } from 'react';
import Image from 'next/image'

function PersianNum(value) {
  const persian = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  let perValue = "";
  if (value) {
    
    perValue = value.toString().split("").map((num) => {
      
      if (!isNaN(num)) {
        return persian[+num]
      } else {
        return num
      }
    }).join("")
  }
  return perValue;
}


export default function AccountNumbers({accountsData}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
      <div className={styles.container} style={{ marginTop: '2rem' }}>
        <h1>شماره حساب ها</h1>
        <br />
        <table className={styles.table}>
          <thead>
            <tr className={styles.tr}>
              <th className={styles.th}>بانک</th>
              <th className={styles.th}>شماره حساب</th>
              <th className={styles.th}>نام شعبه</th>
              <th className={styles.th}>کد شعبه</th>
              <th className={styles.th}>شماره شبا</th>
            </tr>
          </thead>
          <tbody>
            {
              accountsData.map(ac => {
                return <tr className={styles.row}>

                  <td className={styles.td}><Image src={ac.BankLogoSrc} alt="آتیه" width="50px" height='50px'/> {ac.bankName}</td>
                  <td className={styles.td}>{PersianNum(ac.accountNumber)}</td>
                  <td className={styles.td}>{ac.branchName}</td>
                  <td className={styles.td}>{PersianNum(ac.branchCode)}</td>
                  <td className={styles.td}>{PersianNum(ac.sheba)}</td>
                </tr>
              })
            }
          </tbody>
        </table>
        <br />
        <br />
      </div>
    </>

  )
}

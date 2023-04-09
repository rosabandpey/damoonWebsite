import banner from '../../assets/img/pages/offline.jpg';
import Image from 'next/image'
import styles from './Offline.module.scss'


import { useEffect, useState } from 'react';
import Link from 'next/link';



export default function OfflinePage(props) {

    useEffect(()=> {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className={styles.container} style={{marginTop: '2rem'}}>
                <Image src={banner} alt="سامانه آفلاین پلاس کارگزاری آتیه" width="100%" />
                <h1>سامانه آفلاین</h1>
                <p>سامانه آفلاین جایگزینی برای زمان هایی است که در ساعت معاملات به سامانه آنلاین دسترسی ندارید یا مهارت لازم برای انجام معاملات آنلاین را ندارید. از طریق این سامانه میتوانید سفارشات خود را در هر ساعت از شبانه روز وارد کنید و معامله گران کارگزاری سفارش شما را طبق تقاضا و دستور شما انجام می دهند. لازم به ذکر است که این سامانه برای محیط دسکتاپ توسعه داده شده و بهتر است از موبایل برای ورود به این سامانه استفاده نکنید.</p>
                <br />
                <p><b>از جمله امکانات این سامانه میتوان به موارد زیر اشاره کرد:</b></p>
                <ul>
                    <li>ثبت سفارش خرید و فروش به صورت 24 ساعته</li>
                    <li>مشاهده پرتفوی سپرده گذاری</li>
                    <li>واریز و برداشت وجه آنلاین</li>
                    <li>مشاهده دفتر حساب</li>
                    <li>تغییر کارگزار ناظر</li>
                </ul>
                <br />
                <p>برای ورود به سامانه آفلاین روی لینک زیر کلیک کنید:</p>
                <br />
                <Link className={[styles.btn ,styles.btn_pill ,styles.btn_lg ,styles.btn_info].join(' ')} href="https://c.atieh-broker.ir" target='_blank'>
                    سامانه آفلاین 
                </Link>
                <p style={{marginBottom: '3rem'}}></p>
            </div>
        </>

    )
}

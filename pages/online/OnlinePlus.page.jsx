
import banner from '../../assets/img/pages/online.jpg';
// import help from '../../assets/img/pages/rahnama-online-plus.pdf'
import Image from 'next/image'
import styles from './about-us.module.scss'

import { useEffect, useState } from 'react';
import Link from 'next/link';



export default function OnlinePlus(props) {
    useEffect(()=> {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className={styles.container} style={{marginTop: '2rem'}}>
                <Image src={banner} alt="سامانه آفلاین پلاس کارگزاری آتیه" width="100%" />
                <h1>سامانه آنلاین پلاس</h1>
                <p>
                سامانه آنلاین پلاس کارگزاری آتیه، یکی از بهترین نرم افزارهای معاملاتی می باشد که در عین سادگی در استفاده امکانات بسیار زیادی را در خود جای داده است که از مهمترین امکانات این سامانه می توان به موارد زیر اشاره کرد: 
                </p>
                <ul>
                    <li>ارسال سفارشات پیشرفته</li>
                    <li>ارسال سفارشات دسته ای</li>
                    <li>ارسال سفارشات بزرگ و تقسیم سفارشات</li>
                    <li>حذف و ویرایش گروهی سفارشات</li>
                    <li>ایجاد پرتفوی دلخواه و محاسبه سود و زیان (پرتفوی لحظه ای)</li>
                    <li>مشاهده پرتفوی سپرده گذاری</li>
                    <li>ابزار تحلیل تکنیکال</li>
                    <li>سبدبان</li>
                    <li>دیده بان بازار</li>
                    <li>واریز و برداشت وجه آنلاین</li>
                    <li>مشاهده دفتر حساب</li>
                    <li>تغییر کارگزار ناظر</li>
                    <li>قابلیت سفارش سازی صفحه</li>
                    <li>اطلاعات مجامع</li>
                    <li>اطلاعات معاملات حقیقی و حقوقی</li>
                </ul>
                <br />
                <p>برای ورود به سامانه آنلاین پلاس روی لینک زیر کلیک کنید:</p>
                <br />
                <Link className={[styles.btn ,styles.btn_pill ,styles.btn_lg ,styles.btn_info].join(' ')}  href="http://silver.atieh-broker.ir" target='_blank'>
                    ورود به آنلاین پلاس
                </Link>
                &nbsp;&nbsp; <a target="_blank" href={''} style={{textDecoration: 'underline'}}>دانلود راهنمای استفاده از آنلاین پلاس </a>
                <p style={{marginBottom: '3rem'}}></p>
            </div>
        </>

    )
}


import banner from '../../assets/img/pages/hamrah.jpg';
// import help from '../../assets/img/pages/rahnama-hamrah-plus.pdf';
import styles from './about-us.module.scss'


import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';



export default function HamrahPlus(props) {
    useEffect(()=> {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className={styles.container} style={{marginTop: '2rem'}}>
                <Image src={banner} alt="سامانه آفلاین پلاس کارگزاری آتیه" width="100%" />
                <h1>سامانه همراه پلاس</h1>
                <p>نرم افزار همراه پلاس با هدف دسترسی راحت تر مشتریان به سامانه معاملات آنلاین راه اندازی شده تا مشتریان بتوانند بدون استفاده از کامپیوتر، تمامی معاملات خود را از طریق تلفن همراه خود انجام دهند. نرم افزار همراه پلاس به مشتریان این امکان را میدهد که ضمن انجام معاملات خود به صورت آنلاین، تمامی امکاناتی که در سامانه آنلاین وجود دارد را روی موبایل یا تبلت خود داشته باشند.</p>
                <p>همراه پلاس یک نرم افزار تحت وب می باشد که کاربران با هر دو سیستم عامل اندروید و ios به راحتی میتوانند از آن استفاده کنند.</p>
                <br />
                <p><b>برخی از مهمترین امکنات همراه پلاس:</b></p>
                <ul>
                    <li>ارسال سفارش</li>
                    <li>مدیریت سفارشات</li>
                    <li>نمودار تکنیکال</li>
                    <li>نقشه بازار</li>
                    <li>واریز وجه و برداشت وجه</li>
                    <li>تغییر کارگزارناظر</li>
                    <li>گردش حساب</li>
                    <li>تغییر وضعیت توافقنامه ها</li>
                    <li>دیده بان اختصاصی</li>
                    <li>سود/زیان کل</li>
                    <li>سود/زیان روزانه</li>
                    <li>ارزش کل سهام</li>
                    <li>ارزش کل دارایی</li>
                </ul>
                <br />
                <p>برای ورود به سامانه همراه پلاس روی لینک زیر کلیک کنید</p>
                <br />
                <Link className={[styles.btn ,styles.btn_pill ,styles.btn_lg ,styles.btn_info].join(' ')} href="https://mobile.atieh-broker.ir/" target='_blank'>
                    ورود به همراه پلاس
                </Link>
                &nbsp;&nbsp; <a target="_blank" href={''} style={{textDecoration: 'underline'}}>دانلود راهنمای استفاده از همراه پلاس </a>
                <p style={{marginBottom: '3rem'}}></p>
            </div>
        </>

    )
}

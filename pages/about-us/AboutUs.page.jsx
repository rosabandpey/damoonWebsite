import { Helmet, HelmetProvider } from 'react-helmet-async';
import BannerSection from '../../components/about-us/BannerSection';
import StaffCard from '../../components/about-us/StaffCard';

import Statistic from '../../components/statistic/Statistic';
import Avatar from '../../components/avatar/Avatar';

import {
    bannerSectionData,
    statisticData,
    staffCardData,
    managerList,
    galleryList,
    licenseList,
} from './constants';

import Image from 'next/image'
import { useEffect, useState } from 'react';
import styles from './AboutUs.module.scss'


export default function AboutUs({
 
   
    managerList,}) {
    const [accounts, setAccounts] = useState([]);

    // useEffect(() => {
    //     fetch("https://reg.atieh-broker.ir/api/wp-json/wp/v2/accounts")
    //         .then(res => res.json())
    //         .then(data => {
    //             setAccounts(data)
    //         })
    // }, [])
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
         <HelmetProvider >
         <Helmet title="درباره ما"></Helmet>
         </HelmetProvider>
           
            <BannerSection data={bannerSectionData} />
            <br /><br />
            {/* <section className="accounts">
                <div className="row head">
                    <span>نام بانک</span>
                    <span>شماره حساب</span>
                    <span>نام شعبه</span>
                    <span>کد شعبه</span>
                    <span>کد شبا</span>
                </div>
                {
                    accounts.map(ac => {
                        return <div class="row">
                            
                            <span><img src={ac.acf.BankLogoSrc} alt="آتیه"/> {ac.title.rendered}</span>
                            <span>{ac.acf.AccountNumber}</span>
                            <span>{ac.acf.BranchTitle}</span>
                            <span>{ac.acf.BranchCode}</span>
                            <span>{ac.acf.ShabaNum}</span>
                        </div>
                    })
                }
            </section> */}
            <section className={styles.aboutUsContentSection}>
                <div className={styles.container}>
                    {/* <Breadscrumb itemList={breadcrumbData}/> */}
                    <h2 className={styles.main_title}>
                        پیشرفت در ارائه بهترین خدمات
                    </h2>
                    <p className={styles.section_desc}>
                        کارگزاری آتیه همواره در ارائه
                        با کیفیت ترین و بروزترین خدمات تلاش روز افزون داشته تا با توجه
                        به گسترش بازار و حجم معاملات مشتریان این کارگزاری نسبت به سایرین
                        بیشترین پایداری را در خدمات دریافتی خود تجربه کنند و بتوانند در لحظه
                        بهترین های بازار را انتخاب کنند. با توجه به افزایش تعداد مشتریان
                        و کارگزاری آتیه نیز خدمات و نیروی انسانی خود را افزایش داده تا
                        مشتریان بهترین تجربه را در تمام لحظات ارتباط خود با کارگزاری حس کنند.
                    </p>
                    <div className={styles.statistic_content}>
                        {
                            statisticData.map((item, i) => (
                                <Statistic key={i} data={item} />
                            ))
                        }
                    </div>
                    <p className={styles.section_desc}>
                        شرکت کارگزاری آتیه در سال ١۳۷۴ در اداره ثبت شرکت های تهران ثبت گردید و فعالیت خود را در بورس اوراق بهادار آغاز نموده است. سرمایه شرکت کارگزاری آتیه در حال حاضر مبلغ ١۲۰ میلیارد ریال است که تا پایان سال ١۴۰١، هیأت مدیره مصمم به افزایش سرمایه شرکت به ١۰۰۰ میلیارد ریال می باشد. همچنین در راستای توسعه و ارتقای خدمات کارگزاری آتیه، بورس کلا، صندوق اختصاصی بازارگردانی آتیه باران و هلدینگ آتیه مداران راه اندازی و نیز در سال آتی، تأسیس شرکت سبد گردانی و سپس گروه خدمات مالی بازار سرمایه در دستور کار شرکت خواهد بود.
                    </p>
                </div>
            </section>
            <section>
                <div className={styles.container}>
                    <StaffCard data={staffCardData} />
                </div>
            </section>
            <section className={styles.manager_section}>
                <div className={styles.container}>
                    <h3 className={styles.main_title}>
                        مدیران کارگزاری
                    </h3>
                    <div className={[styles.manager_list, styles.double].join(' ') }>
                        {
                            managerList.slice(0, 2).map((manager, i) => (
                                <Avatar key={i} data={manager} />
                            ))
                        }
                    </div>
                    <div className={[styles.manager_list , styles.third].join(' ')}>
                        {
                            managerList.slice(2, 5).map((manager, i) => (
                                <Avatar key={i} data={manager} />
                            ))
                        }
                    </div>
                    <div className={[styles.manager_list , styles.third].join(' ')}>
                        {
                            managerList.slice(5, 7).map((manager, i) => (
                                <Avatar key={i} data={manager} />
                            ))
                        }
                    </div>
                </div>
            </section>
            {/* <section className="gallery_section">
                <div className="container">
                    <h3 className="main_title">
                        گالری تصاویر
                    </h3>
                    <GallerySlider slideData={galleryList} />
                </div>
            </section> */}
            {/* <section className="license_section">
                <div className="container">
                    <h3 className="main_title">
                        مجوزها
                    </h3>
                    <div className="license_list">
                        {
                            licenseList.map((item, i) => (
                                <LicenseCard key={i} {...item} />
                            ))
                        }
                    </div>
                </div>
            </section> */}
        </>
    );
}

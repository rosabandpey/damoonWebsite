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
           
            <section className={styles.aboutUsContentSection}>
                <div className={styles.container}>
                    {/* <Breadscrumb itemList={breadcrumbData}/> */}
                    <h2 className={styles.main_title}>
                       بزرگ ترین گروه دوچرخه‌سواری
                    </h2>
                    <p className={styles.section_desc}>
                    گروه دوچرخه‌سواری دامون در ابتدای سال ۱۳۹۸ با هدف ترویج دوچرخه‌سواری شهری، تشویق مردم به استفاده از دوچرخه بعنوان وسیله نقلیه و کمک در کم شدن ترافیک و آلودگی هوا تاسیس شد.
در طول این چهار سال فعالیت، دامون موفق به تحویل حداقل ۵۰۰ رکابزن به جامعه دوچرخه‌سواری شده است.
و در هر برنامه‌ی هفتگی شهری بصورت میانگین ۵۰ دوچرخه‌سوار را با حفظ امنیت و سلامت، از مبدا به مقاصد مختلف می‌برد.
تنوع افراد یکی از ویژگی‌های اصلی گروه دامون می‌باشد، در این گروه افراد در تمامی رده‌های سنی، اجتماعی، شغلی و تحصیلی مانند یک خانواده متحد، در کنار یک‌دیگر قرار دارند.
دامون در دوران سخت همه‌گیری کرونا توانست افراد بسیاری را به سمت دوچرخه تشویق کرده و گامی مهم در مقابله با فضای یاس جامعه بردارد.
این گروه پس از دو سال فعالیت با استقبال بالای افراد، اقدام به برگزاری تورهای خارج از شهر تهران و طبیعت زیبای ایران نمود و تجربه‌های تکرارنشدنی را برای عموم افراد با هر توان دوچرخه‌سواری رقم زد.
رسالت دامون همیشه تاثیرگذاری در جامعه، تمرین جامعه مدنی، احترام به قانون و تربیت افرادی مطالبه‌گر و قانون‌مدار بوده و خواهد بود
                    </p>
                    {/* <div className={styles.statistic_content}>
                        {
                            statisticData.map((item, i) => (
                                <Statistic key={i} data={item} />
                            ))
                        }
                    </div> */}
                    
                </div>
            </section>
            <section>
                <div className={styles.container}>
                    {/* <StaffCard data={staffCardData} /> */}
                </div>
            </section>
            <section className={styles.manager_section}>
               
            </section>
           
        </>
    );
}

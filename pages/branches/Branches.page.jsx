import { Helmet, HelmetProvider } from 'react-helmet-async';
// import BannerSection from '@components/branches/BannerSection';
// import TableSection from '@components/branches/TableSection';
// import Breadcrumb from '@components/breadcrumb/Breadcrumb';
// import bannerImg from '@assets/img/branches-banner.png';
// import { tableSectionData } from './constants';

import { useEffect, useState } from 'react';
import styles from './Branches.page.module.scss'
// const bannerSectionData = {
//     bannerImg: bannerImg,
//     title1: 'شعب',
//     title2: 'کارگزاری آتیه',
// };
// const breadcrumbData = [
//     {
//         title: 'صفحه اصلی',
//         link: '/',
//     },
//     {
//         title: 'فهرست شعب',
//     },
// ];

export default function Branches(props) {
    useEffect(()=> {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
          <HelmetProvider >
          <Helmet title="فهرست شعب"></Helmet>
          </HelmetProvider>
          
            {/* <BannerSection data={bannerSectionData} /> */}
            {/* <section className="breadcrumb-section">
                <div className="container">
                    <Breadcrumb itemList={breadcrumbData}/>
                </div>
            </section> */}
            {/* <TableSection data={tableSectionData}/> */}
            <section className={styles.branch_map_container}>
                <iframe src="https://atieh-broker.ir/static/map/index.html" title="شعب کارگزاری آتیه" frameBorder="0" width="100%" height="100%"></iframe>
            </section>
        </>
    );
}

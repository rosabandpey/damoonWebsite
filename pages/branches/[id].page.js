import { Helmet, HelmetProvider } from 'react-helmet-async';
import BannerSection from '../../components/branch-details/BannerSection';
import GallerySlider from '../../components/gallery-slider/GallerySlider';
import KeyValueList from '../../components/key-value-list/KeyValueList';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import GoogleMap from '../../components/google-map/GoogleMap';
import Statistic from '../../components/statistic/Statistic';
import Avatar from '../../components/avatar/Avatar';

import styles from './BranchDetailes.module.scss'
import { useRouter } from 'next/router';
// import {branchInfo,statisticData,bannerSectionData,breadcrumbData,managerData,galleryList,staffList} from './constants'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';




const mapSrc = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4579.434039375246!2d51.380018870392234!3d35.74714570155782!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e07f8ebacb371%3A0x121b1588e4927642!2z2KjYsdisINmF2YrZhNin2K8!5e0!3m2!1sfa!2ssg!4v1618325003385!5m2!1sfa!2ssg';

export default function BranchDetails(props) {

 
    return (
        <>
       
        <HelmetProvider >
        <Helmet title="شعبه نیاوران"></Helmet>
        </HelmetProvider>
           
            <BannerSection data={bannerSectionData}/>
            <section className={styles.branch_details_content_section}>
                <div className={styles.container}>
                    <Breadcrumb itemList={breadcrumbData}/>
                    <Avatar data={managerData}/>
                    <div className={styles.statistic_content}>
                        {
                            statisticData.map((item, i) => (
                                <Statistic key={i} data={item}/>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className={styles.branch_info_section}>
                <div className={styles.container}>
                    <div className={styles.info_side}>
                        <h3 className={styles.main_title}>
                            اطلاعات شعبه
                        </h3>
                        <KeyValueList itemList={branchInfo} colon={true}/>
                    </div>
                    <div className={styles.map_side}>
                        <GoogleMap mapSrc={mapSrc}/>
                    </div>
                </div>
            </section>
            <section className={styles.gallery_section}>
                <div className={styles.container}>
                    <h3 className={styles.main_title}>
                        گالری تصاویر
                    </h3>
                    <GallerySlider slideData={galleryList}/>
                </div>
            </section>
            <section className={styles.staff_section}>
                <div className={styles.container}>
                    <h3 className={styles.main_title}>
                        پرسنل شعبه
                    </h3>
                    <div className={styles.staff_list}>
                        {
                            staffList.map((staff, i) => (
                                <Avatar key={i} data={staff}/>
                            ))
                        }
                    </div>
                </div>
            </section>
        
        </>
    );
}




export const getStaticProps = async () => {
    return {
      props: {
        branchInfo,
      },
    };
  };
  

  export async function getStaticPaths() {
    return {
      paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
      fallback: false, // can also be true or 'blocking'
    }
  }



import BlogSlider from "../../components/home/BlogSlider";
import IntroSection from "../../components/home/IntroSection";
import RelatedSite from "../../components/home/RelatedSite";
import Head from "next/head";
import LastPrograms from "../../components/programs/lastPrograms";
import styles from './Home.module.scss'
import { educationalContents, weblogContents } from "./constants";
import Login from "../../components/home/Login";






 function HomePage({slideData,programs}) {


  return (
    <>
     
     <Head>
      <title> گروه دوچرخه‌سواری دامون | خانه</title>
    </Head>

      <div className={styles.flexRow}>
      <Login />
      <BlogSlider title="سفرهای پیش رو" slideData={slideData} />
     
      </div>
     
<div className={styles.row}>



      <LastPrograms programs={programs} title="برنامه های انجام شده"/>
    <LastPrograms programs={educationalContents} title="مطالب آموزشی"/>
    <LastPrograms programs={weblogContents} title="وبلاگ"/>
     </div>
    </>
  );
}


  


  
export default HomePage
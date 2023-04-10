

import BlogSlider from "../../components/home/BlogSlider";
import IntroSection from "../../components/home/IntroSection";
import RelatedSite from "../../components/home/RelatedSite";
import Head from "next/head";
import LastPrograms from "../../components/programs/lastPrograms";







 function HomePage({slideData,programs}) {


  return (
    <>
     
     <Head>
      <title> گروه دوچرخه‌سواری دامون | خانه</title>
    </Head>

      
      <BlogSlider title="سفرهای پیش رو" slideData={slideData} />
      <LastPrograms programs={programs} title="برنامه های انجام شده"/>
   
     
     
    </>
  );
}


  


  
export default HomePage
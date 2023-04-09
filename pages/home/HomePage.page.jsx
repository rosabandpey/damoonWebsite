import { Helmet, HelmetProvider } from "react-helmet-async";
import MainSection from "../../components/home/MainSection";
import BlogSlider from "../../components/home/BlogSlider";
import WhyAtiehSection from "../../components/home/WhyAtiehSection";
import IntroSection from "../../components/home/IntroSection";
import RelatedSite from "../../components/home/RelatedSite";
import videoPoster from "../../assets/img/video-poster.png";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Head from "next/head";
// import video from '../../assets/sample.mp4';




// const videoTutorialData = {
//   title: "ویدیوهای آموزشی",
//   linkTitle: "مشاهده همه ویدیوهای آموزشی",
//   video: "video",
//   poster: videoPoster,
// };


 function HomePage({slideData,whyAtiehSectionData,introSectionData,relatedSiteData}) {


  return (
    <>
     
     <Head>
      <title>کارگزاری آتیه | خانه</title>
    </Head>

      <MainSection />
      <BlogSlider title="مقاله‌ها و اطلاعیه‌ها" slideData={slideData} />
      <WhyAtiehSection data={whyAtiehSectionData} />
      <IntroSection data={introSectionData} />
      {/* <VideoTutorial data={videoTutorialData}/> */}
      <RelatedSite data={relatedSiteData} />
     
     
    </>
  );
}


  


  
export default HomePage
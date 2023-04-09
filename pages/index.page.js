import HomePage from './home/HomePage.page'
import {sample,whyAtiehSectionData,introSectionData,relatedSiteData} from '../pages/home/constants'
import Head from 'next/head'

export default function Home({slideData,whyAtiehSectionData,introSectionData,relatedSiteData}) {
  return (
    <>
   
    <HomePage  slideData={slideData} whyAtiehSectionData={whyAtiehSectionData} introSectionData={introSectionData} relatedSiteData={relatedSiteData}/>

    </>
  )
}


export const getStaticProps = async () => {
  return {
    props: {
      slideData: [sample],
      whyAtiehSectionData:whyAtiehSectionData,
      introSectionData:introSectionData,
      relatedSiteData:relatedSiteData,
    },
    
  }
}

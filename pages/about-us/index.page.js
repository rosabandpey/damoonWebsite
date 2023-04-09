import React from "react";
import AboutUs from "./AboutUs.page";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { managerList } from "./constants";
import Head from "next/head";

export default function aboutUs({ managerList }) {
  return (
    <>
     <Head>
      <title>کارگزاری آتیه | درباره ما</title>
    </Head>
      <AboutUs managerList={managerList} />
     
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      managerList: managerList,
    },
  };
};

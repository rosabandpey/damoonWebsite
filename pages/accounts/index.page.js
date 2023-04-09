import React from "react";
import AccountNumbers from "./AccountNumbers.page";
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import {accountsData} from './constants'

export default function accounts({accountsData}) {
  return (
    <>
    <Head>
      <title>کارگزاری آتیه | شماره حساب ها</title>
    </Head>
      <AccountNumbers accountsData={accountsData} />
      
    </>
  );
}


export const getStaticProps = async () => {
  return {
    props: {
      accountsData: accountsData,
    },
  };
};

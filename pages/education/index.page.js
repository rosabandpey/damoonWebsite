import React from "react";
import Education from "./Education.page";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { cardList, categoryItems, levelItems, sortItemList } from "./constants";

export default function education({
  cardList,
  categoryItems,
  levelItems,
  sortItemList,
}) {
  return (
    <>
      <Head>
        <title>کارگزاری آتیه | آموزش</title>
      </Head>
      <Education
        cardList={cardList}
        categoryItems={categoryItems}
        levelItems={levelItems}
        sortItemList={sortItemList}
      />
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      cardList,
      categoryItems,
      levelItems,
      sortItemList,
    },
  };
};

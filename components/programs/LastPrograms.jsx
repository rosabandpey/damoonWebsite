import React from "react";
import MediaCard from "../card/MediaCard";

import styles from "../home/style/slide-card.module.scss";

export default function LastPrograms(props) {
  return (
    <>
      
      <div className={styles.programs_content}>
      <h3 className={styles.programs_title}>{props.title}</h3>
      
      {props?.programs?.map((item) => (
          <div key={item.title} className={styles.card}>
               <MediaCard
          title={item.title}
          src={item.src}
          description={item.description}
          link={item.link}
        />
              </div>
       
      ))}
   
     
      </div>
      
    </>
  );
}

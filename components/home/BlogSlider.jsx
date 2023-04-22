// import Slider from '../../components/home/Slider';
// import SlideCard from '../../components/home/SlideCard';
// import styles from './style/blog-slider.module.scss'

// export default function BlogSlider(props) {

//     return (
       
           
               
//                 <Slider
//                     autoplay
//                     navigation
//                     pagination
//                     spaceBetween={0}
//                     breakpoints={{
//                         576.1: {
//                             spaceBetween: 50
//                         }
//                     }}
//                     className={styles.blog_slider_section}
//                 >
//                     {
//                         (props?.slideData || []).map((data, i) => (
//                             <SlideCard key={i} cardData={data}/>
//                         ))
//                     }
//                 </Slider>
           
       
//     );
// }


import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'

export default function BlogSlider({slideData}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}  >

{
                        (slideData || []).map((item, index) => (
                            <Carousel.Item key={index}>
                                <Image   src={item.src}
                              alt={item.alt}
                              className="d-flex w-100"
                              />
                          
                            <Carousel.Caption>
                              <h3>{item.title}</h3>
                              <p>{item.price}</p>
                              <p>{item.description}</p>
                            </Carousel.Caption>
                          </Carousel.Item>
                        ))
                    }
  
     
     
    </Carousel>
  );
}



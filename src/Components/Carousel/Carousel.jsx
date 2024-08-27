import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";// To add style for the carousel
import { Carousel } from 'react-responsive-carousel'
import { img } from './data'
import classes from "./carousel.module.css";
const CarouselEffect = () => {
  return (
    <div>
      <Carousel
      autoPlay={true}
        infiniteLoop={true}  
        showIndicators={false}  
   showThumbs={false}     
      >
        {/* map function to loop for each image and return the image */}
        {img.map((imageItemLink,index) => {
          return <img src={imageItemLink} key={index}/>;
  
})}
        
      </Carousel>
      {/* to add bottom effect */}
      <div className={classes.hero_img}></div>
    </div>
  )
}

export default CarouselEffect
import React from 'react';
import LayOut from '../../Components/LayOut/LayOut';

import Category from '../../Components/Category/Category';
import Product from '../../Components/product/Product';
import CarouselEffect from '../../Components/Carousel/Carousel';

const Landing = () => {
  return (
    <div>
      <LayOut>
        <CarouselEffect />
        <Category />
        <Product />
      </LayOut>
    </div>
  );
}

export default Landing
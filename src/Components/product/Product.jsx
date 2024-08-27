import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import classes from "./product.module.css";
import Loader from '../Loader/Loader';
const Product = () => {
const [products,setProducts] =useState()
const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
       setIsLoading(true);
    axios.get("https://fakestoreapi.com/products")
    .then((res) => {
      setProducts(res.data)
         setIsLoading(false);
    }).catch((err) => {
      console.log(err)
         setIsLoading(false);
    })
},[])
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.product_card_wrapper}>
          {products?.map((singleproduct) => {
            return (
              <ProductCard
                renderAdd={true}
                product={singleproduct} key={singleproduct.id} />
            );
          })}
        </section>
      )}
    </>
  );
}

export default Product
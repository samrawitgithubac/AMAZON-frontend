import React from 'react'
import { catagoryImage } from "./CatagoryFulldata.js";
import CategoryCard from './CategoryCard.jsx'
import classes from './category.module.css'

const Category = () => {
  return (
    <section className={classes.category_container}>
      {catagoryImage?.map((singleCatagory,index) => 
       
        (<CategoryCard data={singleCatagory}  key={index}/> )
      )}
    
    </section>
  );
}

export default Category
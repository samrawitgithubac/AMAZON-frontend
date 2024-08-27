import React from 'react'
import classes from './category.module.css'
import {Link} from 'react-router-dom'

const CategoryCard = ({data}) => {

  return (
    <div className={classes.category_Wrapper}>
      <Link to={`/category/${data.name}`}>
        <span>{data.title}</span>
        <img src={data.imgLink} alt="" />
        <p>shop now</p>
      </Link>
    </div>
  );
}

export default CategoryCard
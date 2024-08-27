import React, { useContext } from 'react'
import classes from "./product.module.css";
import Rating from "@mui/material/Rating";
import CurrencyFormate from '../CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom'
import { DataContext } from '../DataProvider/DataProvider';
import { Type } from '../../Utils/action.type';


const ProductCard = ({ product, flex, renderDesc,renderAdd }) => {
  const { image, title, id, rating, price, description } = product;
  const [state, dispatch] = useContext(DataContext)
 
  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image,title,id,rating,price,description
      }
    })
  }




  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.product_flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h4>{title}</h4>
        {renderDesc && <div style={{ maxWidth: "500px" }}>{description}</div>}
        <div className={classes.rating}>
          {/* Rating */}
          <Rating value={rating?.rate} precision={0.1} />
          {/* count */}
          <small>{rating?.count}</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormate amount={price} />
        </div>
        <br />
        <br />
        {renderAdd && (
          <button className={classes.button} onClick={addToCart}>
            add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard
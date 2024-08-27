import React, { useEffect, useState } from "react";
import classes from "./results.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { producturl } from "../../Api/endPoints";
import ProductCard from "../../Components/product/ProductCard";
import Loader from "../../Components/Loader/Loader";

const Results = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { categoryName } = useParams();
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `
    ${producturl}/products/category/${categoryName}`
      )
      .then((res) => {
        setResults(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <LayOut>
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <section className={classes.single_Category_images}>
            <h1 style={{ padding: "30px" }}>Results</h1>
            <p style={{ padding: "30px" }}>Category/{categoryName}</p>
            <hr />
            <div className={classes.products_container}>
              {results?.map((product) => {
                return (
                  <ProductCard
                    key={product.id}
                    product={product}
                    renderAdd={true}
                  />
                );
              })}
            </div>
          </section>
        )}
      </>
    </LayOut>
  );
};

export default Results;

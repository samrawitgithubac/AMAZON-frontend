import React from 'react'
import { IoMdMenu } from "react-icons/io";
import classes from "./lowerheader.module.css";

const LowerHeader = () => {
  return (
    // function to return the lower header
    <div className={classes.lower_header_outer_wrapper}>
      <ul className={classes.lower_header_container}>
        <li className={classes.menu}>
        
            
            <IoMdMenu />
            <p>All</p>
        
        </li>
        <li>
          Today'sDeals</li>
        <li>Customer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader
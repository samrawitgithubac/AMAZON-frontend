import React, { useContext } from "react";
import classes from "./header.module.css";
import logo from "../../assets/images/amazon-logo.png";
import { CiLocationOn } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import Flag from "../../assets/images/En--flag.png";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utils/firebase";
const Header = () => {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  console.log(user);

  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header_container}>
          <div className={classes.header_logo_container}>
            {/* amazon logo */}
            <Link to="/">
              <img src={logo} alt="amazon logo" className="logo" />
            </Link>
            {/* delivery */}

            <div className={classes.header_delevery}>
              <span>
                <CiLocationOn />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          {/* search section */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="search product" />

            <IoIosSearch size={38} />
          </div>
          {/* right side icon */}
          <div className={classes.order_container}>
            {/* flag */}
            <Link to="" className={classes.language}>
              <img src={Flag} alt="" className="flag" />

              <select name="" id="">
                <option value="">En</option>
              </select>
            </Link>
            {/* sign in  */}
            <Link to={!user && "/Auth"}>
              <div>
                {user ? (
                  <>
                    <p>Hello {user?.email?.split("@")[0]}</p>
                    <span onClick={() => auth.signOut()}>Sign Out</span>
                  </>
                ) : (
                  <>
                    <p>Sign in</p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </Link>
            {/* orders */}

            <Link to="/orders">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>

            {/* cart */}

            <Link to="/cart" className={classes.cart}>
              <BiCart />
              <span>{basket.length}</span>
            </Link>
          </div>
        </div>
      </section>
      {/* section for rendering the lower header file */}
      <section>
        <LowerHeader />
      </section>
    </section>
  );
};

export default Header;

import React, { useState, useContext } from "react";
import classes from "./signup.module.css";
import { Link, useNavigate, useLocation, redirect } from "react-router-dom";
import logo from "../../assets/images/CategoryImage/image.png";
import { auth } from "../../Utils/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utils/action.type";
import { ClipLoader } from "react-spinners";
const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const navStateData = useLocation();

  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });

  const authHandler = async (e) => {
    e.preventDefault();
    // console.log(e.target.name);
    if (e.target.name == "signin") {
      // firebase auth
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          console.log(userInfo);
          dispatch({
            type: Type.ADD_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signIn: false });

          navigate("/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signIn: false });
        });
    } else {
      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signUp: false });

          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signUp: false });
        });
    }
  };
  // console.log(password,email);
  return (
    <>
      <section>
        {/* logo */}
        <div className={classes.Auth_logo}>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        {/* form */}
        <div className={classes.Auth_outer_wrapper}>
          <div className={classes.Auth_inner_wrapper}>
            <h2>Sign in</h2>
            {navStateData?.state?.msg && (
              <small
                style={{
                  padding: "10px",
                  textAlign: "center",
                  color: "red",
                  fontWeight: "bold",
                }}
              >
                {navStateData?.state?.msg}
              </small>
            )}
            <form action="">
              <label htmlFor="email" id="email">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id=""
              />

              <label htmlFor="password">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
              />

              <button type="submit" onClick={authHandler} name="signin">
                {loading.signIn ? <ClipLoader size={15} /> : "    Sign In"}
              </button>
            </form>

            {/* agreement */}

            <p>
              By signing-in you agree to the AMZON FAKE CLONE Conditions of Use
              & Sale Please see our Privacy Notice Our Cookies Notice and our
              interest-Based Ads Notice
            </p>
            {/* create account btn */}
            <button
              type="submit"
              onClick={authHandler}
              name="signup"
              className={classes.register}
            >
              {loading.signUp ? (
                <ClipLoader size={15} />
              ) : (
                "   Create your Amazon Account"
              )}
            </button>
            {error && (
              <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Auth;

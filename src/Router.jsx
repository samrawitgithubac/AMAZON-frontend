import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Auth from "./Pages/Auth/Auth";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

const stripePromise = loadStripe(
  "pk_test_51PgSIGIuHarGXgcTEdzDDbyNz1Vz7OZbK4bvQTxgxiHJ3sd8m5KwmQtMOHyPKAlzi4LPZkPzenmQLVE5aeu1mi3x00KTvHXr5u"
);
const Routering = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />

          <Route
            path="/cart/payments"
            element={
              <ProtectedRoute
                msg={"You must login to pay"}
                redirect={"/cart/payments"}
              >
                <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoute
                msg={"You must login to see your orders"}
                redirect={"/orders"}
              >
                <Orders />
              </ProtectedRoute>
            }
          />
          <Route path="/category/:categoryName" element={<Results />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Auth" element={<Auth />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routering;

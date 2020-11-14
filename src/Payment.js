import React from "react";
import { useState } from "react-dom";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [error, useError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const stripe = useStripe();
  const elements = useElements();

  // const handleSubmit = () => {};
  // const handleChange = (e) => {
  //   setDisabled(event.empty);
  //   setError();
  // };
  return (
    <div className="payment">
      <div className="paymentContainer">
        <h1>
          Checkout(
          <Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="paymentSection">
          <div className="paymentTitle">
            <h3>Delivery Address</h3>
          </div>
          <div className="paymentAddress">
            <p>{user?.email}</p>
            <p>123, React lane</p>
            <p>Abuja, Nigeria</p>
          </div>
        </div>

        {/* PAYMENT SECTION-REVIEW -ITEMS */}
        <div className="paymentSection">
          <div className="paymentTitle">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="paymentItems">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        </div>

        {/* PAYMENT SECTION - PAYMENT METHOD */}
        <div className="paymentSection">
          <div className="paymentTitle">
            <h3>Payment Method</h3>
            <div className="paymentDetails">
              {/* STRIPE */}
              <form action="" onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Payment;

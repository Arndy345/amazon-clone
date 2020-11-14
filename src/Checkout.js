import React from "react";
import "./Checkout.css";
import image from "./components/banner.jpg";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import images from "./components/5.jpg";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  console.log(user);
  return (
    <div className="checkout">
      <div className="checkoutLeft">
        <img src={image} alt="" className="checkoutAd" />
        <div>
          {/* The ? is used to stop the browser from throwing an error while the username is still loading */}
          <h3>Hello, {user?.email || "Guest"}</h3>
          <h2 className="checkoutTitle">Your Shopping Basket</h2>

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
      <div className="checkoutRight">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;

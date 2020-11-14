import React from "react";
import "./Product.css";
import alberto from "./components/MixtapeCover.jpg";
import { useStateValue } from "./StateProvider";

function Product({ title, image, price, rating, id }) {
  const [{ basket }, dispatch] = useStateValue();
  
  const addToBasket = () => {
    //dispatch into data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="productInfo">
        <p>{title}</p>
        <p className="productPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="productRating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>*</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}
export default Product;

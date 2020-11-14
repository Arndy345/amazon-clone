import React from "react";
import "./Header.css";
import amazon from "./components/amazon.png";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  // const [email, setEmail] = useStateValue();
  // const [password, setPassword] = useStateValue();
  const handleSignOut = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      {/* USING THE LINK AND TO ATTRIBUTE YOU CAN 
    LINK SPECIFIC PARTS TO ANOTHER PAGE */}
      <Link to="/">
        <img
          // src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          src={amazon}
          alt="Amazon-Logo"
          className="headerLogo"
        />
      </Link>

      <div className="headerSearch">
        <input type="text" className="headerSearchInput" />
        {/* Search icon goes In here */}
        <SearchIcon className="headerSearchIcon " />
      </div>

      <div className="headerNav" onClick={handleSignOut}>
        {/* PREVENTS THE LINK FROM WORKING IF CONDITION ISNT TRUE */}
        <Link to={!user && "/login"}>
          <div className="headerOption">
            <span className="headerOptionLineOne">
              {user ? `Hello ${user.email}` : "Hello Guest"}
            </span>
            <span className="headerOptionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="headerOption">
          <span className="headerOptionLineOne">Returns</span>
          <span className="headerOptionLineTwo">Orders</span>
        </div>
        <div className="headerOption">
          <span className="headerOptionLineOne">Your</span>
          <span className="headerOptionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="headerOptionBasket">
            <ShoppingBasketIcon className="shoppingBasketIcon" />
            <span className="headerOptionLineTwo headerBasketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

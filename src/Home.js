import React from "react";
import "./Home.css";
import amazonBanner from "./components/amazon-banner.jpg";
import Product from "./Product";
import alberto from "./components/MixtapeCover.jpg";
import img1 from "./components/2.jpg";
import img2 from "./components/3.jpg";
import img3 from "./components/4.jpg";
import img4 from "./components/5.jpg";
import img5 from "./components/6.jpg";
function Home() {
  return (
    <div className="home">
      <div className="container">
        <img className="homeImage" src={amazonBanner} alt="amazon-banner" />
        <div className="homeRow">
          <Product
            id="5"
            title="The lean Startup"
            price={29.99}
            image={alberto}
            rating={5}
          />
          <Product
            id="1"
            title="The lean Startup"
            price={29.99}
            image={img1}
            rating={5}
          />
        </div>
        <div className="homeRow">
          <Product
            id="2"
            title="The lean Startup"
            price={29.99}
            image={img2}
            rating={5}
          />
          <Product
            id="3"
            title="The lean Startup"
            price={29.99}
            image={img3}
            rating={5}
          />
          <Product
            id="4"
            title="The lean Startup"
            price={29.99}
            image={img4}
            rating={5}
          />
        </div>
        <div className="homeRow">
          <Product
            id="6"
            title="The lean Startup"
            price={29.99}
            image={img5}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}
export default Home;

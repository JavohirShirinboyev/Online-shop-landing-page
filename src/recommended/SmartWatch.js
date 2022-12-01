import React from "react";
import SmartWatches from "../JSON/smartwatch.json";

const SmartWatch = () => {
  return (
    <div className="smartwatch">
      <div className="titles">
        <p>Explore Awesome Products</p>
        <h4>Recommended For You</h4>
      </div>
      <div className="cards">
        {SmartWatches.map((product, idx) => {
          return (
            <div className="productCard" key={idx}>
              <img src={product.img} alt="Smart Watch" />
              <h5 className="productTitle">{product.title}</h5>
              <p className="productPrice">{product.price}</p>
            </div>
          );
        })}
      </div>
      <span className="buttonAtea">
        <a href="#" className="exploreBtn">
          Explore Other Products
        </a>
      </span>
    </div>
  );
};

export default SmartWatch;

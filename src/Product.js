import React from "react";

export default function Product() {
  return (
    <div>
      <h3 className="product-name"></h3>
      <img className="product-image" />
      <div className="product-info">
        <span className="product-price"></span>
        <p className="product-description"></p>
      </div>
    </div>
  );
}

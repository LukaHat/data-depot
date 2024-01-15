import React from "react";

export default function Product({ name, imageUrl, price }) {
  return (
    <div className="product">
      <h3 className="product-name">{name}</h3>
      <img
        className="product-image"
        src={`${process.env.PUBLIC_URL}/assets/products/${imageUrl}`}
        alt={name}
      />
      <span className="product-price">{price},00 €</span>
      <span className="product-price-kn">
        {Math.floor(price * 7.5345)},00 kn
      </span>
    </div>
  );
}

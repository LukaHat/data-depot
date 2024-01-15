import React from "react";

//import mock product data
import { products } from "./data/data";
import Product from "./Product";

export default function Bestseller() {
  return (
    <section className="bestsellers">
      <h2 className="bestsellers-title">Check out our most popular products</h2>
      <ul className="product-list">
        {products.map((product) =>
          product.bestseller === true ? (
            <Product
              name={product.name}
              imageUrl={product.imgUrl}
              price={product.priceEuro}
            />
          ) : (
            ""
          )
        )}
      </ul>
    </section>
  );
}

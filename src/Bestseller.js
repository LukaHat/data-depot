import React from "react";

//import mock product data
import data from "./data/data";
import Product from "./Product";

export default function Bestseller() {
  return (
    <section className="bestsellers">
      <h2 className="bestsellers-title">Check out our most popular products</h2>
      <ul className="product-list">
        <Product />
      </ul>
    </section>
  );
}

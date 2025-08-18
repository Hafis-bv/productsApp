import { Link } from "react-router-dom";
import React from "react";
import "./style.scss";

export const ProductCard = ({ product }) => {
  return (
    <Link className="product-card" to={`/products/${product.id}`}>
      <img src={product.image} alt="idi naxuy" />
      <div className="product-text">
        <p>{product.title}</p>
        <span>${product.price}</span>
      </div>
    </Link>
  );
};

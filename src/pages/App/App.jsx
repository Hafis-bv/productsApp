import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import "./app.scss";
import Loading from "../../components/Loading/Loading";

export default function App() {
  const { products, error, loading } = useFetch();
  if (loading) return <Loading />;
  return (
    <div className="text">
      <h1>Products</h1>
      <div className="products">
        {products.map((product) => (
          <Link
            key={product.id}
            className="product-card"
            to={`/products/${product.id}`}
          >
            <img src={product.image} alt="idi naxuy" />
            <div className="product-text">
              <p>{product.title}</p>
              <span>${product.price}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

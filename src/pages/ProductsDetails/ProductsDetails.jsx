import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import "./style.scss";
import Loading from "../../components/Loading/Loading";

export default function ProductsDetails() {
  const { products, error, loading } = useFetch();

  const { productId } = useParams();

  if (loading) return <Loading />;

  const product = products.find((p) => p.id === Number(productId));
  if (!product) return <p>Product not found</p>;

  return (
    <div>
      {error ? (
        <h1>{error}</h1>
      ) : (
        <div className="product">
          <img src={product.image} alt="" />
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <button>Buy</button>
        </div>
      )}
    </div>
  );
}

import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import "./productsDetal.scss";
import Loading from "../../components/Loading/Loading";

export default function ProductsDetal() {
  const { products, error, loading } = useFetch();
  const { productId } = useParams();
  if (loading) return <Loading />;
  if (error) return <p>Error: {error}</p>;
  const product = products.find((p) => p.id === Number(productId));

  return (
    <div className="product">
      <img src={product.image} alt="" />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <button>Buy</button>
    </div>
  );
}

//  const productId = products.find((product) => {
//     product.id === Number(id);
//   }); (почему не работает)

// if (error) return <p>Error: {error}</p>;
//   if (!products.length) return <p>Loading...</p>;
//   const product = products.find((p) => p.id === Number(productId));
//   if (!product) return <p>Product not found</p>;
// (почему без этого не работает)

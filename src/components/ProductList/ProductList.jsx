import { useFetch } from "../../hooks/useFetch";
import Loading from "../Loading/Loading";
import { ProductCard } from "../ProductCard/ProductCard";
import "./style.scss";

export const ProductList = () => {
  const { products, error, loading } = useFetch();

  if (loading) return <Loading />;

  return (
    <>
      {error ? (
        <h1>{error}</h1>
      ) : (
        <div className="products">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

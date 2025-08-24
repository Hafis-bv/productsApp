import "./style.scss";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Classic Style Made Simple</h1>
        <p>
          Our collection brings timeless fashion within reach. Inspired by the
          elegance of old money style, we offer pieces that are clean,
          versatile, and built to last—without the heavy price tag. From
          everyday essentials to refined details, each item is made to give you
          a polished look that never goes out of style.
        </p>
        <Link className="btn" to={`/products`}>
          Learn more
        </Link>
      </div>
    </div>
  );
};

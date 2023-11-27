import "./style.css";
import { Link } from "react-router-dom";

export const ProductTypeTile = ({ type }) => {
  return (
    <Link to={`/vyrobky?type=${type}`}>
        <button className="product_type_tile__button">
          <img src="" alt="" />
          <div>{type}</div>
        </button>
    </Link>
  );
};

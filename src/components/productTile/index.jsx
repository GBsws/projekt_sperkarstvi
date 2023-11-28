import "./style.css";
import { Link } from "react-router-dom";

export const ProductTile = ({ type }) => {
  return (
    <Link to={`/vyrobky?type=${type}`}>
          <img src="" alt="" />
          <div>{type}</div>
    </Link>
  );
};

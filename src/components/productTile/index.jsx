import "./style.css";
import { Link } from "react-router-dom";

// export const ProductTile = ({ type }) => {
//   return (
//     <Link to={`/vyrobky?type=${type}`}>
//           <img src="" alt="" />
//           <div>{type}</div>
//     </Link>
//   );
// };



export const ProductTile = ({ type }) => {
  return (
    <Link to={`/vyrobky?type=${type}`}>
      <button className="product_type_tile_button">
        <img src="" alt="" />
        <div>{type}</div>
      </button>
    </Link>
  );
};

import "./style.css";
import { Link } from "react-router-dom";


export const ProductTile = ({ type,imgSrc,title }) => {
  console.log('co jsou imag',imgSrc)
  return (
    <Link to={`/vyrobky?type=${type}`}>
        <img className="product-tile__image" src={imgSrc} alt={title}/>
        <div>{type}</div>
    </Link>
  );
};

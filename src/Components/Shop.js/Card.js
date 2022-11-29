import {Link} from "react-router-dom";
import "./Card.css";

function Card({card}) {
  return (
    <>
      <div className="card-container p-4 p-md-3 col-sm-6 col-md-4 col-lg-3">
        <Link to={`/moon-shop/${card._id}`} className="card-link">
          <div className="img-container">
            <img width="100%" height="270px" src={card.image} alt={card.name} />
          </div>

          <div className="card-data mt-2">
            <h5 className="card-name mb-0">{card.name}</h5>
            <span className="card-price">{`$${card.price}.00`}</span>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Card;

import { LazyLoadImage } from "react-lazy-load-image-component";
import useRating from "../../hooks/useRating";

const ItemCard = ({ id, name, image, new_price, old_price, rating }) => {
  const { ratingStage } = useRating(rating);

  return (
    <div className="card text-start item-card rounded-0" id={id}>
      {/* {console.log(rating)} */}
      <LazyLoadImage alt={image?.alt ? image?.alt : ""} src={image} effect="blur" className="img-fluid" />
      <div className="card-body">
        <h4 className="item-card__title mb-3">{name}</h4>
        <div className="card-text d-flex justify-content-between">
          <div className="item-card__price">
            <span className="text-danger-emphasis fw-bolder">${new_price}</span>
            <span className="text-secondary text-decoration-line-through ms-3">${old_price}</span>
          </div>
          <span className={`badge rounded-1 ${ratingStage}`}>{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

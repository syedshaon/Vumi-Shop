import StarRatings from "react-star-ratings";

function StarRating({ rate }) {
  return <StarRatings rating={rate} starDimension="15px" starRatedColor="red" numberOfStars={5} name="rating" />;
}

export default StarRating;

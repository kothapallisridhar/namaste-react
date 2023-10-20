import CDN_URL from "../utils/constants";

const RestaurantCard = (props) => {
  //console.log(resCard);
  const { resData } = props;

  console.log(resData);
  return (
    <div className="card">
      <img src={CDN_URL + resData?.info.cloudinaryImageId} />
      <h4>{resData?.info.name}</h4>
      <h5>{resData?.info.cuisines.join(", ")}</h5>
      <h5>{resData?.info.avgRating}</h5>
    </div>
  );
};

export default RestaurantCard;

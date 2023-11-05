import CDN_URL from "../utils/constants";

const RestaurantCard = (props) => {
  //console.log(resCard);
  const { resData } = props;

  console.log("resData", resData);
  return (
    <div className="bg-gray-100 w-[250px] m-4 p-4 rounded-lg shadow-md hover:bg-slate-200">
      <img
        src={CDN_URL + resData?.info.cloudinaryImageId}
        className="rounded-lg aspect-square"
      />
      <h4 className="py-2 font-sans font-bold">{resData?.info.name}</h4>
      <h5>{resData?.info.cuisines.join(", ")}</h5>
      <h5>{resData?.info.avgRating}</h5>
    </div>
  );
};

export const withVegLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-500 text-white px-2 mx-4 rounded-md">
          Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;

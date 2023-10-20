import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";

const Body = () => {
  return (
    <div className="body">
      {resList.map((restaurant) => (
        <RestaurantCard resData={restaurant} />
      ))}
    </div>
  );
};

export default Body;

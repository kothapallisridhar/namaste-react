import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=280216"
    );
    const json = await data.json();
    //console.log(json.data);
    setResInfo(json.data);
  };

  // const { name, cuisines, costForTwoMessage } =
  //   resInfo?.cards[0]?.card?.card?.info;
  const name = resInfo?.cards[0]?.card?.card?.info?.name;
  const cuisines = resInfo?.cards[0]?.card?.card?.info?.cuisines;
  const costForTwoMessage =
    resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage;

  if (resInfo === null) return <Shimmer />;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
    </div>
  );
};

export default RestaurantMenu;

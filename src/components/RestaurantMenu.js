import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
const RestaurantMenu = () => {
  //const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + 280216);
    const json = await data.json();
    console.log(json);
  };

  //if (resInfo === null) return <Shimmer />;

  return (
    <div className="menu">
      <h1>Name of the Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Kichidi</li>
        <li>Aloo 65</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;

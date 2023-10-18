import Body from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <RestaurantCard
        image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x4uyxvihmg8qa3pddkgf"
        resName="Meghana Foods"
        cuisine="South Indian, Asian"
        rating="4.4 stars"
      />
      <RestaurantCard
        image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/emlehbuwgsmryxhwzhvq"
        resName="Lavonne"
        cuisine="Bakery, Desserts"
        rating="4.5 stars"
      />
      <RestaurantCard
        image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/v9fczzlua1wnrx63fh1g"
        resName="Soul Rasa"
        cuisine="Indian, Healthy Food"
        rating="4.6 stars"
      />
    </div>
  );
};

export default Body;

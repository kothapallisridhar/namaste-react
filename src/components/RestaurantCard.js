const RestaurantCard = ({ image, resName, cuisine }) => {
  return (
    <div className="card">
      <img src={image} />
      <h4>{resName}</h4>
      <h5>{cuisine}</h5>
      <h5>4.4 stars</h5>
    </div>
  );
};

export default RestaurantCard;

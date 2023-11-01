import CDN_URL from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="flex border-b">
          <div className="w-9/12 text-left my-2">
            <div className="text-sm">
              {item.card.info.name} - Rs.{item.card.info.price / 100}
            </div>
            <div className="text-xs">{item.card.info.description}</div>
          </div>
          <img
            src={CDN_URL + item.card.info.imageId}
            className="w-3/12 rounded-lg p-4 "
          />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
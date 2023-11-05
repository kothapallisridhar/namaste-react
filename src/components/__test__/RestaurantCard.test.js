import { render } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";

it("Should render RestaurantCard Component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
});

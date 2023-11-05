import { render } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData";

it("Should render the Body Component with Search", () => {
  global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(MOCK_DATA);
      },
    });
  });

  render(<Body />);
});

import { render } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

it("Should render the Body Component with Search", async () => {
  global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(MOCK_DATA);
      },
    });
  });
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
});

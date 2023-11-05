import { render } from "@testing-library/react";
import Body from "../Body";

it("Should render the Body Component with Search", () => {
  global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(data);
      },
    });
  });

  render(<Body />);
});

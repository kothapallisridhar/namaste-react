import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test cases", () => {
  beforeAll(() => console.log("Before All"));
  beforeEach(() => console.log("Before Each"));
  afterEach(() => console.log("After Each"));
  afterAll(() => console.log("After All"));

  it("Should load Contact us component", () => {
    // you can use "it" or "test"
    render(<Contact />);

    const heading = screen.getByRole("heading");
    // Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load input name inside the Contact us component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Name");
    // Assertion
    expect(inputName).toBeInTheDocument();
  });

  test("Should load button inside the Contact us component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");
    // Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should load two input boxes on the Contact us Component", () => {
    render(<Contact />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");

    // Assertion
    expect(inputBoxes.length).toBe(2);
  });

  test("Should load input boxes on the Contact us Component that are not 3", () => {
    render(<Contact />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");

    // Assertion
    expect(inputBoxes.length).not.toBe(3);
  });
});

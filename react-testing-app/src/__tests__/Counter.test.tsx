import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../Counter";

describe("Counter Component", () => {
  beforeAll(() => console.log("Before all tests"));
  beforeEach(() => console.log("Before each test"));
  afterEach(() => console.log("After each test"));
  afterAll(() => console.log("After all tests"));

  it("increments and decrements", () => {
    render(<Counter />);

    const count = screen.getByTestId("count");
    const increment = screen.getByText("Increment");
    const decrement = screen.getByText("Decrement");

    fireEvent.click(increment);
    expect(count.textContent).toBe("1");

    fireEvent.click(decrement);
    expect(count.textContent).toBe("0");
  });

  it("handles focus and blur", () => {
    render(<Counter />);
    const input = screen.getByPlaceholderText("Focus me");

    fireEvent.focus(input);
    fireEvent.blur(input);

    expect(input).toBeInTheDocument();
  });
});
 
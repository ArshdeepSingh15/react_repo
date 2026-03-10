import { render, screen, fireEvent } from "@testing-library/react";
import SearchBox from "../SearchBox";

describe("SearchBox", () => {
  test("typing updates input value and changes border on focus/blur", () => {
    render(<SearchBox />);
    const input = screen.getByPlaceholderText("Search…");

    // Typing updates value
    fireEvent.change(input, { target: { value: "hello" } });
    expect(input).toHaveValue("hello");

    // Focus → border blue
    fireEvent.focus(input);
    expect(input).toHaveStyle("border-color: blue");

    // Blur → border grey
    fireEvent.blur(input);
    expect(input).toHaveStyle("border-color: grey");
  });

  test("clicking Search triggers onSearch with value or empty string", () => {
    const mockFn = jest.fn();
    render(<SearchBox onSearch={mockFn} />);

    const input = screen.getByPlaceholderText("Search…"); 
    const button = screen.getByRole("button", { name: "Search" });

    // Type value and click
    fireEvent.change(input, { target: { value: "react" } });
    fireEvent.click(button);
    expect(mockFn).toHaveBeenCalledWith("react");

    // Empty input
    fireEvent.change(input, { target: { value: "" } });
    fireEvent.click(button);
    expect(mockFn).toHaveBeenCalledWith("");
  });

  test("clicking Search without onSearch prop uses default function", () => {
    render(<SearchBox />);
    const button = screen.getByRole("button", { name: /search/i });
    fireEvent.click(button);
    // Just runs default empty function, no assertion needed
  });
});

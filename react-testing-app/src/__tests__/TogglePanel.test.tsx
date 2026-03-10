import { render, screen, fireEvent } from "@testing-library/react";
import TogglePanel from "../TogglePanel";

describe("TogglePanel", () => {
  test("renders title and toggle button", () => {
    render(<TogglePanel title="My Panel">Content</TogglePanel>);

    expect(screen.getByText("My Panel")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("Show");
  });

  test("matches snapshot when collapsed", () => {
    const { asFragment } = render(
      <TogglePanel title="Snapshot Panel">Content</TogglePanel>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("shows and hides children when toggled", () => {
    render(
      <TogglePanel title="Panel">
        <p>Hidden Content</p>
      </TogglePanel>
    );

    const button = screen.getByRole("button");

    // Initially hidden
    expect(screen.queryByText("Hidden Content")).not.toBeInTheDocument();

    // Click to show
    fireEvent.click(button);
    expect(screen.getByText("Hidden Content")).toBeInTheDocument();
    expect(button).toHaveTextContent("Hide");

    // Click to hide again
    fireEvent.click(button);
    expect(screen.queryByText("Hidden Content")).not.toBeInTheDocument();
    expect(button).toHaveTextContent("Show");
  });

  test("expands and renders children (branch coverage)", () => {
    render(<TogglePanel title="Branch Test">Branch Child</TogglePanel>);

    const button = screen.getByRole("button");
    fireEvent.click(button); // expand

    expect(screen.getByText("Branch Child")).toBeInTheDocument();
  });
  test("uses default title when none is provided", () => {
  render(<TogglePanel>Content</TogglePanel>);
  expect(screen.getByText("Default Panel")).toBeInTheDocument();
});

});

import { render, screen } from "@testing-library/react";
import Home from "../Home";
 
describe("Home Component", () => {
  it("renders the home heading", () => {
    render(<Home />);
    expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
  });
});
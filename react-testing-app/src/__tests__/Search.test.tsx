import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Search from "../Search";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Search Component", () => {
  it("performs a successful search", async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: { result: "Match Found" }
    });

    render(<Search />);

    screen.logTestingPlaygroundURL();

    fireEvent.change(screen.getByPlaceholderText("Search…"), {
      target: { value: "hello" }
    });

    fireEvent.click(screen.getByRole("button", { name: "Search" })); //String

    await waitFor(() =>
      expect(screen.getByTestId("result")).toHaveTextContent("Match Found")
    );
  });

  it("handles failed search", async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error("fail"));

    render(<Search />);

    fireEvent.change(screen.getByPlaceholderText("Search…"), {
      target: { value: "test" }
    });

    fireEvent.click(screen.getByRole("button", { name: /search/i })); //Regex

    await waitFor(() =>
      expect(screen.getByTestId("result")).toHaveTextContent("Search failed")
    );
  });
});
 
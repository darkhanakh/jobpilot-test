import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomSelect from "./../components/Select"; // Adjust the import path as needed
import { describe, it, expect } from "vitest";

const items = [
  { label: "Kazakhstan", img: "kazakhstan-flag.png" },
  { label: "India", img: "india-flag.png" },
  { label: "Russia", img: "russia-flag.png" },
];

describe("CustomSelect Component", () => {
  it("renders the initial selected item", () => {
    render(<CustomSelect items={items} />);
    const button = screen.getByRole("button", { name: /kazakhstan/i });
    expect(button).toBeInTheDocument();

    const selectedImg = screen.getAllByAltText("country")[0];
    expect(selectedImg).toHaveAttribute("src", "kazakhstan-flag.png");
  });
});

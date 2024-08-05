import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "./../components/Hero"; // Adjust the import path as needed
import { describe, it, expect } from "vitest";
import illustationImg from "./../assets/illustration.png";

describe("Hero Component", () => {
  it("renders the Header component", () => {
    render(<Hero />);
    expect(screen.getByText("Sign In")).toBeInTheDocument();
    expect(screen.getByText("Post A Jobs")).toBeInTheDocument();
  });

  it("renders the main text", () => {
    render(<Hero />);
    expect(
      screen.getByText("Find a job that suits your interest & skills.")
    ).toBeInTheDocument();
  });

  it("renders the FindJobSearch component", () => {
    render(<Hero />);
    expect(
      screen.getByPlaceholderText("Job title, Keyword...")
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Your location")).toBeInTheDocument();
  });

  it("renders the suggestion text", () => {
    render(<Hero />);
    expect(screen.getByText("Suggestions:")).toBeInTheDocument();
    expect(screen.getByText("Designer, Programming,")).toBeInTheDocument();
    expect(screen.getByText("Digital Marketing,")).toBeInTheDocument();
    expect(screen.getByText("Video, Animation")).toBeInTheDocument();
  });

  it("renders the illustration image", () => {
    render(<Hero />);
    const illustration = screen.getByAltText("illustration");
    expect(illustration).toBeInTheDocument();
    expect(illustration).toHaveAttribute("src", illustationImg); // Ensure the path is correct
  });

  it("renders the feature cards", () => {
    render(<Hero />);
    expect(screen.getByText("1,75,324")).toBeInTheDocument();
    expect(screen.getByText("Live Job")).toBeInTheDocument();
    expect(screen.getByText("97, 324")).toBeInTheDocument();
    expect(screen.getByText("Companies")).toBeInTheDocument();
    expect(screen.getByText("38,47,154")).toBeInTheDocument();
    expect(screen.getByText("Candidates")).toBeInTheDocument();
    expect(screen.getByText("7, 423")).toBeInTheDocument();
    expect(screen.getByText("New Jobs")).toBeInTheDocument();
  });
});

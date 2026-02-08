import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Home from "../Home/Home";

vi.mock("../../components/Hero/Hero", () => ({
  default: () => <div data-testid="hero-section">Hero</div>,
}));

vi.mock("../../components/Feature/Feature", () => ({
  default: () => <div data-testid="feature-section">Feature</div>,
}));

vi.mock("../../components/Cta/Cta", () => ({
  default: () => <div data-testid="cta-section">CTA</div>,
}));

describe("Home Page", () => {
  it("renders home container", () => {
    render(<Home />);
    expect(screen.getByTestId("home-page")).toBeInTheDocument();
  });

  it("renders Hero section", () => {
    render(<Home />);
    expect(screen.getByTestId("hero-section")).toBeInTheDocument();
  });

  it("renders Feature section", () => {
    render(<Home />);
    expect(screen.getByTestId("feature-section")).toBeInTheDocument();
  });

  it("renders CTA section", () => {
    render(<Home />);
    expect(screen.getByTestId("cta-section")).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import App from "../../App";

/* mock pages */
vi.mock("../../pages/Home/Home", () => ({
  default: () => <div data-testid="home-page">Home Page</div>,
}));

vi.mock("../../pages/AboutUs_page/AboutUs", () => ({
  default: () => <div>About Page</div>,
}));

describe("App Routing", () => {
  it("renders Home page on '/' route", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByTestId("home-page")).toBeInTheDocument();
  });
});

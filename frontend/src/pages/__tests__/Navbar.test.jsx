import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { HashRouter } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

vi.mock("../../assets/Company_Logo/CR_Logo.png", () => ({
  default: "logo.png",
}));

describe("Navbar Component", () => {
  it("renders brand name", () => {
    render(
      <HashRouter>
        <Navbar />
      </HashRouter>,
    );
    expect(screen.getByText(/C L O U D R U L E/i)).toBeInTheDocument();
  });

  it("renders nav links", () => {
    render(
      <HashRouter>
        <Navbar />
      </HashRouter>,
    );
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Services/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });

  it("opens and closes mobile menu", () => {
    render(
      <HashRouter>
        <Navbar />
      </HashRouter>,
    );

    const toggleBtn = screen.getByTestId("mobile-menu-toggle");

    // Initially menu not rendered
    expect(screen.queryByTestId("mobile-menu")).toBeNull();

    // Open menu
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("mobile-menu")).toBeInTheDocument();

    // Close menu
    fireEvent.click(toggleBtn);
    expect(screen.queryByTestId("mobile-menu")).toBeNull();
  });
});

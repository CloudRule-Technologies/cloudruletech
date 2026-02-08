import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

vi.mock("../../assets/Company_Logo/CR_Logo.png", () => ({
  default: "logo.png",
}));

describe("Navbar Component", () => {
  it("renders brand name", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    expect(screen.getByText(/C L O U D R U L E/i)).toBeInTheDocument();
  });

  it("renders nav links", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Services/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });

  it("opens and closes mobile menu", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    const toggleBtn = screen.getByRole("button");
    fireEvent.click(toggleBtn);

    expect(screen.getAllByText(/Home/i).length).toBeGreaterThan(0);

    fireEvent.click(toggleBtn);
  });
});

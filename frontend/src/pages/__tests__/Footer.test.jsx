import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Footer from "../../components/Footer/Footer";
import { HashRouter } from "react-router-dom";

const mockNavigate = vi.fn();

// Mock useNavigate
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("Footer Component", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it("renders company name", () => {
    render(
      <HashRouter>
        <Footer />
      </HashRouter>,
    );
    expect(screen.getByText(/cloudrule technology/i)).toBeInTheDocument();
  });

  it("renders quick links", () => {
    render(
      <HashRouter>
        <Footer />
      </HashRouter>,
    );

    // Match the buttons by role and name (works even with icons)
    expect(screen.getByRole("button", { name: /home/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /services/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /about/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /contact/i }),
    ).toBeInTheDocument();
  });

  it("navigates using links/buttons", () => {
    render(
      <HashRouter>
        <Footer />
      </HashRouter>,
    );

    fireEvent.click(screen.getByRole("button", { name: /services/i }));
    expect(mockNavigate).toHaveBeenCalledWith("/services");

    fireEvent.click(screen.getByRole("button", { name: /contact/i }));
    expect(mockNavigate).toHaveBeenCalledWith("/contact");
  });

  it("renders current year", () => {
    render(
      <HashRouter>
        <Footer />
      </HashRouter>,
    );
    expect(
      screen.getByText(new RegExp(new Date().getFullYear().toString())),
    ).toBeInTheDocument();
  });
});

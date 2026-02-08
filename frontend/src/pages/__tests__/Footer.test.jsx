import { render, screen, fireEvent } from "@testing-library/react";
import Footer from "../../components/Footer/Footer";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { BrowserRouter } from "react-router-dom";

const mockNavigate = vi.fn();

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
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );

    expect(screen.getByText(/cloudrule technology/i)).toBeInTheDocument();
  });

  it("renders quick links", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );

    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /services/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /about/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /contact/i }),
    ).toBeInTheDocument();
  });

  it("navigates using buttons", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );

    fireEvent.click(screen.getByRole("button", { name: /services/i }));
    expect(mockNavigate).toHaveBeenCalledWith("/services");

    fireEvent.click(screen.getByRole("button", { name: /contact/i }));
    expect(mockNavigate).toHaveBeenCalledWith("/contact");
  });

  it("renders current year", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );

    expect(
      screen.getByText(new RegExp(new Date().getFullYear().toString())),
    ).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Clients from "../../components/Clients/Clients";

describe("Clients Component", () => {
  it("renders section title and eyebrow badge", () => {
    render(<Clients />);
    expect(screen.getByText(/Our Valued Clients/i)).toBeInTheDocument();
    expect(screen.getByText(/Trusted by/i)).toBeInTheDocument();
    expect(screen.getByText(/Innovative Brands/i)).toBeInTheDocument();
  });

  it("renders RoyalSeafoods App card with direct link and banner", () => {
    render(<Clients />);
    const royalTitle = screen.getByText("RoyalSeafoods App");
    expect(royalTitle).toBeInTheDocument();

    const royalLink = screen.getByRole("link", { name: /RoyalSeafoods App/i });
    expect(royalLink).toHaveAttribute(
      "href",
      "https://play.google.com/store/apps/details?id=com.royalseafoods.customer"
    );
    expect(royalLink).toHaveAttribute("target", "_blank");
    expect(royalLink).toHaveAttribute("rel", "noopener noreferrer");

    const royalImg = screen.getByAltText(/RoyalSeafoods App Banner/i);
    expect(royalImg).toBeInTheDocument();
  });

  it("renders Vendhan IAS Academy card with direct link and banner", () => {
    render(<Clients />);
    const vendhanTitle = screen.getByText("Vendhan IAS Academy");
    expect(vendhanTitle).toBeInTheDocument();

    const vendhanLink = screen.getByRole("link", { name: /Vendhan IAS Academy/i });
    expect(vendhanLink).toHaveAttribute("href", "https://www.vendhanias.com");
    expect(vendhanLink).toHaveAttribute("target", "_blank");
    expect(vendhanLink).toHaveAttribute("rel", "noopener noreferrer");

    const vendhanImg = screen.getByAltText(/Vendhan IAS Academy Banner/i);
    expect(vendhanImg).toBeInTheDocument();
  });

  it("renders Grandma's Care card with direct link and banner", () => {
    render(<Clients />);
    const grandmasTitle = screen.getByText("Grandma's Care");
    expect(grandmasTitle).toBeInTheDocument();

    const grandmasLink = screen.getByRole("link", { name: /Grandma's Care/i });
    expect(grandmasLink).toHaveAttribute("href", "https://www.grandmacare.in");
    expect(grandmasLink).toHaveAttribute("target", "_blank");
    expect(grandmasLink).toHaveAttribute("rel", "noopener noreferrer");

    const grandmasImg = screen.getByAltText(/Grandma's Care Banner/i);
    expect(grandmasImg).toBeInTheDocument();
  });
});

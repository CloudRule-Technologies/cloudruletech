import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import AboutUs from "../AboutUs_page/AboutUs";

/* mock images */
vi.mock("../../assets/Logo.jpeg", () => ({ default: "logo" }));
vi.mock("../../assets/Mission.png", () => ({ default: "mission" }));
vi.mock("../../assets/Vision.png", () => ({ default: "vision" }));
vi.mock("../../assets/Isac-profile.jpeg", () => ({ default: "isac" }));
vi.mock("../../assets/Praveen-Profile.jpeg", () => ({ default: "praveen" }));
vi.mock("../../assets/Sailendra -Profile.jpeg", () => ({
  default: "sailendra",
}));
vi.mock("../../assets/Sujitha-Profile.jpeg", () => ({ default: "sujitha" }));
vi.mock("../../assets/Prakalya-Profile.jpeg", () => ({ default: "prakalya" }));
vi.mock("../../assets/Viji-Profile.png", () => ({ default: "viji" }));

describe("AboutUs Page", () => {
  it("renders About Us heading", () => {
    render(<AboutUs />);
    expect(screen.getByText(/about us/i)).toBeInTheDocument();
  });

  it("renders company name", () => {
    render(<AboutUs />);
    expect(
      screen.getByRole("heading", { name: /cloudrule technology/i }),
    ).toBeInTheDocument();
  });

  it("renders What We Do section", () => {
    render(<AboutUs />);
    expect(screen.getByText(/what we do/i)).toBeInTheDocument();
  });

  it("renders Our Technical Team section", () => {
    render(<AboutUs />);
    expect(screen.getByText(/our technical team/i)).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import CareerPage from "../Careers/CareerPage";
import { beforeEach, describe, expect, test } from "vitest";

describe("CareerPage Component", () => {
  beforeEach(() => {
    render(<CareerPage />);
  });

  test("renders the hero heading", () => {
    const heading = screen.getByText(/Build Your Career/i);
    expect(heading).toBeInTheDocument();
  });

  test("renders the 'With Us' gradient text", () => {
    const gradientText = screen.getByText(/With Us/i);
    expect(gradientText).toBeInTheDocument();
  });

  test("renders hero description paragraph", () => {
    const paragraph = screen.getByText(/Shape the future of education/i);
    expect(paragraph).toBeInTheDocument();
  });

  test("renders job position title", () => {
    const jobTitle = screen.getByText(/Teaching Professional/i);
    expect(jobTitle).toBeInTheDocument();
  });

  test("renders job position details", () => {
    const details = screen.getByText(/Any Degree Graduate Welcome/i);
    expect(details).toBeInTheDocument();
  });

  test("renders 'What We're Looking For' section", () => {
    const lookingFor = screen.getByText(/What We're Looking For/i);
    expect(lookingFor).toBeInTheDocument();
  });

  test("renders 'What We Offer' section", () => {
    const offer = screen.getByText(/What We Offer/i);
    expect(offer).toBeInTheDocument();
  });
});

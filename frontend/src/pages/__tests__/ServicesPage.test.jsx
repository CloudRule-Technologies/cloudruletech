import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ServicesPage from "../Services/ServicesPage";

vi.mock("../../components/Services/ServiceGrid", () => ({
  default: () => <div data-testid="service-grid">ServiceGrid</div>,
}));

vi.mock("../../components/Services/ProcessGrid", () => ({
  default: () => <div data-testid="process-grid">ProcessGrid</div>,
}));

describe("ServicesPage", () => {
  it("renders headings", () => {
    render(<ServicesPage />);
    expect(screen.getByText(/technology solutions/i)).toBeInTheDocument();
    expect(screen.getByText(/built for purpose/i)).toBeInTheDocument();
  });

  it("renders child grids", () => {
    render(<ServicesPage />);
    expect(screen.getByTestId("service-grid")).toBeInTheDocument();
    expect(screen.getByTestId("process-grid")).toBeInTheDocument();
  });

  it("sets document title", () => {
    render(<ServicesPage />);
    expect(document.title).toBe("Services | CloudRule");
  });
});

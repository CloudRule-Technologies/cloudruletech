import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import InternshipRegistration from "../Registration/InternshipRegistration";

describe("InternshipRegistration Page", () => {
  it("renders form title and subtitle", () => {
    render(
      <MemoryRouter>
        <InternshipRegistration />
      </MemoryRouter>
    );

    expect(screen.getByText("Internship Registration")).toBeInTheDocument();
    expect(screen.getByText("Apply for your preferred internship program")).toBeInTheDocument();
  });

  it("does not render preferred start date field", () => {
    render(
      <MemoryRouter>
        <InternshipRegistration />
      </MemoryRouter>
    );

    expect(screen.queryByText(/Preferred Start Date/i)).toBeNull();
  });

  it("handles mobile number restriction to 10 digits", () => {
    render(
      <MemoryRouter>
        <InternshipRegistration />
      </MemoryRouter>
    );

    const mobileInput = screen.getByPlaceholderText("10-digit number");
    // Type 12 characters including letters
    fireEvent.change(mobileInput, { target: { value: "98765abc432100" } });
    // Should filter non-digits and cap at 10 digits
    expect(mobileInput.value).toBe("9876543210");
  });

  it("shows specify domain input when 'Other' is selected", () => {
    render(
      <MemoryRouter>
        <InternshipRegistration />
      </MemoryRouter>
    );

    // Initially "Other" domain input is not visible
    expect(screen.queryByPlaceholderText(/Enter your preferred domain/i)).toBeNull();

    // Select "Other"
    const domainSelect = screen.getByDisplayValue("Web Development");
    fireEvent.change(domainSelect, { target: { value: "Other" } });

    // Now specify domain input appears
    expect(screen.getByPlaceholderText(/Enter your preferred domain/i)).toBeInTheDocument();
  });
});

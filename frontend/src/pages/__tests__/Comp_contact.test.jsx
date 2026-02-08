import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Comp_contact from "../../components/Comp_contact/Comp_contact";
import { beforeEach, describe, expect, test, vi } from "vitest";

/* mock react-toastify */
vi.mock("react-toastify", () => ({
  ToastContainer: () => <div>ToastContainer</div>,
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

globalThis.fetch = vi.fn();

describe("Comp_contact Component", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test("renders contact heading", () => {
    render(<Comp_contact />);
    expect(
      screen.getByRole("heading", { name: /reach out to us/i }),
    ).toBeInTheDocument();
  });

  test("renders submit button", () => {
    render(<Comp_contact />);
    expect(
      screen.getByRole("button", { name: /send message/i }),
    ).toBeInTheDocument();
  });

  test("submits form successfully", async () => {
    fetch.mockResolvedValueOnce({
      json: async () => ({ success: true }),
    });

    render(<Comp_contact />);

    fireEvent.change(screen.getByPlaceholderText(/enter your name/i), {
      target: { value: "Sailesh" },
    });

    fireEvent.change(screen.getByPlaceholderText(/enter your email/i), {
      target: { value: "test@mail.com" },
    });

    fireEvent.change(screen.getByPlaceholderText(/enter your message/i), {
      target: { value: "Hello" },
    });

    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });

  test("sets document title on mount", () => {
    render(<Comp_contact />);
    expect(document.title).toBe("Contact | CloudRule");
  });
});

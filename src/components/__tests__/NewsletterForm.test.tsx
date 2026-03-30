import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import NewsletterForm from "../NewsletterForm";

// Mock lucide-react icons to simple spans
vi.mock("lucide-react", () => ({
  Send: (props: Record<string, unknown>) => <span data-testid="send-icon" {...props} />,
  Check: (props: Record<string, unknown>) => <span data-testid="check-icon" {...props} />,
  AlertCircle: (props: Record<string, unknown>) => (
    <span data-testid="alert-icon" {...props} />
  ),
}));

const mockFetch = vi.fn();
global.fetch = mockFetch;

describe("NewsletterForm", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders email input and submit button", () => {
    render(<NewsletterForm />);

    expect(
      screen.getByLabelText("Email address for newsletter")
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Subscribe to newsletter")
    ).toBeInTheDocument();
  });

  it("submit button is disabled when form is in loading state", async () => {
    // Make fetch hang so we can check loading state
    mockFetch.mockReturnValue(new Promise(() => {}));

    render(<NewsletterForm />);

    const input = screen.getByLabelText("Email address for newsletter");
    const button = screen.getByLabelText("Subscribe to newsletter");

    fireEvent.change(input, { target: { value: "test@example.com" } });
    fireEvent.submit(input.closest("form")!);

    await waitFor(() => {
      expect(button).toBeDisabled();
    });
  });

  it("shows error for invalid email format", async () => {
    render(<NewsletterForm />);

    const input = screen.getByLabelText("Email address for newsletter");

    fireEvent.change(input, { target: { value: "notanemail" } });
    fireEvent.submit(input.closest("form")!);

    await waitFor(() => {
      expect(
        screen.getByText("Please enter a valid email address.")
      ).toBeInTheDocument();
    });
  });

  it("calls fetch with correct endpoint and body on valid submit", async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });

    render(<NewsletterForm />);

    const input = screen.getByLabelText("Email address for newsletter");

    fireEvent.change(input, { target: { value: "test@example.com" } });
    fireEvent.submit(input.closest("form")!);

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: "test@example.com" }),
      });
    });
  });

  it("shows success message after successful submission", async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });

    render(<NewsletterForm />);

    const input = screen.getByLabelText("Email address for newsletter");

    fireEvent.change(input, { target: { value: "test@example.com" } });
    fireEvent.submit(input.closest("form")!);

    await waitFor(() => {
      expect(
        screen.getByText(
          "You're subscribed! Check your inbox for a welcome email."
        )
      ).toBeInTheDocument();
    });
  });

  it("shows error message on failed submission", async () => {
    mockFetch.mockResolvedValue({
      ok: false,
      json: async () => ({ error: "Rate limit exceeded" }),
    });

    render(<NewsletterForm />);

    const input = screen.getByLabelText("Email address for newsletter");

    fireEvent.change(input, { target: { value: "test@example.com" } });
    fireEvent.submit(input.closest("form")!);

    await waitFor(() => {
      expect(screen.getByText("Rate limit exceeded")).toBeInTheDocument();
    });
  });
});

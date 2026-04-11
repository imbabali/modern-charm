import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import PortfolioGrid from "../PortfolioGrid";
import { portfolioEvents } from "@/data/portfolio-events";

// Mock next/image
vi.mock("next/image", () => ({
  default: (props: Record<string, unknown>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { fill, priority, quality, sizes, ...rest } = props;
    // Convert style object to string if present
    const imgProps = { ...rest };
    if (typeof imgProps.style === "object" && imgProps.style !== null) {
      // jsdom handles style objects fine on img elements
    }
    return <img {...imgProps} />;
  },
}));

// Mock next/link
vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    [key: string]: unknown;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("PortfolioGrid", () => {
  const planningEvents = portfolioEvents.filter(
    (e) => e.category === "planning"
  );
  const stylingEvents = portfolioEvents.filter(
    (e) => e.category === "styling"
  );

  it("renders all events when 'All Projects' tab is active (default)", () => {
    render(<PortfolioGrid events={portfolioEvents} />);

    // All event titles should be visible
    for (const event of portfolioEvents) {
      expect(screen.getByText(event.title)).toBeInTheDocument();
    }
  });

  it("filters to only planning events when 'Event Planning & Coordination' tab is clicked", () => {
    render(<PortfolioGrid events={portfolioEvents} />);

    fireEvent.click(
      screen.getByRole("tab", { name: "Event Planning & Coordination" })
    );

    // Planning events should be visible
    for (const event of planningEvents) {
      expect(screen.getByText(event.title)).toBeInTheDocument();
    }

    // Styling events should not be visible
    for (const event of stylingEvents) {
      expect(screen.queryByText(event.title)).not.toBeInTheDocument();
    }
  });

  it("filters to only styling events when 'Event Styling & Decor' tab is clicked", () => {
    render(<PortfolioGrid events={portfolioEvents} />);

    fireEvent.click(
      screen.getByRole("tab", { name: "Event Styling & Decor" })
    );

    // Styling events should be visible
    for (const event of stylingEvents) {
      expect(screen.getByText(event.title)).toBeInTheDocument();
    }

    // Planning events should not be visible
    for (const event of planningEvents) {
      expect(screen.queryByText(event.title)).not.toBeInTheDocument();
    }
  });

  it("shows empty state message when no events match", () => {
    render(<PortfolioGrid events={[]} />);

    expect(
      screen.getByText("No events found in this category yet. Check back soon!")
    ).toBeInTheDocument();
  });

  it("each event card links to /portfolio/[slug]", () => {
    render(<PortfolioGrid events={portfolioEvents} />);

    for (const event of portfolioEvents) {
      const link = screen.getByRole("link", { name: new RegExp(event.title) });
      expect(link).toHaveAttribute("href", `/portfolio/${event.slug}`);
    }
  });

  it("each event card shows the title and photo count", () => {
    render(<PortfolioGrid events={portfolioEvents} />);

    for (const event of portfolioEvents) {
      // Title is unique per event
      expect(screen.getByText(event.title)).toBeInTheDocument();

      // Photo count lives inside the same link as the title. Use a text
      // match rather than structural selector so the test survives
      // restyling of the card markup.
      const link = screen.getByRole("link", {
        name: new RegExp(event.title),
      });
      expect(link.textContent).toMatch(
        new RegExp(`${event.images.length}\\s*Photos?`, "i")
      );
    }
  });
});

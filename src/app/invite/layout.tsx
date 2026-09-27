import type { ReactNode } from "react";
import { Cormorant_Garamond } from "next/font/google";

/**
 * The invitation wears the couple's identity, not Modern Charm's, so it opts
 * out of the site chrome and loads its own display face. Two weights only:
 * every additional weight is a font file a guest on mobile data pays for.
 */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "500"],
  style: ["normal", "italic"],
  variable: "--invite-display",
  display: "swap",
});

export default function InviteLayout({ children }: { children: ReactNode }) {
  return <div className={cormorant.variable}>{children}</div>;
}

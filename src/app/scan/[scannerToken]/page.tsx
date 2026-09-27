import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ScannerConsole from "@/components/invite/ScannerConsole";
import { getScannerEvent } from "@/lib/invites/queries";
import { invitesConfigured } from "@/lib/invites/db";
import { isWellFormedToken } from "@/lib/invites/tokens";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Door check-in",
  robots: { index: false, follow: false },
};

interface ScanPageProps {
  params: Promise<{ scannerToken: string }>;
}

export default async function ScanPage({ params }: ScanPageProps) {
  const { scannerToken } = await params;

  if (!invitesConfigured() || !isWellFormedToken(scannerToken)) notFound();

  const scanner = await getScannerEvent(scannerToken);
  if (!scanner) notFound();

  return (
    <ScannerConsole
      scannerToken={scannerToken}
      coupleLine={scanner.coupleLine}
    />
  );
}

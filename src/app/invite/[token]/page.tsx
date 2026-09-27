import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InviteExperience from "@/components/invite/InviteExperience";
import { getInviteByToken } from "@/lib/invites/queries";
import { invitesConfigured } from "@/lib/invites/db";
import { isWellFormedToken } from "@/lib/invites/tokens";

/**
 * The guest token is the only credential, so the invitation must never be
 * cached at the edge, indexed, or served from a shared store.
 */
export const dynamic = "force-dynamic";

interface InvitePageProps {
  params: Promise<{ token: string }>;
}

async function load(rawToken: string) {
  if (!invitesConfigured() || !isWellFormedToken(rawToken)) return null;
  return getInviteByToken(rawToken);
}

export async function generateMetadata({ params }: InvitePageProps): Promise<Metadata> {
  const { token } = await params;
  const bundle = await load(token);

  // A link that no longer resolves should say nothing about who it was for.
  if (!bundle) {
    return { title: "Invitation", robots: { index: false, follow: false } };
  }

  const { event, guest } = bundle;
  const couple = `${event.couple_a_name} & ${event.couple_b_name}`;

  return {
    title: `${couple} | Invitation for ${guest.display_name}`,
    description: `${guest.display_name}, you are invited to the wedding of ${couple}.`,
    robots: { index: false, follow: false, nocache: true },
    openGraph: {
      title: `${couple}`,
      description: `An invitation for ${guest.display_name}`,
      type: "website",
    },
  };
}

export default async function InvitePage({ params }: InvitePageProps) {
  const { token } = await params;
  const bundle = await load(token);

  if (!bundle) notFound();

  return <InviteExperience bundle={bundle} token={token} />;
}

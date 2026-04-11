"use client";

import { useState } from "react";
import { Check, AlertCircle } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage("You're subscribed! Check your inbox for a welcome email.");
      setEmail("");
      setConsent(false);

      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  const isDisabled = status === "loading" || status === "success";

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex items-stretch gap-0">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@domain.com"
          disabled={isDisabled}
          className="flex-1 min-w-0 h-11 px-4 bg-transparent border-b border-cream/30 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:border-accent transition-all duration-300 disabled:opacity-50 font-body"
          style={{ fontFamily: "var(--font-body)" }}
          aria-label="Email address for newsletter"
        />
        <button
          type="submit"
          disabled={isDisabled || !consent || !email}
          className="shrink-0 h-11 px-5 label-mono text-near-black bg-accent disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent-light transition-colors duration-300 flex items-center justify-center gap-2"
          aria-label="Subscribe to newsletter"
          data-cursor-label="SUBSCRIBE"
        >
          {status === "loading" ? (
            <span className="h-4 w-4 border-2 border-near-black/30 border-t-near-black rounded-full animate-spin" />
          ) : status === "success" ? (
            <>
              <Check className="w-3.5 h-3.5" aria-hidden="true" />
              Sent
            </>
          ) : (
            <>Join</>
          )}
        </button>
      </form>
      <label className="flex items-start gap-2 mt-3 cursor-pointer">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          disabled={isDisabled}
          className="mt-0.5 accent-accent"
        />
        <span className="text-xs text-cream/60 leading-relaxed">
          I agree to receive event styling tips and offers. You can unsubscribe anytime.
        </span>
      </label>
      {message && (
        <p
          role={status === "error" ? "alert" : "status"}
          className={`mt-3 label-mono-sm flex items-center gap-1 ${
            status === "success" ? "text-primary-light" : "text-accent-light"
          }`}
        >
          {status === "error" && <AlertCircle className="w-3 h-3 flex-shrink-0" aria-hidden="true" />}
          {message}
        </p>
      )}
    </div>
  );
}

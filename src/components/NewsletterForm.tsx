"use client";

import { useState } from "react";
import { Send, Check, AlertCircle } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
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

      // Reset to idle after a few seconds
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-0">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          disabled={status === "loading" || status === "success"}
          className="flex-1 min-w-0 px-4 py-2.5 bg-white/15 border border-white/25 rounded-l-lg text-sm text-white placeholder-white/70 focus:outline-none focus:border-accent focus:bg-white/20 transition-colors disabled:opacity-50"
          aria-label="Email address for newsletter"
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="px-4 py-2.5 bg-accent-dark hover:bg-accent disabled:opacity-60 disabled:cursor-not-allowed rounded-r-lg transition-colors duration-300 flex items-center justify-center"
          aria-label="Subscribe to newsletter"
        >
          {status === "loading" ? (
            <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : status === "success" ? (
            <Check className="w-4 h-4 text-white" aria-hidden="true" />
          ) : (
            <Send className="w-4 h-4 text-white" aria-hidden="true" />
          )}
        </button>
      </form>
      {message && (
        <p
          role={status === "error" ? "alert" : "status"}
          className={`mt-2 text-xs flex items-center gap-1 ${
            status === "success" ? "text-green-300" : "text-red-300"
          }`}
        >
          {status === "error" && <AlertCircle className="w-3 h-3 flex-shrink-0" aria-hidden="true" />}
          {message}
        </p>
      )}
    </div>
  );
}

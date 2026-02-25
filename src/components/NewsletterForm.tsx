"use client";

import { Send } from "lucide-react";

export default function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex gap-0"
    >
      <input
        type="email"
        placeholder="Your email"
        className="flex-1 min-w-0 px-4 py-2.5 bg-white/10 border border-white/20 rounded-l-lg text-sm text-white placeholder-white/40 focus:outline-none focus:border-accent focus:bg-white/15 transition-colors"
        aria-label="Email address for newsletter"
      />
      <button
        type="submit"
        className="px-4 py-2.5 bg-accent hover:bg-accent-dark rounded-r-lg transition-colors duration-300 flex items-center justify-center"
        aria-label="Subscribe to newsletter"
      >
        <Send className="w-4 h-4 text-white" aria-hidden="true" />
      </button>
    </form>
  );
}

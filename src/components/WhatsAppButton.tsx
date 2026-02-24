"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const phoneNumber = "256779399409";
  const message = encodeURIComponent(
    "Hello Modern Charm! I'd like to inquire about your event styling services."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip */}
      <div
        className={`px-4 py-2 bg-white rounded-full shadow-lg text-sm font-medium text-dark transition-all duration-300 whitespace-nowrap ${
          isHovered
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-4 pointer-events-none"
        }`}
      >
        Chat with us
      </div>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:bg-[#20BD5A] hover:scale-110 hover:shadow-2xl animate-whatsapp-pulse"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
}

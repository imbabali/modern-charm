"use client";

import { useEffect, useRef, useState } from "react";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /**
   * "fade" — default 2rem upward fade-in.
   * "line-mask" — fluid.glass style line reveal (content translates up
   * from 110% within an overflow-hidden wrapper).
   */
  variant?: "fade" | "line-mask";
}

export default function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
  variant = "fade",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  if (variant === "line-mask") {
    return (
      <div
        ref={ref}
        className={`overflow-hidden ${className}`}
        style={{ padding: "0.15em 0" }}
      >
        <div
          style={{
            transform: isVisible ? "translateY(0)" : "translateY(110%)",
            opacity: isVisible ? 1 : 0,
            transition: `transform 0.9s cubic-bezier(0.77, 0, 0.175, 1) ${delay}ms, opacity 0.6s ease-out ${delay}ms`,
          }}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

interface LogoProps {
  className?: string;
  size?: number;
  /** Color for the C arc and leaf accents. Defaults to the brand gold. */
  accentColor?: string;
  /** Color for the M letter. Defaults to currentColor. */
  letterColor?: string;
}

export default function Logo({
  className = "",
  size,
  accentColor = "#C4915C",
  letterColor = "currentColor",
}: LogoProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...(size ? { width: size, height: size } : {})}
      aria-label="Modern Charm monogram"
      role="img"
    >
      {/*
        Modern Charm MC monogram — traced from logo-reference.png.

        The C is a near-complete circle (gold) open at bottom-right,
        spanning from ~1 o'clock clockwise to ~5 o'clock.
        Two small leaf shapes sit at the C's endpoints (top-right
        and bottom-right of the gap).
        The M (white/adaptive) is wide and shallow, its outer legs
        crossing through the C circle.
      */}

      {/* ---- "C" — near-complete circle, open at bottom-right ---- */}
      <path
        d="M130 42
           A 62 62 0 1 0 140 148"
        stroke={accentColor}
        strokeWidth="5.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* ---- Leaf accent — top-right (near C start) ---- */}
      <path
        d="M126 38 Q134 28, 142 38 Q134 48, 126 38Z"
        fill={accentColor}
      />

      {/* ---- Leaf accent — bottom-right (near C end) ---- */}
      <path
        d="M136 144 Q144 134, 152 144 Q144 154, 136 144Z"
        fill={accentColor}
      />

      {/* ---- "M" — wide, shallow, legs cross through the C ---- */}
      <path
        d="M48 148
           L78 52
           L100 108
           L122 52
           L152 148"
        stroke={letterColor}
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

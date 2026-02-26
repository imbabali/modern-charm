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
        Modern Charm MC monogram — traced from official logo files.

        The C is a gold arc (centre 100,115  r 52) covering ~270°,
        open on the right. Two small leaf accents sit at the terminals.
        The M's two outer peaks extend ABOVE the C circle (~y 38),
        its valley dips to C centre (~y 120), and its feet cross
        through the arc near the bottom (~y 155).
      */}

      {/* ---- "C" arc — ~270°, opens on the right ---- */}
      <path
        d="M137 78 A 52 52 0 1 0 137 152"
        stroke={accentColor}
        strokeWidth="5.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* ---- Leaf accent — top-right (at C start) ---- */}
      <path
        d="M137 78 Q144 72, 142 66 Q135 72, 137 78Z"
        fill={accentColor}
      />

      {/* ---- Leaf accent — bottom-right (at C end) ---- */}
      <path
        d="M137 152 Q144 158, 142 164 Q135 158, 137 152Z"
        fill={accentColor}
      />

      {/* ---- "M" — peaks above C, valley inside, legs cross through arc ---- */}
      <path
        d="M58 155
           L70 38
           L100 120
           L130 38
           L142 155"
        stroke={letterColor}
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

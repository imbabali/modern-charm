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

        Centre (100,100), radius 55. The gold C arc covers ~264°,
        opening on the right side with the gap between ~48° above
        and ~48° below the horizontal. Two small almond-shaped leaf
        accents sit at the C terminals, pointing radially outward.
        The M sits inside the C with its outer legs crossing through
        the arc at the bottom.
      */}

      {/* ---- "C" arc — ~264°, opens on the right ---- */}
      <path
        d="M137 59 A 55 55 0 1 0 137 141"
        stroke={accentColor}
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />

      {/* ---- Leaf accent — top-right (at C start, pointing upper-right) ---- */}
      <path
        d="M137 59 Q146 54, 148 46 Q140 52, 137 59Z"
        fill={accentColor}
      />

      {/* ---- Leaf accent — bottom-right (at C end, pointing lower-right) ---- */}
      <path
        d="M137 141 Q146 146, 148 154 Q140 148, 137 141Z"
        fill={accentColor}
      />

      {/* ---- "M" — centred inside C, legs cross through arc ---- */}
      <path
        d="M56 152
           L82 65
           L100 110
           L118 65
           L144 152"
        stroke={letterColor}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

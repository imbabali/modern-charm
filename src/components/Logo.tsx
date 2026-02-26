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
        Faithful trace of the Modern Charm MC monogram.
        - The "C" is a wide copper/gold arc wrapping from upper-right
          around the left to lower-right.
        - The "M" sits inside with two sharp peaks and a centre valley,
          its legs extending just past the C arc.
        - Two small leaf/petal accents sit at ~10 o'clock (top-left)
          and ~4 o'clock (bottom-right).
      */}

      {/* ---- "C" arc (gold/copper accent) ---- */}
      <path
        d="M138 52
           C118 28, 72 28, 52 58
           C32 88, 34 126, 54 152
           C72 174, 118 176, 142 156"
        stroke={accentColor}
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />

      {/* ---- Leaf accent — top-left (~10 o'clock) ---- */}
      <g transform="translate(44, 38) rotate(-35, 8, 8)">
        <path
          d="M0 8 Q8 -2, 16 8 Q8 18, 0 8Z"
          fill={accentColor}
        />
      </g>
      <g transform="translate(35, 50) rotate(-35, 6, 6)">
        <path
          d="M0 6 Q6 -1.5, 12 6 Q6 13.5, 0 6Z"
          fill={accentColor}
        />
      </g>

      {/* ---- Leaf accent — bottom-right (~4 o'clock) ---- */}
      <g transform="translate(144, 144) rotate(-35, 8, 8)">
        <path
          d="M0 8 Q8 -2, 16 8 Q8 18, 0 8Z"
          fill={accentColor}
        />
      </g>
      <g transform="translate(153, 132) rotate(-35, 6, 6)">
        <path
          d="M0 6 Q6 -1.5, 12 6 Q6 13.5, 0 6Z"
          fill={accentColor}
        />
      </g>

      {/* ---- "M" letter ---- */}
      <path
        d="M56 155
           L80 55
           L100 118
           L120 55
           L144 155"
        stroke={letterColor}
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

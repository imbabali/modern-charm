interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size }: LogoProps) {
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
      {/* Outer circle frame */}
      <circle
        cx="100"
        cy="100"
        r="80"
        stroke="currentColor"
        strokeWidth="3.5"
        fill="none"
      />

      {/* Decorative leaf — top-left (~10 o'clock) */}
      <g transform="translate(34, 40) rotate(-40, 8, 8)">
        <path
          d="M0 8 Q8 -2, 16 8 Q8 18, 0 8Z"
          fill="currentColor"
        />
      </g>
      <g transform="translate(26, 52) rotate(-40, 7, 7)">
        <path
          d="M0 7 Q7 -1, 14 7 Q7 15, 0 7Z"
          fill="currentColor"
        />
      </g>

      {/* Decorative leaf — bottom-right (~4 o'clock) */}
      <g transform="translate(150, 142) rotate(-40, 8, 8)">
        <path
          d="M0 8 Q8 -2, 16 8 Q8 18, 0 8Z"
          fill="currentColor"
        />
      </g>
      <g transform="translate(158, 130) rotate(-40, 7, 7)">
        <path
          d="M0 7 Q7 -1, 14 7 Q7 15, 0 7Z"
          fill="currentColor"
        />
      </g>

      {/*
        MC Monogram
        ============
        Reference shows the M with two sharp peaks near the top of the circle,
        a V-bottom at center, and the C wrapping as a large open arc from
        upper-right, around the left, to lower-right. The strokes interweave.
      */}

      {/* "M" letter — angular peaks with center valley */}
      <path
        d="M58 150
           L78 50
           L100 110
           L122 50
           L142 150"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="miter"
        fill="none"
      />

      {/* "C" letter — sweeping arc that embraces the M */}
      <path
        d="M132 58
           C112 34, 76 34, 58 56
           C40 80, 42 118, 58 140
           C72 156, 104 160, 132 146"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

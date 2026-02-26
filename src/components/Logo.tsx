import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size = 44 }: LogoProps) {
  /* The logo image is 1080×763 (~1.42:1). Use a matching aspect ratio
     container with object-contain so the full monogram + wordmark
     is visible without cropping. */
  const width = Math.round(size * 1.4);

  return (
    <div
      className={`relative overflow-hidden rounded-lg ${className}`}
      style={{ width, height: size }}
    >
      <Image
        src="/images/logo-gold.jpg"
        alt="Modern Charm monogram"
        fill
        sizes={`${width}px`}
        className="object-contain"
        priority
      />
    </div>
  );
}

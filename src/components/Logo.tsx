import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size = 44 }: LogoProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/images/logo-reference.png"
        alt="Modern Charm monogram"
        fill
        sizes={`${size}px`}
        className="object-cover object-[center_32%]"
        priority
      />
    </div>
  );
}

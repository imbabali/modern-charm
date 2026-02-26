import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size }: LogoProps) {
  const dimensions = size ?? 44;
  return (
    <Image
      src="/images/logo-reference.png"
      alt="Modern Charm monogram"
      width={dimensions}
      height={dimensions}
      className={`rounded-lg object-contain ${className}`}
      priority
    />
  );
}

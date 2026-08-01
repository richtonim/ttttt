import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { img: 24, text: "text-lg" },
  md: { img: 32, text: "text-xl" },
  lg: { img: 40, text: "text-2xl" },
};

export function Logo({ className = "", showText = true, size = "md" }: LogoProps) {
  const s = sizes[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 group ${className}`}
      aria-label="Qualia home"
    >
      <Image
        src="/logo.svg"
        alt="Qualia logo"
        width={s.img}
        height={s.img}
        className="transition-transform group-hover:scale-105"
        priority
      />
      {showText && (
        <span className={`font-semibold tracking-tight text-qualia-black ${s.text}`}>
          Qualia
        </span>
      )}
    </Link>
  );
}

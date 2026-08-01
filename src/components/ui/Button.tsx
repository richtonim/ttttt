import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "white";
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  external = false,
}: ButtonProps) {
  const variants = {
    primary:
      "bg-soma-black text-white hover:bg-soma-gray-500 border border-soma-black",
    secondary:
      "bg-white text-soma-black border border-soma-gray-200 hover:border-soma-black",
    outline:
      "bg-transparent text-soma-black border border-soma-gray-300 hover:border-soma-black",
    ghost: "bg-transparent text-soma-black hover:text-soma-gray-400",
    white:
      "bg-white text-soma-black border border-white hover:bg-soma-gray-100",
  };

  const baseClasses =
    "group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300";

  const content = (
    <>
      {children}
      <ArrowRight
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${variants[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {content}
    </Link>
  );
}

export function ButtonSolid({
  href,
  variant = "primary",
  children,
  className = "",
}: Omit<ButtonProps, "external">) {
  const variants = {
    primary: "bg-soma-black text-white hover:bg-soma-gray-500",
    secondary: "bg-white text-soma-black hover:bg-soma-gray-100",
    outline: "bg-transparent text-soma-black border border-soma-gray-300 hover:border-soma-black",
    ghost: "bg-transparent text-soma-black",
    white: "bg-white text-soma-black hover:bg-soma-gray-100",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

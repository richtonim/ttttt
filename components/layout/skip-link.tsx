import Link from "next/link";

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-button focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
    >
      Skip to content
    </a>
  );
}

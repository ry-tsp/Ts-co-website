import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center px-8 py-[22px] border-b border-black/10">
      <Link
        href="/"
        className="font-cormorant text-[17px] tracking-[0.1em] uppercase text-ink hover:opacity-75 transition-opacity focus-visible:outline focus-visible:outline-1 focus-visible:outline-oxblood"
        aria-label="Thompson Street — home"
      >
        Thompson Street
      </Link>
    </header>
  );
}

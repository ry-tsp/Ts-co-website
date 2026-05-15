import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between px-8 py-5 border-t border-black/10">
      <Link
        href="/"
        className="font-cormorant text-[13px] tracking-[0.1em] uppercase text-ink hover:opacity-75 transition-opacity focus-visible:outline focus-visible:outline-1 focus-visible:outline-oxblood"
      >
        Thompson Street
      </Link>
      <span className="font-courier text-[10px] tracking-[0.12em] uppercase text-black/30">
        Washington &nbsp;·&nbsp; Copenhagen &nbsp;·&nbsp; Frankfurt
      </span>
    </footer>
  );
}

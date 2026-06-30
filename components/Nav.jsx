"use client";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line/60 bg-ink/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-sm font-medium tracking-tight text-paper">
          SB<span className="text-signal">.</span>
        </a>
        <ul className="hidden gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs uppercase tracking-widest text-mist transition-colors hover:text-signal"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="mailto:shenal19406@gmail.com"
          className="rounded-sm border border-signal/40 px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-signal transition-colors hover:bg-signal hover:text-ink"
        >
          Hire me
        </a>
      </nav>
    </header>
  );
}

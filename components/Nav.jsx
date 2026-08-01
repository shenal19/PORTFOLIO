'use client';

import { useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1120px] items-center justify-between px-7 py-4">
        <div className="flex items-center gap-2 font-mono text-[15px] font-medium text-ink">
          <span className="inline-block h-[7px] w-[7px] rounded-sm bg-gold" />
          shenbaga.dev
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-lg text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          ☰
        </button>

        <div
          className={`${
            open ? 'flex' : 'hidden'
          } absolute left-0 right-0 top-[63px] flex-col gap-4 border-b border-border bg-surface px-7 py-5 md:static md:flex md:flex-row md:items-center md:gap-8 md:border-none md:bg-transparent md:p-0`}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[14.5px] text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="rounded-lg bg-teal px-4 py-2 text-[13.5px] font-medium text-bg transition-colors hover:bg-gold"
          >
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  );
}

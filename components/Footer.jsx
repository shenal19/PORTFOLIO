export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 font-mono text-[0.7rem] uppercase tracking-widest text-mist sm:flex-row">
        <p>© {new Date().getFullYear()} Shenbaga Balaji</p>
        <p>Built with Next.js &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-3 px-7">
        <p className="text-[13px] text-muted">
          © 2026 Shenbaga Balaji — built with care, not a template.
        </p>
        <div className="flex gap-5">
          <a
            href="mailto:shenal19406@gmail.com"
            className="text-[13px] text-muted transition-colors hover:text-teal"
          >
            shenal19406@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}

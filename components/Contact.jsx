export default function Contact() {
  return (
    <section id="contact" className="border-t border-border py-22">
      <div className="mx-auto max-w-[1120px] px-7">
        <div className="relative overflow-hidden rounded-[20px] border border-border bg-surface p-10 text-center sm:p-14">
          <div className="pointer-events-none absolute -right-32 -top-40 h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(69,196,176,0.14),transparent_70%)]" />

          <div className="relative z-10 mx-auto flex items-center justify-center gap-2.5 font-mono text-[12.5px] uppercase tracking-[0.14em] text-teal before:h-px before:w-4 before:bg-teal">
            Contact
          </div>
          <h2 className="relative z-10 mx-auto mt-4 max-w-[600px] font-display text-[1.6rem] font-extrabold sm:text-[2.4rem]">
            Have a dataset worth a second look?
          </h2>
          <p className="relative z-10 mx-auto mt-4 max-w-[460px] text-[15.5px] text-muted">
            I&apos;m currently focused on Data Science, Analytics, and Applied ML — always
            glad to talk through a problem, a pipeline, or a project.
          </p>

          <div className="relative z-10 mt-8 flex flex-wrap justify-center gap-3.5">
            <a
              href="mailto:shenal19406@gmail.com"
              className="rounded-[9px] bg-ink px-[22px] py-[13px] text-[14.5px] font-semibold text-bg transition-all hover:-translate-y-0.5 hover:bg-teal"
            >
              Email me
            </a>
            <a
              href="https://www.linkedin.com/in/shenbaga-balaji-6b4b8228a"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[9px] border border-border px-[22px] py-[13px] text-[14.5px] font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-teal hover:text-teal"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/shenal19"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[9px] border border-border px-[22px] py-[13px] text-[14.5px] font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-teal hover:text-teal"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

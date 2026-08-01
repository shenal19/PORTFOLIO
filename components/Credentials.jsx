const certifications = [
  { title: 'AWS Certified Solutions Architect – Associate', sub: 'Amazon Web Services' },
  { title: 'OCI Generative AI Professional', sub: 'Oracle Cloud Infrastructure' },
  { title: 'Data Science with Python', sub: 'IBM' },
];

const achievements = [
  { title: 'Contributor — Smart India Hackathon 2025', sub: 'AI-Powered Tourism Platform' },
  { title: 'Contributor — GlitchCon 2025', sub: '24-hour hackathon, VIT ECDS & VITAA' },
  { title: 'Represented Dindigul district, TNCA', sub: 'State-level cricket, U-14 / U-16 / U-19' },
];

export default function Credentials() {
  return (
    <section className="border-t border-border py-22">
      <div className="mx-auto max-w-[1120px] px-7">
        <div className="mb-11 max-w-[640px]">
          <div className="flex items-center gap-2.5 font-mono text-[12.5px] uppercase tracking-[0.14em] text-teal before:h-px before:w-4 before:bg-teal">
            Credentials
          </div>
          <h2 className="mt-3.5 font-display text-[1.7rem] font-extrabold sm:text-[2.2rem]">
            Certifications & achievements.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-[14px] border border-border bg-surface p-6">
            <h4 className="mb-4 font-mono text-[11.5px] uppercase tracking-[0.06em] text-teal">
              Certifications
            </h4>
            <ul className="flex flex-col gap-3.5">
              {certifications.map((c, i) => (
                <li
                  key={c.title}
                  className={`flex gap-2.5 text-[14.5px] text-ink ${
                    i !== certifications.length - 1 ? 'border-b border-border pb-3.5' : ''
                  }`}
                >
                  <span className="flex-shrink-0 text-gold">◆</span>
                  <div>
                    {c.title}
                    <span className="mt-0.5 block text-[13px] text-muted">{c.sub}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[14px] border border-border bg-surface p-6">
            <h4 className="mb-4 font-mono text-[11.5px] uppercase tracking-[0.06em] text-teal">
              Achievements
            </h4>
            <ul className="flex flex-col gap-3.5">
              {achievements.map((a, i) => (
                <li
                  key={a.title}
                  className={`flex gap-2.5 text-[14.5px] text-ink ${
                    i !== achievements.length - 1 ? 'border-b border-border pb-3.5' : ''
                  }`}
                >
                  <span className="flex-shrink-0 text-gold">◆</span>
                  <div>
                    {a.title}
                    <span className="mt-0.5 block text-[13px] text-muted">{a.sub}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

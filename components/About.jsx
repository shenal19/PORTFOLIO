const facts = [
  { k: 'Based in', v: 'Chennai, Tamil Nadu, India' },
  { k: 'Studying', v: 'B.Tech CSE (Data Science), VIT Chennai' },
  { k: 'Core stack', v: 'Python · SQL · AWS · Power BI' },
  { k: 'Also known for', v: 'District-level cricket, VIT Music Club ops lead' },
];

export default function About() {
  return (
    <section id="about" className="border-t border-border py-22">
      <div className="mx-auto max-w-[1120px] px-7">
        <div className="mb-11 max-w-[640px]">
          <div className="flex items-center gap-2.5 font-mono text-[12.5px] uppercase tracking-[0.14em] text-teal before:h-px before:w-4 before:bg-teal">
            About
          </div>
          <h2 className="mt-3.5 font-display text-[1.7rem] font-extrabold sm:text-[2.2rem]">
            An engineer&apos;s instinct for data science.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-14 md:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-4 text-[16px] text-muted">
            <p>
              I&apos;m a Computer Science engineering student specializing in{' '}
              <strong className="font-semibold text-ink">Data Science</strong> at Vellore
              Institute of Technology, Chennai. I treat a dataset as a product problem first
              and a modeling problem second — most of my work sits at the intersection of
              analytics engineering and machine learning: piping and cleaning raw data,
              building models that have to justify their accuracy, then packaging the result
              into something a non-technical stakeholder can actually act on.
            </p>
            <p>
              That shows up across an{' '}
              <strong className="font-semibold text-ink">
                ETL pipeline that cut manual reporting time by 70%
              </strong>
              , a defect-prediction model running at{' '}
              <strong className="font-semibold text-ink">93% accuracy</strong>, and a
              master-data internship where I learned that clean data is a discipline, not a
              one-time fix. I&apos;ve also spent time in computer vision, tracking cricket
              balls in real time with YOLOv8, and in tooling for automated business insight
              generation.
            </p>
            <p>
              Outside the notebook, I hold an{' '}
              <strong className="font-semibold text-ink">
                AWS Solutions Architect – Associate
              </strong>{' '}
              certification and an{' '}
              <strong className="font-semibold text-ink">
                OCI Generative AI Professional
              </strong>{' '}
              certification, and I keep my fundamentals sharp through consistent problem
              solving.
            </p>
          </div>

          <div className="flex flex-col">
            {facts.map((f) => (
              <div key={f.k} className="border-t border-border py-4 last:border-b">
                <div className="font-mono text-[11px] uppercase tracking-[0.06em] text-muted">
                  {f.k}
                </div>
                <div className="mt-1 text-[14.5px] text-ink">{f.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <section id="about" className="border-b border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="label-eyebrow mb-4">01 / About</p>
        <div className="grid gap-12 md:grid-cols-[1fr_1.3fr]">
          <h2 className="font-display text-2xl font-medium leading-snug text-paper md:text-3xl">
            Data Science engineer with a builder's instinct.
          </h2>
          <div className="space-y-5 text-base leading-relaxed text-mist">
            <p>
              I'm a final-year Data Science student at VIT Chennai who treats
              every dataset like a product problem first and a model second.
              Most of my work lives at the intersection of analytics
              engineering and machine learning: cleaning and piping raw data,
              building models that have to justify their accuracy, then
              packaging the result into something a non-technical
              stakeholder can act on.
            </p>
            <p>
              That shows up across an ETL pipeline that cut manual reporting
              time by 70%, a defect-prediction model running at 93% accuracy,
              and a master-data internship where I learned that "clean data"
              is a discipline, not a one-time fix. Outside the notebook, I'm
              AWS and OCI Generative AI certified, and I keep my fundamentals
              sharp with 200+ solved DSA problems.
            </p>
            <p>
              I'm currently open to internships and entry-level roles in Data
              Science, Analytics, and Applied ML.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

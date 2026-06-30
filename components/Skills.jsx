const groups = [
  {
    title: "Languages",
    items: ["Python", "SQL", "Java", "R", "C++"],
  },
  {
    title: "Data Science & ML",
    items: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Random Forest",
      "Feature Engineering",
      "NLP (spaCy)",
      "YOLOv8",
    ],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "Amazon DynamoDB"],
  },
  {
    title: "Cloud & Tools",
    items: [
      "AWS",
      "Oracle Cloud Infrastructure",
      "Power BI",
      "Tableau",
      "Streamlit",
      "Git / GitHub",
      "Stibo STEP MDM",
    ],
  },
];

const certifications = [
  "AWS Certified Solutions Architect — Associate",
  "Oracle Cloud Infrastructure (OCI) Generative AI Professional",
  "IBM Data Science with Python",
];

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="label-eyebrow mb-4">04 / Skills</p>
        <h2 className="mb-12 font-display text-2xl font-medium text-paper md:text-3xl">
          The toolkit behind the work.
        </h2>

        <div className="grid gap-6 md:grid-cols-4">
          {groups.map((g) => (
            <div key={g.title} className="card-panel rounded-md p-5 transition-colors">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-signal">
                {g.title}
              </h3>
              <ul className="space-y-2">
                {g.items.map((i) => (
                  <li key={i} className="text-sm text-mist">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 card-panel rounded-md p-5 transition-colors">
          <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-signal">
            Certifications
          </h3>
          <div className="flex flex-wrap gap-3">
            {certifications.map((c) => (
              <span
                key={c}
                className="rounded-sm border border-line px-3 py-1.5 text-xs text-paper"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

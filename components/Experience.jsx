const experience = [
  {
    period: "Mar 2026 — May 2026",
    org: "Skillumni",
    role: "Data Science with Python Trainee",
    points: [
      "Ran data preprocessing, EDA, and feature engineering across multiple datasets to extract decision-ready insights.",
      "Completed project-based training spanning Python, SQL, and ML, capped by a full SQL-based capstone project.",
    ],
  },
  {
    period: "Jun 2025 — Jul 2025",
    org: "ISNIA Technologies",
    role: "STEP Master Data Management Intern",
    points: [
      "Managed enterprise master data workflows in Stibo STEP MDM, covering validation and transformation processes.",
      "Identified and resolved data inconsistencies across enterprise datasets to maintain master data integrity.",
    ],
  },
  {
    period: "Jun 2024 — Aug 2025",
    org: "Music Club, VIT Chennai",
    role: "Operations Team Leader",
    points: [
      "Led event operations and logistics across cross-functional teams for club-wide cultural events.",
      "Owned planning-to-execution workflows, coordinating multiple teams toward on-time delivery.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="label-eyebrow mb-4">03 / Experience</p>
        <h2 className="mb-12 font-display text-2xl font-medium text-paper md:text-3xl">
          Where the work happened.
        </h2>

        <div className="relative border-l border-line pl-8">
          {experience.map((e) => (
            <div key={e.role} className="relative mb-12 last:mb-0">
              <span className="absolute -left-[2.32rem] top-1.5 h-3 w-3 rounded-full border-2 border-signal bg-ink" />
              <p className="font-mono text-xs uppercase tracking-widest text-mist">
                {e.period}
              </p>
              <h3 className="mt-2 font-display text-lg font-medium text-paper">
                {e.role} <span className="text-mist">· {e.org}</span>
              </h3>
              <ul className="mt-3 space-y-2">
                {e.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex gap-3 text-sm leading-relaxed text-mist"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

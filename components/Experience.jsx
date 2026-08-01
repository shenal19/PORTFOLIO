const roles = [
  {
    date: 'Mar 2026 — May 2026',
    title: 'Data Science & Machine Learning Trainee',
    org: 'Skillumni · Remote, Training Internship',
    points: [
      'Performed data preprocessing, EDA, and feature engineering across 5+ datasets.',
      'Completed project-based training in Python, SQL, and machine learning, building and delivering a SQL-based data analysis project.',
    ],
  },
  {
    date: 'Jun 2025 — Jul 2025',
    title: 'STEP Master Data Management Intern',
    org: 'ISNIA Technologies · Coimbatore, Tamil Nadu',
    points: [
      'Managed enterprise master data workflows using Stibo STEP MDM.',
      'Applied data validation and transformation processes to identify and resolve inconsistencies across live datasets.',
    ],
  },
  {
    date: 'Jun 2024 — Jul 2024',
    title: 'Data Science with Python Trainee',
    org: 'Coincent.ai · Remote, Training Internship',
    points: [
      'Completed a project-based industrial training program in Data Science with Python.',
      'Covered data analysis, statistical methods, and machine learning fundamentals under industry mentorship.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border py-22">
      <div className="mx-auto max-w-[1120px] px-7">
        <div className="mb-11 max-w-[640px]">
          <div className="flex items-center gap-2.5 font-mono text-[12.5px] uppercase tracking-[0.14em] text-teal before:h-px before:w-4 before:bg-teal">
            Experience
          </div>
          <h2 className="mt-3.5 font-display text-[1.7rem] font-extrabold sm:text-[2.2rem]">
            Where the work happened.
          </h2>
        </div>

        <div className="relative pl-7">
          <div className="absolute bottom-1.5 left-[5px] top-1.5 w-px bg-border" />
          {roles.map((r, i) => (
            <div key={r.title} className={`relative ${i !== roles.length - 1 ? 'pb-10' : ''}`}>
              <div className="absolute -left-7 top-1.5 h-[11px] w-[11px] rounded-full border-2 border-teal bg-bg" />
              <div className="mb-2 font-mono text-[11.5px] uppercase tracking-[0.05em] text-teal">
                {r.date}
              </div>
              <h3 className="text-[17.5px] font-bold">{r.title}</h3>
              <div className="mb-3 text-[13.5px] text-muted">{r.org}</div>
              <ul className="flex list-disc flex-col gap-1.5 pl-[18px] text-[14.5px] text-muted">
                {r.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

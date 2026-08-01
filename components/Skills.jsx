const groups = [
  { k: 'Languages', items: ['Python', 'SQL', 'Java', 'R', 'C++'] },
  {
    k: 'Data science & ML',
    items: [
      'Pandas · NumPy',
      'Scikit-learn',
      'Random Forest',
      'Feature engineering',
      'NLP (spaCy, TF-IDF)',
      'YOLOv8',
    ],
  },
  { k: 'Databases', items: ['PostgreSQL', 'MySQL', 'Amazon DynamoDB'] },
  {
    k: 'Cloud & tools',
    items: [
      'AWS (EC2, S3, Lambda, API Gateway)',
      'Oracle Cloud Infrastructure',
      'Power BI · Streamlit',
      'Git / GitHub',
      'Stibo STEP MDM',
    ],
  },
  {
    k: 'Core CS',
    items: ['Data Structures & Algorithms', 'OOP · DBMS', 'Operating Systems', 'Computer Networks'],
  },
  {
    k: 'Analysis',
    items: ['Statistical analysis', 'Correlation & regression', 'Model evaluation', 'REST APIs'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border py-22">
      <div className="mx-auto max-w-[1120px] px-7">
        <div className="mb-11 max-w-[640px]">
          <div className="flex items-center gap-2.5 font-mono text-[12.5px] uppercase tracking-[0.14em] text-teal before:h-px before:w-4 before:bg-teal">
            Skills
          </div>
          <h2 className="mt-3.5 font-display text-[1.7rem] font-extrabold sm:text-[2.2rem]">
            The toolkit behind the work.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div key={g.k}>
              <span className="mb-3 block font-mono text-[11.5px] uppercase tracking-[0.06em] text-gold">
                {g.k}
              </span>
              <ul className="flex flex-col gap-2">
                {g.items.map((item) => (
                  <li key={item} className="relative pl-3.5 text-[14.5px] text-muted before:absolute before:left-0 before:font-bold before:text-teal before:content-['·']">
                    {item}
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

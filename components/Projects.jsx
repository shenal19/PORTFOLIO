const projects = [
  {
    tag: "Analytics Platform",
    title: "Netflix Analytics & Recommendation Platform",
    metric: "70%",
    metricLabel: "less manual analysis time",
    stack: ["Python", "PostgreSQL", "SQL", "Power BI"],
    desc: "Built Python ETL pipelines processing 50k+ records, then layered advanced SQL analytics on top to surface churn, engagement, and revenue signals through interactive Power BI dashboards.",
    href: "https://github.com/shenal19/Netflix-Analytics-Platform",
    featured: true,
  },
  {
    tag: "Predictive ML",
    title: "Software Bug Prediction System",
    metric: "93%",
    metricLabel: "prediction accuracy",
    stack: ["Python", "Scikit-learn", "Streamlit"],
    desc: "A Random Forest defect-prediction model trained on software code metrics, reaching 93% prediction accuracy and 86% bug-type classification accuracy, shipped with an interactive Streamlit dashboard for live scoring.",
    href: "https://github.com/shenal19/Bug-Prediction",
    featured: true,
  },
  {
    tag: "Computer Vision",
    title: "Cricket Ball Tracking System",
    metric: "Real-time",
    metricLabel: "detection & tracking",
    stack: ["Python", "OpenCV", "YOLOv8"],
    desc: "A real-time computer vision pipeline for cricket ball detection and motion tracking, built to support sports analytics and broadcast-style visualization.",
    href: "https://github.com/shenal19/Cricket-Ball-Tracking",
    featured: false,
  },
  {
    tag: "NLP",
    title: "AgreeWise — Terms & Conditions Analyzer",
    metric: "Auto",
    metricLabel: "clause extraction",
    stack: ["Python", "spaCy", "NLP"],
    desc: "An NLP-powered legal document analyzer that automates clause extraction and generates a transparency score, turning dense T&Cs into a simplified read.",
    href: "https://github.com/shenal19/T-C-SUMMARIZER",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="work" className="border-b border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="label-eyebrow mb-4">02 / Selected Work</p>
        <h2 className="mb-12 font-display text-2xl font-medium text-paper md:text-3xl">
          Projects that ship insight, not just notebooks.
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`card-panel group flex flex-col justify-between rounded-md p-6 transition-all hover:-translate-y-1 ${
                p.featured ? "md:row-span-1" : ""
              }`}
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest text-signal">
                    {p.tag}
                  </span>
                  <span className="font-mono text-[0.65rem] text-mist transition-colors group-hover:text-signal">
                    {"->"} repo
                  </span>
                </div>
                <h3 className="font-display text-lg font-medium text-paper">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">
                  {p.desc}
                </p>
              </div>
              <div className="mt-6 flex items-end justify-between border-t border-line pt-4">
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-sm border border-line px-2 py-0.5 font-mono text-[0.65rem] text-mist"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="text-right">
                  <p className="metric-num text-xl text-signal">{p.metric}</p>
                  <p className="text-[0.65rem] text-mist">{p.metricLabel}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

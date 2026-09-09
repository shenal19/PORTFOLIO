const projects = [
  {
    tag: 'Full-stack platform',
    title: 'High-Concurrency Ticket Booking Platform',
    desc: 'Engineered a production-grade booking platform with JWT authentication, role-based access control, and organiser/customer isolation for multitenant event and show management. Designed transaction-safe seat holds with TTL expiry and concurrency locking to eliminate double-booking under simultaneous requests, plus FIFO waitlist auto-assignment and QR ticket generation.',
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma'],
    metricN: 'Zero',
    metricL: 'double-bookings under load',
    href: 'https://github.com/shenal19/ticket-booking-system',
  },
  {
    tag: 'Analytics platform',
    title: 'Netflix Analytics & Recommendation Platform',
    desc: 'Engineered Python ETL pipelines processing 50k+ records, then layered advanced SQL analytics on top to surface churn, engagement, and revenue signals through interactive Power BI dashboards.',
    stack: ['Python', 'PostgreSQL', 'SQL', 'Power BI'],
    metricN: '70%',
    metricL: 'less manual analysis time',
    href: 'https://github.com/shenal19/Netflix-Analytics-Platform-',
  },
  {
    tag: 'Predictive ML',
    title: 'Software Bug Prediction System',
    desc: 'A Random Forest defect-prediction system trained on software code metrics, reaching 93% prediction accuracy and 86% bug-type classification accuracy, shipped with an interactive Streamlit dashboard.',
    stack: ['Python', 'Scikit-learn', 'Streamlit'],
    metricN: '93%',
    metricL: 'prediction accuracy',
    href: 'https://github.com/shenal19/Bug-Prediction',
  },
  {
    tag: 'Computer vision',
    title: 'Cricket Ball Tracking System',
    desc: 'A real-time computer vision system using OpenCV and YOLOv8 for cricket ball detection and motion tracking, built to enhance sports analytics and broadcast-style insight.',
    stack: ['Python', 'OpenCV', 'YOLOv8'],
    metricN: 'Real-time',
    metricL: 'detection & tracking',
    href: 'https://github.com/shenal19/Cricket-Ball-Tracking',
  },
  {
    tag: 'Forecasting & BI',
    title: 'AI-Powered Sales Dashboard',
    desc: 'An interactive Streamlit dashboard that forecasts sales, flags anomalies, and generates automated business insights directly from uploaded CSV datasets.',
    stack: ['Python', 'Streamlit', 'Scikit-learn', 'Plotly'],
    metricN: 'Auto',
    metricL: 'forecasting & anomaly detection',
    href: 'https://github.com/shenal19/AI-Powered-Sales-Dashboard',
  },
];

export default function Projects() {
  return (
    <section id="work" className="border-t border-border py-22">
      <div className="mx-auto max-w-[1120px] px-7">
        <div className="mb-11 max-w-[640px]">
          <div className="flex items-center gap-2.5 font-mono text-[12.5px] uppercase tracking-[0.14em] text-teal before:h-px before:w-4 before:bg-teal">
            Selected work
          </div>
          <h2 className="mt-3.5 font-display text-[1.7rem] font-extrabold sm:text-[2.2rem]">
            Projects that ship insight, not just notebooks.
          </h2>
          <p className="mt-3 text-[15.5px] text-muted">
            A sample of the pipelines, models, and dashboards I&apos;ve built end to end —
            from raw CSVs to something a stakeholder can open and trust.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group flex h-full flex-col rounded-[14px] border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-teal"
            >
              <div className="mb-4 flex items-start justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-teal">
                  {p.tag}
                </span>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${p.title} repository`}
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-border text-muted transition-all group-hover:border-gold group-hover:text-gold"
                >
                  ↗
                </a>
              </div>
              <h3 className="mb-2.5 text-[19px] font-bold">{p.title}</h3>
              <p className="mb-4.5 flex-grow text-[14.5px] text-muted">{p.desc}</p>
              <div className="mb-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border px-2.5 py-1 font-mono text-[11px] text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex items-baseline gap-2 border-t border-border pt-3.5">
                <span className="font-display text-[20px] font-extrabold text-gold">
                  {p.metricN}
                </span>
                <span className="text-[12.5px] text-muted">{p.metricL}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

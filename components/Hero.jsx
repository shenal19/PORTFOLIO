"use client";

import { useEffect, useState } from "react";

const query = `SELECT insight
FROM   raw_chaos
WHERE  signal > noise
GROUP  BY decision;`;

export default function Hero() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setTyped(query.slice(0, i));
      i++;
      if (i > query.length) clearInterval(timer);
    }, 28);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-line pt-24"
    >
      <div className="absolute inset-0 bg-grid bg-grid pointer-events-none opacity-60" />
      <div className="absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full bg-signal/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div>
          <p className="label-eyebrow mb-5">Data Science · Analytics · ML</p>
          <h1 className="font-display text-4xl font-medium leading-[1.08] tracking-tight text-paper sm:text-5xl md:text-6xl">
            I turn messy data
            <br />
            into decisions
            <span className="text-signal">.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-mist">
            Shenbaga Balaji — final-year Data Science engineer building ETL
            pipelines, predictive models, and dashboards that hold up outside
            a notebook. SQL, Python, and Power BI, end to end.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-sm bg-signal px-5 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-transform hover:translate-y-[-2px]"
            >
              View work
            </a>
            <a
              href="#contact"
              className="rounded-sm border border-line px-5 py-3 font-mono text-xs uppercase tracking-widest text-paper transition-colors hover:border-signal hover:text-signal"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-6">
            <div>
              <p className="metric-num text-2xl text-signal">93%</p>
              <p className="mt-1 text-xs text-mist">Bug-prediction accuracy</p>
            </div>
            <div>
              <p className="metric-num text-2xl text-signal">50k+</p>
              <p className="mt-1 text-xs text-mist">Records piped &amp; modeled</p>
            </div>
            <div>
              <p className="metric-num text-2xl text-signal">200+</p>
              <p className="mt-1 text-xs text-mist">DSA problems solved</p>
            </div>
          </div>
        </div>

        <div className="card-panel rounded-md p-5 font-mono text-xs leading-relaxed text-paper shadow-2xl shadow-black/40 transition-colors">
          <div className="mb-4 flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-coral/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-signal/70" />
            <span className="ml-3 text-mist">query.sql</span>
          </div>
          <pre className="whitespace-pre-wrap text-mist">
            <span className="text-paper">{typed}</span>
            <span className="animate-pulse text-signal">▍</span>
          </pre>
          <div className="mt-5 border-t border-line pt-4 text-mist">
            <p className="mb-2 text-signal">{">"} output</p>
            <p>decision: retain_customer&nbsp;&nbsp;confidence: 0.91</p>
            <p>decision: flag_defect&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;confidence: 0.93</p>
            <p>decision: surface_clause&nbsp;&nbsp;&nbsp;confidence: 0.88</p>
          </div>
        </div>
      </div>
    </section>
  );
}

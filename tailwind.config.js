/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0F14",
        panel: "#10161D",
        line: "#1E2730",
        signal: "#3DDC97",
        amber: "#F2B544",
        coral: "#FF6B5E",
        mist: "#8A97A3",
        paper: "#E7ECEF",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(231,236,239,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(231,236,239,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
    },
  },
  plugins: [],
};

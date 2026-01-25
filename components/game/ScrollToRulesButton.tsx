"use client";

export default function ScrollToRulesButton() {
  return (
    <button
      onClick={() =>
        document
          .getElementById("rules")
          ?.scrollIntoView({ behavior: "smooth" })
      }
      className="rounded-xl border px-6 py-3 font-medium transition hover:bg-slate-50"
    >
      How to play
    </button>
  );
}
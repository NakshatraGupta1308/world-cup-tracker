import { useState } from "react";
import { TOURNAMENT } from "./data/worldcup";
import Standings from "./components/Standings";
import Schedule from "./components/Schedule";
import Bracket from "./components/Bracket";

const TABS = [
  { id: "standings", label: "Standings" },
  { id: "schedule", label: "Schedule" },
  { id: "bracket", label: "Bracket" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("standings");

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                <span className="text-emerald-400">World Cup</span>{" "}
                <span className="text-slate-100">2026</span>
              </h1>
              <p className="text-xs text-slate-500 mt-0.5">
                {TOURNAMENT.hosts} · {TOURNAMENT.totalTeams} teams ·{" "}
                {TOURNAMENT.totalMatches} matches
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Kicks off
              </p>
              <p className="text-sm font-semibold text-slate-200">June 11</p>
            </div>
          </div>

          {/* Nav tabs */}
          <nav className="flex gap-1 mt-4">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {activeTab === "standings" && <Standings />}
        {activeTab === "schedule" && <Schedule />}
        {activeTab === "bracket" && <Bracket />}
      </main>
    </div>
  );
}
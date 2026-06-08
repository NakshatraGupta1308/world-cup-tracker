import { useEffect, useState } from "react";
import { fetchStandings } from "../api";

function zoneStyle(position) {
  if (position <= 2) return "border-l-2 border-emerald-400";
  if (position === 3) return "border-l-2 border-amber-400";
  return "border-l-2 border-transparent";
}

function GroupCard({ letter, teams }) {
  return (
    <div className="bg-slate-800/60 rounded-xl border border-slate-700/60 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-slate-800">
        <h3 className="text-sm font-bold tracking-wide text-slate-200">
          GROUP {letter}
        </h3>
      </div>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-[11px] uppercase tracking-wider text-slate-500">
            <th className="text-left font-medium px-4 py-2 w-8">#</th>
            <th className="text-left font-medium py-2">Team</th>
            <th className="text-center font-medium py-2 w-8">P</th>
            <th className="text-center font-medium py-2 w-8 hidden sm:table-cell">W</th>
            <th className="text-center font-medium py-2 w-8 hidden sm:table-cell">D</th>
            <th className="text-center font-medium py-2 w-8 hidden sm:table-cell">L</th>
            <th className="text-center font-medium py-2 w-10 hidden md:table-cell">GD</th>
            <th className="text-center font-medium px-4 py-2 w-10">Pts</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((t, i) => {
            const position = i + 1;
            return (
              <tr
                key={t.name}
                className={`${zoneStyle(position)} border-t border-slate-700/40 hover:bg-slate-700/30 transition-colors`}
              >
                <td className="px-4 py-2.5 text-slate-500 tabular-nums">{position}</td>
                <td className="py-2.5">
                  <span className="flex items-center gap-2">
                    <span className="text-lg leading-none">{t.flag}</span>
                    <span className="text-slate-100 font-medium">{t.name}</span>
                  </span>
                </td>
                <td className="text-center py-2.5 text-slate-400 tabular-nums">{t.played}</td>
                <td className="text-center py-2.5 text-slate-400 tabular-nums hidden sm:table-cell">{t.won}</td>
                <td className="text-center py-2.5 text-slate-400 tabular-nums hidden sm:table-cell">{t.drawn}</td>
                <td className="text-center py-2.5 text-slate-400 tabular-nums hidden sm:table-cell">{t.lost}</td>
                <td className="text-center py-2.5 text-slate-400 tabular-nums hidden md:table-cell">
                  {t.goalDifference > 0 ? `+${t.goalDifference}` : t.goalDifference}
                </td>
                <td className="px-4 py-2.5 text-center font-bold text-slate-100 tabular-nums">{t.points}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default function Standings() {
  const [standings, setStandings] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStandings()
      .then(setStandings)
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return (
      <p className="text-slate-400 text-sm">
        Could not load standings. Make sure the backend is running. ({error})
      </p>
    );
  }

  if (!standings) {
    return <p className="text-slate-500 text-sm">Loading standings…</p>;
  }

  const groups = Object.keys(standings).sort();

  return (
    <div>
      <div className="flex items-center gap-4 mb-6 text-xs">
        <span className="flex items-center gap-1.5 text-slate-400">
          <span className="inline-block w-3 h-3 rounded-sm bg-emerald-400" />
          Advance to Round of 32
        </span>
        <span className="flex items-center gap-1.5 text-slate-400">
          <span className="inline-block w-3 h-3 rounded-sm bg-amber-400" />
          Possible (best 3rd place)
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {groups.map((letter) => (
          <GroupCard key={letter} letter={letter} teams={standings[letter]} />
        ))}
      </div>
    </div>
  );
}
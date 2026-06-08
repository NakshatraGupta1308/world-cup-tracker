import { useEffect, useState } from "react";
import { fetchMatches, fetchTeams, buildFlagMap } from "../api";

function formatDate(iso) {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

function groupByDate(matches) {
  const byDate = {};
  for (const m of matches) {
    if (!byDate[m.matchDate]) byDate[m.matchDate] = [];
    byDate[m.matchDate].push(m);
  }
  return byDate;
}

function Side({ team, flag, align }) {
  const isRight = align === "right";
  return (
    <div className={`flex items-center gap-2 flex-1 min-w-0 ${isRight ? "flex-row-reverse" : ""}`}>
      <span className="text-lg leading-none shrink-0">{flag}</span>
      <span className="text-slate-100 font-medium truncate">{team}</span>
    </div>
  );
}

function CenterState({ match }) {
  if (match.status === "LIVE") {
    return (
      <div className="flex flex-col items-center px-3 shrink-0">
        <span className="text-lg font-bold text-slate-100 tabular-nums">
          {match.homeScore} - {match.awayScore}
        </span>
        <span className="flex items-center gap-1 text-[10px] font-semibold text-red-400">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
          LIVE
        </span>
      </div>
    );
  }

  if (match.status === "FINISHED") {
    return (
      <div className="flex flex-col items-center px-3 shrink-0">
        <span className="text-lg font-bold text-slate-100 tabular-nums">
          {match.homeScore} - {match.awayScore}
        </span>
        <span className="text-[10px] text-slate-500">FT</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center px-3 shrink-0">
      <span className="text-sm font-semibold text-slate-300 whitespace-nowrap">{match.kickoff}</span>
      <span className="text-[10px] text-slate-500">vs</span>
    </div>
  );
}

function MatchCard({ match, flags }) {
  return (
    <div className="bg-slate-800/60 rounded-xl border border-slate-700/60 px-4 py-3 hover:border-slate-600 transition-colors">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400/80">
          Group {match.groupLetter}
        </span>
        <span className="text-[11px] text-slate-500 truncate ml-2 text-right">{match.venue}</span>
      </div>
      <div className="flex items-center gap-2">
        <Side team={match.homeTeam} flag={flags[match.homeTeam]} align="left" />
        <CenterState match={match} />
        <Side team={match.awayTeam} flag={flags[match.awayTeam]} align="right" />
      </div>
    </div>
  );
}

export default function Schedule() {
  const [matches, setMatches] = useState(null);
  const [flags, setFlags] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([fetchMatches(), fetchTeams()])
      .then(([matchData, teamData]) => {
        setMatches(matchData);
        setFlags(buildFlagMap(teamData));
      })
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return (
      <p className="text-slate-400 text-sm">
        Could not load matches. Make sure the backend is running. ({error})
      </p>
    );
  }

  if (!matches) {
    return <p className="text-slate-500 text-sm">Loading matches…</p>;
  }

  const byDate = groupByDate(matches);
  const dates = Object.keys(byDate).sort();

  return (
    <div className="space-y-8">
      <p className="text-sm text-slate-500">
        Group stage, matchday 1 · {matches.length} matches
      </p>

      {dates.map((date) => (
        <section key={date}>
          <h3 className="text-sm font-bold text-slate-200 mb-3 sticky top-[124px] bg-slate-900/95 backdrop-blur py-1 z-[5]">
            {formatDate(date)}
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {byDate[date].map((m) => (
              <MatchCard key={m.id} match={m} flags={flags} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
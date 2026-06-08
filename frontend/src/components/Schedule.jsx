import { matchesByDate, formatDate, flagFor } from "../data/matches";

function Side({ team, score, align }) {
  const isRight = align === "right";
  return (
    <div
      className={`flex items-center gap-2 flex-1 min-w-0 ${
        isRight ? "flex-row-reverse" : ""
      }`}
    >
      <span className="text-lg leading-none shrink-0">{flagFor(team)}</span>
      <span className="text-slate-100 font-medium truncate">{team}</span>
    </div>
  );
}

function CenterState({ match }) {
  if (match.status === "live") {
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

  if (match.status === "finished") {
    return (
      <div className="flex flex-col items-center px-3 shrink-0">
        <span className="text-lg font-bold text-slate-100 tabular-nums">
          {match.homeScore} - {match.awayScore}
        </span>
        <span className="text-[10px] text-slate-500">FT</span>
      </div>
    );
  }

  // scheduled
  return (
    <div className="flex flex-col items-center px-3 shrink-0">
      <span className="text-sm font-semibold text-slate-300 whitespace-nowrap">
        {match.time}
      </span>
      <span className="text-[10px] text-slate-500">vs</span>
    </div>
  );
}

function MatchCard({ match }) {
  return (
    <div className="bg-slate-800/60 rounded-xl border border-slate-700/60 px-4 py-3 hover:border-slate-600 transition-colors">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400/80">
          Group {match.group}
        </span>
        <span className="text-[11px] text-slate-500 truncate ml-2 text-right">
          {match.venue}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Side team={match.home} align="left" />
        <CenterState match={match} />
        <Side team={match.away} align="right" />
      </div>
    </div>
  );
}

export default function Schedule() {
  const byDate = matchesByDate();
  const dates = Object.keys(byDate).sort();

  return (
    <div className="space-y-8">
      <p className="text-sm text-slate-500">
        Group stage, matchday 1 · {/* count */}
        {dates.reduce((n, d) => n + byDate[d].length, 0)} matches
      </p>

      {dates.map((date) => (
        <section key={date}>
          <h3 className="text-sm font-bold text-slate-200 mb-3 sticky top-[124px] bg-slate-900/95 backdrop-blur py-1 z-[5]">
            {formatDate(date)}
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {byDate[date].map((m) => (
              <MatchCard key={m.id} match={m} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
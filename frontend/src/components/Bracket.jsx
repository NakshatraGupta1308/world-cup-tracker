import { KNOCKOUT, THIRD_PLACE, ROUNDS } from "../data/knockout";

// A single knockout fixture box: two stacked slots with the match code.
function MatchBox({ match, highlight }) {
  return (
    <div
      className={`rounded-lg border bg-slate-800/60 w-[150px] shrink-0 ${
        highlight
          ? "border-emerald-500/50"
          : "border-slate-700/60"
      }`}
    >
      <div className="px-2 py-1 border-b border-slate-700/40">
        <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-500">
          {match.id}
        </span>
      </div>
      <Slot label={match.a} />
      <div className="border-t border-slate-700/40" />
      <Slot label={match.b} />
    </div>
  );
}

function Slot({ label }) {
  const isThird = label.startsWith("3rd");
  return (
    <div className="px-2 py-1.5">
      <span
        className={`text-xs font-medium ${
          isThird ? "text-slate-400" : "text-slate-200"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function RoundColumn({ label, matches, highlight }) {
  return (
    <div className="flex flex-col shrink-0">
      <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3 text-center">
        {label}
      </h3>
      <div className="flex flex-col justify-around flex-1 gap-3">
        {matches.map((m) => (
          <MatchBox key={m.id} match={m} highlight={highlight} />
        ))}
      </div>
    </div>
  );
}

export default function Bracket() {
  return (
    <div>
      <p className="text-sm text-slate-500 mb-6">
        Knockout stage · June 28 to July 19. Slots show FIFA path labels (1A =
        Group A winner, 2B = Group B runner-up, 3rd = best third-place team).
        They resolve once the group stage ends on June 27.
      </p>

      <div className="overflow-x-auto pb-4">
        <div className="flex gap-5 min-w-max" style={{ minHeight: 720 }}>
          {ROUNDS.map((round) => (
            <RoundColumn
              key={round.key}
              label={round.label}
              matches={KNOCKOUT[round.key]}
              highlight={round.key === "final"}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 max-w-[150px]">
        <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
          Third place
        </h3>
        <MatchBox match={THIRD_PLACE} />
        <p className="text-[11px] text-slate-500 mt-2">
          Losing semi-finalists · July 18, Miami
        </p>
      </div>
    </div>
  );
}
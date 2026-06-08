// 2026 FIFA World Cup data: all 12 groups (A-L), 48 teams.
// Group draw confirmed Dec 5, 2025. Tournament runs June 11 - July 19, 2026.
// Stats (played/won/drawn/lost/gf/ga) start at 0 and update as matches finish.

export const TOURNAMENT = {
  name: "FIFA World Cup 2026",
  hosts: "USA, Canada & Mexico",
  startDate: "2026-06-11",
  endDate: "2026-07-19",
  totalTeams: 48,
  totalGroups: 12,
  totalMatches: 104,
};

// Helper to create a fresh team row with zeroed stats.
function team(name, flag, fifaRank, confederation) {
  return {
    name,
    flag,
    fifaRank,
    confederation,
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    goalsFor: 0,
    goalsAgainst: 0,
  };
}

export const GROUPS = {
  A: [
    team("Mexico", "🇲🇽", 15, "CONCACAF"),
    team("South Korea", "🇰🇷", 22, "AFC"),
    team("Czechia", "🇨🇿", 44, "UEFA"),
    team("South Africa", "🇿🇦", 61, "CAF"),
  ],
  B: [
    team("Switzerland", "🇨🇭", 19, "UEFA"),
    team("Canada", "🇨🇦", 28, "CONCACAF"),
    team("Bosnia and Herzegovina", "🇧🇦", 65, "UEFA"),
    team("Qatar", "🇶🇦", 53, "AFC"),
  ],
  C: [
    team("Brazil", "🇧🇷", 5, "CONMEBOL"),
    team("Morocco", "🇲🇦", 12, "CAF"),
    team("Scotland", "🏴󠁧󠁢󠁳󠁣󠁴󠁿", 38, "UEFA"),
    team("Haiti", "🇭🇹", 83, "CONCACAF"),
  ],
  D: [
    team("USA", "🇺🇸", 16, "CONCACAF"),
    team("Turkiye", "🇹🇷", 26, "UEFA"),
    team("Australia", "🇦🇺", 24, "AFC"),
    team("Paraguay", "🇵🇾", 39, "CONMEBOL"),
  ],
  E: [
    team("Germany", "🇩🇪", 9, "UEFA"),
    team("Ecuador", "🇪🇨", 23, "CONMEBOL"),
    team("Ivory Coast", "🇨🇮", 41, "CAF"),
    team("Curacao", "🇨🇼", 82, "CONCACAF"),
  ],
  F: [
    team("Netherlands", "🇳🇱", 7, "UEFA"),
    team("Japan", "🇯🇵", 17, "AFC"),
    team("Sweden", "🇸🇪", 35, "UEFA"),
    team("Tunisia", "🇹🇳", 49, "CAF"),
  ],
  G: [
    team("Belgium", "🇧🇪", 8, "UEFA"),
    team("Iran", "🇮🇷", 20, "AFC"),
    team("Egypt", "🇪🇬", 34, "CAF"),
    team("New Zealand", "🇳🇿", 86, "OFC"),
  ],
  H: [
    team("Spain", "🇪🇸", 1, "UEFA"),
    team("Uruguay", "🇺🇾", 13, "CONMEBOL"),
    team("Saudi Arabia", "🇸🇦", 58, "AFC"),
    team("Cape Verde", "🇨🇻", 70, "CAF"),
  ],
  I: [
    team("France", "🇫🇷", 3, "UEFA"),
    team("Senegal", "🇸🇳", 18, "CAF"),
    team("Norway", "🇳🇴", 30, "UEFA"),
    team("Iraq", "🇮🇶", 57, "AFC"),
  ],
  J: [
    team("Argentina", "🇦🇷", 2, "CONMEBOL"),
    team("Austria", "🇦🇹", 25, "UEFA"),
    team("Algeria", "🇩🇿", 36, "CAF"),
    team("Jordan", "🇯🇴", 62, "AFC"),
  ],
  K: [
    team("Portugal", "🇵🇹", 6, "UEFA"),
    team("Colombia", "🇨🇴", 14, "CONMEBOL"),
    team("Uzbekistan", "🇺🇿", 54, "AFC"),
    team("DR Congo", "🇨🇩", 60, "CAF"),
  ],
  L: [
    team("England", "🏴󠁧󠁢󠁥󠁮󠁧󠁿", 4, "UEFA"),
    team("Croatia", "🇭🇷", 10, "UEFA"),
    team("Panama", "🇵🇦", 30, "CONCACAF"),
    team("Ghana", "🇬🇭", 72, "CAF"),
  ],
};

export const GROUP_LETTERS = Object.keys(GROUPS);

// Compute derived stats for a team row.
export function withDerived(t) {
  return {
    ...t,
    goalDifference: t.goalsFor - t.goalsAgainst,
    points: t.won * 3 + t.drawn,
  };
}

// Sort a group by World Cup rules: points, then goal difference,
// then goals scored. Before kickoff (all zero) falls back to FIFA rank.
export function sortGroup(teams) {
  return [...teams]
    .map(withDerived)
    .sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      if (b.goalDifference !== a.goalDifference)
        return b.goalDifference - a.goalDifference;
      if (b.goalsFor !== a.goalsFor) return b.goalsFor - a.goalsFor;
      return a.fifaRank - b.fifaRank;
    });
}
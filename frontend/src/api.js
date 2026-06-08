// Backend base URL. Defaults to local dev; in production set VITE_API_URL
// (in Vercel's environment variables) to the deployed Render URL.
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

async function getJson(path) {
  const res = await fetch(`${API_URL}${path}`);
  if (!res.ok) {
    throw new Error(`Request failed (${res.status}) for ${path}`);
  }
  return res.json();
}

// Standings: { A: [row, ...], B: [...], ... } already sorted by the backend.
export function fetchStandings() {
  return getJson("/api/standings");
}

// Matches: flat array of all fixtures.
export function fetchMatches() {
  return getJson("/api/matches");
}

// Teams: flat array of all 48 teams (used to map team name -> flag).
export function fetchTeams() {
  return getJson("/api/teams");
}

// Build a quick name -> flag lookup from the teams list.
export function buildFlagMap(teams) {
  const map = {};
  for (const t of teams) {
    map[t.name] = t.flag;
  }
  return map;
}
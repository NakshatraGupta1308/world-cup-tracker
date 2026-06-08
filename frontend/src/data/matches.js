import { GROUPS } from "./worldcup";

// Build a name -> flag lookup from the group data so match rows can render
// flags without duplicating the data.
const FLAGS = Object.values(GROUPS)
  .flat()
  .reduce((acc, t) => {
    acc[t.name] = t.flag;
    return acc;
  }, {});

export function flagFor(name) {
  return FLAGS[name] || "";
}

// Matchday 1 fixtures (June 11-17, 2026). All kickoff times Eastern (ET).
// Every group plays its opening two matches in this round.
// status: "scheduled" | "live" | "finished".
// homeScore / awayScore stay null until a match is played.
export const MATCHES = [
  // Thursday, June 11 - Group A
  { id: 1, date: "2026-06-11", time: "3:00 PM ET", group: "A", home: "Mexico", away: "South Africa", venue: "Estadio Azteca, Mexico City", status: "scheduled", homeScore: null, awayScore: null },
  { id: 2, date: "2026-06-11", time: "10:00 PM ET", group: "A", home: "South Korea", away: "Czechia", venue: "Estadio Akron, Guadalajara", status: "scheduled", homeScore: null, awayScore: null },

  // Friday, June 12
  { id: 3, date: "2026-06-12", time: "3:00 PM ET", group: "B", home: "Canada", away: "Bosnia and Herzegovina", venue: "BMO Field, Toronto", status: "scheduled", homeScore: null, awayScore: null },
  { id: 4, date: "2026-06-12", time: "9:00 PM ET", group: "D", home: "USA", away: "Paraguay", venue: "SoFi Stadium, Los Angeles", status: "scheduled", homeScore: null, awayScore: null },

  // Saturday, June 13
  { id: 5, date: "2026-06-13", time: "3:00 PM ET", group: "B", home: "Qatar", away: "Switzerland", venue: "Levi's Stadium, San Francisco Bay", status: "scheduled", homeScore: null, awayScore: null },
  { id: 6, date: "2026-06-13", time: "6:00 PM ET", group: "C", home: "Brazil", away: "Morocco", venue: "Gillette Stadium, Foxborough", status: "scheduled", homeScore: null, awayScore: null },
  { id: 7, date: "2026-06-13", time: "9:00 PM ET", group: "C", home: "Haiti", away: "Scotland", venue: "MetLife Stadium, New York/New Jersey", status: "scheduled", homeScore: null, awayScore: null },
  { id: 8, date: "2026-06-13", time: "12:00 AM ET", group: "D", home: "Australia", away: "Turkiye", venue: "BC Place, Vancouver", status: "scheduled", homeScore: null, awayScore: null },

  // Sunday, June 14
  { id: 9, date: "2026-06-14", time: "1:00 PM ET", group: "E", home: "Germany", away: "Curacao", venue: "NRG Stadium, Houston", status: "scheduled", homeScore: null, awayScore: null },
  { id: 10, date: "2026-06-14", time: "4:00 PM ET", group: "F", home: "Netherlands", away: "Japan", venue: "Lincoln Financial Field, Philadelphia", status: "scheduled", homeScore: null, awayScore: null },
  { id: 11, date: "2026-06-14", time: "7:00 PM ET", group: "E", home: "Ivory Coast", away: "Ecuador", venue: "Lincoln Financial Field, Philadelphia", status: "scheduled", homeScore: null, awayScore: null },
  { id: 12, date: "2026-06-14", time: "10:00 PM ET", group: "F", home: "Sweden", away: "Tunisia", venue: "Estadio BBVA, Monterrey", status: "scheduled", homeScore: null, awayScore: null },

  // Monday, June 15
  { id: 13, date: "2026-06-15", time: "12:00 PM ET", group: "H", home: "Spain", away: "Cape Verde", venue: "Mercedes-Benz Stadium, Atlanta", status: "scheduled", homeScore: null, awayScore: null },
  { id: 14, date: "2026-06-15", time: "3:00 PM ET", group: "G", home: "Belgium", away: "Egypt", venue: "Lumen Field, Seattle", status: "scheduled", homeScore: null, awayScore: null },
  { id: 15, date: "2026-06-15", time: "6:00 PM ET", group: "H", home: "Saudi Arabia", away: "Uruguay", venue: "Hard Rock Stadium, Miami", status: "scheduled", homeScore: null, awayScore: null },
  { id: 16, date: "2026-06-15", time: "9:00 PM ET", group: "G", home: "Iran", away: "New Zealand", venue: "SoFi Stadium, Los Angeles", status: "scheduled", homeScore: null, awayScore: null },

  // Tuesday, June 16
  { id: 17, date: "2026-06-16", time: "3:00 PM ET", group: "I", home: "France", away: "Senegal", venue: "MetLife Stadium, New York/New Jersey", status: "scheduled", homeScore: null, awayScore: null },
  { id: 18, date: "2026-06-16", time: "6:00 PM ET", group: "I", home: "Iraq", away: "Norway", venue: "Gillette Stadium, Foxborough", status: "scheduled", homeScore: null, awayScore: null },
  { id: 19, date: "2026-06-16", time: "9:00 PM ET", group: "J", home: "Argentina", away: "Algeria", venue: "Arrowhead Stadium, Kansas City", status: "scheduled", homeScore: null, awayScore: null },
  { id: 20, date: "2026-06-16", time: "12:00 AM ET", group: "J", home: "Austria", away: "Jordan", venue: "Levi's Stadium, San Francisco Bay", status: "scheduled", homeScore: null, awayScore: null },

  // Wednesday, June 17
  { id: 21, date: "2026-06-17", time: "1:00 PM ET", group: "K", home: "Portugal", away: "DR Congo", venue: "NRG Stadium, Houston", status: "scheduled", homeScore: null, awayScore: null },
  { id: 22, date: "2026-06-17", time: "4:00 PM ET", group: "L", home: "England", away: "Croatia", venue: "AT&T Stadium, Dallas", status: "scheduled", homeScore: null, awayScore: null },
  { id: 23, date: "2026-06-17", time: "5:00 PM ET", group: "K", home: "Colombia", away: "Uzbekistan", venue: "Mercedes-Benz Stadium, Atlanta", status: "scheduled", homeScore: null, awayScore: null },
  { id: 24, date: "2026-06-17", time: "7:00 PM ET", group: "L", home: "Ghana", away: "Panama", venue: "BMO Field, Toronto", status: "scheduled", homeScore: null, awayScore: null },
];

// Group matches by their date, preserving chronological order.
export function matchesByDate() {
  const byDate = {};
  for (const m of MATCHES) {
    if (!byDate[m.date]) byDate[m.date] = [];
    byDate[m.date].push(m);
  }
  return byDate;
}

// Format an ISO date (YYYY-MM-DD) as e.g. "Thursday, June 11".
export function formatDate(iso) {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}
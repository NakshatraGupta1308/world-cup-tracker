package com.worldcup.api.config;

import com.worldcup.api.model.Match;
import com.worldcup.api.model.Team;
import com.worldcup.api.repository.MatchRepository;
import com.worldcup.api.repository.TeamRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

// Seeds the database on first startup with all 48 teams (groups A-L) and the
// 24 matchday-1 fixtures. Skips if data already exists, so it is safe to rerun.
@Component
public class DataSeeder implements CommandLineRunner {

    private final TeamRepository teamRepo;
    private final MatchRepository matchRepo;

    public DataSeeder(TeamRepository teamRepo, MatchRepository matchRepo) {
        this.teamRepo = teamRepo;
        this.matchRepo = matchRepo;
    }

    @Override
    public void run(String... args) {
        if (teamRepo.count() > 0) {
            return;
        }

        seedTeams();
        seedMatches();
    }

    private void seedTeams() {
        // Group A
        teamRepo.save(new Team("Mexico", "\uD83C\uDDF2\uD83C\uDDFD", "A", 15, "CONCACAF"));
        teamRepo.save(new Team("South Korea", "\uD83C\uDDF0\uD83C\uDDF7", "A", 22, "AFC"));
        teamRepo.save(new Team("Czechia", "\uD83C\uDDE8\uD83C\uDDFF", "A", 44, "UEFA"));
        teamRepo.save(new Team("South Africa", "\uD83C\uDDFF\uD83C\uDDE6", "A", 61, "CAF"));
        // Group B
        teamRepo.save(new Team("Switzerland", "\uD83C\uDDE8\uD83C\uDDED", "B", 19, "UEFA"));
        teamRepo.save(new Team("Canada", "\uD83C\uDDE8\uD83C\uDDE6", "B", 28, "CONCACAF"));
        teamRepo.save(new Team("Bosnia and Herzegovina", "\uD83C\uDDE7\uD83C\uDDE6", "B", 65, "UEFA"));
        teamRepo.save(new Team("Qatar", "\uD83C\uDDF6\uD83C\uDDE6", "B", 53, "AFC"));
        // Group C
        teamRepo.save(new Team("Brazil", "\uD83C\uDDE7\uD83C\uDDF7", "C", 5, "CONMEBOL"));
        teamRepo.save(new Team("Morocco", "\uD83C\uDDF2\uD83C\uDDE6", "C", 12, "CAF"));
        teamRepo.save(new Team("Scotland", "\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74\uDB40\uDC7F", "C", 38, "UEFA"));
        teamRepo.save(new Team("Haiti", "\uD83C\uDDED\uD83C\uDDF9", "C", 83, "CONCACAF"));
        // Group D
        teamRepo.save(new Team("USA", "\uD83C\uDDFA\uD83C\uDDF8", "D", 16, "CONCACAF"));
        teamRepo.save(new Team("Turkiye", "\uD83C\uDDF9\uD83C\uDDF7", "D", 26, "UEFA"));
        teamRepo.save(new Team("Australia", "\uD83C\uDDE6\uD83C\uDDFA", "D", 24, "AFC"));
        teamRepo.save(new Team("Paraguay", "\uD83C\uDDF5\uD83C\uDDFE", "D", 39, "CONMEBOL"));
        // Group E
        teamRepo.save(new Team("Germany", "\uD83C\uDDE9\uD83C\uDDEA", "E", 9, "UEFA"));
        teamRepo.save(new Team("Ecuador", "\uD83C\uDDEA\uD83C\uDDE8", "E", 23, "CONMEBOL"));
        teamRepo.save(new Team("Ivory Coast", "\uD83C\uDDE8\uD83C\uDDEE", "E", 41, "CAF"));
        teamRepo.save(new Team("Curacao", "\uD83C\uDDE8\uD83C\uDDFC", "E", 82, "CONCACAF"));
        // Group F
        teamRepo.save(new Team("Netherlands", "\uD83C\uDDF3\uD83C\uDDF1", "F", 7, "UEFA"));
        teamRepo.save(new Team("Japan", "\uD83C\uDDEF\uD83C\uDDF5", "F", 17, "AFC"));
        teamRepo.save(new Team("Sweden", "\uD83C\uDDF8\uD83C\uDDEA", "F", 35, "UEFA"));
        teamRepo.save(new Team("Tunisia", "\uD83C\uDDF9\uD83C\uDDF3", "F", 49, "CAF"));
        // Group G
        teamRepo.save(new Team("Belgium", "\uD83C\uDDE7\uD83C\uDDEA", "G", 8, "UEFA"));
        teamRepo.save(new Team("Iran", "\uD83C\uDDEE\uD83C\uDDF7", "G", 20, "AFC"));
        teamRepo.save(new Team("Egypt", "\uD83C\uDDEA\uD83C\uDDEC", "G", 34, "CAF"));
        teamRepo.save(new Team("New Zealand", "\uD83C\uDDF3\uD83C\uDDFF", "G", 86, "OFC"));
        // Group H
        teamRepo.save(new Team("Spain", "\uD83C\uDDEA\uD83C\uDDF8", "H", 1, "UEFA"));
        teamRepo.save(new Team("Uruguay", "\uD83C\uDDFA\uD83C\uDDFE", "H", 13, "CONMEBOL"));
        teamRepo.save(new Team("Saudi Arabia", "\uD83C\uDDF8\uD83C\uDDE6", "H", 58, "AFC"));
        teamRepo.save(new Team("Cape Verde", "\uD83C\uDDE8\uD83C\uDDFB", "H", 70, "CAF"));
        // Group I
        teamRepo.save(new Team("France", "\uD83C\uDDEB\uD83C\uDDF7", "I", 3, "UEFA"));
        teamRepo.save(new Team("Senegal", "\uD83C\uDDF8\uD83C\uDDF3", "I", 18, "CAF"));
        teamRepo.save(new Team("Norway", "\uD83C\uDDF3\uD83C\uDDF4", "I", 30, "UEFA"));
        teamRepo.save(new Team("Iraq", "\uD83C\uDDEE\uD83C\uDDF6", "I", 57, "AFC"));
        // Group J
        teamRepo.save(new Team("Argentina", "\uD83C\uDDE6\uD83C\uDDF7", "J", 2, "CONMEBOL"));
        teamRepo.save(new Team("Austria", "\uD83C\uDDE6\uD83C\uDDF9", "J", 25, "UEFA"));
        teamRepo.save(new Team("Algeria", "\uD83C\uDDE9\uD83C\uDDFF", "J", 36, "CAF"));
        teamRepo.save(new Team("Jordan", "\uD83C\uDDEF\uD83C\uDDF4", "J", 62, "AFC"));
        // Group K
        teamRepo.save(new Team("Portugal", "\uD83C\uDDF5\uD83C\uDDF9", "K", 6, "UEFA"));
        teamRepo.save(new Team("Colombia", "\uD83C\uDDE8\uD83C\uDDF4", "K", 14, "CONMEBOL"));
        teamRepo.save(new Team("Uzbekistan", "\uD83C\uDDFA\uD83C\uDDFF", "K", 54, "AFC"));
        teamRepo.save(new Team("DR Congo", "\uD83C\uDDE8\uD83C\uDDE9", "K", 60, "CAF"));
        // Group L
        teamRepo.save(new Team("England", "\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F", "L", 4, "UEFA"));
        teamRepo.save(new Team("Croatia", "\uD83C\uDDED\uD83C\uDDF7", "L", 10, "UEFA"));
        teamRepo.save(new Team("Panama", "\uD83C\uDDF5\uD83C\uDDE6", "L", 30, "CONCACAF"));
        teamRepo.save(new Team("Ghana", "\uD83C\uDDEC\uD83C\uDDED", "L", 72, "CAF"));
    }

    private void seedMatches() {
        // Thursday, June 11 - Group A
        matchRepo.save(new Match("Mexico", "South Africa", "2026-06-11", "3:00 PM ET", "A", "Estadio Azteca, Mexico City", "SCHEDULED"));
        matchRepo.save(new Match("South Korea", "Czechia", "2026-06-11", "10:00 PM ET", "A", "Estadio Akron, Guadalajara", "SCHEDULED"));
        // Friday, June 12
        matchRepo.save(new Match("Canada", "Bosnia and Herzegovina", "2026-06-12", "3:00 PM ET", "B", "BMO Field, Toronto", "SCHEDULED"));
        matchRepo.save(new Match("USA", "Paraguay", "2026-06-12", "9:00 PM ET", "D", "SoFi Stadium, Los Angeles", "SCHEDULED"));
        // Saturday, June 13
        matchRepo.save(new Match("Qatar", "Switzerland", "2026-06-13", "3:00 PM ET", "B", "Levi's Stadium, San Francisco Bay", "SCHEDULED"));
        matchRepo.save(new Match("Brazil", "Morocco", "2026-06-13", "6:00 PM ET", "C", "Gillette Stadium, Foxborough", "SCHEDULED"));
        matchRepo.save(new Match("Haiti", "Scotland", "2026-06-13", "9:00 PM ET", "C", "MetLife Stadium, New York/New Jersey", "SCHEDULED"));
        matchRepo.save(new Match("Australia", "Turkiye", "2026-06-13", "12:00 AM ET", "D", "BC Place, Vancouver", "SCHEDULED"));
        // Sunday, June 14
        matchRepo.save(new Match("Germany", "Curacao", "2026-06-14", "1:00 PM ET", "E", "NRG Stadium, Houston", "SCHEDULED"));
        matchRepo.save(new Match("Netherlands", "Japan", "2026-06-14", "4:00 PM ET", "F", "Lincoln Financial Field, Philadelphia", "SCHEDULED"));
        matchRepo.save(new Match("Ivory Coast", "Ecuador", "2026-06-14", "7:00 PM ET", "E", "Lincoln Financial Field, Philadelphia", "SCHEDULED"));
        matchRepo.save(new Match("Sweden", "Tunisia", "2026-06-14", "10:00 PM ET", "F", "Estadio BBVA, Monterrey", "SCHEDULED"));
        // Monday, June 15
        matchRepo.save(new Match("Spain", "Cape Verde", "2026-06-15", "12:00 PM ET", "H", "Mercedes-Benz Stadium, Atlanta", "SCHEDULED"));
        matchRepo.save(new Match("Belgium", "Egypt", "2026-06-15", "3:00 PM ET", "G", "Lumen Field, Seattle", "SCHEDULED"));
        matchRepo.save(new Match("Saudi Arabia", "Uruguay", "2026-06-15", "6:00 PM ET", "H", "Hard Rock Stadium, Miami", "SCHEDULED"));
        matchRepo.save(new Match("Iran", "New Zealand", "2026-06-15", "9:00 PM ET", "G", "SoFi Stadium, Los Angeles", "SCHEDULED"));
        // Tuesday, June 16
        matchRepo.save(new Match("France", "Senegal", "2026-06-16", "3:00 PM ET", "I", "MetLife Stadium, New York/New Jersey", "SCHEDULED"));
        matchRepo.save(new Match("Iraq", "Norway", "2026-06-16", "6:00 PM ET", "I", "Gillette Stadium, Foxborough", "SCHEDULED"));
        matchRepo.save(new Match("Argentina", "Algeria", "2026-06-16", "9:00 PM ET", "J", "Arrowhead Stadium, Kansas City", "SCHEDULED"));
        matchRepo.save(new Match("Austria", "Jordan", "2026-06-16", "12:00 AM ET", "J", "Levi's Stadium, San Francisco Bay", "SCHEDULED"));
        // Wednesday, June 17
        matchRepo.save(new Match("Portugal", "DR Congo", "2026-06-17", "1:00 PM ET", "K", "NRG Stadium, Houston", "SCHEDULED"));
        matchRepo.save(new Match("England", "Croatia", "2026-06-17", "4:00 PM ET", "L", "AT&T Stadium, Dallas", "SCHEDULED"));
        matchRepo.save(new Match("Colombia", "Uzbekistan", "2026-06-17", "5:00 PM ET", "K", "Mercedes-Benz Stadium, Atlanta", "SCHEDULED"));
        matchRepo.save(new Match("Ghana", "Panama", "2026-06-17", "7:00 PM ET", "L", "BMO Field, Toronto", "SCHEDULED"));
    }
}

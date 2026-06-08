package com.worldcup.api.service;

import com.worldcup.api.dto.StandingRow;
import com.worldcup.api.model.Match;
import com.worldcup.api.model.Team;
import com.worldcup.api.repository.MatchRepository;
import com.worldcup.api.repository.TeamRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

@Service
public class StandingsService {

    private final TeamRepository teamRepo;
    private final MatchRepository matchRepo;

    public StandingsService(TeamRepository teamRepo, MatchRepository matchRepo) {
        this.teamRepo = teamRepo;
        this.matchRepo = matchRepo;
    }

    // Build standings for every group, sorted by World Cup tiebreaker rules:
    // points, then goal difference, then goals scored, then FIFA rank.
    public Map<String, List<StandingRow>> computeStandings() {
        List<Team> teams = teamRepo.findAll();
        List<Match> finished = matchRepo.findByStatus("FINISHED");

        Map<String, StandingRow> rowsByTeam = new HashMap<>();
        for (Team team : teams) {
            rowsByTeam.put(team.getName(), new StandingRow(team));
        }

        for (Match match : finished) {
            StandingRow home = rowsByTeam.get(match.getHomeTeam());
            StandingRow away = rowsByTeam.get(match.getAwayTeam());
            if (home == null || away == null
                    || match.getHomeScore() == null || match.getAwayScore() == null) {
                continue;
            }
            int hs = match.getHomeScore();
            int as = match.getAwayScore();
            home.addResult(hs, as);
            away.addResult(as, hs);
        }

        Comparator<StandingRow> order = Comparator
                .comparingInt(StandingRow::getPoints).reversed()
                .thenComparing(Comparator.comparingInt(StandingRow::getGoalDifference).reversed())
                .thenComparing(Comparator.comparingInt(StandingRow::getGoalsFor).reversed())
                .thenComparingInt(StandingRow::getFifaRank);

        Map<String, List<StandingRow>> byGroup = new TreeMap<>();
        for (StandingRow row : rowsByTeam.values()) {
            byGroup.computeIfAbsent(row.getGroupLetter(), key -> new ArrayList<>()).add(row);
        }
        for (List<StandingRow> group : byGroup.values()) {
            group.sort(order);
        }
        return byGroup;
    }
}

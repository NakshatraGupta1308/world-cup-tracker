package com.worldcup.api.controller;

import com.worldcup.api.dto.StandingRow;
import com.worldcup.api.model.Match;
import com.worldcup.api.model.Team;
import com.worldcup.api.repository.MatchRepository;
import com.worldcup.api.repository.TeamRepository;
import com.worldcup.api.service.StandingsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class ApiController {

    private final TeamRepository teamRepo;
    private final MatchRepository matchRepo;
    private final StandingsService standingsService;

    public ApiController(TeamRepository teamRepo, MatchRepository matchRepo,
                         StandingsService standingsService) {
        this.teamRepo = teamRepo;
        this.matchRepo = matchRepo;
        this.standingsService = standingsService;
    }

    @GetMapping("/teams")
    public List<Team> teams() {
        return teamRepo.findAll();
    }

    @GetMapping("/matches")
    public List<Match> matches() {
        return matchRepo.findAll();
    }

    @GetMapping("/standings")
    public Map<String, List<StandingRow>> standings() {
        return standingsService.computeStandings();
    }

    // Update or set a match result. Defaults status to FINISHED if not given.
    // Useful for testing live updates: POST /api/matches/1/result {"homeScore":2,"awayScore":1}
    @PostMapping("/matches/{id}/result")
    public ResponseEntity<Match> setResult(@PathVariable Long id, @RequestBody ResultRequest req) {
        return matchRepo.findById(id)
                .map(match -> {
                    match.setHomeScore(req.homeScore);
                    match.setAwayScore(req.awayScore);
                    match.setStatus(req.status != null ? req.status : "FINISHED");
                    return ResponseEntity.ok(matchRepo.save(match));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    public static class ResultRequest {
        public Integer homeScore;
        public Integer awayScore;
        public String status;
    }
}

package com.worldcup.api.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "matches")
public class Match {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String homeTeam;
    private String awayTeam;
    private String matchDate;   // ISO date, e.g. "2026-06-11"
    private String kickoff;     // display time, e.g. "3:00 PM ET"
    private String groupLetter;
    private String venue;
    private String status;      // SCHEDULED, LIVE, FINISHED
    private Integer homeScore;  // null until played
    private Integer awayScore;

    public Match() {
    }

    public Match(String homeTeam, String awayTeam, String matchDate, String kickoff,
                 String groupLetter, String venue, String status) {
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
        this.matchDate = matchDate;
        this.kickoff = kickoff;
        this.groupLetter = groupLetter;
        this.venue = venue;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public String getHomeTeam() {
        return homeTeam;
    }

    public void setHomeTeam(String homeTeam) {
        this.homeTeam = homeTeam;
    }

    public String getAwayTeam() {
        return awayTeam;
    }

    public void setAwayTeam(String awayTeam) {
        this.awayTeam = awayTeam;
    }

    public String getMatchDate() {
        return matchDate;
    }

    public void setMatchDate(String matchDate) {
        this.matchDate = matchDate;
    }

    public String getKickoff() {
        return kickoff;
    }

    public void setKickoff(String kickoff) {
        this.kickoff = kickoff;
    }

    public String getGroupLetter() {
        return groupLetter;
    }

    public void setGroupLetter(String groupLetter) {
        this.groupLetter = groupLetter;
    }

    public String getVenue() {
        return venue;
    }

    public void setVenue(String venue) {
        this.venue = venue;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Integer getHomeScore() {
        return homeScore;
    }

    public void setHomeScore(Integer homeScore) {
        this.homeScore = homeScore;
    }

    public Integer getAwayScore() {
        return awayScore;
    }

    public void setAwayScore(Integer awayScore) {
        this.awayScore = awayScore;
    }
}

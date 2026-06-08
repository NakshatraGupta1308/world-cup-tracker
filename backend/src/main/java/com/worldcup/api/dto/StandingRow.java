package com.worldcup.api.dto;

import com.worldcup.api.model.Team;

// A computed standings row. Built from a Team's identity, then tallied up
// from finished match results. Points and goal difference are derived, never
// stored, so the table can never drift out of sync with actual results.
public class StandingRow {

    private final String name;
    private final String flag;
    private final String groupLetter;
    private final String confederation;
    private final int fifaRank;

    private int played;
    private int won;
    private int drawn;
    private int lost;
    private int goalsFor;
    private int goalsAgainst;

    public StandingRow(Team team) {
        this.name = team.getName();
        this.flag = team.getFlag();
        this.groupLetter = team.getGroupLetter();
        this.confederation = team.getConfederation();
        this.fifaRank = team.getFifaRank();
    }

    // Apply one match result from this team's perspective.
    public void addResult(int scored, int conceded) {
        played++;
        goalsFor += scored;
        goalsAgainst += conceded;
        if (scored > conceded) {
            won++;
        } else if (scored == conceded) {
            drawn++;
        } else {
            lost++;
        }
    }

    public int getGoalDifference() {
        return goalsFor - goalsAgainst;
    }

    public int getPoints() {
        return won * 3 + drawn;
    }

    public String getName() {
        return name;
    }

    public String getFlag() {
        return flag;
    }

    public String getGroupLetter() {
        return groupLetter;
    }

    public String getConfederation() {
        return confederation;
    }

    public int getFifaRank() {
        return fifaRank;
    }

    public int getPlayed() {
        return played;
    }

    public int getWon() {
        return won;
    }

    public int getDrawn() {
        return drawn;
    }

    public int getLost() {
        return lost;
    }

    public int getGoalsFor() {
        return goalsFor;
    }

    public int getGoalsAgainst() {
        return goalsAgainst;
    }
}

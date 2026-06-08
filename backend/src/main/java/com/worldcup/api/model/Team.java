package com.worldcup.api.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "teams")
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String name;

    private String flag;
    private String groupLetter;
    private int fifaRank;
    private String confederation;

    public Team() {
    }

    public Team(String name, String flag, String groupLetter, int fifaRank, String confederation) {
        this.name = name;
        this.flag = flag;
        this.groupLetter = groupLetter;
        this.fifaRank = fifaRank;
        this.confederation = confederation;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFlag() {
        return flag;
    }

    public void setFlag(String flag) {
        this.flag = flag;
    }

    public String getGroupLetter() {
        return groupLetter;
    }

    public void setGroupLetter(String groupLetter) {
        this.groupLetter = groupLetter;
    }

    public int getFifaRank() {
        return fifaRank;
    }

    public void setFifaRank(int fifaRank) {
        this.fifaRank = fifaRank;
    }

    public String getConfederation() {
        return confederation;
    }

    public void setConfederation(String confederation) {
        this.confederation = confederation;
    }
}

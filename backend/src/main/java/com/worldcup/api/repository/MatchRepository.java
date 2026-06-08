package com.worldcup.api.repository;

import com.worldcup.api.model.Match;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MatchRepository extends JpaRepository<Match, Long> {

    List<Match> findByStatus(String status);

    List<Match> findByGroupLetter(String groupLetter);
}

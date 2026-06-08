package com.worldcup.api.repository;

import com.worldcup.api.model.Team;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TeamRepository extends JpaRepository<Team, Long> {

    List<Team> findByGroupLetter(String groupLetter);
}

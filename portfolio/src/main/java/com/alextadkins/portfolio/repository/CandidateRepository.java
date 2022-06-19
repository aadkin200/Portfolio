package com.alextadkins.portfolio.repository;

import com.alextadkins.portfolio.model.Candidate;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CandidateRepository extends JpaRepository<Candidate, Integer> {
}

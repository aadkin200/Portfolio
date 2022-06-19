package com.alextadkins.portfolio.service;

import com.alextadkins.portfolio.model.Candidate;

import java.util.Optional;

public interface CandidateService {
    public Optional<Candidate> findById(int id);
}

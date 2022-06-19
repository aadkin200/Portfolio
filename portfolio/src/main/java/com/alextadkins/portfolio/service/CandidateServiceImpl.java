package com.alextadkins.portfolio.service;

import com.alextadkins.portfolio.model.Candidate;
import com.alextadkins.portfolio.repository.CandidateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CandidateServiceImpl implements CandidateService{

    @Autowired
    private CandidateRepository canRepo;

    @Override
    public Optional<Candidate> findById(int id) {
        return canRepo.findById(id);
    }
}

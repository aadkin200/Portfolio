package com.alextadkins.portfolio.controller;

import com.alextadkins.portfolio.model.Candidate;
import com.alextadkins.portfolio.service.CandidateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Optional;

@RestController
@RequestMapping("/candidate")
@CrossOrigin({"*", "http://localhost:4200"})
public class CandidateController {
    @Autowired
    private CandidateService canService;

    @GetMapping("/{candidateId}")
    public Optional<Candidate> getCandidate(@PathVariable int candidateId, HttpServletRequest req, HttpServletResponse res) {
        return canService.findById(candidateId);
    }
}

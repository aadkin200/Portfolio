package com.alextadkins.portfolio.controller;

import com.alextadkins.portfolio.model.Project;
import com.alextadkins.portfolio.service.CandidateService;
import com.alextadkins.portfolio.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("candidate/{candidateId}")
public class ProjectController {

    @Autowired
    private ProjectService projService;

    @GetMapping("projects")
    public List<Project> showProjects(HttpServletRequest req,
                                      HttpServletResponse res) {
        return projService.findAll();
    }

}

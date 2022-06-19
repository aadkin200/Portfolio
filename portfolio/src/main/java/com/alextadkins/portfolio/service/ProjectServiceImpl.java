package com.alextadkins.portfolio.service;

import com.alextadkins.portfolio.model.Project;
import com.alextadkins.portfolio.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectServiceImpl implements ProjectService{

    @Autowired
    private ProjectRepository projRepo;

    @Override
    public List<Project> findAll() {
        return projRepo.findAll();
    }

}

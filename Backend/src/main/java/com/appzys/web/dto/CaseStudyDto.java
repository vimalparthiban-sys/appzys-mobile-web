package com.appzys.web.dto;

import java.util.List;

public record CaseStudyDto(
        String slug,
        String appName,
        String category,
        String installsLabel,
        double rating,
        String summary,
        String challenge,
        String solution,
        List<String> techStack
) {}

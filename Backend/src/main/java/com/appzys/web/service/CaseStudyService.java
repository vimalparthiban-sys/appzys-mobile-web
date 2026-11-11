package com.appzys.web.service;

import com.appzys.web.dto.CaseStudyDto;
import com.appzys.web.entity.CaseStudy;
import com.appzys.web.repository.CaseStudyRepository;
import org.springframework.stereotype.Service;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class CaseStudyService {

    private final CaseStudyRepository caseStudyRepository;

    public CaseStudyService(CaseStudyRepository caseStudyRepository) {
        this.caseStudyRepository = caseStudyRepository;
    }

    public List<CaseStudyDto> getFeaturedCaseStudies() {
        return caseStudyRepository.findByFeaturedTrueOrderByIdAsc()
                .stream()
                .map(this::toDto)
                .toList();
    }

    public Optional<CaseStudyDto> getBySlug(String slug) {
        return caseStudyRepository.findBySlug(slug).map(this::toDto);
    }

    private CaseStudyDto toDto(CaseStudy entity) {
        List<String> stack = Arrays.stream(entity.getTechStackCsv().split(","))
                .map(String::trim)
                .filter(s -> !s.isEmpty())
                .toList();

        return new CaseStudyDto(
                entity.getSlug(),
                entity.getAppName(),
                entity.getCategory(),
                entity.getInstallsLabel(),
                entity.getRating(),
                entity.getSummary(),
                entity.getChallenge(),
                entity.getSolution(),
                stack
        );
    }
}

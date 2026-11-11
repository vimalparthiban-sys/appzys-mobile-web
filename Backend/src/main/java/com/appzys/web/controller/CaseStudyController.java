package com.appzys.web.controller;

import com.appzys.web.dto.ApiResponse;
import com.appzys.web.dto.CaseStudyDto;
import com.appzys.web.service.CaseStudyService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/case-studies")
public class CaseStudyController {

    private final CaseStudyService caseStudyService;

    public CaseStudyController(CaseStudyService caseStudyService) {
        this.caseStudyService = caseStudyService;
    }

    @GetMapping
    public ApiResponse<List<CaseStudyDto>> listFeatured() {
        return ApiResponse.ok("Featured Appzys case studies", caseStudyService.getFeaturedCaseStudies());
    }

    @GetMapping("/{slug}")
    public ResponseEntity<ApiResponse<CaseStudyDto>> getBySlug(@PathVariable String slug) {
        return caseStudyService.getBySlug(slug)
                .map(dto -> ResponseEntity.ok(ApiResponse.ok("Case study found", dto)))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(ApiResponse.error("Case study not found")));
    }
}

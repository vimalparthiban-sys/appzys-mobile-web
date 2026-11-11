package com.appzys.web.repository;

import com.appzys.web.entity.CaseStudy;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface CaseStudyRepository extends JpaRepository<CaseStudy, Long> {
    Optional<CaseStudy> findBySlug(String slug);
    List<CaseStudy> findByFeaturedTrueOrderByIdAsc();
}

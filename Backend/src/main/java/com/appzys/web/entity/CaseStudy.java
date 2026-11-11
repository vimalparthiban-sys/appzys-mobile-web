package com.appzys.web.entity;

import jakarta.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "case_studies")
public class CaseStudy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 120)
    private String slug;

    @Column(name = "app_name", nullable = false, length = 160)
    private String appName;

    @Column(nullable = false, length = 120)
    private String category;

    @Column(name = "installs_label", nullable = false, length = 80)
    private String installsLabel;

    @Column(nullable = false)
    private double rating;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String summary;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String challenge;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String solution;

    @Column(name = "tech_stack_csv", nullable = false, length = 500)
    private String techStackCsv;

    @Column(nullable = false)
    private boolean featured = true;

    @Column(name = "created_at", nullable = false, updatable = false)
    private Instant createdAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = Instant.now();
    }

    public Long getId() { return id; }
    public String getSlug() { return slug; }
    public void setSlug(String slug) { this.slug = slug; }
    public String getAppName() { return appName; }
    public void setAppName(String appName) { this.appName = appName; }
    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
    public String getInstallsLabel() { return installsLabel; }
    public void setInstallsLabel(String installsLabel) { this.installsLabel = installsLabel; }
    public double getRating() { return rating; }
    public void setRating(double rating) { this.rating = rating; }
    public String getSummary() { return summary; }
    public void setSummary(String summary) { this.summary = summary; }
    public String getChallenge() { return challenge; }
    public void setChallenge(String challenge) { this.challenge = challenge; }
    public String getSolution() { return solution; }
    public void setSolution(String solution) { this.solution = solution; }
    public String getTechStackCsv() { return techStackCsv; }
    public void setTechStackCsv(String techStackCsv) { this.techStackCsv = techStackCsv; }
    public boolean isFeatured() { return featured; }
    public void setFeatured(boolean featured) { this.featured = featured; }
    public Instant getCreatedAt() { return createdAt; }
}

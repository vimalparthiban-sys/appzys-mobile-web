package com.appzys.web.entity;

import jakarta.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "cost_estimates")
public class CostEstimate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "lead_id")
    private Long leadId;

    @Column(nullable = false, length = 60)
    private String platform;

    @Column(name = "ui_level", nullable = false, length = 60)
    private String uiLevel;

    @Column(name = "features_json", nullable = false, columnDefinition = "TEXT")
    private String featuresJson;

    @Column(name = "ai_level", nullable = false, length = 60)
    private String aiLevel;

    @Column(name = "min_budget", nullable = false)
    private int minBudget;

    @Column(name = "max_budget", nullable = false)
    private int maxBudget;

    @Column(name = "est_weeks", nullable = false)
    private int estWeeks;

    @Column(name = "created_at", nullable = false, updatable = false)
    private Instant createdAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = Instant.now();
    }

    public Long getId() { return id; }
    public Long getLeadId() { return leadId; }
    public void setLeadId(Long leadId) { this.leadId = leadId; }
    public String getPlatform() { return platform; }
    public void setPlatform(String platform) { this.platform = platform; }
    public String getUiLevel() { return uiLevel; }
    public void setUiLevel(String uiLevel) { this.uiLevel = uiLevel; }
    public String getFeaturesJson() { return featuresJson; }
    public void setFeaturesJson(String featuresJson) { this.featuresJson = featuresJson; }
    public String getAiLevel() { return aiLevel; }
    public void setAiLevel(String aiLevel) { this.aiLevel = aiLevel; }
    public int getMinBudget() { return minBudget; }
    public void setMinBudget(int minBudget) { this.minBudget = minBudget; }
    public int getMaxBudget() { return maxBudget; }
    public void setMaxBudget(int maxBudget) { this.maxBudget = maxBudget; }
    public int getEstWeeks() { return estWeeks; }
    public void setEstWeeks(int estWeeks) { this.estWeeks = estWeeks; }
    public Instant getCreatedAt() { return createdAt; }
}

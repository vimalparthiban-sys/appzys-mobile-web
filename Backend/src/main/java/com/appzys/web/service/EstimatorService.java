package com.appzys.web.service;

import com.appzys.web.dto.EstimateRequest;
import com.appzys.web.entity.CostEstimate;
import com.appzys.web.repository.CostEstimateRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

@Service
public class EstimatorService {

    private final CostEstimateRepository costEstimateRepository;
    private final ObjectMapper objectMapper;

    public EstimatorService(CostEstimateRepository costEstimateRepository, ObjectMapper objectMapper) {
        this.costEstimateRepository = costEstimateRepository;
        this.objectMapper = objectMapper;
    }

    public CostEstimate calculateAndSave(EstimateRequest request) {
        int baseCost = switch (request.platform().toLowerCase()) {
            case "both-native" -> 9000;
            case "flutter", "react-native" -> 5500;
            default -> 4500;
        };

        int uiCost = switch (request.uiLevel().toLowerCase()) {
            case "design-system" -> 3500;
            case "custom" -> 2000;
            default -> 800;
        };

        int aiCost = switch (request.aiLevel().toLowerCase()) {
            case "custom-ai-ocr" -> 4000;
            case "ai-assistant" -> 2200;
            default -> 0;
        };

        int featureCount = request.features() != null ? request.features().size() : 0;
        int featuresCost = featureCount * 750;

        int minBudget = baseCost + uiCost + aiCost + featuresCost;
        int maxBudget = (int) Math.round(minBudget * 1.3);
        int estWeeks = Math.max(4, 4 + featureCount + (aiCost > 0 ? 2 : 0) + (uiCost > 1500 ? 1 : 0));

        CostEstimate estimate = new CostEstimate();
        estimate.setLeadId(request.leadId());
        estimate.setPlatform(request.platform());
        estimate.setUiLevel(request.uiLevel());
        estimate.setAiLevel(request.aiLevel());
        estimate.setMinBudget(minBudget);
        estimate.setMaxBudget(maxBudget);
        estimate.setEstWeeks(estWeeks);
        estimate.setFeaturesJson(serializeFeatures(request));

        return costEstimateRepository.save(estimate);
    }

    private String serializeFeatures(EstimateRequest request) {
        try {
            return objectMapper.writeValueAsString(request.features());
        } catch (JsonProcessingException e) {
            return "[]";
        }
    }
}

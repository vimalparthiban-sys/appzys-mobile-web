package com.appzys.web.controller;

import com.appzys.web.dto.ApiResponse;
import com.appzys.web.dto.EstimateRequest;
import com.appzys.web.entity.CostEstimate;
import com.appzys.web.service.EstimatorService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/estimates")
public class EstimatorController {

    private final EstimatorService estimatorService;

    public EstimatorController(EstimatorService estimatorService) {
        this.estimatorService = estimatorService;
    }

    @PostMapping
    public ResponseEntity<ApiResponse<CostEstimate>> createEstimate(@Valid @RequestBody EstimateRequest request) {
        CostEstimate saved = estimatorService.calculateAndSave(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.ok("Estimate calculated and saved", saved));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<CostEstimate>> getEstimate(@PathVariable Long id) {
        return estimatorService.findById(id)
                .map(est -> ResponseEntity.ok(ApiResponse.ok("Estimate found", est)))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(ApiResponse.error("Estimate not found")));
    }
}

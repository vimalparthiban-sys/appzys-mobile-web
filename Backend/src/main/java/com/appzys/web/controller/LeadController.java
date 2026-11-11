package com.appzys.web.controller;

import com.appzys.web.dto.ApiResponse;
import com.appzys.web.dto.LeadRequest;
import com.appzys.web.entity.Lead;
import com.appzys.web.service.LeadService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/leads")
public class LeadController {

    private final LeadService leadService;

    public LeadController(LeadService leadService) {
        this.leadService = leadService;
    }

    @PostMapping
    public ResponseEntity<ApiResponse<Map<String, Object>>> submitLead(@Valid @RequestBody LeadRequest request) {
        Lead saved = leadService.createLead(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(
                ApiResponse.ok(
                        "Thank you! Our senior engineering team will send your 48-Hr Audit shortly.",
                        Map.of("id", saved.getId() != null ? saved.getId() : 0L, "status", "RECEIVED")
                )
        );
    }
}

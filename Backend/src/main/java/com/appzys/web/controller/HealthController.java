package com.appzys.web.controller;

import com.appzys.web.dto.ApiResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.time.Instant;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/health")
public class HealthController {

    @GetMapping
    public ApiResponse<Map<String, Object>> health() {
        return ApiResponse.ok(
                "Appzys Spring Boot API is running",
                Map.of("status", "UP", "timestamp", Instant.now().toString())
        );
    }
}

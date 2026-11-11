package com.appzys.web.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.util.List;

public record EstimateRequest(
        Long leadId,
        @NotBlank(message = "Platform is required") String platform,
        @NotBlank(message = "UI complexity is required") String uiLevel,
        @NotNull(message = "Features list is required") List<String> features,
        @NotBlank(message = "AI level is required") String aiLevel
) {}

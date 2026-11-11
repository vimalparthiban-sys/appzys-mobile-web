package com.appzys.web.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record LeadRequest(
        @NotBlank(message = "Name is required")
        @Size(max = 120)
        String name,

        @NotBlank(message = "Valid email is required")
        @Email(message = "Please enter a valid email address")
        @Size(max = 160)
        String email,

        @Size(max = 40)
        String phone,

        @Size(max = 140)
        String company,

        @Size(max = 120)
        String serviceType,

        @Size(max = 80)
        String budgetRange,

        @NotBlank(message = "Please tell us briefly about your project")
        @Size(max = 4000)
        String message,

        @Size(max = 120)
        String sourcePage,

        // Honeypot field for bot filtering
        String website
) {}

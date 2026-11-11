package com.appzys.web.service;

import com.appzys.web.dto.LeadRequest;
import com.appzys.web.entity.Lead;
import com.appzys.web.repository.LeadRepository;
import org.springframework.stereotype.Service;

@Service
public class LeadService {

    private final LeadRepository leadRepository;

    public LeadService(LeadRepository leadRepository) {
        this.leadRepository = leadRepository;
    }

    public Lead createLead(LeadRequest request) {
        // Silently ignore bot submissions that populate the hidden honeypot field
        if (request.website() != null && !request.website().isBlank()) {
            Lead dummy = new Lead();
            dummy.setName(request.name());
            return dummy;
        }

        Lead lead = new Lead();
        lead.setName(request.name().trim());
        lead.setEmail(request.email().trim().toLowerCase());
        lead.setPhone(request.phone() != null ? request.phone().trim() : null);
        lead.setCompany(request.company() != null ? request.company().trim() : null);
        lead.setServiceType(request.serviceType());
        lead.setBudgetRange(request.budgetRange());
        lead.setMessage(request.message().trim());
        lead.setSourcePage(request.sourcePage() != null ? request.sourcePage() : "/contact");
        lead.setStatus("NEW");

        return leadRepository.save(lead);
    }
}

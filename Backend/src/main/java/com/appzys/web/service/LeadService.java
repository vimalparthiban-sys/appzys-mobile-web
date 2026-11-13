package com.appzys.web.service;

import com.appzys.web.dto.LeadRequest;
import com.appzys.web.entity.Lead;
import com.appzys.web.repository.CostEstimateRepository;
import com.appzys.web.repository.LeadRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class LeadService {

    private final LeadRepository leadRepository;
    private final CostEstimateRepository costEstimateRepository;
    private final EmailNotificationService emailNotificationService;

    public LeadService(
            LeadRepository leadRepository,
            CostEstimateRepository costEstimateRepository,
            EmailNotificationService emailNotificationService
    ) {
        this.leadRepository = leadRepository;
        this.costEstimateRepository = costEstimateRepository;
        this.emailNotificationService = emailNotificationService;
    }

    @Transactional
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

        Lead saved = leadRepository.save(lead);

        if (request.estimateId() != null) {
            costEstimateRepository.findById(request.estimateId()).ifPresent(est -> {
                est.setLeadId(saved.getId());
                costEstimateRepository.save(est);
            });
        }

        emailNotificationService.sendLeadAlert(saved);
        return saved;
    }

    @Transactional(readOnly = true)
    public java.util.List<Lead> getRecentLeads() {
        return leadRepository.findAll(org.springframework.data.domain.Sort.by(
                org.springframework.data.domain.Sort.Direction.DESC, "createdAt"
        ));
    }
}

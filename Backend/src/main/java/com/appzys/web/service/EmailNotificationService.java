package com.appzys.web.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import com.appzys.web.entity.Lead;

@Service
public class EmailNotificationService {

    private static final Logger log = LoggerFactory.getLogger(EmailNotificationService.class);

    private final JavaMailSender mailSender;

    @Value("${appzys.notify.email:}")
    private String notifyEmail;

    @Value("${spring.mail.username:}")
    private String fromEmail;

    public EmailNotificationService(@Autowired(required = false) JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    @Async
    public void sendLeadAlert(Lead lead) {
        if (mailSender == null || notifyEmail == null || notifyEmail.isBlank()) {
            log.info("Lead #{} received from {} ({}). SMTP notification skipped (not configured).",
                    lead.getId(), lead.getName(), lead.getEmail());
            return;
        }

        try {
            SimpleMailMessage msg = new SimpleMailMessage();
            if (fromEmail != null && !fromEmail.isBlank()) {
                msg.setFrom(fromEmail);
            }
            msg.setTo(notifyEmail);
            msg.setSubject("New Appzys 48-Hr Audit Lead: " + lead.getName());
            msg.setText(String.format(
                    "New mobile app inquiry received!%n%nName: %s%nEmail: %s%nPhone: %s%nCompany: %s%nService: %s%nBudget: %s%nMessage:%n%s",
                    lead.getName(),
                    lead.getEmail(),
                    lead.getPhone() != null ? lead.getPhone() : "-",
                    lead.getCompany() != null ? lead.getCompany() : "-",
                    lead.getServiceType() != null ? lead.getServiceType() : "-",
                    lead.getBudgetRange() != null ? lead.getBudgetRange() : "-",
                    lead.getMessage()
            ));
            mailSender.send(msg);
        } catch (Exception ex) {
            // Never fail a lead save if SMTP is temporarily unreachable
            log.warn("Failed to send lead alert email for lead #{}: {}", lead.getId(), ex.getMessage());
        }
    }
}

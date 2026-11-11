package com.appzys.web.config;

import com.appzys.web.entity.CaseStudy;
import com.appzys.web.repository.CaseStudyRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import java.util.List;

@Component
public class DataSeeder implements CommandLineRunner {

    private final CaseStudyRepository caseStudyRepository;

    public DataSeeder(CaseStudyRepository caseStudyRepository) {
        this.caseStudyRepository = caseStudyRepository;
    }

    @Override
    public void run(String... args) {
        if (caseStudyRepository.count() > 0) {
            return;
        }

        CaseStudy copyText = new CaseStudy();
        copyText.setSlug("copy-text-on-screen");
        copyText.setAppName("Copy Text On Screen");
        copyText.setCategory("OCR & Productivity Utility");
        copyText.setInstallsLabel("700K+ Installs");
        copyText.setRating(4.1);
        copyText.setSummary("Extracts selectable text, phone numbers, emails, and URLs directly from screenshots and restricted app screens across 100+ languages.");
        copyText.setChallenge("Mobile users frequently need to copy text embedded inside images, social apps, or screenshots where native OS text selection is blocked.");
        copyText.setSolution("Engineered a fast, low-latency on-device & cloud OCR pipeline with smart entity detection (URLs, phones, emails) and instant multi-language translation.");
        copyText.setTechStackCsv("Android Kotlin,On-Device ML Kit,OCR Pipeline,Material 3 UI");
        copyText.setFeatured(true);

        CaseStudy aiScanner = new CaseStudy();
        aiScanner.setSlug("ai-text-scanner");
        aiScanner.setAppName("AI Text Scanner: Image To Text");
        aiScanner.setCategory("AI & Document Intelligence");
        aiScanner.setInstallsLabel("High-Retention Utility");
        aiScanner.setRating(4.3);
        aiScanner.setSummary("Converts physical documents, PDFs, and photos into clean editable digital text with AI summarization and instant export.");
        aiScanner.setChallenge("Standard mobile scanners struggle with skewed lighting, multi-column layouts, and noisy backgrounds on budget Android devices.");
        aiScanner.setSolution("Built automatic edge detection, perspective correction, and AI text post-processing to deliver accurate structured text exports in seconds.");
        aiScanner.setTechStackCsv("Flutter / Native,Computer Vision,AI Summarization,Cloud Sync");
        aiScanner.setFeatured(true);

        CaseStudy handwriting = new CaseStudy();
        handwriting.setSlug("handwriting-to-text-scanner");
        handwriting.setAppName("Handwriting to Text Scanner");
        handwriting.setCategory("EdTech & AI Recognition");
        handwriting.setInstallsLabel("Global Multi-Language");
        handwriting.setRating(4.2);
        handwriting.setSummary("Transforms handwritten notes, classroom boards, and paper forms into searchable, editable digital notes across multiple languages.");
        handwriting.setChallenge("Cursive and uneven handwriting varies wildly across users, requiring specialized recognition models beyond standard printed OCR.");
        handwriting.setSolution("Combined adaptive image preprocessing with modern handwriting recognition models and a distraction-free mobile editor.");
        handwriting.setTechStackCsv("iOS & Android,Handwriting AI,PDF Export,Offline Cache");
        handwriting.setFeatured(true);

        caseStudyRepository.saveAll(List.of(copyText, aiScanner, handwriting));
    }
}

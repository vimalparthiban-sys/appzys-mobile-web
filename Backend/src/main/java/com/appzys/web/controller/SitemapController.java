package com.appzys.web.controller;

import com.appzys.web.service.CaseStudyService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class SitemapController {

    private final CaseStudyService caseStudyService;

    @Value("${appzys.site.base-url:https://appzys.com}")
    private String baseUrl;

    public SitemapController(CaseStudyService caseStudyService) {
        this.caseStudyService = caseStudyService;
    }

    @GetMapping(value = "/sitemap.xml", produces = MediaType.APPLICATION_XML_VALUE)
    public String sitemap() {
        List<String> staticPaths = List.of(
                "/",
                "/services/mobile-app-development",
                "/case-studies",
                "/contact"
        );

        StringBuilder xml = new StringBuilder();
        xml.append("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n");
        xml.append("<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n");

        for (String path : staticPaths) {
            xml.append("  <url><loc>").append(baseUrl).append(path).append("</loc></url>\n");
        }

        caseStudyService.getFeaturedCaseStudies().forEach(study ->
                xml.append("  <url><loc>").append(baseUrl)
                        .append("/case-studies/").append(study.slug())
                        .append("</loc></url>\n")
        );

        xml.append("</urlset>");
        return xml.toString();
    }
}

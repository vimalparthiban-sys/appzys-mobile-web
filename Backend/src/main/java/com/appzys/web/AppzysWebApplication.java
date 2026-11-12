package com.appzys.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class AppzysWebApplication {

    public static void main(String[] args) {
        SpringApplication.run(AppzysWebApplication.class, args);
        System.out.println("=================================================");
        System.out.println("  APPZYS Mobile Application BACKEND IS RUNNING ON 8080!");
        System.out.println("  Health Check: http://localhost:8080/api/health ");
        System.out.println("=================================================");
    }
}

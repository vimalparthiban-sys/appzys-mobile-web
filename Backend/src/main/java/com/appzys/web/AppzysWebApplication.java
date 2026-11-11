package com.appzys.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class AppzysWebApplication {

    public static void main(String[] args) {
        SpringApplication.run(AppzysWebApplication.class, args);
    }
}

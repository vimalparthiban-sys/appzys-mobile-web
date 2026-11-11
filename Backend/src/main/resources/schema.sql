-- Reference SQL Schema for MySQL Workbench / Manual Inspection
CREATE DATABASE IF NOT EXISTS appzys_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE appzys_db;

CREATE TABLE IF NOT EXISTS leads (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(120) NOT NULL,
    email VARCHAR(160) NOT NULL,
    phone VARCHAR(40),
    company VARCHAR(140),
    service_type VARCHAR(120),
    budget_range VARCHAR(80),
    message TEXT NOT NULL,
    source_page VARCHAR(120),
    status VARCHAR(32) NOT NULL DEFAULT 'NEW',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS cost_estimates (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    lead_id BIGINT NULL,
    platform VARCHAR(60) NOT NULL,
    ui_level VARCHAR(60) NOT NULL,
    features_json TEXT NOT NULL,
    ai_level VARCHAR(60) NOT NULL,
    min_budget INT NOT NULL,
    max_budget INT NOT NULL,
    est_weeks INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_estimates_lead FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS case_studies (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    slug VARCHAR(120) NOT NULL UNIQUE,
    app_name VARCHAR(160) NOT NULL,
    category VARCHAR(120) NOT NULL,
    installs_label VARCHAR(80) NOT NULL,
    rating DOUBLE NOT NULL DEFAULT 4.1,
    summary TEXT NOT NULL,
    challenge TEXT NOT NULL,
    solution TEXT NOT NULL,
    tech_stack_csv VARCHAR(500) NOT NULL,
    featured BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

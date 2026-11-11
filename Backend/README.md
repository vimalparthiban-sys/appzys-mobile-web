# Appzys Backend (Java 21 + Spring Boot + MySQL)

## 1. MySQL Setup
MySQL 8.0 automatically creates `appzys_db` on startup (`createDatabaseIfNotExist=true` in `application.properties`).
Update your MySQL credentials if needed using environment variables or `src/main/resources/application.properties`:
- `DB_USERNAME` (default: `root`)
- `DB_PASSWORD` (default: `root`)

## 2. Run Spring Boot API
Open this `Backend` folder in IntelliJ IDEA / Eclipse / VS Code (Java Extension Pack) and run `AppzysWebApplication.java`, or run with Maven:
```bash
mvn spring-boot:run
```

## 3. Endpoints (Day 1)
- `GET /api/v1/health` — API health check
- `GET /api/v1/case-studies` — List seeded Appzys app case studies
- `GET /api/v1/case-studies/{slug}` — Single case study detail
- `POST /api/v1/leads` — Save Free 48-Hr Audit inquiry to MySQL
- `POST /api/v1/estimates` — Calculate & store app cost/timeline estimate

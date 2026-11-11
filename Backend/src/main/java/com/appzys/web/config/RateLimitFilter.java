package com.appzys.web.config;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import java.io.IOException;
import java.time.Instant;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class RateLimitFilter extends OncePerRequestFilter {

    private static final int MAX_REQUESTS_PER_WINDOW = 20;
    private static final long WINDOW_SECONDS = 600;

    private record WindowCounter(long windowStartEpoch, int count) {}

    private final Map<String, WindowCounter> counters = new ConcurrentHashMap<>();

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain
    ) throws ServletException, IOException {
        String path = request.getRequestURI();
        boolean isWriteEndpoint = "POST".equalsIgnoreCase(request.getMethod())
                && (path.startsWith("/api/v1/leads") || path.startsWith("/api/v1/estimates"));

        if (!isWriteEndpoint) {
            filterChain.doFilter(request, response);
            return;
        }

        String clientIp = resolveClientIp(request);
        long now = Instant.now().getEpochSecond();

        WindowCounter updated = counters.compute(clientIp, (key, existing) -> {
            if (existing == null || now - existing.windowStartEpoch() >= WINDOW_SECONDS) {
                return new WindowCounter(now, 1);
            }
            return new WindowCounter(existing.windowStartEpoch(), existing.count() + 1);
        });

        if (updated.count() > MAX_REQUESTS_PER_WINDOW) {
            response.setStatus(HttpStatus.TOO_MANY_REQUESTS.value());
            response.setContentType("application/json");
            response.getWriter().write("{\"success\":false,\"message\":\"Too many requests. Please try again in a few minutes.\",\"data\":null}");
            return;
        }

        filterChain.doFilter(request, response);
    }

    private String resolveClientIp(HttpServletRequest request) {
        String forwarded = request.getHeader("X-Forwarded-For");
        if (forwarded != null && !forwarded.isBlank()) {
            return forwarded.split(",")[0].trim();
        }
        return request.getRemoteAddr();
    }
}

package com.edutrack.controller;

import com.edutrack.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * AuthController - Handles user registration and login endpoints.
 *
 * POST /api/register   → create a new instructor account
 * POST /api/login      → login with email + password
 */
@RestController
@RequestMapping("/api")
public class AuthController {

    @Autowired
    private AuthService authService;

    /**
     * POST /api/register
     * Body: { "name": "Dr. Smith", "email": "smith@uni.edu", "password": "secret" }
     */
    @PostMapping("/register")
    public ResponseEntity<Map<String, Object>> register(@RequestBody Map<String, String> body) {
        String name     = body.get("name");
        String email    = body.get("email");
        String password = body.get("password");

        // Basic null checks
        if (name == null || email == null || password == null) {
            return ResponseEntity.badRequest()
                .body(Map.of("message", "name, email, and password are required."));
        }

        Map<String, Object> result = authService.register(name, email, password);

        if ((Boolean) result.get("success")) {
            return ResponseEntity.ok(result);
        } else {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(result);
        }
    }

    /**
     * POST /api/login
     * Body: { "email": "smith@uni.edu", "password": "secret" }
     */
    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody Map<String, String> body) {
        String email    = body.get("email");
        String password = body.get("password");

        if (email == null || password == null) {
            return ResponseEntity.badRequest()
                .body(Map.of("message", "email and password are required."));
        }

        Map<String, Object> result = authService.login(email, password);

        if ((Boolean) result.get("success")) {
            return ResponseEntity.ok(result);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(result);
        }
    }
}

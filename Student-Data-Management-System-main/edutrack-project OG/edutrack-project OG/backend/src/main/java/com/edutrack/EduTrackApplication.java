package com.edutrack;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * EduTrackApplication - Main entry point for the Spring Boot application.
 * Run this class to start the backend server on http://localhost:8080
 */
@SpringBootApplication
public class EduTrackApplication {

    public static void main(String[] args) {
        SpringApplication.run(EduTrackApplication.class, args);
        System.out.println("✅ EduTrack Backend is running on http://localhost:8080");
    }
}

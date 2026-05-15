package com.edutrack.controller;

import com.edutrack.model.Student;
import com.edutrack.service.CsvService;
import com.edutrack.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * CsvController - Handles CSV file upload for bulk student import.
 *
 * POST /api/upload-csv   → upload a CSV file, validate, and import students
 *
 * Accepts multipart/form-data with field name "file"
 */
@RestController
@RequestMapping("/api")
public class CsvController {

    @Autowired
    private CsvService csvService;

    @Autowired
    private StudentService studentService;

    /**
     * POST /api/upload-csv
     *
     * How to use (from frontend):
     *   const formData = new FormData();
     *   formData.append("file", csvFile);
     *   fetch("/api/upload-csv", { method: "POST", body: formData });
     */
    @PostMapping("/upload-csv")
    public ResponseEntity<Map<String, Object>> uploadCsv(
            @RequestParam("file") MultipartFile file) {

        Map<String, Object> response = new HashMap<>();

        // Step 1: Check that a file was actually uploaded
        if (file == null || file.isEmpty()) {
            response.put("message", "No file uploaded.");
            return ResponseEntity.badRequest().body(response);
        }

        // Step 2: Parse and validate the CSV file
        CsvService.CsvResult result = csvService.parseAndValidate(file);

        // Step 3: If there are validation errors, return them (don't save anything)
        if (!result.isSuccess()) {
            response.put("message", "CSV validation failed. No students were imported.");
            response.put("errors", result.getErrors());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        // Step 4: Save all valid students to MongoDB
        List<Student> students = result.getStudents();
        List<Student> saved = studentService.saveAll(students);

        response.put("message", "Successfully imported " + saved.size() + " student(s).");
        response.put("count", saved.size());
        response.put("students", saved);
        return ResponseEntity.ok(response);
    }
}

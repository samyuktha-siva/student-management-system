package com.edutrack.controller;

import com.edutrack.model.Student;
import com.edutrack.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

/**
 * StudentController - Handles all student CRUD endpoints.
 *
 * GET    /api/students           → get all students (or search with ?query=)
 * POST   /api/students           → add a new student
 * PUT    /api/students/{id}      → update a student by MongoDB ID
 * DELETE /api/students/{id}      → delete a student by MongoDB ID
 */
@RestController
@RequestMapping("/api/students")
public class StudentController {

    @Autowired
    private StudentService studentService;

    /**
     * GET /api/students
     * GET /api/students?query=alice   → search by name or department
     */
    @GetMapping
    public ResponseEntity<List<Student>> getStudents(
            @RequestParam(required = false) String query) {
        List<Student> students;
        if (query != null && !query.trim().isEmpty()) {
            students = studentService.searchStudents(query.trim());
        } else {
            students = studentService.getAllStudents();
        }
        return ResponseEntity.ok(students);
    }

    /**
     * POST /api/students
     * Body: { "studentId": "STU001", "name": "Alice", "email": "alice@uni.edu",
     *         "department": "CS", "course": "AI", "grade": "A" }
     */
    @PostMapping
    public ResponseEntity<?> createStudent(@RequestBody Student student) {
        // Validate required fields
        if (student.getName() == null || student.getName().isBlank()) {
            return ResponseEntity.badRequest().body(Map.of("message", "Name is required."));
        }
        if (student.getEmail() == null || student.getEmail().isBlank()) {
            return ResponseEntity.badRequest().body(Map.of("message", "Email is required."));
        }
        Student saved = studentService.createStudent(student);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    /**
     * PUT /api/students/{id}
     * Updates an existing student by their MongoDB ID.
     */
    @PutMapping("/{id}")
    public ResponseEntity<?> updateStudent(
            @PathVariable String id,
            @RequestBody Student updatedData) {

        Optional<Student> result = studentService.updateStudent(id, updatedData);
        if (result.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(Map.of("message", "Student not found with id: " + id));
        }
        return ResponseEntity.ok(result.get());
    }

    /**
     * DELETE /api/students/{id}
     * Deletes a student by their MongoDB ID.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteStudent(@PathVariable String id) {
        boolean deleted = studentService.deleteStudent(id);
        if (!deleted) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(Map.of("message", "Student not found with id: " + id));
        }
        return ResponseEntity.ok(Map.of("message", "Student deleted successfully."));
    }
}

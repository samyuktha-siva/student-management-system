package com.edutrack.service;

import com.edutrack.model.Student;
import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.*;

/**
 * CsvService - Handles CSV file parsing and validation.
 *
 * Expected CSV format:
 * studentId,name,email,department,course,grade
 * STU001,Alice Johnson,alice@uni.edu,Computer Science,Data Structures,A
 */
@Service
public class CsvService {

    // Required column headers (in exact order)
    private static final String[] REQUIRED_HEADERS =
        {"studentId", "name", "email", "department", "course", "grade"};

    /**
     * Parse and validate a CSV file.
     * @param file - uploaded multipart file
     * @return a Result object with parsed students or error messages
     */
    public CsvResult parseAndValidate(MultipartFile file) {
        CsvResult result = new CsvResult();

        // Check file extension
        String filename = file.getOriginalFilename();
        if (filename == null || !filename.toLowerCase().endsWith(".csv")) {
            result.getErrors().add("File must have a .csv extension.");
            return result;
        }

        // Check file is not empty
        if (file.isEmpty()) {
            result.getErrors().add("File is empty.");
            return result;
        }

        try (CSVReader reader = new CSVReader(
                new InputStreamReader(file.getInputStream(), StandardCharsets.UTF_8))) {

            List<String[]> rows = reader.readAll();

            // Must have at least a header row + 1 data row
            if (rows.isEmpty()) {
                result.getErrors().add("CSV file has no content.");
                return result;
            }

            if (rows.size() < 2) {
                result.getErrors().add("CSV file must have at least one data row after the header.");
                return result;
            }

            // Validate header row
            String[] headers = rows.get(0);
            if (!validateHeaders(headers)) {
                result.getErrors().add(
                    "Invalid CSV header. Expected: studentId,name,email,department,course,grade"
                );
                return result;
            }

            // Parse each data row
            List<Student> students = new ArrayList<>();
            for (int i = 1; i < rows.size(); i++) {
                String[] row = rows.get(i);
                int lineNumber = i + 1; // human-friendly line number

                // Skip completely empty rows
                if (isEmptyRow(row)) continue;

                // Must have exactly 6 columns
                if (row.length != 6) {
                    result.getErrors().add(
                        "Row " + lineNumber + ": Expected 6 columns, found " + row.length
                    );
                    continue;
                }

                // Extract fields (trimmed)
                String studentId  = row[0].trim();
                String name       = row[1].trim();
                String email      = row[2].trim();
                String department = row[3].trim();
                String course     = row[4].trim();
                String grade      = row[5].trim();

                // Validate each field
                List<String> rowErrors = new ArrayList<>();
                if (studentId.isEmpty())  rowErrors.add("studentId is missing");
                if (name.isEmpty())       rowErrors.add("name is missing");
                if (email.isEmpty())      rowErrors.add("email is missing");
                else if (!isValidEmail(email)) rowErrors.add("email '" + email + "' is not valid");
                if (department.isEmpty()) rowErrors.add("department is missing");
                if (course.isEmpty())     rowErrors.add("course is missing");
                if (grade.isEmpty())      rowErrors.add("grade is missing");

                if (!rowErrors.isEmpty()) {
                    result.getErrors().add("Row " + lineNumber + ": " + String.join(", ", rowErrors));
                    continue;
                }

                // Build Student object
                Student student = new Student();
                student.setStudentId(studentId);
                student.setName(name);
                student.setEmail(email);
                student.setDepartment(department);
                student.setCourse(course);
                student.setGrade(grade);
                students.add(student);
            }

            // If any validation errors, don't save anything
            if (!result.getErrors().isEmpty()) {
                return result;
            }

            result.setStudents(students);
            result.setSuccess(true);

        } catch (IOException e) {
            result.getErrors().add("Could not read file: " + e.getMessage());
        } catch (CsvException e) {
            result.getErrors().add("CSV parsing error: " + e.getMessage());
        }

        return result;
    }

    // Check if header row matches expected headers
    private boolean validateHeaders(String[] headers) {
        if (headers.length != REQUIRED_HEADERS.length) return false;
        for (int i = 0; i < REQUIRED_HEADERS.length; i++) {
            if (!headers[i].trim().equalsIgnoreCase(REQUIRED_HEADERS[i])) return false;
        }
        return true;
    }

    // Check if a row is completely empty
    private boolean isEmptyRow(String[] row) {
        for (String cell : row) {
            if (cell != null && !cell.trim().isEmpty()) return false;
        }
        return true;
    }

    // Simple email validation
    private boolean isValidEmail(String email) {
        return email.matches("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$");
    }

    // ---- Inner class to hold parse results ----
    public static class CsvResult {
        private boolean success = false;
        private List<Student> students = new ArrayList<>();
        private List<String> errors = new ArrayList<>();

        public boolean isSuccess() { return success; }
        public void setSuccess(boolean success) { this.success = success; }
        public List<Student> getStudents() { return students; }
        public void setStudents(List<Student> students) { this.students = students; }
        public List<String> getErrors() { return errors; }
    }
}

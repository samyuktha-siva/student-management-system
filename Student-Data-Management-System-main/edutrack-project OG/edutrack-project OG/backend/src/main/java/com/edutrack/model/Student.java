package com.edutrack.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Student - MongoDB document for storing student records.
 * Stored in the "students" collection.
 */
@Data
@NoArgsConstructor
@Document(collection = "students")
public class Student {

    @Id
    private String id;          // MongoDB auto-generated ID (used in API URLs)

    private String studentId;   // Custom student ID (e.g. STU001)
    private String name;        // Student's full name
    private String email;       // Student's email address
    private String department;  // Department (e.g. Computer Science)
    private String course;      // Course name (e.g. Data Structures)
    private String grade;       // Grade (e.g. A, B+, 85)
}

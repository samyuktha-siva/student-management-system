package com.edutrack.repository;

import com.edutrack.model.Student;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

/**
 * StudentRepository - Handles database operations for Student documents.
 * Spring Data MongoDB automatically generates the implementation.
 */
@Repository
public interface StudentRepository extends MongoRepository<Student, String> {

    // Search students whose name contains the query (case-insensitive)
    List<Student> findByNameContainingIgnoreCase(String name);

    // Search students by department (case-insensitive)
    List<Student> findByDepartmentContainingIgnoreCase(String department);

    // Search by name OR department
    List<Student> findByNameContainingIgnoreCaseOrDepartmentContainingIgnoreCase(
        String name, String department
    );

    // Check if studentId already exists (used during CSV import)
    boolean existsByStudentId(String studentId);
}

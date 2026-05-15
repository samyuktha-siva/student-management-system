package com.edutrack.service;

import com.edutrack.model.Student;
import com.edutrack.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * StudentService - Business logic for student CRUD operations.
 */
@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    // ---- GET ALL STUDENTS ----
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    // ---- GET ONE STUDENT BY ID ----
    public Optional<Student> getStudentById(String id) {
        return studentRepository.findById(id);
    }

    // ---- CREATE A NEW STUDENT ----
    public Student createStudent(Student student) {
        return studentRepository.save(student);
    }

    // ---- UPDATE AN EXISTING STUDENT ----
    public Optional<Student> updateStudent(String id, Student updatedData) {
        Optional<Student> existingOpt = studentRepository.findById(id);
        if (existingOpt.isEmpty()) {
            return Optional.empty();
        }
        // Copy updated fields into existing document
        Student existing = existingOpt.get();
        existing.setStudentId(updatedData.getStudentId());
        existing.setName(updatedData.getName());
        existing.setEmail(updatedData.getEmail());
        existing.setDepartment(updatedData.getDepartment());
        existing.setCourse(updatedData.getCourse());
        existing.setGrade(updatedData.getGrade());
        studentRepository.save(existing);
        return Optional.of(existing);
    }

    // ---- DELETE A STUDENT ----
    public boolean deleteStudent(String id) {
        if (!studentRepository.existsById(id)) {
            return false;
        }
        studentRepository.deleteById(id);
        return true;
    }

    // ---- SEARCH STUDENTS ----
    public List<Student> searchStudents(String query) {
        return studentRepository
            .findByNameContainingIgnoreCaseOrDepartmentContainingIgnoreCase(query, query);
    }

    // ---- SAVE A BATCH OF STUDENTS (from CSV import) ----
    public List<Student> saveAll(List<Student> students) {
        return studentRepository.saveAll(students);
    }

    // ---- CHECK IF STUDENT ID EXISTS ----
    public boolean studentIdExists(String studentId) {
        return studentRepository.existsByStudentId(studentId);
    }
}

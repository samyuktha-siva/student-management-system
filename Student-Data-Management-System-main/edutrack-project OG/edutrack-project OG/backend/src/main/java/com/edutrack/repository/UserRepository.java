package com.edutrack.repository;

import com.edutrack.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

/**
 * UserRepository - Handles database operations for User documents.
 * Spring Data MongoDB automatically generates the implementation.
 */
@Repository
public interface UserRepository extends MongoRepository<User, String> {

    // Find a user by their email address (used for login)
    Optional<User> findByEmail(String email);

    // Check if an email already exists (used during registration)
    boolean existsByEmail(String email);
}

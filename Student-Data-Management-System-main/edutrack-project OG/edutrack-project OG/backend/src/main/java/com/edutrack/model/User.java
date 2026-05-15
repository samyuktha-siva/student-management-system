package com.edutrack.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.index.Indexed;

/**
 * User - MongoDB document for storing instructor accounts.
 * Stored in the "users" collection.
 */
@Data
@NoArgsConstructor
@Document(collection = "users")
public class User {

    @Id
    private String id;            // MongoDB auto-generated ID

    private String name;          // Instructor's full name

    @Indexed(unique = true)       // Email must be unique
    private String email;         // Login email

    private String password;      // Stored as plain text (use BCrypt in production!)
}

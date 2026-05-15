package com.edutrack.service;

import com.edutrack.model.User;
import com.edutrack.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

/**
 * AuthService - Business logic for user registration and login.
 */
@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    /**
     * Register a new user (instructor).
     * @return a response map with success/error message
     */
    public Map<String, Object> register(String name, String email, String password) {
        Map<String, Object> response = new HashMap<>();

        // Check if email is already used
        if (userRepository.existsByEmail(email)) {
            response.put("success", false);
            response.put("message", "An account with this email already exists.");
            return response;
        }

        // Create and save the new user
        // NOTE: In a real app, hash the password with BCrypt before saving!
        User user = new User();
        user.setName(name);
        user.setEmail(email);
        user.setPassword(password); // Plain text (educational purposes only)

        userRepository.save(user);

        response.put("success", true);
        response.put("message", "Account created successfully.");
        return response;
    }

    /**
     * Login a user by checking email and password.
     * @return a response map with token or error message
     */
    public Map<String, Object> login(String email, String password) {
        Map<String, Object> response = new HashMap<>();

        // Find the user by email
        Optional<User> userOpt = userRepository.findByEmail(email);

        if (userOpt.isEmpty()) {
            response.put("success", false);
            response.put("message", "No account found with this email.");
            return response;
        }

        User user = userOpt.get();

        // Check password (plain text comparison — use BCrypt in production!)
        if (!user.getPassword().equals(password)) {
            response.put("success", false);
            response.put("message", "Incorrect password.");
            return response;
        }

        // Return a simple token (in production, use JWT!)
        String simpleToken = "token-" + user.getId();

        response.put("success", true);
        response.put("message", "Login successful.");
        response.put("token", simpleToken);
        response.put("name", user.getName());
        return response;
    }
}

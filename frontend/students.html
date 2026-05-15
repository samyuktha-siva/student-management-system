// =========================================
// EduTrack - script.js
// Shared utility functions for all pages
// =========================================

// Backend base URL — change this if your Spring Boot runs on a different port
const API_BASE = 'http://localhost:8080/api';

// ---- AUTH HELPERS ----

// Redirect to login if not authenticated
function requireAuth() {
  if (!localStorage.getItem('token')) {
    window.location.href = 'login.html';
  }
}

// Logout: clear token and redirect
function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('userEmail');
  window.location.href = 'login.html';
}

// ---- API FETCH WRAPPER ----

/**
 * Make an authenticated API request
 * @param {string} path - e.g. '/students'
 * @param {string} method - GET, POST, PUT, DELETE
 * @param {object} body - request body (for POST/PUT)
 * @returns {Promise<any>} - parsed JSON response
 */
async function apiFetch(path, method = 'GET', body = null) {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + (localStorage.getItem('token') || '')
    }
  };
  if (body) {
    options.body = JSON.stringify(body);
  }
  const response = await fetch(API_BASE + path, options);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Request failed');
  }
  return data;
}

// ---- FORM VALIDATION HELPERS ----

// Check if an email is valid
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Show a field-level error
function showFieldError(elementId, message) {
  const el = document.getElementById(elementId);
  if (el) el.textContent = message;
}

// Clear all field errors (elements with class 'field-error')
function clearErrors() {
  document.querySelectorAll('.field-error').forEach(el => el.textContent = '');
  document.querySelectorAll('.alert').forEach(el => el.classList.add('hidden'));
}

// Show an alert message in a container (error style)
function showAlert(elementId, message) {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.textContent = message;
  el.className = 'alert alert-error';
}

// Show a success alert
function showSuccess(elementId, message) {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.textContent = message;
  el.className = 'alert alert-success';
}

// ---- LOADING STATE ----

/**
 * Toggle a button's loading state
 * @param {string} buttonId - the button element id
 * @param {boolean} isLoading
 */
function setLoading(buttonId, isLoading) {
  const btn = document.getElementById(buttonId);
  if (!btn) return;
  const text = btn.querySelector('.btn-text');
  const loader = btn.querySelector('.btn-loader');
  btn.disabled = isLoading;
  if (text) text.classList.toggle('hidden', isLoading);
  if (loader) loader.classList.toggle('hidden', !isLoading);
}

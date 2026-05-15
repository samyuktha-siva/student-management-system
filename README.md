# EduTrack – Student Data Management System
## Complete Setup & Run Guide

---

## Project Structure

```
edutrack/
├── frontend/
│   ├── login.html          ← Login page
│   ├── register.html       ← Registration page
│   ├── dashboard.html      ← Dashboard with stats
│   ├── students.html       ← CRUD for students
│   ├── upload.html         ← CSV upload page
│   ├── css/
│   │   └── styles.css      ← All styles
│   └── js/
│       └── script.js       ← Shared utility functions
│
├── backend/
│   ├── pom.xml             ← Maven dependencies
│   └── src/main/
│       ├── java/com/edutrack/
│       │   ├── EduTrackApplication.java        ← Main class
│       │   ├── config/
│       │   │   └── CorsConfig.java             ← CORS setup
│       │   ├── model/
│       │   │   ├── User.java                   ← User document
│       │   │   └── Student.java                ← Student document
│       │   ├── repository/
│       │   │   ├── UserRepository.java         ← MongoDB queries
│       │   │   └── StudentRepository.java
│       │   ├── service/
│       │   │   ├── AuthService.java            ← Register/Login logic
│       │   │   ├── StudentService.java         ← Student CRUD logic
│       │   │   └── CsvService.java             ← CSV parsing & validation
│       │   └── controller/
│       │       ├── AuthController.java         ← /api/register, /api/login
│       │       ├── StudentController.java      ← /api/students
│       │       └── CsvController.java          ← /api/upload-csv
│       └── resources/
│           └── application.properties          ← MongoDB config
│
└── database/
    ├── MONGODB_SETUP.md    ← MongoDB setup guide
    └── sample_students.csv ← Sample CSV for testing
```

---

## Prerequisites

Before running this project, install:

| Tool | Version | Download |
|------|---------|----------|
| Java JDK | 17+ | https://adoptium.net |
| Maven | 3.8+ | https://maven.apache.org |
| MongoDB | 6.0+ | https://www.mongodb.com/try/download/community |
| A browser | Any modern | – |

---

## Step 1: Start MongoDB

### Local Installation:
```bash
# Windows
net start MongoDB

# macOS
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

Verify it's running:
```bash
mongosh
# Should show: Current Mongosh Log ID: ...
```

---

## Step 2: Run the Spring Boot Backend

```bash
# Navigate to backend folder
cd backend

# Build and run with Maven
mvn spring-boot:run
```

You should see:
```
✅ EduTrack Backend is running on http://localhost:8080
```

---

## Step 3: Open the Frontend

Open the frontend HTML files directly in your browser:

```
frontend/login.html       ← Start here
```

Or use VS Code's Live Server extension for a better experience.

---

## REST API Reference

### Auth Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| POST | `/api/register` | Register a new instructor |
| POST | `/api/login` | Login and get a token |

**Register body:**
```json
{
  "name": "Dr. Smith",
  "email": "smith@uni.edu",
  "password": "mypassword"
}
```

**Login body:**
```json
{
  "email": "smith@uni.edu",
  "password": "mypassword"
}
```

---

### Student Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| GET | `/api/students` | Get all students |
| GET | `/api/students?query=Alice` | Search by name or department |
| POST | `/api/students` | Add a new student |
| PUT | `/api/students/{id}` | Update a student |
| DELETE | `/api/students/{id}` | Delete a student |

**Student body (POST/PUT):**
```json
{
  "studentId": "STU001",
  "name": "Alice Johnson",
  "email": "alice@uni.edu",
  "department": "Computer Science",
  "course": "Data Structures",
  "grade": "A"
}
```

---

### CSV Upload Endpoint

| Method | URL | Description |
|--------|-----|-------------|
| POST | `/api/upload-csv` | Upload CSV file for bulk import |

**Request:** `multipart/form-data` with field `file`

**Success Response:**
```json
{
  "message": "Successfully imported 8 student(s).",
  "count": 8
}
```

**Error Response (invalid CSV):**
```json
{
  "message": "CSV validation failed. No students were imported.",
  "errors": [
    "Row 3: email 'notanemail' is not valid",
    "Row 5: name is missing"
  ]
}
```

---

## CSV Format

Your CSV file MUST follow this exact format:

```csv
studentId,name,email,department,course,grade
STU001,Alice Johnson,alice@uni.edu,Computer Science,Data Structures,A
STU002,Bob Smith,bob@uni.edu,Mathematics,Calculus,B+
```

Rules:
- First row must be the exact header: `studentId,name,email,department,course,grade`
- All 6 columns are required
- Email must be a valid email address
- File must have `.csv` extension

Use the sample file: `database/sample_students.csv`

---

## Troubleshooting

### "Cannot connect to server" in browser
→ Make sure Spring Boot is running (`mvn spring-boot:run`)
→ Check it's on port 8080

### MongoDB connection error in Spring Boot
→ Make sure MongoDB is started
→ Check `application.properties` has the right URI

### CORS errors in browser console
→ CorsConfig.java handles this. Make sure you're calling `http://localhost:8080/api/...`
→ Don't call `https://` (wrong protocol)

### "Port 8080 already in use"
→ Change `server.port=8081` in `application.properties`
→ Also update `API_BASE` in `frontend/js/script.js`

---

## Security Notes (for Production)

This project is designed for **learning purposes**. For a real production app:

1. **Hash passwords** — Use `BCryptPasswordEncoder` instead of plain text
2. **Use JWT tokens** — Replace the simple token with proper JWT authentication
3. **Validate input** — Add Bean Validation (`@NotNull`, `@Email`, etc.)
4. **Use HTTPS** — Never send passwords over plain HTTP
5. **Restrict CORS** — Replace `allowedOrigins("*")` with your specific domain

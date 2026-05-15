# MongoDB Setup for EduTrack
# =============================================
# This file explains how to set up MongoDB for the EduTrack project.
# No manual schema creation is needed — Spring Boot does it automatically.

# =============================================
# STEP 1: Install MongoDB
# =============================================

# Option A: Install MongoDB Community Edition (locally)
# Download from: https://www.mongodb.com/try/download/community
# After installing, MongoDB runs on: mongodb://localhost:27017

# Option B: Use MongoDB Atlas (free cloud database)
# 1. Go to https://cloud.mongodb.com
# 2. Create a free cluster
# 3. Get your connection string (looks like):
#    mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/edutrack
# 4. Replace the URI in application.properties:
#    spring.data.mongodb.uri=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/edutrack

# =============================================
# STEP 2: Start MongoDB (local install)
# =============================================

# On Windows:
#   net start MongoDB
# Or start "MongoDB" from Windows Services

# On macOS (with Homebrew):
#   brew services start mongodb-community

# On Linux:
#   sudo systemctl start mongod

# =============================================
# STEP 3: Verify MongoDB is Running
# =============================================

# Open terminal and run:
#   mongosh
# You should see a MongoDB shell prompt.

# =============================================
# STEP 4: Collections Created Automatically
# =============================================
# Spring Boot + Spring Data MongoDB creates these collections automatically
# when the app first runs:
#
#   Database: edutrack
#   Collections:
#     - users     (stores instructor accounts)
#     - students  (stores student records)
#
# You don't need to run any scripts. Just start the Spring Boot app!

# =============================================
# USEFUL MONGOSH COMMANDS (for checking data)
# =============================================

# Connect to the edutrack database:
#   use edutrack

# View all users:
#   db.users.find().pretty()

# View all students:
#   db.students.find().pretty()

# Count students:
#   db.students.countDocuments()

# Delete all students (for testing):
#   db.students.deleteMany({})

# Delete all users (for testing):
#   db.users.deleteMany({})

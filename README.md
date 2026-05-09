# 🏫 School Management API

A robust, production-grade RESTful API built with **Node.js, Express, and MySQL**. This system allows users to securely add school locations to a database and retrieve a dynamically sorted list of schools based on their geographical proximity to a user's current coordinates.

## 🚀 Live Deployment
- **API Base URL**:  https://school-management-api-0dhi.onrender.com

## ✨ Key Features
- **Modular Architecture**: Clean separation of concerns (Controllers, Services, Models, Routes).
- **Proximity Sorting**: Implements the **Haversine Formula** to calculate real-world spherical distances between coordinates.
- **Strict Validation**: Utilizes `express-validator` to ensure data integrity and prevent bad data formats.
- **Centralized Error Handling**: Unified error responses for consistent client-side parsing.
- **Resilient Database Connections**: Implements connection pooling with keep-alive heartbeats to prevent cloud database timeouts.

## 🛠️ Tech Stack
- **Backend Framework**: Node.js & Express.js
- **Database**: MySQL (Hosted on Aiven)
- **Validation**: express-validator
- **Security & Logging**: Helmet, CORS, Morgan

## 📂 Folder Structure
```text
├── config/         # Database configuration and connection pooling
├── controllers/    # Route logic and HTTP response handling
├── middlewares/    # Custom middlewares (Error handling, validation)
├── models/         # Direct database queries (Data Access Layer)
├── routes/         # Express route definitions
├── services/       # Core business logic (Haversine calculations)
├── utils/          # Helper functions
├── validators/     # Request payload validation rules
├── app.js          # Express app setup
├── server.js       # Entry point and server initialization
└── seed.js         # Database automation script for populating test data



1. **Clone the repository:** git clone [https://github.com/YashMahindroo18/school-management-api](https://github.com/YashMahindroo18/school-management-api)
cd school-management-api

2. **Install dependencies:**
   ```bash
   npm install


3. **Configure Environment Variables:**
Create a .env file in the root directory:

Code snippet
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=school_db

4. **Initialize the Database:**
Run the following SQL script in your MySQL instance:

SQL
CREATE DATABASE school_db;
USE school_db;
CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

5.**Start the Development Server:**

Bash
npm run dev





## 📖 API Documentation

### 1. Add a School
- **Endpoint**: `POST /api/addSchool`
- **Description**: Adds a new school to the database.
- **Headers**: `Content-Type: application/json`
- **Body**:
  ```json
  {
    "name": "ABC School",
    "address": "Delhi",
    "latitude": 28.7041,
    "longitude": 77.1025
  }
  
Success Response: 201 Created

2. List Schools by Proximity
Endpoint: GET /api/listSchools?latitude={lat}&longitude={lng}

Description: Fetches all schools and sorts them dynamically based on the geographical distance from the provided coordinates.

Parameters:

latitude (Float, required)

longitude (Float, required)

Success Response: 200 OK (Returns an array of school objects, augmented with distance calculations, strictly sorted from nearest to farthest).

🔮 Future Scope
Implementation of JWT Authentication for protected admin routes.

Integration with Redis for caching list queries.

Dockerization for isolated environment deployment.

Google Maps Integration for visual representation on a frontend dashboard.
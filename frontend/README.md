# Task Manager MERN

A full-stack Task Management Web Application built using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). This application allows users to securely manage their tasks with authentication, task tracking, filtering, sorting, dashboard analytics, and overdue task monitoring.

---

# Project Description

Task Manager MERN is designed to help users efficiently organize and manage their daily tasks. Users can create, update, delete, search, filter, and sort tasks while tracking task completion status and deadlines.

The application implements secure user authentication using JWT and follows a RESTful API architecture.

---

# Tech Stack

## Frontend

* React.js
* React Router DOM
* Axios
* React Hot Toast
* CSS3

## Backend

* Node.js
* Express.js
* JWT Authentication
* bcryptjs

## Database

* MongoDB
* Mongoose

---

# Features

## Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes

## Task Management

* Create Task
* View All Tasks
* View Single Task
* Update Task
* Delete Task
* Mark Task as Completed
* Undo Completed Task
* Delete Completed Tasks

## Search, Filter & Sort

* Search Tasks by Title
* Filter Tasks

  * All Tasks
  * Pending Tasks
  * Completed Tasks
* Sort Tasks

  * Newest First
  * Oldest First
  * Priority
  * Due Date

## Dashboard Statistics

* Total Tasks Count
* Pending Tasks Count
* Completed Tasks Count
* Overdue Tasks Count

## User Interface

* Responsive Design
* Toast Notifications
* Clean Dashboard Layout

---

# Folder Structure

```text
Task Manager MERN
│
├── frontend
│   ├── public
│   ├── src
│   ├── package.json
│   └── ...
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── package.json
│   ├── server.js
│   └── ...
│
└── README.md
```

---

# Setup Instructions

## 1. Clone Repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/task-manager-mern.git
```

```bash
cd task-manager-mern
```

---

## 2. Backend Setup

Navigate to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start backend server:

```bash
npm start
```

Backend runs on:

```text
http://localhost:5000
```

---

## 3. Frontend Setup

Open a new terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start frontend:

```bash
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

# API Documentation

## Base URL

```text
http://localhost:5000/api
```

---

## Authentication APIs

### Register User

```http
POST /api/auth/register
```

Request Body:

```json
{
  "name": "John",
  "email": "john@example.com",
  "password": "123456"
}
```

---

### Login User

```http
POST /api/auth/login
```

Request Body:

```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

---

## Task APIs

### Get All Tasks

```http
GET /api/tasks
```

Requires JWT Token.

---

### Get Single Task

```http
GET /api/tasks/:id
```

Requires JWT Token.

---

### Create Task

```http
POST /api/tasks
```

Request Body:

```json
{
  "title": "Complete Project",
  "description": "Finish MERN project",
  "priority": "high",
  "dueDate": "2026-07-15"
}
```

Requires JWT Token.

---

### Update Task

```http
PUT /api/tasks/:id
```

Requires JWT Token.

---

### Delete Task

```http
DELETE /api/tasks/:id
```

Requires JWT Token.

---

### Delete Completed Tasks

```http
DELETE /api/tasks/completed/all
```

Requires JWT Token.

---

# Major Project Objectives Achieved

* MERN Stack Development
* JWT Authentication
* REST API Development
* CRUD Operations
* Protected Routes
* MongoDB Integration
* Search Functionality
* Filtering Functionality
* Sorting Functionality
* Dashboard Analytics
* Responsive User Interface

---

# Future Enhancements

* Task Categories
* Dark Mode
* Task Reminders
* Email Notifications
* Calendar Integration
* User Profile Management

---

# Author

Task Manager MERN

Major Project developed using MongoDB, Express.js, React.js, and Node.js.

# 📋 Task Manager MERN Application

A full-stack Task Management Application built using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). The application helps users manage daily tasks efficiently with authentication, task tracking, filtering, searching, sorting, and dashboard analytics.

## 🚀 Live Demo

### Frontend

https://task-manager-mern-liard-alpha.vercel.app

### Backend API

https://taskmanager-mern-l1fn.onrender.com

---

## 📌 Features

### User Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Secure Password Storage

### Task Management

* Create Tasks
* View Tasks
* Update Tasks
* Delete Tasks
* Mark Tasks as Completed
* Mark Tasks as Pending

### Task Organization

* Search Tasks
* Filter Tasks

  * All Tasks
  * Pending Tasks
  * Completed Tasks
* Sort Tasks

  * Newest First
  * Oldest First

### Additional Features

* Task Priority Levels

  * Low
  * Medium
  * High
* Due Date Management
* Dashboard Statistics
* Overdue Task Tracking
* Delete All Completed Tasks
* Responsive User Interface

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* CSS

### Backend

* Node.js
* Express.js
* JWT Authentication
* bcryptjs

### Database

* MongoDB Atlas
* Mongoose

### Deployment

* Frontend: Vercel
* Backend: Render

---

## 📂 Project Structure

TaskManager-MERN/

├── frontend/

│ ├── src/

│ ├── public/

│ └── package.json

│

├── backend/

│ ├── controllers/

│ ├── models/

│ ├── routes/

│ ├── middleware/

│ ├── config/

│ └── server.js

│

└── README.md

---

## ⚙️ Installation & Setup

### Clone Repository

```bash
git clone https://github.com/Coder-Iti/TaskManager-MERN.git
```

### Backend Setup

```bash
cd backend
npm install
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## Environment Variables

Create a .env file inside backend folder:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## API Endpoints

### Authentication

POST /api/auth/register

POST /api/auth/login

### Tasks

GET /api/tasks

POST /api/tasks

PUT /api/tasks/:id

DELETE /api/tasks/:id

---

## Dashboard Statistics

* Total Tasks
* Completed Tasks
* Pending Tasks
* Overdue Tasks

---

## Learning Outcomes

This project helped in understanding:

* MERN Stack Development
* REST API Development
* JWT Authentication
* MongoDB Atlas Integration
* React State Management
* Frontend and Backend Deployment
* Full Stack Project Structure

---

## Author

**Itidarshini**

Major Project Submission

MERN Stack Task Manager Application

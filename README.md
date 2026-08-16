# 📚 NoteNest — Student Notes Management System

A full-stack web application designed to help students create, view, edit, and delete their study notes in one simple and organized platform.

## 🌐 Live Application

**Live Demo:** https://student-notes-management-system-3.onrender.com/

## 📌 About the Project

NoteNest is a Student Notes Management System built as a full-stack web application.

The project provides a simple interface for managing study notes digitally. Users can create new notes, view existing notes, update them, and delete notes when they are no longer needed.

The application uses a React-based frontend, a Node.js/Express backend, and MongoDB for persistent data storage.

> **Note:** Authentication and user accounts are not currently implemented.

## ✨ Features

* 📝 Create new notes
* 📖 View notes
* ✏️ Edit existing notes
* 🗑️ Delete notes
* 💾 Persistent note storage using MongoDB
* 🖥️ User-friendly web interface
* 🔄 Frontend-backend communication through REST APIs
* 🚀 Production deployment

## 🛠️ Technologies Used

### Frontend

* React.js
* Vite
* JavaScript
* HTML
* CSS

### Backend

* Node.js
* Express.js
* REST API

### Database

* MongoDB

### Development & Deployment

* Git
* GitHub
* Render

## 🏗️ Project Architecture

```text
Student
   │
   ▼
React.js + Vite Frontend
   │
   │ REST API
   ▼
Node.js + Express.js Backend
   │
   ▼
MongoDB Database
```

The frontend communicates with the Express.js backend through REST API endpoints. The backend processes requests and stores or retrieves note data from MongoDB.

## 📂 Project Structure

```text
student_notes-management_system/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   └── server.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   └── latest/
│       ├── src/
│       ├── public/
│       ├── package.json
│       └── vite.config.js
│
├── .gitignore
└── README.md
```

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* MongoDB or a MongoDB Atlas database
* Git

### 1. Clone the Repository

```bash
git clone https://github.com/SubhanitaBhowmik/student_notes-management_system.git
cd student_notes-management_system
```

### 2. Install Backend Dependencies

Open a terminal and run:

```bash
cd backend
npm install
```

### 3. Configure Environment Variables

Create a `.env` file inside the `backend` directory.

Add the environment variables required by the backend, including the MongoDB connection string and server configuration.

**Do not commit the `.env` file or expose database credentials publicly.**

### 4. Start the Backend

From the `backend` directory, run:

```bash
npm start
```

The backend runs on the configured port, typically:

```text
http://localhost:5001
```

### 5. Install Frontend Dependencies

Open another terminal and navigate to the frontend:

```bash
cd frontend/latest
npm install
```

### 6. Start the Frontend

From the `frontend/latest` directory, run:

```bash
npm run dev
```

Vite will provide a local development URL, typically:

```text
http://localhost:5173
```

Open the URL provided by Vite in your browser.

## 🔌 API

The backend provides REST API endpoints for managing notes.

The main API resource is:

```text
/api/notes
```

The API handles operations such as:

* Creating notes
* Retrieving notes
* Updating notes
* Deleting notes

## 🗄️ Database

MongoDB is used as the database for storing note information.

The backend connects to MongoDB using the connection configuration provided through environment variables.

## 🚀 Deployment

The project is maintained using Git and GitHub and has been successfully deployed using Render.

### Deployment Workflow

```text
Local Development
       ↓
Git
       ↓
GitHub
       ↓
Production Build
       ↓
Render
       ↓
Live Application
```

The application is available at:

**https://student-notes-management-system-3.onrender.com/**

## 🔐 Security

Sensitive configuration values, such as database credentials, are stored using environment variables rather than being written directly into the source code.

The `.env` file should never be committed to GitHub.

> **Note:** Authentication and user accounts are not currently implemented.

## 🔮 Future Improvements

Possible future enhancements include:

* 🔐 User authentication and authorization
* 👤 Personal user accounts
* 🔒 User-specific and private notes
* 🔎 Search and filtering
* 🏷️ Categories and tags
* ✍️ Rich-text note editing
* 📎 File and image attachments
* 🔗 Note sharing
* 📱 Improved mobile/PWA support

These are planned or possible future improvements and are **not currently implemented**.

## 🎓 Project Purpose

This project demonstrates the development of a complete full-stack web application using modern frontend, backend, database, version-control, and deployment technologies.

The project provides practical experience with:

* React.js
* Vite
* REST APIs
* Node.js
* Express.js
* MongoDB
* Git
* GitHub
* Production deployment with Render

## 👤 Author

**Subhanita Bhowmik**

**Student Notes Management System — NoteNest**

## 📄 License

This project is developed for educational purposes.

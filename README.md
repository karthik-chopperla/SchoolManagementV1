# School Management System

A web-based school management application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides role-based portals for administrators, teachers, and students to manage classes, attendance, fee records, and academic evaluations.

---

## Features

### Admin
- **User Management**: Add and manage student and teacher profiles.
- **Academic Setup**: Create and configure classes, sections, and subjects.
- **Fee Management**: Record fee payments and track revenue totals.

### Teacher
- **Attendance**: Record and maintain class attendance with present/absent logs.
- **Grading & Marks**: Enter and update student scores and subject evaluations.
- **Student Performance**: Monitor student progress across subjects.

### Student
- **Dashboard**: View personal marks, attendance history, and teacher feedback.
- **Fee History**: Track individual fee payments and payment records.

---

## Tech Stack

- **Frontend**: React.js, Material-UI (MUI), Redux
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Deployment**: Vercel (Frontend), Render (Backend), MongoDB Atlas (Database)

---

## Project Structure

```
SchoolManagementV1/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── index.js
├── frontend/
│   ├── public/
│   └── src/
├── .gitignore
└── README.md
```

---

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local instance or MongoDB Atlas)

### 1. Clone the Repository
```bash
git clone https://github.com/karthik-chopperla/SchoolManagementV1.git
cd SchoolManagementV1
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:
```env
MONGO_URL=mongodb://127.0.0.1:27017/smsproject
SECRET_KEY=your_secret_key_here
PORT=5000
```

Start the backend server:
```bash
npm start
```
The backend API runs on `http://localhost:5000`.

### 3. Frontend Setup
Open a separate terminal:
```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend/` directory:
```env
REACT_APP_BASE_URL=http://localhost:5000
```

Start the frontend development server:
```bash
npm start
```
The application runs on `http://localhost:3000`.

---

## Deployment

- **Backend**: Deploy `backend/` to Render. Configure `MONGO_URL` and `SECRET_KEY` in environment variables.
- **Frontend**: Deploy `frontend/` to Vercel or Netlify. Set `REACT_APP_BASE_URL` to your live backend URL.

---

## 📧 Contact
Developer: Karthik

KKPharmacy — Built by Karthik

# 🎬 Movie Ticket Booking Backend

A robust and scalable RESTful API for a movie ticket booking system, built with **Node.js**, **Express**, and **Sequelize ORM**.

---

## 🚀 Tech Stack

| Technology    | Purpose                         |
| ------------- | ------------------------------- |
| Node.js       | Runtime environment             |
| Express.js    | Web framework                   |
| Sequelize ORM | Database abstraction layer      |
| MySQL         | Relational database             |
| JWT           | Authentication & authorization  |
| Multer        | File/image upload handling      |
| CORS          | Cross-origin resource sharing   |
| dotenv        | Environment variable management |

---

## ✨ Features

- User Authentication & Authorization
- Movie Management
- Theater & Screen Management
- Show Scheduling
- Ticket Booking System
- Ratings & Reviews
- Role-Based Access Control
- File Upload Support

---

## 📁 Project Structure

```
movie-ticket-booking-backend/
├── app.js                    # Application entry point
├── .env                      # Environment variables
├── .sequelizerc              # Sequelize configuration paths
├── uploads/                  # Uploaded media files
└── backend/
    └── src/
        ├── routes/
        ├── controller/
        ├── service/
        ├── dao/
        ├── middleware/
        ├── models/
        └── migrations/
```

---

## 🔐 Roles & Access

The system supports **three levels** of access control:

- **User** — Browse movies, book tickets, manage bookings
- **Admin** — Manage movies, showtimes, and theatres
- **Superadmin** — Full system control, manage admins and platform settings

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v18+
- MySQL database

### Installation

```bash
# Clone the repository
git clone https://github.com/vrutik-sidapara/movie-ticket-booking-backend.git

# Navigate to project directory
cd movie-ticket-booking-backend

# Install dependencies
npm install
```

### Environment Setup

Create a `.env` file in the root directory:

```env
PORT=5000
DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
JWT_SECRET=your_jwt_secret
```

### Run the Server

```bash
# Development mode
npm run dev

# Production mode
npm start
```

Server will start at `http://localhost:5000`

Base API URL `http://localhost:5000/api`

---

## 📡 API Endpoints

### Auth Routes — `/api/auth`

| Method | Endpoint    | Description                 |
| ------ | ----------- | --------------------------- |
| POST   | `/register` | Register a new user         |
| POST   | `/login`    | Login and receive JWT token |

### User Routes — `/api/user`

| Method | Endpoint    | Description      |
| ------ | ----------- | ---------------- |
| GET    | `/movies`   | Get all movies   |
| POST   | `/book`     | Book a ticket    |
| GET    | `/bookings` | View my bookings |

### Admin Routes — `/api/admin`

| Method | Endpoint     | Description          |
| ------ | ------------ | -------------------- |
| POST   | `/movie`     | Add a new movie      |
| PUT    | `/movie/:id` | Update movie details |
| DELETE | `/movie/:id` | Remove a movie       |

### Superadmin Routes — `/api/superadmin`

| Method | Endpoint     | Description        |
| ------ | ------------ | ------------------ |
| GET    | `/admins`    | List all admins    |
| POST   | `/admin`     | Create a new admin |
| DELETE | `/admin/:id` | Remove an admin    |

> **Note:** All protected routes require a valid JWT token in the `Authorization: Bearer <token>` header.

---

## 🛡️ Security

- JWT-based stateless authentication
- Role-based access control (RBAC)
- Environment variables for all sensitive credentials
- CORS configured for controlled cross-origin access

---

## 📦 Key Dependencies

```json
{
  "express": "Web framework",
  "sequelize": "ORM for MySQL",
  "jsonwebtoken": "JWT authentication",
  "bcryptjs": "Password hashing",
  "multer": "File uploads",
  "cors": "Cross-origin requests",
  "dotenv": "Environment config"
}
```

---

## 👨‍💻 Author

Vrutik Sidapara

---

GitHub:
`https://github.com/vrutik-sidapara`

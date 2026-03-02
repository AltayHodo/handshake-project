# Handshake Student Check-in App

A full-stack web application for managing student check-ins, built for the Handshake SWE internship project.

## Tech Stack

### Backend
- **Node.js** with **Express** - Web server
- **Prisma ORM** - Database management
- **SQLite** - Database
- **Jest + Supertest** - Testing

### Frontend
- **React** - UI framework
- **Tailwind CSS** - Styling
- **Jest + React Testing Library** - Testing

#### 2. Backend Setup
```bash
cd backend

# Install dependencies
npm install

# Run database migration
npx prisma migrate dev --name init

# Seed the database
npm run seed

# Start the server
npm start
```

The backend server will run on `http://localhost:3001`

#### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
```

The frontend will run on `http://localhost:3000` and automatically open in your browser.

---


# Property Management System

A full-stack property management application built with React, Node.js, Express, and MongoDB.

## Features

- User authentication with role-based access (Admin, Owner, Buyer)
- Property listing and management
- Real-time messaging with Socket.io
- Document and image uploads
- Property approval workflow
- Booking system
- Contact management

## Tech Stack

### Frontend

- React 19
- React Router
- Axios
- Socket.io Client
- Tailwind CSS
- Vite

### Backend

- Node.js
- Express 5
- MongoDB with Mongoose
- JWT Authentication
- Socket.io
- Multer (file uploads)
- bcryptjs

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the server directory:

```bash
cd server
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration:

- `PORT`: Server port (default: 5000)
- `MONGO_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT tokens
- `FRONTEND_URL`: Frontend URL for CORS (default: http://localhost:5173)

5. Start the server:

```bash
npm start
```

### Frontend Setup

1. Navigate to the client directory:

```bash
cd client
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

4. Update the `.env` file:

- `VITE_BACKEND_URL`: Backend API URL (default: http://localhost:5000/api)

5. Start the development server:

```bash
npm run dev
```

## Project Structure

```
property_management_system/
├── client/              # React frontend
│   ├── src/
│   │   ├── Api/        # API calls
│   │   ├── components/ # React components
│   │   ├── pages/      # Page components
│   │   ├── routes/     # Routing configuration
│   │   └── utils/      # Utility functions
│   └── ...
├── server/             # Express backend
│   ├── config/         # Database configuration
│   ├── controllers/    # Route controllers
│   ├── middleware/     # Custom middleware
│   ├── models/         # Mongoose models
│   ├── routes/         # API routes
│   ├── socket/         # Socket.io configuration
│   └── utils/          # Utility functions
└── ...
```

## API Endpoints

### Authentication

- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login

### Properties

- `GET /api/properties` - Get all approved properties
- `POST /api/properties` - Create a new property (Owner only)
- `PUT /api/properties/:id` - Update property (Owner only)
- `DELETE /api/properties/:id` - Delete property (Owner only)

### Admin

- `GET /api/admin/properties/pending` - Get pending properties
- `PUT /api/admin/properties/:id/approve` - Approve property
- `PUT /api/admin/properties/:id/reject` - Reject property

### Messaging

- `GET /api/conversations` - Get user conversations
- `POST /api/conversations` - Create a new conversation
- `GET /api/messages/:conversationId` - Get messages for a conversation

### Other Endpoints

- Documents, Bookings, Property Images, Saved Properties, Contact

## User Roles

1. **Admin**: Manage properties, approve/reject listings, view all data
2. **Owner**: Create and manage own properties, communicate with buyers
3. **Buyer**: Browse properties, save favorites, contact owners

## Development

- Backend runs on `http://localhost:5000`
- Frontend runs on `http://localhost:5173`
- Hot reload is enabled for both frontend and backend

## Security Features

- JWT-based authentication
- Password hashing with bcryptjs
- Role-based access control
- CORS protection
- Input validation
- Protected routes

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

ISC

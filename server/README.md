## Server (Backend) README

### Overview

The backend of this project serves as the API provider for the client. It manages user data, messages, and application state through a RESTful architecture.

### Features

- User authentication and management.
- RESTful API for managing messages and users.
- Real-time communication support (if applicable).
- Data validation and error handling.

### Technologies Used

- **Node.js**: Backend runtime.
- **Express**: Lightweight framework for API development.
- **MongoDB**: NoSQL database for storing messages and user data.
- **Mongoose**: For database modeling and interaction.
- **cloudinary**: For stroing images and media related.

### Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Obadea/obadeaTrack.git
   cd obadeaTrack/server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file with the following environment variables:

   ```env
   MONGODB_URL = mongodb+srv://obadeagbenga:obadeatrack1@cluster0.o36h516.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   CLOUDINARY_CLOUD_NAME = dzonkzh00
   CLOUDINARY_API_KEY = 575769596632566
   CLOUDINARY_API_SECRET = 0zmf89O4Yautt1_cWHBfdwqRjOw
   ```

4. Start the server:

   ```bash
   npm run start
   ```

5. The server will be available at `http://localhost:8080` by default.
   For the deployed version the server is avaible at `https://obadeatrack.onrender.com`

   E.g**For Users**: https://obadeatrack.onrender.com/api/v1/users

### Folder Structure

```
server/
├── controllers/       # API logic and controllers
├── models/            # Mongoose models
├── routes/            # Route definitions
├── config/            # Configuration files (e.g., database setup)
├── index.js             # Application entry point
├── package.json       # Project metadata and dependencies
└── README.md          # Server-specific README
```

### API Endpoints

#### Authentication

- **POST /api/v1/users**: Register a new user.
- **GET /api/v1/properties**:Get all properties.
- **GET /api/v1/savedProperties**:Get saved properties.

---

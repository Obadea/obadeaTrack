# Full Project README (Client and Server)

## Project Overview

This project is a full-stack application that provides a messaging platform with real-time features and a user-friendly interface. The system is divided into two main components:

1. **Client (Frontend)**: Built using React and Material-UI, it provides users with a responsive and interactive UI for messaging and managing conversations.
2. **Server (Backend)**: Powered by Node.js and Express, it handles data storage, user authentication, and messaging APIs.

---

## Client (Frontend) README

### Overview

The client-side of this application is a React-based SPA (Single Page Application) that ensures a seamless user experience. It is styled using Material-UI components, with responsiveness built-in to cater to different device sizes.

### Features

- Responsive UI built with Material-UI.
- Message search and filtering capabilities.
- Real-time UI updates based on data from the server.
- User status indicators (e.g., online, offline).

### Technologies Used

- **React**: Framework for building the UI.
- **Material-UI**: For pre-designed, customizable components.
- **Axios**: For making HTTP requests to the server.
- **React Router**: For navigation and route handling.

### Installation and Setup

1. Clone the repository:

   ```bash
   git clonehttps://github.com/Obadea/obadeaTrack.git
   cd obadeaTrack/client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. The client will be available at `http://localhost:3000` by default.

### Folder Structure

```
client/
├── src/
│   ├── assets/    # All assets used in the project
│   ├── components/    # Reusable React components
│   ├── pages/         # Application pages
│   ├── constants/     # Static data (e.g., messageData)
│   ├── styles/        # CSS and styling files
│   ├── interface/     # component interface
│   ├── utils/         # Helper functions
│   └── App.tsx        # Main application file
├── public/            # Static assets
├── package.json       # Project metadata and dependencies
└── README.md          # Client-specific README
```

---

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

`

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

   ````bash
   npm run start
   ```un dev
   ````

5. The server will be available at `http://localhost:8080` by default.

For the deployed version the server is avaible at `https://obadeatrack.onrender.com`

E.g**For Users**: https://obadeatrack.onrender.com/api/v1/users

### Folder Structure

```
server/
├── controllers/       # API logic and controllers
├── models/            # Mongoose models
├── routes/            # Route definitions
├── middlewares/       # Middleware functions
├── config/            # Configuration files (e.g., database setup)
├── utils/             # Utility functions
├── app.js             # Application entry point
├── package.json       # Project metadata and dependencies
└── README.md          # Server-specific README
```

### API Endpoints

#### Authentication

- **POST /api/v1/users**: Register a new user.
- **GET /api/v1/properties**:Get all properties.
- **GET /api/v1/savedProperties**:Get saved properties.

---

## Usage Notes

- Ensure that the client and server are running simultaneously.
- Update the client's API URL in `.env` or Axios configuration to match the server's address.

For detailed instructions on specific features, Please reach out to me.

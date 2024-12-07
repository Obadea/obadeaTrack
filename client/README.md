# ObadeaTrack - A Full Stack MERN Dashboard App With CRUD, Auth, and Charts Using Refine - Client Application

![app_preview]("../../public/obadeaTrackPreview.png")

### Overview

The client-side of this application is a React-based SPA (Single Page Application) that ensures a seamless user experience. It is styled using Material-UI components, with responsiveness built-in to cater to different device sizes.

With modern material design, a fully functional dashboard, a property management page, and a users page - both connected to our database and a profile page that connects the two!

### Features

- Responsive UI built with Material-UI.
- Properties search and filtering capabilities.
- Real-time UI updates based on data from the server.
- User status indicators (e.g., online, offline).

### Technologies Used

- **React**: Framework for building the UI.
- **Material-UI**: For pre-designed, customizable components.
- **Axios**: For making HTTP requests to the server.
- **React Router**: For navigation and route handling.
- **refine**: Open-source Retool for Enterprise. Build React-based internal tools, admin panels, dashboards & B2B apps with unmatched flexibility

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

   3. Create a `.env` file with the following environment variables:

   ```env
   GOOGLE_CLIENT_ID= "363004531884-6im7otarh0mhgreli5br5ol2v8to0b70.apps.googleusercontent.com"
    GOOGLE_MAP_API_KEY = AIzaSyAEEKI6JrTzOA34kfN_j2WbG2IAcBE4dns
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

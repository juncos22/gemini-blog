# Gemini Blog Project

This project consists of a backend API and a frontend application.

## Backend

The backend is built with Node.js, Express, and TypeScript. It provides the API endpoints for the blog application.

### Technologies Used

- Node.js
- Express.js
- TypeScript
- bcrypt (for password hashing)
- cors (for Cross-Origin Resource Sharing)
- dotenv (for environment variables)
- jsonwebtoken (for authentication)
- swagger-jsdoc & swagger-ui-express (for API documentation)

### Setup

1.  Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Build the TypeScript code:
    ```bash
    npm run build
    ```
4.  Create a `.env` file in the `backend` directory with your environment variables (e.g., `JWT_SECRET`, `PORT`).

### Running the Backend

-   **Development Mode (with hot-reloading):**
    ```bash
    npm run dev
    ```
-   **Production Mode:**
    ```bash
    npm start
    ```

### API Documentation

The API documentation (Swagger UI) will be available at `/api-docs` when the backend server is running.

## Frontend

The frontend is a Vue.js application built with Vite.

### Technologies Used

- Vue.js
- Vite
- Pinia (for state management)
- Vue Router (for navigation)
- Axios (for HTTP requests)

### Setup

1.  Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

### Running the Frontend

-   **Development Mode (with hot-reloading):**
    ```bash
    npm run dev
    ```
-   **Build for Production:**
    ```bash
    npm run build
    ```
-   **Preview Production Build:**
    ```bash
    npm run preview
    ```

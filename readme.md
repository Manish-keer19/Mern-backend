# MERN Stack Backend

This repository contains the backend implementation for a MERN stack application. The backend is built using Node.js, Express.js, and MongoDB. It provides APIs for the frontend application built with React.

## Table of Contents
- [Setup](#setup)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Authentication](#authentication)
- [Testing](#testing)
- [Notes](#notes)
- [License](#license)


## Setup

To set up the backend environment, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/username/repository.git

## API Endpoints

### User Endpoints

- **POST /api/users/register**
  - Registers a new user.
  - **Request Body**:
    ```json
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "password": "password123"
    }
    ```
  - **Response**:
    ```json
    {
      "success": true,
      "message": "User registered successfully."
    }
    ```

- **POST /api/users/login**
  - Authenticates a user and returns a JWT token.
  - **Request Body**:
    ```json
    {
      "email": "john.doe@example.com",
      "password": "password123"
    }
    ```
  - **Response**:
    ```json
    {
      "success": true,
      "token": "jwt_token"
    }
    ```

### Product Endpoints

- **GET /api/products**
  - Retrieves a list of products.
  - **Response**:
    ```json
    [
      {
        "id": "1",
        "name": "Product A",
        "price": 29.99
      },
      ...
    ]
    ```

- **POST /api/products**
  - Adds a new product.
  - **Request Body**:
    ```json
    {
      "name": "New Product",
      "price": 19.99
    }
    ```
  - **Response**:
    ```json
    {
      "success": true,
      "message": "Product added successfully."
    }
    ```

## Database Schema

### User Schema

- **name**: String
- **email**: String (unique)
- **password**: String (hashed)

### Product Schema

- **name**: String
- **price**: Number


## Authentication

The backend uses JWT (JSON Web Token) for authentication. 

- **Login**: Users receive a JWT token upon successful login.
- **Protected Routes**: Routes are protected using the `authMiddleware` to ensure the user is authenticated.


## Testing

This project uses Jest for testing.

- **Run tests**:
  ```bash
  npm test


## Notes

- **Learning Points**: Working with JWT for authentication was challenging but insightful.
- **Issues**: Encountered issues with CORS; resolved by configuring `cors` middleware.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.





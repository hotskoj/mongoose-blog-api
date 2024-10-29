# Blog API with Mongoose

Welcome to the Blog API! This project provides a RESTful API for managing users and blogs using Mongoose and MongoDB. You can create, read, update, and delete users and blog posts.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)

## Technologies Used

- Node.js
- Express.js
- Mongoose
- MongoDB

## Installation

Follow these steps to get your local development environment set up:

1. Clone the repository:
   ```bash
   git clone https://github.com/hotskoj/blog-api.git
   ```

2. Navigate to the project directory:
   ```bash
   cd mongoose-blog-api
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

5. Start the server:
   ```bash
   npm start
   ```

Your API should now be running on `http://localhost:3000`.

## API Endpoints

### Users

- **POST** `/api/users` - Create a new user
- **GET** `/api/users` - Get all users
- **GET** `/api/users/:id` - Get a user by ID
- **PUT** `/api/users/:id` - Update a user by ID
- **DELETE** `/api/users/:id` - Delete a user by ID

### Blogs

- **POST** `/api/blogs` - Create a new blog post
- **GET** `/api/blogs` - Get all blog posts
- **GET** `/api/blogs/:id` - Get a blog post by ID
- **PUT** `/api/blogs/:id` - Update a blog post by ID
- **DELETE** `/api/blogs/:id` - Delete a blog post by ID

## Usage

You can use tools like Postman or cURL to interact with the API. Below is an example of how to create a new user using Postman:

1. Set the request type to `POST`.
2. Enter the URL: `http://localhost:3000/api/users`.
3. In the body, select `raw` and choose `JSON`, then enter:
   ```json
   {
     "firstName": "example",
     "lastName": "last",
     "email": "user@example.com",
     "social": {
       "facebook": "exampleFB",
       "twitter": "exampleTW",
       "linkedIn": "exampleLI"
     }
   }
   ```

4. Send the request to create a new user.


Thank you for checking out the Blog API project! Feel free to reach out with any questions or feedback.

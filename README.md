# React Boilerplate with Bcrypt Authentication

This boilerplate provides a simple and secure foundation for building a full-stack React application with user authentication using Bcrypt. The project includes a back-end server using Express and a front-end application built with React. The boilerplate includes user login and signup features, as well as middleware to protect routes and user data.

## Features

- React front-end application
- Express back-end server
- Sequelize ORM with PostgreSQL database
- User authentication using Bcrypt
- JSON Web Tokens (JWT) for user session management
- Admin middleware to protect admin-specific routes
- User middleware to protect user-specific data
- Environment variables for sensitive information

## Get Started

Clone the repository to your local machine:
`git clone https://github.com/your-username/bcrypt-boilerplate.git`
`cd bcrypt-boilerplate`

Create a PostgreSQL database:
`createdb bcrypt-boilerplate`

Create a .env file in the root directory and add the following variables:
`JWT_SECRET=your_jwt_secret`
`ADMIN_PASSPHRASE=your_admin_passphrase`
Replace your_jwt_secret and your_admin_passphrase with your own secret values.

Install the required dependencies:
`npm install`
Seed the database:
`npm run seed`
Start the development server:
`npm run start-dev`

The application will now be running on http://localhost:3000.

## Customization

To adapt this boilerplate for your own project, you can start by customizing the front-end components and adding new features as needed. You may also update the back-end routes and models to handle additional data or requirements specific to your application.

Happy coding!

# HRNet Application

This project is a full-stack application for HRNet, a human resources management system. It is divided into two main parts: the backend and the frontend.

Using backend is not mandatory, you can use mocked data instead by setting the `backend` const in the App.js component to `false`:
App.js line 11:

    ```javascript
    const backend = false;
    ```

## Table of Contents

## Backend

You must have a MySQL database running on your machine with a database named `hrnet` to use the backend.
Set the login/password to connect to database in the file src/db/sequelize.js:
sequelize.js line 5:

    ```javascript
    const sequelize = new Sequelize("HRnet", "root", "", {
    ```

The table `users` will be created automatically if it does not exist and filled with the mock data in the file src/datas/users.json.

The backend of the application is located in the `Back/` directory. It is built with Node.js and Express.js, and it provides the API endpoints that the frontend uses to interact with the database.

The main entry point of the backend is `app.js`. This file sets up the Express application, connects to the database, and includes the routes for the API.

The `src/` directory contains the main logic of the backend. It is divided into three subdirectories:

- `db/`: Contains the configuration for the database connection.
- `models/`: Contains the models for the database. Each model represents a table in the database.
- `routes/`: Contains the routes for the API. Each route corresponds to an endpoint of the API.

## Frontend

The frontend of the application is located in the `Front/` directory. It is built with React and provides a user interface for interacting with the HRNet system.

The `src/` directory contains the main logic of the frontend. It is divided into several subdirectories:

- `assets/`: Contains static files such as images.
- `components/`: Contains the React components that make up the user interface.
- `css/`: Contains the CSS files for styling the user interface.
- `datas/`: Contains data files.

Some of the key components include:

- `EmployeeList`: Displays a list of employees.
- `HandleSaveEmployee`: Handles the logic for adding a new employee to the system.

## HRNet Application

The HRNet application is a human resources management system. It allows users to view a list of employees, add new employees, and perform other HR-related tasks.

## Setup

To set up the project, you need to install the dependencies for both the backend and the frontend. This can be done by running `npm install` in both the `Back/` and `Front/` directories.

Once the dependencies are installed, you can start the backend by running `node app.js` in the `Back/` directory, and start the frontend by running `npm start` in the `Front/` directory.

## Testing

The project includes a set of unit tests. These can be run by executing `npm test` in the `Front/` directory.

## Lighthouse Reports

The `LightHouse/` directory contains Lighthouse reports for the application. These reports provide performance metrics and recommendations for improving the performance of the application.

## Contributing

Contributions to the project are welcome. Please follow the standard GitHub workflow for contributing to open source projects.

## License

The project is licensed under the MIT license.

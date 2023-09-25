# Employee Tracker

A command-line application that allows you to manage a company's employee database. This application is built using Node.js, Inquirer, and MySQL.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Database Schema](#database-schema)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features

- View all departments, roles, and employees
- Add new departments, roles, and employees
- Update an employee's role
- Search and filter employee data
- User-friendly command-line interface

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/ijordan4/employee-tracker.git
   
Navigate to the project directory:

bash

cd employee-tracker
Install the required dependencies:


npm i
Set up your MySQL database by executing the SQL schema and seeding scripts (modify the database connection details in .env if necessary):

npm start

To start the application, Follow the on-screen prompts to perform various actions, such as viewing employees, adding departments, and updating roles.

## Database Schema
The application uses the following database schema:

department table with columns: id, department_name
role table with columns: id, title, salary, department_id
employee table with columns: id, first_name, last_name, role_id, manager_id

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

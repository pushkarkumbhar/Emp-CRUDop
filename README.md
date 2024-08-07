
# Employee Management System


This project is an Angular-based web application that performs CRUD (Create, Read, Update, Delete) operations on employee data. The primary goal of this application is to manage employee records efficiently with a user-friendly interface.

Features

Create: Add new employee records.

Read: View a list of all employees and      detailed information about each employee.

Update: Modify existing employee records.

Delete: Remove employee records from the system.

Prerequisites

Before you begin, ensure you have met the following requirements:

Node.js (version 12.x or later)

Angular CLI (version 11.x or later)

A web browser (e.g., Chrome, Firefox, Edge)

Running the Application
     
     npm run dev
     
Open your browser and navigate to http://localhost:4200/.

Project Structure
src/app: Contains the main application code.

components: Angular components for the application (add,edit,dashboard).

services: Services for handling data operations (htttp-client).

pipe for searching (search pipe)

Usage

Adding a New Employee

Click on the "Add Employee" button.
Fill in the employee details in the form.
Click "Submit" to save the new employee record.

Viewing Employees
The home page displays a list of all employees.

Editing an Employee
Click on the "Update icon" button next to the employee you want to modify.
Update the employee's details in the form.
Click "Update" to apply the changes.

Deleting an Employee
Click on the "Delete icon" button next to the employee you want to remove.
Confirm the deletion in the popup dialog.

## API Reference

#### Get all items

```http
  GET http://localhost:3000/data
```

#### Get item

```http
  GET http://localhost:3000/data/id
```
#### Adding data
```http
  POST http://localhost:3000/data
```

#### Updating data
```http
  PUT http://localhost:3000/data/id
```
#### Deleting
```http
  DELETE http://localhost:3000/data/id
```


 Contact

   Pushkar Kumbhar pushkarr09@gmail.com



#   E m p - C R U D o p  
 
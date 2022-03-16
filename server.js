// inport express
const express = require("express");
// import mysql2
const mysql = require("mysql2");
// import inquirer
const inquirer = require("inquirer");
// import console.table
const consoleTable = require("console.table");

// creates connection to sql database
const db = mysql.createConnection(
  {
    host: "localhost",
    // my MySQL username,
    user: "root",
    // my MySQL password
    password: "",
    database: "employees_db",
  },
  console.log("Connected to the employees_db database.")
);

// connects to server and sql database
db.connect(function (err) {
  if (err) throw err;
  options();
});

// prompts user some questions with list of options
function options() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "Please select a action you want to take from below options",
      choices: [
        "View all employees",
        "View all departments",
        "View all roles",
        "Add an employee",
        "Add a department",
        "Add a role",
        "Update employee role",
        "Delete an employee",
        "EXIT",
      ],
    })
    .then(function (answer) {
      switch (answer.action) {
        case "View all employees":
          viewEmployees();
          break;
        case "View all departments":
          viewDepartments();
          break;
        case "View all roles":
          viewRoles();
          break;
        case "Add a department":
          addDepartment();
          break;
        case "Add an employee":
          addEmployee();
          break;
      }
    });
}

// print out the employee table funtion
function viewEmployees() {
  // var query = "SELECT * FROM employee";
  var query = `SELECT e.id AS Employee_id, e.first_name, e.last_name, r.title, d.name AS department, r.salary , e.manager_id
  FROM employee e
  LEFT JOIN roles r
	ON e.role_id = r.id
  LEFT JOIN department d
  ON d.id = r.department_id`;

  db.query(query, function (err, res) {
    if (err) throw err;
    console.table(
      `the database now has ${res.length} employees ! Please kindly see below table`,
      res
    );
    options();
  });
}

// print out the department table funtion
function viewDepartments() {
  var query = "SELECT * FROM department";
  db.query(query, function (err, res) {
    if (err) throw err;
    console.table(
      `the database now has ${res.length} department ! Please kindly see below table`,
      res
    );
    options();
  });
}

// print out the roles table funtion
function viewRoles() {
  var query = `SELECT r.id AS role_id, r.title, r.salary , d.name AS department
FROM roles r
LEFT JOIN department d
ON d.id = r.department_id`;

  db.query(query, function (err, res) {
    if (err) throw err;
    console.table(
      `the database now has ${res.length} roles ! Please kindly see below table`,
      res
    );
    options();
  });
}

// adding a new department to the database function
function addDepartment() {
  inquirer
    .prompt([
      {
        name: "newDepartment",
        type: "input",
        message:
          "please input the name of the department you want to create and add?",
      },
    ])
    .then(function (answer) {
      // insert the new department to table
      db.query("INSERT INTO department SET ?", {
        name: answer.newDepartment,
      });
      // console.log the table
      db.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        console.table("New department is now added! All Departments now:", res);
        options();
      });
    });
}

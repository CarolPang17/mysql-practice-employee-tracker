// inport express
const express = require('express');
// import mysql2
const mysql = require('mysql2')
// import inquirer
const inquirer = require('inquirer');
// import console.table
const consoleTable = require('console.table')


// creates connection to sql database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // my MySQL username,
    user: 'root',
    // my MySQL password
    password: '',
    database: 'employees_db'
  },
  console.log('Connected to the employees_db database.')
);

// connects to server and sql database
db.connect(function(err){
  if (err) throw err;
  options();
})

// prompts user some questions with list of options
function options() {
  inquirer
      .prompt({
        name: 'action',
        type: 'list',
        message: 'Please select a action you want to take from below options',
        choices: [
          'View all employees',
          'View all departments',
          'View all roles',
          'Add an employee',
          'Add a department',
          'Add a role',
          'Update employee role',
          'Delete an employee',
          'EXIT'
          ]
      }).then(function (answer) {
        switch (answer.action) {
          case "View all employees":
            viewEmployees();
            break;
        }
      })
    };


// print out the employee table funtion
function viewEmployees() {
  var query = 'SELECT * FROM employee';
  db.query(query, function(err, res) {
      if (err) throw err;
      console.table(`the database now has ${res.length} employees ! Please kindly see below table`,res);
      options();
  })
};



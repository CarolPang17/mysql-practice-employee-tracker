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

// connects to sql server and sql database
connection.connect(function(err){
  if (err) throw err;
  options();
})
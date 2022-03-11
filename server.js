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
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: '',
    database: 'employees_db'
  },
  console.log('Connected to the election database.')
);
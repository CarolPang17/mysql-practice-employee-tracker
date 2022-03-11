DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

-- Create the table for department
-- included (id: INT PRIMARY KEY), and (name: VARCHAR(30))
CREATE TABLE department (
    id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

-- Create the table for roles
-- included (id: INT PRIMARY KEY), (title: VARCHAR(30)), (salary: DECIMAL), and (department_id: INT)
CREATE TABLE roles (
    id int NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id)
);


-- Create the table for employees
-- included (id: INT PRIMARY KEY), (first_name: VARCHAR(30)) , (last_name: VARCHAR(30)) , (role_id: INT) , (manager_id: INT)
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NULL,
    PRIMARY KEY (id)
);
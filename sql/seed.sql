USE employees_db;

--adding data to department table
INSERT INTO department (name)
VALUES
("Sales"),
("Engineering"),
('Human Resources'),
("Logistics");

--adding data to roles table
INSERT INTO roles (title, salary, department_id)
VALUES
('Lead Engineer', 190000, 2),
('Software Engineer', 120000, 2),
('Sales Rep', 50000, 1),
('Logistics Manager', 170000, 4),
('HR Staff', 60000, 3),
('Sales Manager', 140000, 1),
('import Staff', 70000, 4);

--adding data to employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Anita', 'Hamilton', 1, 231),
('Rosalie', 'Tran', 2, 987),
('Thelma', 'Ferguson', 3, 567),
('Cornelius', 'Waters', 4, null),
('Al', 'Holland', 5, 263),
('Meredith', 'Ramsey', 6, null),
('Daryl', 'Boone', 7, 448),
('Clara', 'Daniel', 2, 987),
('Kathryn', 'Paul', 3, 567);
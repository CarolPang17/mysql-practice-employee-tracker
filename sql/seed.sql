USE employees_db;

INSERT INTO department (name)
VALUES
("Sales"),
("Engineering"),
('Human Resources'),
("Logistics");


INSERT INTO roles (title, salary, department_id)
VALUES
('Lead Engineer', 190000, 2),
('Software Engineer', 120000, 2),
('Sales Rep', 50000, 1),
('Logistics Manager', 170000, 4),
('HR Staff', 60000, 3),
('Sales Manager', 140000, 1),
('import Staff', 70000, 4);


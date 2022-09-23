INSERT INTO department (name)
VALUES 
    ("Sales"),
    ("Engineering"),
    ("Finance"),
    ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES 
    ("Sales Lead", 100000, 1),
    ("Salesperson", 80000, 1),
    ("Lead Engineer", 150000, 2),
    ("Software Engineer", 120000, 2),
    ("Account Manager", 160000, 3),
    ("Accountant", 125000, 3),
    ("Legal Team Lead", 250000, 4),
    ("Lawyer", 190000, 4);
    

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    ("Jeff", "Winger", 8, NULL),
    ("Dwight", "Schrute", 1, NULL),
    ("Jim", "Halpert", 2, 2),
    ("Tom", "Flam", 3, NULL),
    ("Cutty", "Flam", 4, 4),
    ("Michael", "Scott", 5, NULL),
    ("Oscar", "Martinez", 6, 6),
    ("Annie", "Edison", 8, 1);

    
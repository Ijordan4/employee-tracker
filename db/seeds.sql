-- Insert data into the department table
INSERT INTO department (id, department_name)
VALUES
    (1, 'Elemental'),
    (2, 'Liquid Chromatography'),
    (3, 'Biology'),
    (4, 'Chemistry');


INSERT INTO role (id, title, department, salary)
VALUES
    (1, 'Supervisor', 'Elemental', 50000),
    (2, 'Lab Tech', 'Liquid Chromatography', 40000),
    (3, 'Lab Director', 'Biology', 100000),
    (4, 'CEO', 'Chemistry', 200000);


INSERT INTO employee (id, first_name, last_name, job_title, department, salary, managers, role_id)
VALUES
    (1, 'John', 'Smith', 'Supervisor', 'Elemental', 50000, 'Marcus Brown', 1),
    (2, 'Jane', 'Doe', 'Lab Tech', 'Liquid Chromatography', 40000, 'Savannah Brighton', 2),
    (3, 'Michael', 'Johnson', 'Lab Director', 'Biology', 100000, 'Bob Pancake', 3),
    (4, 'Emily', 'Davis', 'CEO', 'Chemistry', 200000, 'n/a', 4);

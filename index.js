const inquirer = require('inquirer');
const department = require('./department');
const role = require('./roles');
const employee = require('./employee');

function employeeTrackerMenu() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Welcome to the Employee Tracker! What would you like to do?',
            name: 'menuChoice',
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add A Department',
                'Add A Role',
                'Add An Employee',
                'Update Employee Role',
                'Exit'
            ]
        },
    ])
    .then((answers) => {
        switch (answers.menuChoice) {
            case 'View All Departments':
                viewAllDepartments();
                break;
            case 'View All Roles':
                viewAllRoles();
                break;
            case 'View All Employees':
                viewAllEmployees();
                break;
            case 'Add A Department':
                addDepartment();
                break;
            case 'Add A Role':
                addRole();
                break;
            case 'Add An Employee':
                addEmployee();
                break;
            case 'Update Employee Role':
                updateEmployeeRole();
                break;
            case 'Exit':
                console.log('Thank you for using Employee Tracker. Goodbye!');
                process.exit(0);
            default:
                console.log('Not a valid choice, please select again');
                employeeTrackerMenu();
        }
    });
}

function viewAllDepartments() {
    department.getDepartments().then((department) => {
        console.table(department);
        employeeTrackerMenu();
    })
    .catch((error) => {
        console.error('Error retrieving departments:', error);
        employeeTrackerMenu();
    });
}

function viewAllRoles() {
    role.getRoles().then((role) => {
        console.table(role);
        employeeTrackerMenu();
    })
    .catch((error) => {
        console.error('Error retrieving roles:', error);
        employeeTrackerMenu();
    });
}

function viewAllEmployees() {
    employee.getEmployee().then((employee) => {
        console.table(employee);
        employeeTrackerMenu();
    })
    .catch((error) => {
        console.error('Error retrieving employees:', error);
        employeeTrackerMenu();
    });
}

function addDepartment() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the department name?',
                name: 'deptName'
            },
        ])
        .then((answers) => {
            department.addDepartment(answers.deptName)
            .then(() => {
                console.log('Department added successfully');
                employeeTrackerMenu();
            })
            .catch((error) => {
                console.error('Error adding Department:', error);
                employeeTrackerMenu();
            });
        });
}

function addRole() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the role you want to add?',
                name: 'roleTitle'
            },
            {
                type: 'input',
                message: 'What is the department name?',
                name: 'roleDept'
            },
            {
                type: 'number',
                message: 'What is the salary?',
                name: 'roleSalary'
            },
        ])
        .then((answers) => {
            role.addRole(answers.roleTitle, answers.roleDept, answers.roleSalary)
            .then(() => {
                console.log('Role added successfully');
                employeeTrackerMenu();
            })
            .catch((error) => {
                console.error('Error adding role:', error);
                employeeTrackerMenu();
            });
        });
}

function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the employee first name?',
                name: 'firstName'
            },
            {
                type: 'input',
                message: 'What is the employee last name?',
                name: 'lastName'
            },
            {
                type: 'input',
                message: 'What is the job_title?',
                name: 'jobTitle'
            },
            {
                type: 'input',
                message: 'What is the department?',
                name: 'department'
            },
            {
                type: 'input',
                message: 'What is the salary',
                name: 'salary'
            },
            {
                type: 'input',
                message: 'Who is the manager?',
                name: 'manager'
            },
        ])
        .then((answers) => {
            employee.addEmployee(answers.firstName, answers.lastName, answers.jobTitle, answers.department, answers.salary, answers.manager)
            .then(() => {
                console.log('Employee added successfully');
                employeeTrackerMenu();
            })
            .catch((error) => {
                console.error('Error adding employee:', error);
                employeeTrackerMenu();
            });
        });
}

function updateEmployeeRole() {
    employee.getEmployee().then((employees) => {
        inquirer
        .prompt([
            {
                type: 'list',
                message: 'Select employee to update',
                name: 'employeeId',
                choices: employees.map((emp) => ({
                    name: `${emp.first_name} ${emp.last_name}`,
                    value: emp.id,
                })),
            },
        ])
        .then((answer) => {
            const employeeId = answer.employeeId;

            role.getRoles()
            .then((roles) => {
                inquirer.prompt([
                    {
                        type: 'list',
                        message: 'Please select the new role.',
                        name: 'roleId',
                        choices: roles.map((role) => ({
                            name: role.title,
                            value: role.id,
                        })),
                    },
                ])
                .then((answer) => {
                    const roleId = answer.roleId;
                    employee.updateEmployeeRole(employeeId, roleId).then(() => {
                        console.log('Employee role updated successfully');
                        employeeTrackerMenu();
                    })
                    .catch((error) => {
                        console.error('Error updating employee role:', error);
                        employeeTrackerMenu();
                    })
                });
            })
            .catch((error) => {
                console.error('Error retrieving roles:', error);
                employeeTrackerMenu();
            });
        });
    })
    .catch((error) => {
        console.error('Error retrieving employees:', error);
        employeeTrackerMenu();
    });
}

// Start the application by calling the main menu
employeeTrackerMenu();
const connection = require('./connection');

function getEmployee() {
    return connection.query('SELECT * FROM employee');
}

function addEmployee(firstName, lastName, jobTitle, department, salary, manager) {
    return connection.query('INSERT INTO employee (first_name, last_name, job_title, department, salary, managers) VALUES (?, ?, ?, ?, ?, ?)', [firstName, lastName, jobTitle, department, salary, manager]);
}

function updateEmployeeRole(employeeId, roleId) {
    return connection.query('UPDATE employee SET role_id = ? WHERE id = ?', [roleId, employeeId]);
}

module.exports = {getEmployee, addEmployee, updateEmployeeRole};
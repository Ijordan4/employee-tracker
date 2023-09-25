const connection = require('./connection');
function getDepartments() {
    return connection.query('SELECT * FROM department')
}
function addDepartment(departmentName) {
    return connection.query('INSERT INTO department (department_name) VALUES (?)', [departmentName]);
}

module.exports = {getDepartments, addDepartment};
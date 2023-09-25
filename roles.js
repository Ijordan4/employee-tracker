// Import required files/packages
const connection = require('./connection');

// create a function to get all the Roles
function getRoles() {
    return connection.query('SELECT * FROM role')
}

function addRole(title, department, salary) {
    return connection.query('INSERT INTO role (title, department, salary) VALUE (?, ?, ?)', [title, department, salary]);
}

// export the function
module.exports = {getRoles, addRole};
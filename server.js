const inquirer = require('inquirer');
const express = require('express');

// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // {TODO: Add your MySQL password}
      password: 'password',
      database: 'cms_db'
    },
    console.log(`Connected to the cms_db database.`)
  );

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

console.log(`|------------------------------------------------------------|`)
console.log(`|                                                            |`)
console.log(`|      _______                 _                             |`)
console.log(`|     |  _____|_ __ ___  _ __ | | ___  _   _  ___  ___       |`)
console.log(`|     |   __| |  _   _ \\|  _ \\| |/ _ \\| | | |/ _ \\/ _ \\      |`)
console.log(`|     |  |____| | | | | | |_) | | (_) | |_| |  __/  __/      |`)
console.log(`|     |_______|_| |_| |_|  __/|_|\\___/ \\__  |\\___|\\___|      |`)
console.log(`|                       |_|            |___/                 |`)
console.log(`|      __  __                                                |`)
console.log(`|     |  \\/  | __ _ _ __   __ _  __ _  ___ _ __              |`)
console.log(`|     | |\\/| |/ _  |  _ \\ / _  |/ _  |/ _ \\  __|             |`)
console.log(`|     | |  | | (_| | | | | (_| | (_| |  __/ |                |`)
console.log(`|     |_|  |_|\\__,_|_| |_|\\__,_|\\__, |\\___|_|                |`)
console.log(`|                               |___/                        |`)
console.log(`|                                                            |`)
console.log(`|------------------------------------------------------------|`)

const startPrompt = [
    {
        type: 'list',
        name: 'options',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'Add Employee','Update Emplyee Role','View All Roles','Add Role','View All Departments','Add Department','Quit'],
    },
]

inquirer.prompt(startPrompt).then((response)=>{
    switch(response.options) {
        case 'View All Departments':
            db.query('SELECT * FROM department', function (err, results) {
                console.table(results);
            })
            break;

        case 'View All Roles': 
            db.query('SELECT * FROM role', function (err, results) {
                console.table(results);
            })
            break;
        case 'View All Employees':
            db.query('SELECT employee.first_name, employee.last_name, role.title, department.name, role.salary, employee.manager_id FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id', function (err, results) {
                console.table(results);
            })
            break;
        default:
            break;   
    }
});
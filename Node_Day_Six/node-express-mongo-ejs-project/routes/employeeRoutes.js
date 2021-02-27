
var express = require('express')
var router = express.Router();

var Employee = require('../models/employee')
var EmployeeController = require('../controllers/employeeController');


// Access API URL: http://localhost:3000/employees
router.get('/', EmployeeController.listEmployees);

// Access API Url: http://localhost:3000/employees/show/6031e63dc479801ac48d71de
router.get('/show/:id', EmployeeController.getEmployeeById);

// Access API Url: http://localhost:3000/employees/create
router.get('/create', EmployeeController.createEmployee);

// Access API Url: http://localhost:3000/employees/save
router.post('/save', function (req, res) {
    console.log(req.body);
    EmployeeController.saveEmployee(req, res);
});

// Access API Url: http://localhost:3000/employees/delete/6031e63dc479801ac48d71de
router.post('/delete/:id', EmployeeController.deleteEmployee);

router.get('/edit/:id', EmployeeController.editEmployee);

// Access API Url: http://localhost:3000/employees/update/6031e991e31f5455fc0db1cd
router.post('/update/:id', EmployeeController.updateEmployee);

module.exports = router;

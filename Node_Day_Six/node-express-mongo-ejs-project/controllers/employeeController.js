
var mongoose = require('mongoose');
var Employee = require('../models/employee');

var employeeController = {};

employeeController.listEmployees = function (req, res) {
    Employee.find((err, employees) => {
        if (err) throw err;
        res.send(employees);
    });
}

moodule.exports = employeeController;
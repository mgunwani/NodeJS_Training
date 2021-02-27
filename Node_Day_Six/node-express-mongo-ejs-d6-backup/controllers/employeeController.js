
var mongoose = require('mongoose');
var Employee = require('../models/employee');

var employeeController = {};

employeeController.listEmployees = function (req, res) {
    Employee.find((err, employees) => {
        if (err) throw err;
        res.render('../views/employees/index', { empData: employees });
    });
}

employeeController.getEmployeeById = function (req, res) {
    Employee.findById(req.params.id, (err, employee) => {
        if (err) throw err;
        // res.send(employee);
        res.render('../views/employees/show', { emp: employee });
    });
}

employeeController.createEmployee = function (req, res) {
    res.render('../views/employees/create.ejs');
}

employeeController.saveEmployee = function (req, res) {
    Employee.create(req.body, (err) => {
        if (err) throw err;
        res.send('Employee Saved Successfully to DB!!');
    });
}

employeeController.deleteEmployee = function (req, res) {
    Employee.findByIdAndRemove(req.params.id, (err) => {
        if (err) throw err;
        res.send('Employee Deleted Successfully from DB!!');
    })
}

employeeController.updateEmployee = function (req, res) {
    Employee.findByIdAndUpdate(req.params.id, req.body, (err) => {
        if (err) throw err;
        res.send('Employee Updated Successfully to DB!!')
    })
}

module.exports = employeeController;
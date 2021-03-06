
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
    var employee = new Employee(req.body);
    Employee.create(employee, (err, employee) => {
        if (err) throw err;
        console.log('Employee Saved Successfully to DB!!');
        // res.redirect("/employees");
        res.redirect("/employees/show/" + employee._id);
    });
}

employeeController.deleteEmployee = function (req, res) {
    Employee.findByIdAndRemove(req.params.id, (err) => {
        if (err) throw err;
        console.log('Employee Deleted Successfully from DB!!');
        res.redirect("/employees");
    })
}

employeeController.editEmployee = function (req, res) {
    Employee.findById(req.params.id, function (err, employee) {
        if (err) throw err;
        console.log(employee);
        res.render("../views/employees/edit", { emp: employee });
    })
}

employeeController.updateEmployee = function (req, res) {
    Employee.findByIdAndUpdate(req.params.id, req.body, (err) => {
        if (err) throw err;
        console.log('Employee Updated Successfully to DB!!')
        res.redirect("/employees");
    })
}

module.exports = employeeController;
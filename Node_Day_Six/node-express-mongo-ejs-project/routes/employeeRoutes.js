
var express = require('express')
var router = express.Router();

var Employee = require('../models/employee')
var EmployeeController = require('../controllers/employeeController');


// Access API URL: http://localhost:3000/employees
router.get('/', EmployeeController.listEmployees);

// Access API Url: http://localhost:3000/employees/show/6031e63dc479801ac48d71de
router.get('/show/:id', (req, res) => {
    Employee.findById(req.params.id, (err, employee) => {
        if (err) throw err;
        res.send(employee);
    });
});


// Access API Url: http://localhost:3000/employees/save
router.post('/save', (req, res) => {
    Employee.create(req.body, (err) => {
        if (err) throw err;
        res.send('Employee Saved Successfully to DB!!');
    });
});

// Access API Url: http://localhost:3000/employees/delete/6031e63dc479801ac48d71de
router.delete('/delete/:id', (req, res) => {
    Employee.findByIdAndRemove(req.params.id, (err) => {
        if (err) throw err;
        res.send('Employee Deleted Successfully from DB!!');
    })
})

// Access API Url: http://localhost:3000/employees/update/6031e991e31f5455fc0db1cd
router.put('/update/:id', (req, res) => {
    Employee.findByIdAndUpdate(req.params.id, req.body, (err) => {
        if (err) throw err;
        res.send('Employee Updated Successfully to DB!!')
    })
})



module.exports = router;

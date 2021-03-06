const express = require('express')
const app = express();
const dbConfig = require('./config/dbConfig');
const ejs = require('ejs');
const path = require('path');

var indexRoutes = require('./routes/indexRoutes');
var userRoutes = require('./routes/userRoutes');
var employeeRoutes = require('./routes/employeeRoutes');

// View Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/', indexRoutes);
app.use('/users', userRoutes);
app.use('/employees', employeeRoutes)

app.listen(3000, () => {
    console.log('The server is running at port 3000!!')
})
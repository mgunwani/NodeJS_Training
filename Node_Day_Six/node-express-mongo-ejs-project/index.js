const express = require('express')
const app = express();
const dbConfig = require('./config/dbConfig');

var indexRoutes = require('./routes/indexRoutes');
var userRoutes = require('./routes/userRoutes');
var employeeRoutes = require('./routes/employeeRoutes');

app.use(express.json());
app.use('/', indexRoutes);
app.use('/users', userRoutes);
app.use('/employees', employeeRoutes)

app.listen(3000, () => {
    console.log('The server is running at port 3000!!')
})
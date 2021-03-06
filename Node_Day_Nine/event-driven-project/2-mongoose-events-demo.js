
const mongoose = require('mongoose');

// Connect using Callback
/*
mongoose.connect('mongodb://localhost:27018/mydb',
    { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
        if (err) throw err;
        console.log('Connected Successfully..')
    })

*/

// Connect using Promise
/*
mongoose.connect('mongodb://localhost:27017/mydb',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('Successfully Connected to Database!!') })
    .catch((error) => { console.log('There are some errors : ' + error) })
*/

mongoose.connect('mongodb://localhost:27017/mydb',
    { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.on('connected', function () {
    console.log('Successfully Connected');
})


mongoose.connection.on('error', function (error) {
    console.log('Got Some Error : ' + error);
})


mongoose.connection.on('disconnected', function (error) {
    console.log('Connection Disconnected..');
})

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Connection Disconnected through Termination')
    })
})


















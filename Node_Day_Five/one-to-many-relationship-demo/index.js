var mongoose = require('mongoose')
var express = require('express');
var app = express();

mongoose.connect('mongodb://localhost:27017/trainingdb',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Successfully Connected to DB!!'))
    .catch((err) => console.log("Connection Error: " + err))



app.get('/', function (req, res) {
    res.send('Node - Express - Mongo (One - Many Relationship) Demo!!')
})

app.listen(3000, function () {
    console.log('The server is running at port 3000!!');
})
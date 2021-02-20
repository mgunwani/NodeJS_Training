var mongoose = require('mongoose')
var express = require('express');
var app = express();

var Publisher = require('./models/publisher')
var Book = require('./models/book')

mongoose.connect('mongodb://localhost:27017/trainingdb',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Successfully Connected to DB!!'))
    .catch((err) => console.log("Connection Error: " + err))


// Middlewares
app.use(express.json())

app.get('/api/publisher', function (req, res) {
    Publisher.find(function (err, data) {
        if (err) throw err;
        res.send(data);
    })
})

app.post('/api/publisher', function (req, res) {
    Publisher.create(req.body, function (err, data) {
        if (err) throw err;
        res.send('Publisher Added Successfully.')
    })
})

app.get('/api/book', function (req, res) {
    Book.find(function (err, books) {
        if (err) throw err;
        res.send(books);
    })
})

app.post('/api/book/:id', function (req, res) {
    var book = req.body;
    Book.create(book, function (err, data) {
        if (err) throw err;
        Publisher.findById(req.params.id, function (err, publisher) {
            if (err) throw err;
            publisher.publishedBooks.push(data._id);
            Publisher.findByIdAndUpdate(publisher._id, publisher, function (err, data) {
                if (err) throw err;
                console.log('Updated Departments Successfully.');
            })
        })
        res.send('book added successfully.');
    })
})



app.listen(3000, function () {
    console.log('The server is running at port 3000!!');
}) 
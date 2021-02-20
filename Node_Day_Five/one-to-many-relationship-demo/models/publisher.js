const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema({
    name: String,
    location: String,
    publishedBooks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }]
}, { timestamps: true });

module.exports =
    mongoose.model('Publisher', publisherSchema);
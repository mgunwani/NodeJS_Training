const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: String,
    publishYear: Number,
    author: String,
    publisher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Publisher',
        required: true
    }
}, { timestamps: true });

module.exports =
    mongoose.model('Book', bookSchema);


const express = require('express');
const app = express();
const db = require('./models/index');
const dbConfig = require('./config/db.config')

db.mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Successfully Connected to Database!!'))
    .catch((err) => console.log('There are some erors : ' + err))


app.get('/', function (req, res) {
    res.send('Hello World!!')
})

app.listen(3001, function () {
    console.log('The server is running at port 3001!!');
})
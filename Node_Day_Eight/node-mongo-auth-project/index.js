

const express = require('express');
const app = express();
const db = require('./models/index');
const dbConfig = require('./config/db.config')
const Role = db.role;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))


db.mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Successfully Connected to Database!!');
        initial();
    })
    .catch((err) => {
        console.log('There are some erors : ' + err);
        process.exit();
    });

function initial() {

    Role.countDocuments((err, count) => {
        if (!err && count === 0) {
            new Role({ name: 'user' }).save(err => {
                if (err) throw err;
                console.log("Added 'user' successfully!!")
            })
            new Role({ name: 'moderator' }).save(err => {
                if (err) throw err;
                console.log("Added 'moderator' successfully!!")
            })
            new Role({ name: 'admin' }).save(err => {
                if (err) throw err;
                console.log("Added 'admin' successfully!!")
            })
        }
    })
}

app.get('/', function (req, res) {
    res.send('Hello World!!')
})

require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);



app.listen(3001, function () {
    console.log('The server is running at port 3001!!');
})
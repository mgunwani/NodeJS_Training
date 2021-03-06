
const mssql = require('mssql');
var config = {
    user: 'sa',
    password: 'sa@123456',
    server: 'localhost',
    database: 'myDB'
}

mssql.connect(config, function (err) {
    if (err) throw err;
    console.log('successfully connected to DB!!');
    var request = new mssql.Request();
    request.query("select * from students", function (err, records) {
        if (err) throw err;
        console.log(records);
    })
})

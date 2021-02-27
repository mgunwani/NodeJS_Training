
var express = require('express')
var router = express.Router();

// Access API URL: http://localhost:3000/
router.get('/', (req, res) => {
    // res.send('Node - Express - Mongo - EJS - Project!!')
    res.render('../views/index');
})

module.exports = router;

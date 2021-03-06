
var controller = require('../controllers/user.controller');

module.exports = function (app) {

    app.get('/api/test/all', controller.allAccess);

    app.get('/api/test/user', controller.userBoard);

    app.get('/api/test/mod', controller.moderatorBoard);

    app.get('/api/test/admin', controller.adminBoard);

}
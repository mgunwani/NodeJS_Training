
const db = require("../models/index");
const ROLES = db.ROLES;
const User = db.user;
const Role = db.role;

checkDuplicateUsernameOrEmail = (req, res, next) => {

    User.findOne({ username: req.body.username }, (err, user) => {
        if (err) {
            res.status(500).send({ message: err })
            return;
        } if (user) {
            res.status(400).send({ message: "Failed!! Username is already in use!!" });
            return;
        }
    })

    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            res.status(500).send({ message: err })
            return;
        } if (user) {
            res.status(400).send({ message: "Failed!! Email is already in use!!" });
            return;
        }
    })

}

checkRoleExisted = (req, res, next) => {

    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                res.status(400).send({
                    message: `Failed!! Role ${req.body.roles[i]} doesnt exist!!`
                })
                return;
            }
        }
    }

}

const verifySignUp = {
    checkDuplicateUsernameOrEmail,
    checkRoleExisted
};

module.exports = verifySignUp;
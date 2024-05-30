const express = require("express");

const router = express.Router();

const userSchema = require("../models/user");

// create users
router.post("/users", (req, res) => {
    const userCreated = userSchema(req.body);
    userCreated
        .save()
        .then((data) => {
            res.json(data);
            console.log("User has been created");
        })
        .catch(err => console.log(err));
});

module.exports = router;
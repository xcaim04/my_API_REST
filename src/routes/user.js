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

// get all users
router.get("/users", (req, res) => {
    userSchema
        .find()
        .then((data) => {
            res.json(data);
            console.log("Get all users");
        })
        .catch(err => console.log(err));
});

// get a users
router.get("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id)
        .then((data) => {
            res.json(data);
            console.log("Get a user");
        })
        .catch(err => console.log(err));
});

// update a users
router.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { name, age, email } = req.body;
    userSchema
        .updateOne({ _id: id }, { $set: { name, age, email } })
        .then((data) => {
            res.json(data);
            console.log("User has been updated");
        })
        .catch(err => console.log(err));
});

// delete a user
router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema
        .deleteOne({ _id:id})
        .then((data) => {
            res.json(data);
            console.log("User has been deleted");
        })
        .catch(err => console.log(err));
});



module.exports = router;
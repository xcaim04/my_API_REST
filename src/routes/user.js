const express = require("express");

const router = express.Router();

// create users
router.post("/users", (req, res) => {
    res.send("Creating users");
});

module.exports = router;
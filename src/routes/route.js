const express = require('express');
const jsonwebtoken = require('jsonwebtoken');
const router = express.Router();
const userController= require("../controllers/userController");
const tokenCheck = require("../Middleware/auth");

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)

router.put("/users/:userId",tokenCheck.tokenCheck, userController.updateUser)

router.delete("/users/:userId",tokenCheck.tokenCheck, userController.deleteUser)


module.exports = router;  
let obj = require('../loggerFolder/logger')
const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    obj.printMessage('thorium')
    console.log(obj.url)
    obj.welcome()
    console.log(obj.welcome)
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason
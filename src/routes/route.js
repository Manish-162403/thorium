let obj = require('../loggerFolder/logger')
let obj1 = require('../util/helper');
const myObj = require('../validator/formatter')
const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    obj.printMessage('thorium')
        console.log(obj.url)

    obj.welcome()
    console.log(obj.welcome)

    myObj.myTrim()


    obj1.batchInfo()

   obj1.dateInfo()
   //console.log(dateInfo)

   obj1.month()
    //console.log(month)

    
    

    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason
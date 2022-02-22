let obj = require('../loggerFolder/logger');
let obj1 = require('../util/helper');
const myObj = require('../validator/formatter');
const lodash = require('lodash')
const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    obj.printMessage('thorium')
        console.log(obj.url)

    obj.welcome()
    console.log(obj.welcome)

  console.log('printDate: ', helper.printDate);
  console.log('printMonth: ', helper.printMonth+1);
  helper.printBatchInfo("thorium, w3d1, the topic for today is Nodejs module system.")
    
  myObj.myTrim()

    res.send('My first ever api!')
});

router.get('/hello', function (req, res){
   let arr = ["jan","feb", "mar", "apr", "may","jun","jul","aug","sept","oct", "nov", "dec"]
   const output = lodash.chunk(arr, [size = 3])
   console.log(output);

   let arr1 = [1,3,5,7,9,11,13,15,17,19]
   const out1= lodash.tail(arr1, [n=9])
   console.log(out1)

   let a1 = [1,2,3,4]
   let b1 = [1,2,65,4]
   let c1 = [1,23,45,3]
   let d1 = [12,23,12,4]
   let e1 = [1,23,4,3]

   const out3 = lodash.union(a1,b1,c1,d1,e1)
   console.log(out3)
   
   
   const arr3 = [["horror","The Shining"],["drama","Titanic"],["thriller","ShutterIsland"],["fantasy","Pans Labyrinth"]]
   const out4 = lodash.fromPairs(arr3)
   console.log(out4);
});

module.exports = router;
// adding this comment for no reason
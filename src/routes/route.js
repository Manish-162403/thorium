const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})


// 1. Create an API for GET /movies that returns a list of movies. Define an array of movies in your code and return the value in response.

router.get('/movies/:name', function(req, res) {
 let arr = ["rang de basanti", "gangs of wasepur", "ong buk","Conjuring"]
 console.log(arr)
    res.send(arr)
});    
// http://localhost:3000/movies/:name
//["rang de basanti","gangs of wasepur","ong buk","Conjuring"]

//2. Create an API GET movies/indexNumber (For example GET /movies/1 is a valid request and it should return the movie in your array at index 1). You can define an array of movies again in your api

router.get('/movies/:moviesId', function(req, res) {
   const a = ['rang de basanti', 'gangs of wasepur', 'ong buk','Conjuring']
     let value= req.params.moviesId;
     if(value>a.length-1){
         res.send("does not exist")
         return 
     }else{
        res.send(a[value])
     }
   
});


module.exports = router;

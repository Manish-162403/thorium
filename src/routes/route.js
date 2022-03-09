const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})


// 1. Create an API for GET /movies that returns a list of movies. Define an array of movies in your code and return the value in response.

router.get('/movies', function (req, res) {
   res.send('["Fukrey","Delhi","Dabang","Rockstar","suryawansh"]')
});
   
// http://localhost:3000/movies/:name
//["rang de basanti","gangs of wasepur","ong buk","Conjuring"]

//2. Create an API GET movies/indexNumber (For example GET /movies/1 is a valid request and it should return the movie in your array at index 1). You can define an array of movies again in your api

router.get('/movies/:movieId', function(req,res){
    mov =["rang de basanti", "gangs of wasepur", "ong buk","Conjuring"]
     let value = req.params.movieId;
     if(value>mov.length-1)
     {
         res.send("movie does not exist")
     }
     else
     { res.send(mov[value])
    
     }
    })
//-----------------------------------------------------------------------------------------------------------------------------------
    router.get('/films',function(req,res){
       res.send([ {id: 1,name:'The Shining' }, {id: 2, name:'Incendies' }, {id: 3,name: 'Rang de Basanti'}, {id: 4, name: 'welcome' },{id: 5, name: 'Finding Demo' }])
    })
//------------------------------------------------------------------------------------------------------------------------------------   
    router.get('/films/:filmId', function(req,res){
       let movie=[ {id: 1,name:'The Shining' }, {id: 2, name:'Incendies' },{id: 3,name: 'Rang de Basanti'}, {id: 4, name: 'welcome' },{id: 5, name: 'Finding Demo' }]
        let value =req.params.filmId;
        let found=false;
        for(let i=0;i<movie.length;i++)
        {
            if(movie[i].id==value){
                found= true
                res.send(movie[i])
                break
            }
        }
        if(found == false)
        {
            res.send("No movie exits with this id ")
        }
    
    })

module.exports = router;

//comment added for no reason

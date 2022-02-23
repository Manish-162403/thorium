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
    router.get('/moviez',function(req,res){
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


    //Q1.
    // -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
  // Your route code will look like this
  router.get("/sol1", function (req, res) {
               let arr = [1,2,3,5,6,7]

        let total = 0;
        for ( i in arr) {
            total += arr[i]
        }

       let a = arr.pop()
       let sum = a*(a+1)/2
       let missingNumber=sum-total

        res.send(  { data: missingNumber  }) 
  });
  
  
  //Q2. 
    // -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
  // Your route code will look like this
  router.get("/sol2", function (req, res) {
            //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
            let arr= [33, 34, 35, 37, 38]

           let len = arr.length;
           let total = 0;
           for(var i in arr){
               total +=arr[i];
           }
           let firstDigit = arr[0]
           let lastDigit = arr.pop()
           let consecutiveSum = (len +1)*(firstDigit+lastDigit)/2
           let missingNumber = consecutiveSum -total

            res.send(  { data: missingNumber  }  );
  });

module.exports = router;

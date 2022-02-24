const express = require('express');
const router = express.Router();

 

router.post("/players", function(req, res) {
 let players =  [ {
        "name": "bhuvan",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": [
            "soccer"
        ],
        "bookings": [
            {
            "bookingNumber": "1",
           "sportId": "",
           "centerId": "",
            "type": "private",
            "slot": "16286598000000",
            "bookedOn": "31/08/2021",
            "bookedFor": "01/09/2021"
            }]
    },
    {
        "name": "gyan singh",
        "dob": "1/08/1995",
        "gender": "male",
        "city": "jammu",
        "sports": [
            "football"
        ],
        "bookings": [
            {
            "bookingNumber": "2",
           "sportId": "",
           "centerId": "",
            "type": "private",
            "slot": "16286598110000",
            "bookedOn": "30/08/2021",
            "bookedFor": "05/09/2021"
            }]
        },

        {
            "name": "mahesh",
            "dob": "1/09/1994",
            "gender": "male",
            "city": "chandigarh",
            "sports": [
                "shortput"
            ],
            "bookings": [
                {
                "bookingNumber": "3",
               "sportId": "",
               "centerId": "",
                "type": "private",
                "slot": "16286592300000",
                "bookedOn": "29/08/2021",
                "bookedFor":" 04/09/2021"
                }]
            }
]

 
let name= req.body.name
players.push(name)

let dob=req.body.dob
players.push(dob)

let gender=req.body.gender
players.push(gender)

let city=req.body.city
players.push(city)

let sports=req.body.sports
players.push(sports)

let bookings=req.body.bookings
players.push(bookings)

for (let i =0; i < players.length; i++)  {
  if(players[i].name ==name){
      console.log("playerexist")
      res.send("player already exist")
  }else{
      players.push(name, dob, gender, city, sports, bookings)
  }
}


    res.send( {msg: players, status:true} )
})



// router.post("/test-post-4", function(req, res) {
//     let arr= [ 12, "functionup"]
//     let name= req.body.name
//     arr.push(name)
//     res.send(  { msg: arr , status: true }  )
// })

module.exports = router;






const express = require("express");
const router = express.Router();

let players = [
  {
    name: "Ishvinder",
    dob: "1/1/1996",
    gender: "male",
    city: "Punjab",
    sports: ["Shooting"],
    bookings: [
      {
        bookingNumber: 1,
        sportId: "",
        centerId: "",
        type: "private",
        slot: "16286593400000",
        bookedOn: "30/08/2021",
        bookedFor: "04/09/2021",
      },
      {
        bookingNumber: 2,
        sportId: "",
        centerId: "",
        type: "private",
        slot: "16286518000000",
        bookedOn: "31/08/2001",
        bookedFor: "01/09/2001",
      },
    ],
  },
  {
    name: "gopal",
    dob: "1/09/1995",
    gender: "male",
    city: "delhi",
    sports: ["soccer"],
    bookings: [],
  },
  {
    name: "Shiva",
    dob: "1/1/1994",
    gender: "male",
    city: "Bhopal",
    sports: ["soccer"],
    bookings: [],
  },
];
router.post("/players", function (req, res) {
  let player = req.body;
  for (let i = 0; i < players.length; i++) {
    if (players[i].name == player.name) {
      res.send("Player Already Exists!");
    } else {
      players.push(player);
      res.send({ data: players, status: true });
    }
  }
});

console.log("_____________________________________________________________________________________________________________________")

router.post("/players/:playerName/bookings/:bookingId", function (req, res) {
  let name = req.params.playerName;
  let isPresent = false;
  for (let i = 0; i < players.length; i++) {
    if (players[i].name == name) {
      isPresent = true;
    }
  }
  if (!isPresent) {
    return res.send("Player not in database!");
  }

  let booking = req.body;
  let bookingId = req.params.bookingId;
  for (let i = 0; i < players.length; i++) {
    if (players[i].name == name) {
      for (j = 0; j < players[i].bookings.length; j++) {
        if (players[i].bookings[j].bookingNumber == bookingId) {
          return res.send("Booking with simaialr ID already exists!");
        }
      }
      players[i].bookings.push(booking);
    }
  }
  res.send(players);
});

module.exports = router;

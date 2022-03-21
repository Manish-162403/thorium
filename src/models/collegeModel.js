const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({

name: {
    type:String,
    required:true,
    unique:true,
    //example iith
}, 
    
    fullName: {
        type:String,
        required:true,},
        // example `Indian Institute of Technology, Hyderabad`},
 logoLink: {
     type:"",
     required:true
    }, 
    isDeleted: {
        type:boolean, 
        default: false
    } 
},{timestamps:true})



    module.exports = mongoose.model('college', collegeSchema);
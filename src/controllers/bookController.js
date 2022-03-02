const { count } = require("console")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/newPublisher")


  const createBook= async function (req, res) {
    let b = req.body
    
    let authId = b.author
    let publishId = b.publisher
    
    if(!authId) return res.send('The request is not valid as the author details are required.')
    
    let author = await authorModel.findById(authId)
    if(!author) return res.send('The request is not valid as no author is present with the given author id')
    
    if(!publishId) return res.send('The request is not valid as the publisher details are required.') 
    
    let publisher = await publisherModel.findById(publishId)
    if(!publisher) return res.send('The request is not valid as no publisher is present with the given publisher id')
    
    let bookCreated = await bookModel.create(b)
    return res.send({data: bookCreated})
}
  

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author','publisher')
    res.send({data: specificBook})

}

module.exports.createBook= createBook
 module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails


//find().select(author_id)

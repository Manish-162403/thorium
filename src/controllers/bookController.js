const { count } = require("console")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/newPublisher")


const createBook= async function (req, res) {
    let n = req.body
    let auid= req.body.author
    let pid = req.body.author

    const isauthor = await authorModel.find({_id:auid}).select({_id:1})
    const ispublisher = await publisherModel.find({_id:pid}).select({_id:1})

    if(isauthor.length>0){
        if(ispublisher.length>0){
            const bookdata = await bookModel.create(n)
            res.send({data:bookdata})
        }else{
            res.send({error:"Invalid publisher Id"})
        }
    }else{
        res.send({error:"Invalid Author"})
        }
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

const userModel = require('../models/userModel')
const bookModel = require('../models/bookModel')
const mongoose = require('mongoose')
const reviewModel = require('../models/reviewModel')


// ...................Function Validation.................................................


const isValid = function (value) {
    if (typeof value == undefined || value == null) return false
    
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true
}
const isValidRequestBody = function (requestBody) {
    return Object.keys(requestBody).length > 0
}
const isValidDate = (date) => {
    const specificDate = new Date(date);
    const today = new Date();
    return specificDate < today;
}
const isValidobjectId = (objectId) => {
    return mongoose.Types.ObjectId.isValid(objectId.trim())
}


//................................Third Api createBook...........................................
const createBook = async function (req, res) {
    try {
        const data = req.body
        const query = req.query

        const { title, excerpt, userId, ISBN, category, subcategory, reviews, releasedAt } = data


        if (isValidRequestBody(query)) {
<<<<<<< HEAD

             return res.status(400).send({ status: false, message: 'This operation is not allowed' })

             }

        if (!isValidRequestBody(data)) {

             return res.status(400).send({ status: false, message: 'Please insert valid data' })

             }
=======
            return res.status(400).send({ status: false, error: 'this is not allowed' })
        }

        if (!isValidRequestBody(data)) {
            return res.status(400).send({ status: false, error: 'please insert valid data' })
        }
>>>>>>> 8db0e95e2a7f40c09a7e269df3387677be4ec7d6



        // vaidations for data
        if (!isValidDate(releasedAt)) {

            return res.status(400).send({ status: false, message: 'Released is required which should not be greater than today' })

        }
        if (!isValid(title)) {

            return res.status(400).send({ status: false, message: 'Title is required' })

        }

        if (!isValid(excerpt)) {

            return res.status(400).send({ status: false, message: 'Excerpt is required' })

        }

        if (!isValid(userId)) {

            return res.status(400).send({ status: false, message: 'User Id is required' })

        }
<<<<<<< HEAD

        if(!isValidobjectId(userId)){

            return  res.status(400).send({status : false, message : `enter a valid userId`})

            }
=======
        if (!isValidobjectId(userId)) {
            return res.status(400).send({ status: false, message: `enter a valid userId` })
        }
>>>>>>> 8db0e95e2a7f40c09a7e269df3387677be4ec7d6

        if (!isValid(ISBN)) {

            return res.status(400).send({ status: false, error: 'ISBN is required' })

        }
<<<<<<< HEAD
        if(!/^(97(8|9))?\d{9}(\d|X)$/.test(ISBN.split("-").join(""))){

            return  res.status(400).send({status : false, message : `Enter a valid ISBN of 13 digits`})    
            }
=======
        if (!/^(97(8|9))?\d{9}(\d|X)$/.test(ISBN.split("-").join(""))) {
            return res.status(400).send({ status: false, message: `enter a valid ISBN of 13 digits` })
        }
>>>>>>> 8db0e95e2a7f40c09a7e269df3387677be4ec7d6

        if (!isValid(category)) {

            return res.status(400).send({ status: false, message: 'Category is required' })

        }
        if (!isValid(subcategory)) {

            return res.status(400).send({ status: false, message: 'Subcategory is required' })

        }
      
        if (!(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/.test(releasedAt.trim()))) {

            return res.status(400).send({ status: false, message: 'Not invalid format, please enter date in YYYY-MM-DD format' })

        }

        // for dublicate data

        const duplicateTitle = await bookModel.findOne({ title })

        if (duplicateTitle) {
<<<<<<< HEAD

           return res.status(400).send({status:false, message: 'This title already exist' })

=======
            return res.status(400).send({ error: 'this title already exist' })
>>>>>>> 8db0e95e2a7f40c09a7e269df3387677be4ec7d6
        }

        const duplicateISBN = await bookModel.findOne({ ISBN })

        if (duplicateISBN) {
<<<<<<< HEAD

           return res.status(400).send({status:false, message: 'ISBN already exist' })

=======
            return res.status(400).send({ error: 'ISBN already exist' })
>>>>>>> 8db0e95e2a7f40c09a7e269df3387677be4ec7d6
        }



        const bookBody = { title, excerpt, userId, ISBN, category, subcategory, reviews, releasedAt }



        let savedBook = await bookModel.create(bookBody)
<<<<<<< HEAD

       return res.status(201).send({ status: true, data: savedBook })
=======
        return res.status(201).send({ status: true, data: savedBook })
>>>>>>> 8db0e95e2a7f40c09a7e269df3387677be4ec7d6

    }
    catch (err) {

        return res.status(500).send({ status: false, message: err.message })

    }
}

//....................................fourth Api get book................................................


const getBook = async function (req, res) {
    try {

        const data = req.body
        const query = req.query
        const filter = { isDeleted: false }
<<<<<<< HEAD
  
          
        
=======




>>>>>>> 8db0e95e2a7f40c09a7e269df3387677be4ec7d6
        if (isValidRequestBody(data)) {

            return res.status(400).send({ status: false, message: 'This operation is not allowed' })

        }
      

        if (isValidRequestBody(query)) {

            const { userId, category, subcategory } = query

<<<<<<< HEAD
            if(req.query.userId){

                if(!(isValid(req.query.userId) && isValidobjectId(req.query.userId))){

                    return res.status(400).send({ status: false, message: 'User Id is not valid' })
                    
                }

                 filter['userId'] = req.query.userId 

=======
            if (req.query.userId) {
                if (!(isValid(req.query.userId) && isValidobjectId(req.query.userId))) {
                    return res.status(400).send({ status: false, error: 'userId not valid' })

                }
                filter['userId'] = req.query.userId
>>>>>>> 8db0e95e2a7f40c09a7e269df3387677be4ec7d6
            }


<<<<<<< HEAD
=======
            // if (isValid(userId)) {
            //     const userid = await bookModel.find({ userId })




            // }

>>>>>>> 8db0e95e2a7f40c09a7e269df3387677be4ec7d6
            if (isValid(category)) {

                const cateogrised = await bookModel.find({ category })

                if (cateogrised) { filter['category'] = category }

            }

            if (isValid(subcategory)) {

                const subcat = await bookModel.find({ subcategory })

                if (subcat) { filter['subcategory'] = subcategory }

            }

        }
        // 

        const books = await bookModel.find(filter)
            .select({ _id: 1, title: 1, excerpt: 1, userId: 1, category: 1, reviews: 1, releasedAt: 1 })

        if (books.length === 0) {

            return res.status(404).send({ status: false, message: 'No Books found' })

        }

        const allbook = books.sort(function (a, b) { return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1 })
  
        return res.status(200).send({ status: true, bookList: allbook })


    }

    catch (err) { return res.status(500).send({ status: false, message: err.message }) }
}


//.........................Fifth Api book By iD.............................................................


const bookById = async function (req, res) {
    try {


        let bookId = req.params.bookId;

<<<<<<< HEAD
        if(!isValidobjectId(bookId)){return res.status(400).send({status:false, message: "Please input valid book Id"})}

        const reviewData = await reviewModel.find({bookId:bookId,isDeleted:false})
       

        const book = await bookModel
            .findOne({_id: bookId, isDeleted: false })
            .select({ bookId: 1, title: 1, excerpt: 1, userId: 1, category: 1,reviews:1, releasedAt: 1, reviewsData:reviewData });
=======
        const reviewData = await reviewModel.find({ bookId: bookId, isDeleted: false })


        const book = await bookModel
            .findOne({ bookId, isDeleted: false })
            .select({ bookId: 1, title: 1, excerpt: 1, userId: 1, category: 1, reviews: 1, releasedAt: 1, reviewsData: reviewData });
>>>>>>> 8db0e95e2a7f40c09a7e269df3387677be4ec7d6

        if (!book) {

            return res.status(400).send({ status: false, message: "Book you are looking for has already been deleted" })

        }


        return res.status(200).send({ status: true, data: book })

    }
    catch (err) {

        return res.status(500).send({ status: false, message: err.message })

    }
}




//......................................sixth Api updateBook by Id...............................


const updateBook = async function (req, res) {
    try {

        let bookId = req.params.bookId
        let data = req.body
        let filter = {}

        let bookToBeModified = await bookModel.findById(bookId)

        if (bookToBeModified) {

<<<<<<< HEAD
           
=======



>>>>>>> 8db0e95e2a7f40c09a7e269df3387677be4ec7d6
            if (Object.keys(data) != 0) {


                if (bookToBeModified.isDeleted == false) {


                    if (isValid(data.title)) { filter['title'] = data.title }

                    let checkTitle = await bookModel.findOne({ title: data.title })
                    if (checkTitle) {

                        return res.status(400).send({ status: false, message: "Title you want to update is already updated" })

                    }


<<<<<<< HEAD
                    let checkexcerpt = await bookModel.findOne({excerpt:data.excerpt})

                    if(checkexcerpt){

                        return res.status(400).send({status: false, message: "the excerpt you want to update is alreadu updated"})

                    }

                    let checkreleasedAt = await bookModel.findOne({releasedAt:data.releasedAt})

                    if(checkreleasedAt){

                        return res.status(400).send({status: false, message: "the releasedAt you want to update is alreadu updated"})

                    }

                    let checkISBN = await bookModel.findOne({ISBN:data.ISBN})

                    if(checkISBN){

                        return res.status(400).send({status: false, message: "the ISBN you want to update is alreadu updated"})
                    
=======
                    let checkexcerpt = await bookModel.findOne({ excerpt: data.excerpt })
                    if (checkexcerpt) {
                        return res.status(400).send({ status: false, ERROR: "the excerpt you want to update is alreadu updated" })
                    }

                    let checkreleasedAt = await bookModel.findOne({ releasedAt: data.releasedAt })
                    if (checkreleasedAt) {
                        return res.status(400).send({ status: false, ERROR: "the releasedAt you want to update is alreadu updated" })
                    }

                    let checkISBN = await bookModel.findOne({ ISBN: data.ISBN })
                    if (checkISBN) {
                        return res.status(400).send({ status: false, ERROR: "the ISBN you want to update is alreadu updated" })
>>>>>>> 8db0e95e2a7f40c09a7e269df3387677be4ec7d6
                    }

                    if (isValid(data.title)) { filter['title'] = data.title }
                    if (isValid(data.excerpt)) { filter['excerpt'] = data.excerpt }
                    if (isValid(data.releasedAt)) { filter['releasedAt'] = data.releasedAt }
                    if (isValid(data.ISBN)) { filter['ISBN'] = data.ISBN }



                    let updatedBook = await bookModel
                        .findOneAndUpdate({ _id: bookId }, { title: data.title, excerpt: data.excerpt, releasedAt: data.releasedAt, ISBN: data.ISBN }, { new: true })

                    return res.status(200).send({ Status: "Book updated successfully", updatedBook })

                }
                else {

                    return res.status(400).send({status:false, message: "Book requested has been deleted" })
                }
            }
            else {

                return res.status(400).send({status:false, message: "Bad Request" })
            }


        } else { return res.status(404).send({status:false, message: "Book not found" }) }
    }

    catch (err) {

        return res.status(500).send({status:false, message: err.message })
    }

}


//.....................................Seventh Api deleteBook By Id.........................................


let deleteBookById = async function (req, res) {

    try {
        let id = req.params.bookId

        if (id) {

            let bookToBeDeleted = await bookModel.findById(id)

            if (bookToBeDeleted.isDeleted == true) {

                return res.status(400).send({ status: false, message: "Book has already been deleted" })

            }


            let deletedBook = await bookModel
                .findOneAndUpdate({ _id: id },
                    { $set: { isDeleted: true, deletedAt: Date.now() } })

            return res.status(200).send({ Status: true, message: "Requested book has been deleted." })

        } else {

            return res.status(400).send({status:false, message: 'BAD REQUEST' })
        }


    }
    catch (err) {

        return res.status(500).send({status:false, message: err.message })
    }


}


module.exports.createBook = createBook
module.exports.getBook = getBook
module.exports.bookById = bookById
module.exports.updateBook = updateBook
module.exports.deleteBookById = deleteBookById  

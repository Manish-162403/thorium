const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema({


    title: {
        type: String,
        required: true,
        unique: true
    },

    excerpt: {
        type: String,
        requred: true
    },

    userId: {
        type: ObjectId,
        required: true,
        ref: 'createUser'
    },

    ISBN: {
        type: String,
        required: true,
        unique: true
    },

    category: {
        type: String,
        required: true
    },

    subcategory: [{
        type: String,
        required: true
    }],

    reviews: {
        type: Number,
        default: 0,
<<<<<<< HEAD
       
=======
        comment: Number
>>>>>>> 8db0e95e2a7f40c09a7e269df3387677be4ec7d6
    },
    deletedAt: {
        type: Date
    },

    isDeleted: {
        type: Boolean,
        default: false
    },

    releasedAt: {
<<<<<<< HEAD
        type:Date,
        required:true,
               
=======
        type: Date,
        required: true,
        // default:Date.now(),

>>>>>>> 8db0e95e2a7f40c09a7e269df3387677be4ec7d6
    }


}, { timestamps: true })


module.exports = mongoose.model('createBook', bookSchema)
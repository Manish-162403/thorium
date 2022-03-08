    const mongoose = require('mongoose');
    let ObjectId = mongoose.Schema.Types.ObjectId

    const purchaseSchema = new mongoose.Schema( {

            userId:{
                type: ObjectId,
                ref: "newUser"
            } ,
            productId: {
                type: ObjectId,
                ref: "Product"
            },
            
            amount: 0,
            isFreeAppUser: {
                type:Boolean,
                default: false},
                
            date: String
        })


        module.exports = mongoose.model('Purchase', purchaseSchema)
const { count } = require("console")
const BookModel= require("../models/purchaseModel")



const createOrder = async function (req, res) {
    let data = req.body;
    let uId = data.userId;
    let pId = data.productId;
    let freeAppUser = req.headers.isfreeappuser;
    console.log(freeAppUser);
  
    let user = await UserModel.findById(uId);
    let product = await ProductModel.findById(pId);
  
    if (data.hasOwnProperty("userId") == false) {
    return  res.send({ error: "userID is required" });
    } else if (!user) {
    return  res.send({ error: "wrong userID entered" });
    }
  
    if (data.hasOwnProperty("productId") == false) {
      res.send({ error: "productId is required" });
    } else if (!product) {
      res.send({ error: "wrong productID entered" });
    }
    let productDetail = await ProductModel.findById(pId);
    console.log(productDetail);
    let priceValue = productDetail.price;
    console.log(priceValue);
    let userDetail = await UserModel.findById(uId);
    console.log(userDetail);
    let userBalance = userDetail.balance;
    console.log(userBalance);
  
    if (freeAppUser === "false") {
      if (userBalance >= priceValue) {
        let updatedBalance = await UserModel.findByIdAndUpdate(
          { _id: uId },
          { $inc: { balance: -priceValue } },
          { new: true }
        );
        data.amount = priceValue;
        data.isFreeAppUser = false
        let orderDetail = await BookModel.create(data);      
        res.send({ order: orderDetail });
      } else {
        res.send({ error: "insufficient balance" });
      }
    } else {
      data.amount = 0;
      data.isFreeAppUser = true
      let orderDetails = await BookModel.create(data);
      res.send({ order: orderDetails });
    }
  };


  module.exports.createOrder= createOrder







// const createBook= async function (req, res) {
//     let data= req.body

//     let savedData= await BookModel.create(data)
//     res.send({msg: savedData})
// }

// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// // CRUD OPERATIONS:
// // CREATE
// // READ
// // UPDATE
// // DELETE




// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks

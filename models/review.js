// const mongoose = require("mongoose");
// const { schema } = require("./listing.js");

// const Schema = mongoose.Schema;

// const reviewSchema = new Schema ({
//     comment : String,
//     rating : {
//         type : Number,
//         min : 1,
//         max : 5
//     },
//     createdAt : {
//         type : Date,
//         default : Date.now()
//     }
// });

// module.exports = mongoose.model("Review", reviewSchema);

// // const Review = mongoose.model("Review", reviewSchema);
// // module.exports = Review;
const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    comment :String,
    rating : {
        type : Number,
        min : 1,
        max : 5
    },
    date : {
        type : Date, 
        default : Date.now()
    },
    author : {
        type : Schema.Types.ObjectId,
        ref : "User"
    }
});

const Review = mongoose.model("Review",reviewSchema);

module.exports = Review;
// const { string } = require("joi");
// const mongoose = require("mongoose"); 
// const Schema = mongoose.Schema;
// const passportLocalMongoose = require("passport-local-mongoose");
// // const { route } = require("../routes/listing");

// const userSchema = new Schema ({
//     email : {
//         type : String,
//         required : true
//     },

// });


// userSchema.plugin(passportLocalMongoose);

// module.exports = mongoose.model('User', userSchema);


const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;
const passportLoaclMongoose = require("passport-local-mongoose")


const userSchema = new Schema ({
    email:{
        type : String,
        required : true
    },
});

userSchema.plugin(passportLoaclMongoose);
const User = mongoose.model("User",userSchema);
module.exports = User


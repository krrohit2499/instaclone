const mongoose = require('mongoose');

const {ObjectId } = mongoose.Schema.Types
const postSchema = new mongoose.Schema({
    author:{
        type:String,
        required:true
    },
    location:{
       type: String,
       required:true
    },
    description:{
        type: String,
       required:true
    },
    photo:{
        type:String,
        required:true

    },
    postedBy:{
         type:ObjectId,
         ref:"User"
    }
})

mongoose.model("Post",postSchema)
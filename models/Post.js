const mongoose = require(mongoose); //import mongoose package
const router = express
//create schema
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required:true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

// const PostSchema = mongoose.Schema({
//     title: String,
//     description: String,
//     date:Date.now
// })

module.exports = mongoose.model('Post', PostSchema);
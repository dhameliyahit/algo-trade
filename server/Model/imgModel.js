const mongoose = require("mongoose")

const imgSchema = new mongoose.Schema({
    img:{type:Buffer,contentType:String},
})

const imgModel = mongoose.model("img",imgSchema);

module.exports = imgModel
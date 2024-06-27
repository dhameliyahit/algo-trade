const mongoose = require("mongoose")

const unlinkUserSchema = new mongoose.Schema({
    name:{type:String,require:true,unique: true},
    demateId:{type:String,require:true,unique:true},
})


const unlinkUserModel = mongoose.model("unlinkUser",unlinkUserSchema)

module.exports = unlinkUserModel;
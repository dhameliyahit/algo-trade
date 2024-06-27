const mongoose = require("mongoose")

const loginSchema = new mongoose.Schema({
    email:{type:String,require:true},
    otp:{type:Number,require:true},
},{timestamps:true})

const loginModel = mongoose.model("login",loginSchema)

module.exports = loginModel
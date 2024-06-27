const mongoose = require("mongoose")

const connectdb = async(DB_URL)=>{
    try {
        await mongoose.connect(DB_URL)
        console.log('Database connect successfully')
    } catch (error) {
        console.log(error)
    }
}
module.exports = connectdb
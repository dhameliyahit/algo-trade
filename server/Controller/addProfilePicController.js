const imgModel = require("../Model/imgModel.js");
const fs = require("fs")

const addProfilePicController = async(req,res)=>{
    try {
        const {photo}= await req.files;

        const picture = await imgModel.create(req.fields);
        if(photo){
            picture.photo.data = fs.readFileSync(photo.path)
            picture.photo.contentType = photo.type
        }
        await picture.save()
        res.status(201).send({
            success:true,
            message:'Profie Picture Upload Successfully',
            products
        })
    } catch (error) {
        console.log(error)
        res.send({
            message:"error profile pic"
        })
    }
}

module.exports = addProfilePicController
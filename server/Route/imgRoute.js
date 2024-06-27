const express = require("express")
const formidable = require("express-formidable")
const addProfilePicController = require("../Controller/addProfilePicController")
const router = express.Router()


// add profile picture
router.post("/pic",formidable(),addProfilePicController)


module.exports  = router
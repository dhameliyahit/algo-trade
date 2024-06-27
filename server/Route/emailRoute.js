const express = require("express");
const { authEmailController, getUserNameController } = require("../Controller/emailController");

const router = express.Router();



//mail send api
router.post('/send-email',authEmailController);

//profiledeshboard
router.get("/dashboard/username",getUserNameController);

module.exports = router
const express = require("express")
const { addUnlinkUserController, getUnlinkUserController, findUnlinkUserController, getUnlinkUserDataController } = require("../Controller/unlinkUserController")

const router = express.Router()

// add unlinkUser
router.post("/unlink/add",addUnlinkUserController)

//all unlink users
router.get("/unlink/all",getUnlinkUserController)

// find by id user
router.get("/unlink/find/:id",findUnlinkUserController)

//unlink user data
router.get("/unlink/data",getUnlinkUserDataController)

module.exports = router
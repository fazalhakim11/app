const express = require("express")

const router = express.Router()

const {validateToken} = require("../middlewares/auth")
const {index, create}= require("../controllers/order.controller")

router.get("/", validateToken, index)
router.post("/", validateToken, create)


module.exports = router 
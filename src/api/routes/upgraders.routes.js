const express = require("express")
const {getUpgraders} = require("../controllers/upgraders.controller")

const upRouter = express.Router()

upRouter.get("/upgraders", getUpgraders)

module.exports = upRouter
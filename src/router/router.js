const express = require ('express')
const router= express.Router()

const controller=require("../controller/moviesController")

router
.post("/create",controller.addMovies)

module.exports=router;


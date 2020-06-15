var express = require("express");
var router = express.Router();

router.get("/", (req,res,next) => {
    res.send(" API is working properly!")
})

router.post("/", (req,res,next) => {
    console.log(req.body)
    res.send(`Server responses: I got some "${req.body.apiRequest}" from client.`)
})

module.exports = router;
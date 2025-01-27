const express = require("express")
const path = require("path")

const router = express.Router()

router.get("/contactus",(req,res)=>{
    res.sendFile(path.join(__dirname , ".." , "views" , "contactus.html")) 
})

router.get("/success", (req, res) => {
    res.sendFile(path.join(__dirname , ".." , "views" , "success.html"))
});

module.exports = router
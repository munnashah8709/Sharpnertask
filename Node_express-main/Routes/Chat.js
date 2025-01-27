const express = require("express")
const fs = require('fs');
const path = require("path")

const router = express.Router()

router.get("/",(req,res)=>{
    const data = fs.readFileSync('file.txt', 'utf8') || "No messages yet";
    res.sendFile(path.join(__dirname , ".." , "views" , "chat.html"), {data}) 
})

router.post("/",(req,res)=>{
    let data  = `${req.body.username}: ${req.body.message}, `
    fs.appendFile('file.txt', data, (err) => {
        if (err) {
          console.error('Error writing to file:');
        }
      });
      res.redirect("/")
})

router.get("/data", (req, res) => {
    const data = fs.readFileSync('file.txt', 'utf8') || "No messages yet";
    res.json({ data });
});

module.exports = router
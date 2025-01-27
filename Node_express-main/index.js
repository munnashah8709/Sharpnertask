const express = require('express');
const bodyParser = require('body-parser')
const path = require("path")

const app = express();
app.use(express.static(path.join(__dirname , "public")))

const LoginRoutes = require("./Routes/Login")
const ChatRoutes = require("./Routes/Chat")
const contactRoutes = require("./Routes/contact")

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(LoginRoutes)
app.use(ChatRoutes)
app.use(contactRoutes)

app.use((req,res,next)=>{
res.sendFile(path.join(__dirname , "views" ,"404.html"))
})

app.listen(3000);
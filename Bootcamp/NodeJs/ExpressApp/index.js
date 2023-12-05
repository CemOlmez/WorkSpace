 const express = require("express");
 const app = express()

 app.use((req, res) => {
    console.log("We got a new request")
 })

 app.listen(8080, () =>{
    console.log("Listening to 8080!!!")
 }
 )
const express = require('express')
const path = require('path')

const app = express()

const publicDirectory = path.join(__dirname, './public')

app.use(express.static(publicDirectory))




const obj = {
    Name: "Max",
    Age: 24
}

// app.get("/home", (req, res) => {
//     res.send(obj)
// })
app.listen(3002, () => {
    console.log("Check in on port 3002/home")
    console.log(__dirname)
})
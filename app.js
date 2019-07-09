const express = require('express')
const path = require('path')
const geocode = require('./geocode')
const forecast = require('./forecast')
const colors = require('colors')

const app = express()

const publicDirectory = path.join(__dirname, './public')

app.use(express.static(publicDirectory))




const obj = {
    Name: "Max",
    Age: 24
}

app.get("/home", (req, res) => {
    res.send(`Hey, your name is ${req.query.name}`)
    console.log(req.query)
})
app.listen(3002, () => {
    console.log("Check in on port 3002/home")
    console.log(__dirname)
})

app.get("/weather", (req, res) => {

    if (!req.query.address) {
        res.send("Please provide an address!")
    } else {
        geocode(req.query.address, (error, {
            latitude,
            longitude,
            location
        }) => {
            if (error) {
                return res.send(error)
            }

            forecast(latitude, longitude, (error, forecastData) => {
                if (error) {
                    return res.send(error)
                }
                res.send({

                    location: location,
                    forecast: forecastData,
                    address: req.query.address

                })
            })
        })
    }
})
const geocode = require('./geocode')
const forecast = require('./forecast')
const colors = require('colors')

const address = process.argv[2]

if (!address) {
    console.log("Please provide an address!")
} else {
    geocode(address, (error, {
        latitude,
        longitude,
        location
    }) => {
        if (error) {
            return console.log(error)
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log("--------")
            console.log(location.blue)
            console.log(forecastData.green)
            console.log("--------")
        })
    })
}
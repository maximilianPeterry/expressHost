const request = require('request')
const colors = require('colors')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/0a009f2d99ba9672e3206d43707c2cfb/${latitude},${longitude}`

    request({
        url: url,
        json: true
    }, (error, {
        body
    }) => {
        if (error) {
            callback("Oops! Can't connect to DarkSky. Try Internet connection.".red, undefined)
        } else {
            callback(undefined,
                `${ body.daily.data[0].summary } It is currently ${
            body.currently.temperature
        } degrees out. There is a ${
            body.currently.precipProbability
        }% chance of rain.`
            )
        }
    })
}

module.exports = forecast;
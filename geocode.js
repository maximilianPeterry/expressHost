const request = require('request')


const geocode = (address, callback) => {
    const newurl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoibWF4aW1pbGlhbjExOSIsImEiOiJjanhvcG1ibDIwNWp4M25vMjZvMzByMnY3In0.wXHM9hR52F5F3UraU9ZpGg`

    request({
        url: newurl,
        json: true
    }, (error, {
        body
    }) => {
        if (error) {
            callback("Unable to connect to location services, sorry.", undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
                // const lat = response.body.features[0].center[0]
                // const long = response.body.features[0].center[1]
                // const location = response.body.features[0].place_name

                // callback(undefined, {`The Latitiude: ${lat} The Longitude: ${long} Location Name: ${location}`})
            })
        }
    })
}

module.exports = geocode;
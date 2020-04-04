const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = "https://api.darksky.net/forecast/432cab48165cabb52bb5e3d235500797/" + encodeURIComponent(latitude) + "," + encodeURIComponent(longitude);

    request({url, json: true}, (error, {body}) => {
        if(error)
            callback('Unable to connect to forecast services', undefined)
        else if(body.error)
            callback('Unable to find location. Try another location')
        else {
            callback(undefined, body.daily.data[0].summary)
        }
    })
}

module.exports = forecast
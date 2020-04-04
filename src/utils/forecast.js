const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = "https://api.darksky.net/forecast/432cab48165cabb52bb5e3d235500797/" + encodeURIComponent(latitude) + "," + encodeURIComponent(longitude)
    + "?units=si";

    request({url, json: true}, (error, {body}) => {
        if(error)
            callback('Unable to connect to forecast services', undefined)
        else if(body.error)
            callback('Unable to find location. Try another location')
        else {
            callback(undefined, 'The temperature right now is ' + body.currently.temperature + 'deg celsius. ' +
            'Summary: ' + body.daily.data[0].summary + ". The high today is " + body.daily.data[0].temperatureHigh + ". and the" +
            "temperture low is " + body.daily.data[0].temperatureLow)
        }
    })
}

module.exports = forecast
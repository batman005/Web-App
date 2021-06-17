const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=6d6fcd922821006ad9ac45efd45afe9f&query=' + latitude + ',' + longitude + '&units=f'
request({ url: url, json: true }, (error, response) => {
    if (error) {
        callback('Unable to connect to weather service!', undefined)
    } else if (response.body.error) {
        callback('Unable to find location', undefined)
    } else {
        callback(undefined, response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out.")
    }
})
}

module.exports = forecast
var _ = require('lodash');
var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=467e0e91edcab88717aa3a81b0f0a4f4'

module.exports = function(latitude, longitude) {
  var url = `${apiUrl}&lat=${latitude}&lon=${longitude}&units=metric&lang=pt`;

  // fetch retorna um promisse
  return fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json){
      return {
        city: json.name,
        temperature: json.main.temp + ' °C',
        description: _.capitalize(json.weather[0].description)
      }
    });
}

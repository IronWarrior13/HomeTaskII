function addSelector(selector,value) {
  var elem = document.querySelector(selector);
  elem.innerHTML = value;
}

var submit = document.querySelector('#set-weather');
submit.addEventListener('click', function() {
	makeVisible('#weather-get')
	getWeatherAPI();
});

function makeVisible(selector) {
	var elem = document.querySelector(selector);
	elem.style.display = 'block';
}

function getWeatherAPI() {
    var city = document.getElementById('nameCity').value;
    var url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&&APPID=7fdcbfb52037c0bd550df5c33d8b03a0";
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
          addSelector('#city',data.name);
          addSelector('#id',data.id);
          addSelector('#weather',data.weather[0].main);
          addSelector('#description',data.weather[0].description);
          addSelector('#pressure',Math.round(data.main.pressure*0.00750063755419211*100));
          addSelector('#temp',Math.round(data.main.temp-273));
          addSelector('#humidity',data.main.humidity);
          addSelector('#visibility',Math.round(data.visibility/1000));

      })


}

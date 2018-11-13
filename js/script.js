function getWeatherAPI() {

    var city=document.getElementById('nameCity').value;

    var url="http://api.openweathermap.org/data/2.5/weather?q="+city+"&&APPID=7fdcbfb52037c0bd550df5c33d8b03a0";

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send();
    var WeatherData = JSON.parse(xhr.response);

   
document.write( '<h1>' + WeatherData.name + '</h1>' + '<br>'
				+ 'ID City : ' + WeatherData.id + '<br>'
				+ 'Weather: ' + WeatherData.weather[0].main + '<br>' 
				+ 'Description: ' + WeatherData.weather[0].description + '<br>' 
				+ 'Pressure: ' + Math.round(WeatherData.main.pressure*0.00750063755419211*100) + 'мм.pт.ст<br>' 
				+ 'Temp: ' + Math.round(WeatherData.main.temp-273) +'<br>'
				+ 'Humidity : ' + WeatherData.main.humidity + '<br>'
				+ 'Visibility: ' + Math.round(WeatherData.visibility/1000) + 'km'); 

}
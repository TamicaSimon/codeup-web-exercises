{function() {
    "use strict";
    mapboxgl.accessToken=mapboxKey,
    const map = new mapboxgl.Map({
        container: 'map',
        style: "mapbox://styles/mapbox/streets-v12',
        center: [-96.8,33.0],
        zoom: 10,
    });
    var marker= new mapboxgl.Marker({
        draggable:true
    })
        .setLngLat([-96.8,33.0])
        .addTo(map);

    function onDragEnd() {
        let lngLat = marker.getLngLat();
        let arrWeather = [lngLat.lng, lngLat.lat];
        console.log(lngLat);
        weatherData(arrWeather)
        // weatherForecast(arrWeather)
    }
    marker.on(`dragend`,onDragEnd);


    function geoCodeBuildWeather(searchString) {
        geocode(searchString, mapboxKey).then(function (results) {
            weatherMarker.setLngLat(results);
            map.flyTo({center: results, zoom: 9});
            weatherData(results);
            weatherForecast(results);
        })
    };
    function weatherData(results) {
        let html = "";
        $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${results[1]}&lon=${results[0]}&appid=${weatherKey}&units=imperial`).done(function (data) {
            html += `<h6>Date: ${dateConversion(data.dt)}</h6>`;
            html += `<h6>City: ${data.name}</h6>`;
            html += `<h6>Weather: ${data.weather[0].description}</h6>`;
            html += `<h6>Wind speed: ${parseInt(data.wind.speed)} knots</h6>`;
            html += `<h6>Temp: ${parseInt(data.main.temp)} &deg;</h6>`;
            html += `<h6>Humidity: ${parseInt(data.main.humidity)}</h6>`;
            $("#currentCard").html(html);
        })
    };
    $('#clicker').click(function (e){
        e.preventDefault();
        getLocation($('#locationInput').val());
    })
    let dateConversion = function(timeStamp) {
        let date = new Date(timeStamp * 1000).toLocaleString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
        });
        return date;
    }
    
        
})();

    
   
